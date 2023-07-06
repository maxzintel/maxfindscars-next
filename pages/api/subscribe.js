import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Make sure fields are filled.
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const options = {
      method: 'POST',
      url: `https://api.beehiiv.com/v2/publications/${process.env.beehiivPubID}/subscriptions`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.beehiivKey}`,
      },
      data: {
        publication_id: `${process.env.beehiivPubID}`,
        email: email,
        reactivate_existing: false,
        send_welcome_email: true,
        utm_source: 'website',
        utm_campaign: 'maxfindscars',
        utm_medium: 'organic',
      },
    };

    try {
      const response = await axios(options);
      
      if (response.status === 201) {
        // Subscription successfully created
        return res.status(200).json({ message: 'Subscription successful' });
      } else {
        return res.status(400).json({ message: 'Request failed for unknown reason' });
      }
    } catch (error) {
      console.error('Error: ', error.response);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
