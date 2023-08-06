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
      <Header />
      <div>
        <h1 className="text-3xl font-bold m-4 text-center">{postData.title}</h1>
        <div className='lg:flex justify-center'>
          <div className="prose m-4 lg:w-5/6" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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

