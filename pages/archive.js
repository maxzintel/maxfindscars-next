// pages/index.js
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import axios from "axios";

export async function getServerSideProps() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/recentposts`);

  return {
    props: {
      posts: res.data.posts,
    }
  };
}

export default function Home({ posts }) {
  return (
    <main>
      <Header />
      <Footer />
    </main>
  );
}
