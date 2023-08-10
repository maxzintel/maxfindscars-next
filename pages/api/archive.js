// pages/api/archive.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const defaultParams = {
    status: 'confirmed',
    platform: 'both',
    page: 1,
    limit: 6,
  };

  const apiParams = { ...defaultParams, ...req.query };

  try {
    let totalPages;
    let posts = [];

    do {
      const response = await axios.get(
        `https://api.beehiiv.com/v2/publications/${process.env.beehiivPubID}/posts`,
        {
          params: apiParams,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.beehiivKey}`,
          },
        }
      );

      const currentPagePosts = response.data;
      totalPages = currentPagePosts.total_pages;
      posts = posts.concat(currentPagePosts.data);

      if (apiParams.allPosts && apiParams.allPosts === 'no') {
        break;
      } else {
        apiParams.page++;
      }
    } while (apiParams.page <= totalPages);

    return res.json({ posts: posts, totalPages: totalPages });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'An error occurred' });
  }
};
