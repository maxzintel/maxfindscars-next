import { useRouter } from 'next/router';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import fs from 'fs';
import path from 'path';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickySubscribeButton from '@/components/StickySubscribeButton';
import { useEffect, useState } from 'react';
import Head from 'next/head';


const Post = ({ postData }) => {
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

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>{postData ? postData.title : 'Loading...'}</title>
        <meta name="description" content={postData ? postData.title : 'Loading...'} />
      </Head>
      <Header />
      <div className="container mx-auto px-4 py-8 lg:w-2/3">
        {/* Title and Details */}
        <div className="border-1 p-4 rounded-lg shadow-md mb-8">
          <h1 className="text-3xl font-bold mb-4">{postData.title}</h1>
          <div className="flex justify-between">
            <p className='text-lg'>By {postData.author}</p>
            <p className='text-lg'>{postData.date}</p>
          </div>
        </div>

        {/* Content */}
        <div className="lg:flex justify-center mt-8">
          <div className="bg-white prose prose-lg m-4 p-6 lg:w-5/6 rounded-lg shadow-lg" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          <div className="lg:w-1/6">
            {showButton && <StickySubscribeButton />}
          </div>
        </div>
      </div>
      <Footer />
    </div>


  );
};

export default Post;

export async function getStaticPaths() {
  const guestDirectory = path.join(process.cwd(), 'posts', 'guest');
  console.log(guestDirectory)
  const filenames = fs.readdirSync(guestDirectory);

  console.log(filenames);

  const paths = filenames.map((filename) => {
    return {
      params: {
        id: filename.replace(/\.md$/, ''),
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const guestDirectory = path.join(process.cwd(), 'posts', 'guest');
  console.log(guestDirectory);
  const fullPath = path.join(guestDirectory, `${params.id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    props: {
      postData: {
        id: params.id,
        contentHtml,
        ...matterResult.data,
      },
    },
  };
}

