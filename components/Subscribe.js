// components/Subscribe.js
export default function Subscribe() {
  return (
    <form className="font-folio w-full max-w-lg mt-0 mb-10 bg-white p-3 rounded-lg">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
        </div>
        <input
          type="email"
          id="email-address-icon"
          className="bg-white border border-gray-300 text-gray-900 text-lg focus:ring-0 focus-visible:outline-none rounded-lg block w-full pl-10 pr-20 py-2"
          placeholder="Your Email Address..."
        />
        <button type="submit" className="absolute inset-y-1 right-1 flex items-center px-4 font-bold text-black bg-yellow-300  hover:bg-yellow-400 rounded-lg">
          SUBSCRIBE
        </button>
      </div>
    </form>
  );
}
