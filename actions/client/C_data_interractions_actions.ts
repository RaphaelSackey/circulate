import { TaddItmesFnReturn, TaddItmesfnArg, TitemsByCurrentLocation, TgetItemsFnReturn } from "@/types/C_types"


export async function getItemsNearby(){

}

export async function addNewItem(formdata:TaddItmesfnArg):Promise<TaddItmesFnReturn>{

    const {data, images} = formdata
    
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

export async function getItemsByCurrentLocation({data, batch}: {data: TitemsByCurrentLocation,batch:number }):Promise<TgetItemsFnReturn>{

    try {
        const response = await fetch(`/api/items/getitems/${batch}`, {
            method: 'POST', 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            return {success: false, itemsNearby: [], nextBatch: null}
        }

        const {success, itemsNearby, nextBatch} = await response.json()
        // console.log('get items',{success, itemsNearby, nextBatch})
        return {success, itemsNearby, nextBatch }
    
    }catch(e){
        throw e
    }
}





