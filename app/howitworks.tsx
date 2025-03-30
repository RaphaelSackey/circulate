
import { Search, Recycle, GitPullRequestCreate, MoveRight } from 'lucide-react';

export default function Howitworks(){
    return(
        <section className="container">
            <div className="flex items-center justify-center text-4xl mb-8">How It Works</div>
            
            <div className="flex items-center justify-center gap-10">
                <div className='flex flex-col items-center justify-center'>
                    <div className='bg-gray-900 p-20 rounded-lg'>
                        <Search size={50} />
                    </div>
                    <h1 className=' text-center pt-4 text-lg'>Browse items</h1>
                </div>
                
                <MoveRight />
                
                <div className='flex flex-col items-center justify-center'>
                    <div className='bg-gray-900 p-20 rounded-lg'>
                        <GitPullRequestCreate size={50}/>
                    </div>
                    <h1 className=' text-center pt-4 text-lg'>Request to Borrow or Swap</h1>
                </div>
                
                <MoveRight />
                
                <div className='flex flex-col items-center justify-center'>
                    <div className='bg-gray-900 p-20 rounded-lg'>
                        < Recycle size={50}/>
                    </div>
                    <h1 className=' text-center pt-4 text-lg'>Enjoy and Return the Item!</h1>
                </div>
            </div>

        </section>
    )
}