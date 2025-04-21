import { storageBucket } from "@/services/server/S_firebase";
import { v4 as uuidv4 } from "uuid";

export async function addImage(
	image: string,
	folderPath = "images"
): Promise<{ publicUrl: string; filePath: string }> {
	try {
		const matches = image.match(/^data:(image\/\w+);base64,(.+)$/);
		if (!matches) {
			throw Error;
		}

		const contentType = matches[1];

		const base64Data = image.replace(/^data:image\/\w+;base64,/, "");

		const buffer = Buffer.from(base64Data, "base64");

		const fileName = `${uuidv4()}.jpg`;
		const filePath = `${folderPath}/${fileName}`;

		const file = storageBucket.file(filePath);

		await file.save(buffer, {
			metadata: {
				contentType,
			},
		});

		const [url] = await file.getSignedUrl({
			action: "read",
			expires: "03-09-2491", // Set the expiry date (far in the future)
		});

		const publicUrl = url;
		return { publicUrl, filePath };
	} catch (e) {
		console.log(e);
		throw e;
	}
}

export async function deleteImage(path: string): Promise<boolean> {
	try {
		await storageBucket.file(path).delete();
		return true;
	} catch (e) {
		return false;
	}
}
