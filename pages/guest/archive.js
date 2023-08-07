import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import fs from 'fs';
import path from 'path';
import axios from "axios";
import Link from 'next/link';
import StickySubscribeButton from '@/components/StickySubscribeButton';

export async function getServerSideProps(context) {
  const { query } = context;
  const page = parseInt(query.page) || 1;
  const limit = 6;
  const guestDirectory = path.join(process.cwd(), 'posts', 'guest');
  const filenames = fs.readdirSync(guestDirectory);
  const totalPosts = filenames.length;
  const totalPages = Math.ceil(totalPosts / limit);
  
  const startingIndex = (page - 1) * limit;
  const endingIndex = startingIndex + limit;

  const slicedFilenames = filenames.slice(startingIndex, endingIndex);

  let posts = [];
  
  slicedFilenames.forEach((filename) => {
    const fullPath = path.join(guestDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    posts.push({
      id: filename.replace(/\.md$/, ''),
      ...matterResult.data
    });
  });

  return {
    props: {
      posts,
      totalPages,
      currentPage: page,
    }
  };
}

export default function GuestArchive({ posts, totalPages, currentPage}) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!showButton && window.scrollY > 400) {
        setShowButton(true);
      } else if (showButton && window.scrollY <= 400) {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', checkScroll);

    return () => window.removeEventListener('scroll', checkScroll);
  }, [showButton]);

  return (
    <main>
      <Header />
      <div className='flex '>
        <div className="container mx-auto p-6">
        {/* <div className=''> */}
          <div className="lg:w-5/6 ">
            {posts && posts.length > 0 ? (
              posts.map((post) => (
                <div key={post.id} className="mb-4 pb-4 border-b border-gray-300">
                  <Link href={`/guest/${post.id}`}>
                      <div className='flex m-3 justify-between'>
                        <p className='text-sm font-semibold'>{post.date}</p>
                        <p className='text-sm font-semibold'>By {post.author}</p>
                      </div>
                      
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
        <div className='lg:w-1/6'>
        {showButton && <StickySubscribeButton />}
        </div>
      </div>
      <Footer />
    </main>
  );
}

