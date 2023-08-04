// pages/api/archive.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    // Return 405 if method is not GET
    return res.status(405).json({ message: 'Method not allowed' });
  }

  let { page = 1, limit = 6, sortByDate = 'desc', allPosts = 'no' } = req.query;

  try {
    let totalPages;
    let posts = [];

    do {
      const response = await axios.get(
        `https://api.beehiiv.com/v2/publications/${process.env.beehiivPubID}/posts`,
        {
          params: {
            status: 'confirmed',
            platform: 'both',
            page: page,
            limit: limit,
          },
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.beehiivKey}`,
          },
        }
      );

      const currentPagePosts = response.data;
      totalPages = currentPagePosts.total_pages;
      posts = posts.concat(currentPagePosts.data);

      // If allPosts is 'no', break the loop after first request
      if (allPosts === 'no') {
        break;
      } else {
        page++;
      }
    } while (page <= totalPages);

    // Sort the posts array by publish_date in descending or ascending order
    const sortedPosts = posts.sort((a, b) => sortByDate === 'desc' ? b.publish_date - a.publish_date : a.publish_date - b.publish_date);

    return res.json({ posts: sortedPosts, totalPages: totalPages });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'An error occurred' });
  }
};
 