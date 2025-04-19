'use client'
import Hero from "@/components/ui/hero";
import Howitworks from "../components/ui/howitworks";
import useSignedIn from "@/hooks/singedInStatus";
import { useLocation } from "@/context/location";


export default function Home() {
  const { isPending, data, isSuccess} = useSignedIn()
  const cords = useLocation()
  
  if (cords){
    console.log(cords.latitude, cords.longitude)
  }

  if (!isPending){
    if (isSuccess){
      console.log('user is logged in', data)
    }else{
      console.log('user is not logged in')
    }
  }

  return (
    <div className="container mx-auto">
      < Hero />
      <Howitworks />
    </div>
  )
}
