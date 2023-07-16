import { useState } from 'react';
import Link from 'next/link';
import ContactInfo from './ContactInfo';
import SignupForm from './SignupForm';

const Footer = () => {
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleContactClick = () => setShowContactInfo(true);
  const handleCloseInfo = () => setShowContactInfo(false);
  const handleOpenSignupModal = () => setShowSignupModal(true);
  const handleCloseSignupModal = () => setShowSignupModal(false);

  return (
    <footer className="footer-container m-3 px-4 py-4 flex flex-col sm:flex-row items-center justify-center bg-antiquewhite rounded-lg">
      <p className="mr-0 sm:mr-auto mb-2 sm:mb-0 text-center">2023, MaxFindsCars LLC</p>
      {showContactInfo && <ContactInfo onClose={handleCloseInfo} />}
      {showSignupModal && <Modal onClose={handleCloseSignupModal} />}
      <button onClick={handleContactClick} className="rounded px-2 py-1 m-1 border-b-4 border-l-2 shadow-lg bg-gradient-to-tl from-yellow-500 to-yellow-300 border-yellow-600 text-black italic text-xl cursor-pointer font-bold">CONTACT</button>
      <button onClick={handleOpenSignupModal} className="rounded px-2 py-1 m-1 border-b-4 border-l-2 shadow-lg bg-gradient-to-tl from-yellow-500 to-yellow-300 border-yellow-600 text-black italic text-xl cursor-pointer font-bold">SUBSCRIBE</button>
      <div className="flex">
        <a href="https://twitter.com/maxjzin" className="mx-1">
          <img src="/twitter.png" alt="Twitter Icon" className="h-6" />
        </a>
        <a href="https://github.com/maxzintel" className="mx-1">
          <img src="/github.png" alt="GitHub Icon" className="h-6" />
        </a>
      </div>
    </footer>
  );
};

const Modal = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
    <div className="relative bg-antiquewhite p-8 outline-2 border-black border-2 w-3/4 md:w-1/2 rounded-lg">
      <button onClick={onClose} className="absolute top-1 right-2 text-2xl">
          &times;
      </button>
      <SignupForm />
    </div>
  </div>
);

export default Footer;
