// pages/index.js
import React from 'react';
import RecentPosts from '@/components/RecentPosts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContainerContent from '@/components/ContainerContent';
import axios from 'axios';

export async function getStaticProps() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/recentposts`);
  console.log(process.env.NEXT_PUBLIC_API_BASE_URL)
  const data = res.data;
  
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
      <ContainerContent />
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
