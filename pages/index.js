// pages/index.js
import Header from "../components/Header"
import Footer from "@/components/Footer"
import Subscribe from "@/components/Subscribe"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen pt-20">
      <Header />
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-start md:space-x-8">
          <h1 className='font-franklin text-7xl mb-8 md:mb-0'>The Most <br></br> Interesting <br></br>Cars on the <br></br> Internet, <br></br>In Your Inbox.</h1>
          {/* <img src="/964turbo.png" alt="Porsche 993 Turbo" className="w-full max-w-md mx-auto"/> */}
        </div>
        <div className="flex flex-col md:flex-row items-start justify-start md:space-x-8 mt-8">
          <Subscribe />
          {/* <h2 className='font-folio text-xl max-w-md mx-auto'>Subscribe now to join our growing gaggle of car lovers and get a twice weekly newsletter showing off the most interesting cars for sale online and telling their stories.</h2> */}
        </div>
      </div>
      <Footer />
    </main>
  )
}
