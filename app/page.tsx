import Image from "next/image";
import Hero from "@/componets/ui/hero";
import Howitworks from "./howitworks";


export default function Home() {
  return (
    <div className="container mx-auto">
      < Hero />
      <Howitworks />
    </div>
  )
}
