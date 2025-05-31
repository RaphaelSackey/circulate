import { Frown } from "lucide-react";

export default function Itmesnotfound(){
    return (
        <div className="w-full flex items-center justify-center flex-col  gap-3 container mx-auto absolute">
            <div className="text-7xl opacity-50">No items found near you</div>
            < Frown size={200} className="opacity-50"/> 
        </div>
    )
}