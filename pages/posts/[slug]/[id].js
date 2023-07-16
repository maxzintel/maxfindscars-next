import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickySubscribeButton from '@/components/StickySubscribeButton';
import axios from 'axios';

const Post = ({ post }) => {
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

export async function getServerSideProps(context) {
  const { slug, id } = context.params;

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/post`, 
      { 
        params: { slug: slug, postId: id } 
      }
    );

    if (response.data.post) {
      return {
        props: {
          post: response.data.post,
        },
      };
    }
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default Post;
