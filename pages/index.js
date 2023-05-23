// pages/index.js
import Header from "../components/Header"
import Footer from "@/components/Footer"
import Subscribe from "@/components/Subscribe"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center">
      <Header />
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
        {/* <h1 className='font-franklin text-7xl mb-8 md:mb-0'>Small Penis? <br></br> Have I Got <br></br>A Newsletter For You. </h1> */}
        <h1 className='font-franklin text-7xl mb-8 md:mb-0'>The Most <br></br> Interesting <br></br>Cars on the <br></br> Internet, <br></br>In Your Inbox.</h1>
        <img src="/964turbo.png" alt="Porsche 993 Turbo" className="w-full max-w-md mx-auto"/>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 mt-8">
        <Subscribe />
        <h2 className='font-folio text-xl'>Subscribe now to join our growing gaggle of car lovers and get a twice weekly newsletter showing off the most interesting cars for sale online and telling their stories.</h2>
      </div>
      <Footer />
    </main>
  )
}