// pages/index.js
import Header from "../components/Header"
import Footer from "@/components/Footer"
import Subscribe from "@/components/Subscribe"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen pt-10">
      <Header />
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:justify-between md:space-x-8">
          <div className='max-w-2xl'>
            <h1 className='font-franklin text-7xl mb-2 md:mb-0'>The Most Interesting Cars on the Internet,</h1>
            <div style={{ background: 'radial-gradient(circle, rgba(251,243,4,1) 0%, rgba(249,180,65,1) 50%, rgba(183,17,22,1) 100%)', borderRadius: '20px'}}>
            <img src="/vector-911.png" alt="Porsche 993 Turbo" className="w-full mx-auto md:mx-0"/>
            </div>
            <h1 className='font-franklin text-7xl mb-1 md:mb-0'>In Your Inbox.</h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-start md:space-x-8 mt-8">
          <h2 className='font-folio text-lg max-w-lg'>We make cars for sale entertaining. Join to get our 5 min newsletter showcasing the most interesting cars for sale online.</h2>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-start md:space-x-8 mt-1">
          <Subscribe />
        </div>
      </div>
      <Footer />
    </main>
  )
}


{/* <h1 className='font-franklin text-7xl mb-8 md:mb-0 md:mr-auto'>Here's Our Best Shit</h1> */}