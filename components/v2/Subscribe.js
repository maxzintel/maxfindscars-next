// components/Subscribe.js
import { useState } from 'react';
import axios from 'axios';

export default function Subscribe() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/subscribe', { email });
      alert(response.data.message);
    } catch (error) {
      console.error('Error subscribing', error);
      alert('Error subscribing. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="font-folio w-full max-w-lg mt-0 mb-10 bg-white p-3 rounded-lg">
      <div className="relative">
        {/*...*/}
        <input
          type="email"
          id="email-address-icon"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white border border-gray-300 text-gray-900 text-lg focus:ring-0 focus-visible:outline-none rounded-lg block w-full pl-10 pr-20 py-2"
          placeholder="Your Email Address..."
        />
        <button type="submit" className="absolute inset-y-1 right-1 flex items-center px-4 font-bold text-gray-200 bg-red-600 hover:bg-red-500 rounded-lg">
          SUBSCRIBE
        </button>
      </div>
    </form>
  );
}
