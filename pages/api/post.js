import axios from 'axios';

// The handler function for the '/api/post' route
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    // Return 405 if method is not GET
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { slug, postId } = req.query;

  if (!slug || !postId) {
    return res.status(400).json({ message: 'Slug and postId are required' });
  }

  try {
    const response = await axios.get(
      `https://api.beehiiv.com/v2/publications/${process.env.beehiivPubID}/posts/${postId}`,
      {
        params: {
          status: 'confirmed',
          platform: 'both',
          'expand[]': 'free_web_content',
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.beehiivKey}`,
        },
      }
    );

    const post = response.data;

    if (post && post.slug === slug) {
      return res.json({ post: post });
    } else {
      return res.status(404).json({ message: 'Post not found' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'An error occurred' });
  }
}
