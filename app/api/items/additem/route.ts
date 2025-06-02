import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { FBvalidateSessionCookie } from "@/actions/server/S_auth_actions";
import { TaddItmes } from "@/types/S_types";
import { addImage, deleteImage } from "@/actions/server/S_fbImage_actions";
import { addItem } from "@/actions/server/S_prismaData_actions";

type dataType = {
	name: string;
	description: string;
	location: [string, string];
	category: string[]
};

export async function POST(request: NextRequest) {
	const info = await request.json();
	const data: dataType = info.data;
	const images: string[] = info.images;

	
    const cookieStore = await cookies();
	const token = cookieStore.get("sessionCookie")?.value;
	

	if (!token) {
        console.log('invalid token')
		return NextResponse.json("", { status: 401 });
	}

	const isValid = await FBvalidateSessionCookie(token);

	if (!isValid.success) {
        console.log('im breaking invalid token')
		return NextResponse.json("", { status: 401 });
	}

	let uploadedImages: {
		publicUrl: string;
		filePath: string;
	}[] = [];
	
	// add the images into firebase storage and return the public urls
	try {
		await Promise.all(
			images.map(async (image: string) => {
				const imgdata = await addImage(image);
				uploadedImages.push(imgdata);
			})
		);
	} catch (e) {
        console.log('im breaking image upload to fb failed')
		await Promise.all(
			uploadedImages.map(({ filePath }) => deleteImage(filePath))
		);
        
	    return NextResponse.json("", { status: 500 })
	}

	// build the request object to add the data to the db 
	const addItmesData: TaddItmes = {
		ownerId: isValid.data?.uid as string,
		name: data.name,
		category: data.category,
		description: data.description,
		latitude: Number(data.location[0]),
		longitude: Number(data.location[1]),
		imageUrl: uploadedImages.map(dt => dt.publicUrl),
	};


	// add the data to the db
	try{
		await addItem(addItmesData)
	}catch(e){
		return NextResponse.json({ status: 500 })
	}

    console.log(addItmesData)
	return NextResponse.json({ status: 200 });
}
