import React, { useState } from 'react';
import SignupForm from './SignupForm';

const StickySubscribeButton = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleOpenSignupModal = () => {
    setShowSignupModal(true);
  };

  const handleCloseSignupModal = () => {
    setShowSignupModal(false);
  };

  return (
    <>
      <button
        onClick={handleOpenSignupModal}
        className="p-3 rounded px-4 py-3 m-1 border-b-4 border-l-2 shadow-lg bg-gradient-to-tl from-yellow-500 to-yellow-300 border-yellow-600 text-black italic text-xl font-bold cursor-pointer sticky top-10 right-0 z-50">
        SUBSCRIBE
      </button>
      {showSignupModal && <Modal onClose={handleCloseSignupModal} />}
    </>
  );
};

const Modal = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
    <div className="relative bg-antiquewhite p-8 border-2 border-black w-3/4 md:w-1/2">
      <button onClick={onClose} className="absolute top-1 right-2 text-2xl">
        &times;
      </button>
      <SignupForm />
    </div>
  </div>
);

export default StickySubscribeButton;
