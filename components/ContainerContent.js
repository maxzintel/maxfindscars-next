import React from 'react';
import SignupForm from './SignupForm';
const ContainerContent = () => {
  return (
    <div>
      <div className="container p-5 m-2 mt-0">
        <h1 className="left-0 font-extra-bold-900 italic text-4xl">
          THE MOST INTERESTING CARS ON THE INTERNET, IN YOUR INBOX.
        </h1>
        <h2 className="text-lg left-0 font-bold mt-3">
        ✍️ Written by an ex-BMW Engineer
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-around w-full">
        <div className="bg-antiquewhite md:w-1/2 lg:h-72 md:h-72 sm:h-60 flex items-center justify-center m-4 rounded-lg">
          <SignupForm />
        </div>
        <div className="bg-antiquewhite m-4 md:w-1/2 h-72 flex flex-col items-center justify-center rounded-lg">
          <p className="p-3 text-base mb-4 mt-4 font-bold">
            📚 Read by the people who build, create, and run...
          </p>
          <div className="m-2 p-3">
            <img src='../brands.png' className='max-w-1/2 max-h-52' alt="Logos of brands such as BMW, Hagerty, The Hustle, and Morning Brew"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerContent;