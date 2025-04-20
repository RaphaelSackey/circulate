import { TaddItmesFnReturn, TaddItmesfnArg } from "@/types/C_types"


export async function getItemsNearby(){

}

export async function addNewItem(formdata:TaddItmesfnArg):Promise<TaddItmesFnReturn>{

    const {data, images} = formdata
    console.log(data, images)


    try{
        const response = await fetch('/api/items/additem', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({data, images})
        })

        if (!response.ok){
            return {success: false, message: 'Unable to post item :('}
        }

        return {success: true, message: 'Your item has been successfully posted 🎉'}
    }catch(e){
        return {success: false, message: 'Unable to post item :('}
    }

}
export async function removeItem(){

}


