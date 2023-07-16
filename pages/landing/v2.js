// // pages/index.js
// import Header from "@/components/v2/Header";
// import Footer from "@/components/v2/Footer";
// import Subscribe from "@/components/v2/Subscribe";

// export default function Home() {
//   return (
//     <main className="flex flex-col items-center justify-center min-h-screen pt-1 bg-off-black text-off-white">
//       <Header />
//       <div className="container mx-auto">
//         <div className="flex flex-col items-start justify-between space-x-8">
//           <div className='w-full md:max-w-4/5'>
//             <h1 className='font-franklin md:text-8xl sm:text-6xl text-6xl mb-2 '>The Most Interesting Cars <br></br>on the Internet,</h1>
//             <div className='mt-1 gradient-hover' style={{ 
//               background: 'radial-gradient(circle, rgba(251,243,4,1) 0%, rgba(249,180,65,1) 50%, rgba(183,17,22,1) 100%)', 
//               borderRadius: '20px',
//               height: '30%',
//               width: '100%',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               backgroundSize: '200% 200%',
//               // padding: '1rem 0', // add padding to ensure content isn't too close to the edges
//             }}>
//               <img src="/vector-911.png" alt="Porsche 993 Turbo" className="sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-1/2 2xl:w-1/2 object-cover mt-6"/>
//               <Subscribe/>
//             </div>
//             <h1 className='font-franklin md:text-8xl sm:text-6xl text-6xl mb-2 md:mb-0'>In Your Inbox.</h1>
//           </div>
//         </div>
//         <div className="flex flex-col md:flex-row items-start justify-start md:space-x-8 mt-8">
//           <div>
//             <h2 className='font-semibold text-lg max-w-lg'>We make cars for sale entertaining. Join to get our 5 min newsletter showcasing the most interesting cars for sale online.</h2>
//           </div>
//           <div className='mt-1 gradient-hover' style={{ 
//               background: 'radial-gradient(circle, rgba(251,243,4,1) 0%, rgba(249,180,65,1) 50%, rgba(183,17,22,1) 100%)', 
//               borderRadius: '20px',
//               height: '15%',
//               width: '50%',
//               justifyContent: 'center',
//               alignItems: 'center',
//               backgroundSize: '200% 200%',
//             }}>
//             <div className="grid grid-cols-2 ml-5 mr-5 p-4 border-2 border-black">
//               <img src="/bmw.png" alt="BMW Logo" className="object-contain w-2/3"/>
//               <img src="/hagerty.png" alt="Hagerty Logo" className="object-contain w-2/3 h-full"/>
//               <img src="/thehustle.png" alt="Morning Brew Logo" className="object-contain w-2/3 h-full"/>
//               <img src="/morningbrew.png" alt="The Hustle Logo" className="object-contain w-2/3 h-full"/>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </main>
//   );
// }
