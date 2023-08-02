import { useRouter } from 'next/router';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import fs from 'fs';
import path from 'path';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickySubscribeButton from '@/components/StickySubscribeButton';

// Add a function that will be used to modify the HTML AST
const addTailwindClassesToMarkdownHtml = () => (tree) => {
  tree.children.map((node) => {
    if (node.tagName === 'h1') {
      node.properties.className = ['text-2xl', 'font-bold'];
    }
    if (node.tagName === 'h2') {
      node.properties.className = ['text-xl', 'font-bold'];
    }
    if (node.tagName === 'h3') {
      node.properties.className = ['text-lg', 'font-bold'];
    }
    // And so on for other tags like p, ul, ol, etc.
    return node;
  });
};

const Post = ({ postData }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div>
        <h1 className="text-3xl font-bold m-4">{postData.title}</h1>
        <div className="prose m-4 lg:w-5/6" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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

