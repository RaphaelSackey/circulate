import { TaddItmes } from "@/types/S_types";
import { prisma } from "@/services/server/S_postgress";

export async function addItem(data: TaddItmes ):Promise<boolean> {

    try{
        const newItem = await prisma.item.create(
            {data: {
                name:data.name,
                description:data.description,
                imageUrl: data.imageUrl,
                latitude: data.latitude,
                longitude: data.longitude,
                ownerId:  data.ownerId
    
            }}
    
        )

        console.log(newItem)
        return true 

    }catch(e){
        console.log(e)
        throw e
    }
    
    
}