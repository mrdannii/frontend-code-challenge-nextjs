import Navbar from '@/components/Navbar'
import Productcard from '@/components/Productcard'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Navbar/>
    <main className="flex min-h-screen flex-col items-center justify-between p-10">


      <div className="mb-0 grid text-center   lg:grid-cols-4 lg:text-left m-5">
       <Productcard/>

       <Productcard/> 
       <Productcard/> 

     

      
      </div>
    </main>
    </>
    
  )
}
