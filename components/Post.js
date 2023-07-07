import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';
import StickySubscribeButton from './StickySubscribeButton';

const Post = () => {
  const [post, setPost] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const router = useRouter();
  const { slug, postId } = router.query;  // getting slug and postId from query params

  useEffect(() => {
    if (slug && postId) {
      fetch(`/api/post?slug=${slug}&postId=${postId}`)
        .then((response) => response.json())
        .then((data) => setPost(data.post));
    }
  }, [slug, postId]);

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
      <Header />
      {post ? (
        <div className="lg:flex">
          <div className="lg:w-5/6" dangerouslySetInnerHTML={{ __html: post.content.free.web }}></div>
          <div className="lg:w-1/6">
            {showButton && <StickySubscribeButton />}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[30vh]">
          <img src="/logos/13.gif" alt="Loading" />  {/* In Next.js, static files are served from the /public folder */}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Post;
