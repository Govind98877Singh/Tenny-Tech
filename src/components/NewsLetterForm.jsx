import React from 'react';

function NewsletterForm() {
  return (
    <div className="bg-[#3E6AA7] p-12 rounded-lg shadow-md w-full">
      <h2 className="text-white text-3xl font-bold mb-6">Subscribe to our newsletter</h2>
      <div className="mb-6">
        <label htmlFor="email" className="text-white text-lg font-medium">
          Email *
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter an email address like example@mysite.com"
          className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-lg"
        />
      </div>
      <div className="mb-6">
        <input
          type="checkbox"
          id="subscribe"
          className="mr-3"
        />
        <label htmlFor="subscribe" className="text-white text-lg font-medium">
          Yes, subscribe me to your newsletter.
        </label>
      </div>
      <button
        type="submit"
        className="w-full bg-white text-[#3E6AA7] font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-[#E0F0FF] hover:shadow-xl focus:outline-none focus:ring focus:ring-blue-300 text-lg transition-all duration-300 ease-in-out"
      >
        Submit
      </button>
    </div>
  );
}

export default NewsletterForm;




