import ItemCard from "@/components/ui/itemcard"

export default function BrowseItems(){
    return(
        <div className="container mx-auto">
            browse items

            {/* items near by */}
            <div className=" grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-2">
                <ItemCard imgUrl="ds" description="sd" distance="ds" status="Available" name="sdadd"/>
                <ItemCard imgUrl="ds" description="sd" distance="ds" status="Available" name="sdadd"/>
                <ItemCard imgUrl="ds" description="sd" distance="ds" status="Available" name="sdadd"/>
                <ItemCard imgUrl="ds" description="sd" distance="ds" status="Available" name="sdadd"/>
                <ItemCard imgUrl="ds" description="sd" distance="ds" status="Available" name="sdadd"/>
            </div>
        </div>
    )
}
