import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('🏁 Join to get our free 5 min newsletter showcasing the most interesting cars for sale online!');
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Extract UTM parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const utm_source = urlParams.get("utm_source") || 'website';
    const utm_campaign = urlParams.get("utm_campaign") || 'maxfindscars';
    const utm_medium = urlParams.get("utm_medium") || 'organic';

    const payload = {
      email: email,
      utm_source: utm_source,
      utm_campaign: utm_campaign,
      utm_medium: utm_medium,
    };

    try {
      await axios.post('/api/subscribe', payload, { headers: { 'Content-Type': 'application/json' } });
      setMessage('✅ Success! Look for a welcome email soon!');
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({'event': 'signup_success'});
      window.dataLayer.push({'event': 'ads_conversion_Sign_up_1'})
    } catch (error) {
      console.error(error)
      setMessage('❌ FAILED. Check for typos and try again!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form className="font-bold flex flex-col items-center px-4 w-full" onSubmit={submitForm}>
        {message && <div className='p-3 mb-1 w-full md:w-3/4'>{message}</div>}
        {isLoading ? (
          <img src="/loading.gif" alt="Loading..." className="mb-3" />
        ) : (
          <input
            type="email"
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address..."
            className="p-3 border mb-3 text-lg w-full md:w-3/4 rounded-lg"
          />
        )}
        <input type="submit" value="SUBSCRIBE" className="rounded px-4 py-3 m-1 border-b-4 border-l-2 shadow-lg bg-gradient-to-tl from-yellow-500 to-yellow-300 border-yellow-600 text-black italic text-xl cursor-pointer" />
      </form>
    </>
  );
};

export default SignupForm;
