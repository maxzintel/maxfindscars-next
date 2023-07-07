// pages/index.js
import React from 'react';
import SubscriptionForm from '@/components/SignupForm';
import RecentPosts from '@/components/RecentPosts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/recentposts`);
  const data = await res.json();
  
  return {
    props: {
      posts: data.posts,
    },
    revalidate: 1, // Re-generate this page every 1 second, if necessary. Adjust the time as needed.
  };
}

export default function Home({ posts }) {
  return (
    <main>
      <Header />
      <div className="container border-black p-5 m-2 mt-0">
        <h1 className="left-0 font-bold text-3xl">
          THE MOST INTERESTING CARS ON THE INTERNET, IN YOUR INBOX.
        </h1>
        <h2 className="text-lg left-0 font-bold mt-3">
        ✍️ Written by an ex-BMW Engineer
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-around w-full">
        <div className="bg-antiquewhite md:w-1/2 lg:h-72 md:h-72 sm:h-60 flex items-center justify-center m-4">
          <SubscriptionForm />
        </div>
        <div className="bg-antiquewhite m-4 md:w-1/2 h-72 flex flex-col items-center justify-center">
          <p className="p-3 text-base mb-4 mt-4 font-bold">
            📚 Read by the people who build, create, and run...
          </p>
          <div className="m-2 p-4">
            <div className='m-2'>
              <img src="./brands.png" className='max-w-full h-auto' alt="Logos of brands such as BMW, Hagerty, The Hustle, and Morning Brew"/>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-center text-3xl font-bold mb-5">🤔 STILL NOT CONVINCED?</h2>
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="md:w-1/2 p-5">
            <h3 className="text-xl font-bold mb-3 text-center">WHAT YOU GET WHEN YOU SIGN UP:</h3>
            <ul className="list-disc list-outside ml-5">
              <li className="mb-2">🗓️ A (free) Monday & Friday 5 min newsletter unless Max gets really carried away.</li>
              <li className="mb-2">🚕 The most interesting, strange, cool, or downright WILD vehicles for sale online, hand delivered to your e-mail inbox by Max himself.</li>
              <li className="mb-2">💗 A place in Max's heart (he will love you if you read his emails).</li>
              <li className="mb-2">🔧 The knowledge that any advertising money Max earns from the newsletter will probably go directly to buying car parts.</li>
            </ul>
          </div>
          <div className="md:w-1/2 p-5">
            <RecentPosts posts={posts} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
