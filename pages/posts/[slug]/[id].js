import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';  // <-- Import Head component
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickySubscribeButton from '@/components/StickySubscribeButton';

const Post = () => {
  const [post, setPost] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const router = useRouter();
  const { slug, id } = router.query;

  useEffect(() => {
    if (slug && id) {
      fetch(`/api/post?slug=${slug}&postId=${id}`)
        .then((response) => response.json())
        .then((data) => {
          setPost(data.post);
        });
    }
  }, [slug, id]);

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
    <div>
      <Head>
        <title>{post ? post.title : 'Loading...'}</title>  {/* <-- Dynamic title */}
        <meta name="description" content={post ? post.title : 'Loading...'} />
      </Head>
      <Header />
      {post && post.content ? (
        <div className="lg:flex">
          <div className="lg:w-5/6" dangerouslySetInnerHTML={{ __html: post.content.free.web }}></div>
          <div className="lg:w-1/6">
            {showButton && <StickySubscribeButton />}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[30vh]">
          <img src="/loading.gif" alt="Loading" />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Post;
