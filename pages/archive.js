// pages/archive.js
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import axios from "axios";
import Link from 'next/link';

export async function getServerSideProps(context) {
  const { query } = context;
  const page = query.page || 1;
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/archive?page=${page}&limit=6&sortByDate=desc&allPosts=no`);

  return {
    props: {
      posts: res.data.posts,
      totalPages: res.data.totalPages,
      currentPage: page,
    }
  };
}

export default function Archive({ posts, totalPages, currentPage }) {
  return (
    <main>
      <Header />
      <div className="container mx-auto p-6">
        <div>
          {posts && posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.id} className="mb-4 pb-4 border-b border-gray-300">
                <Link href={`/posts/${post.slug}/${post.id}`}>
                    <img src={post.thumbnail_url} alt={post.title} className="mb-2 h-40 w-full object-cover rounded"/>
                    <p className="text-sm font-semibold">{formatDate(post.publish_date)}</p>
                    <h2 className="text-xl font-semibold">{post.title}</h2>
                    <p className="text-sm">{post.preview_text}</p>
                </Link>
              </div>
            ))
          ) : (
            <div>No posts found</div>
          )}
        </div>
        <div>
          {/* Pagination */}
          {currentPage > 1 && (
            <Link className="rounded px-2 py-1 m-1 border-b-4 border-l-2 shadow-lg bg-gradient-to-tl from-yellow-500 to-yellow-300 border-yellow-600 text-black italic text-xl cursor-pointer font-bold" href={`/archive?page=${Number(currentPage) + 1}`}>
              PREVIOUS
            </Link>
          )}
          {currentPage < totalPages && (
            <Link className="rounded px-2 py-1 m-1 border-b-4 border-l-2 shadow-lg bg-gradient-to-tl from-yellow-500 to-yellow-300 border-yellow-600 text-black italic text-xl cursor-pointer font-bold" href={`/archive?page=${Number(currentPage) + 1}`}>
              NEXT
            </Link>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}

const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const monthName = monthNames[date.getMonth()];
  return `${monthName} ${date.getDate()}, ${date.getFullYear()}`;
};
