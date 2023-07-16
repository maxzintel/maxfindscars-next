// pages/index.js
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContainerContent from '@/components/ContainerContent';

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
      <ContainerContent />
      <Footer />
    </main>
  );
}
