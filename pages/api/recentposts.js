import axios from 'axios';

// The handler function for the '/api/recentposts' route
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    // Return 405 if method is not GET
    return res.status(405).json({ message: 'Method not allowed' });
  }

  let currentPage = 1;
  let totalPages;
  let allPosts = [];

  do {
    const response = await axios.get(
      `https://api.beehiiv.com/v2/publications/${process.env.beehiivPubID}/posts`,
      {
        params: {
          status: 'confirmed',
          platform: 'both',
          page: currentPage,
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.beehiivKey}`,
        },
      }
    );

    const currentPagePosts = response.data;

    totalPages = currentPagePosts.total_pages;
    allPosts = allPosts.concat(currentPagePosts.data);
    currentPage++;
  } while (currentPage <= totalPages);

  // Sort the posts array by publish_date in descending order
  const sortedPosts = allPosts.sort((a, b) => b.publish_date - a.publish_date);

  // Get the most recent 3 posts
  const recentPosts = sortedPosts.slice(0, 3);

  // Return the recentPosts data as a JSON object
  return res.json({ posts: recentPosts });
}
