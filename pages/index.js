import Head from "next/head"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className='font-franklin text-7xl'>The Most <br></br> Interesting <br></br>Cars on the <br></br> Internet, <br></br>In Your Inbox.</h1>
      <img src="/964turbo.png" alt="Porsche 993 Turbo" className="mt-16 w-full max-w-md mx-auto"/>
      <h2 className='font-folio items-center justify-center text-xl mt-8'>Subscribe now to join our growing gaggle of car lovers and get a twice weekly newsletter showing off the most interesting cars for sale online and telling their stories.</h2>
    </main>
  )
}
