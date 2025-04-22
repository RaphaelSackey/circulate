'use client'
import Hero from "@/components/ui/hero";
import Howitworks from "../components/ui/howitworks";
import useSignedIn from "@/hooks/singedInStatus";



export default function Home() {
  const { isPending, data, isSuccess} = useSignedIn()


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
