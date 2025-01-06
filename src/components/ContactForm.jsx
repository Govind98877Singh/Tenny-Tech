import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    helpText: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.companyName) {
      return;
    }
    
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  px-40 py-20 mt-7">
      <div className=" p-12 w-full">
        <h1 className="text-4xl font-bold mb-8 flex justify-center pb-4 text-gray-800">GET IN TOUCH</h1>  {/* Reduced size here */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-8">
          {/* First row: First name, Last name, Email, Phone */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                className="mt-2 block w-full text-lg border-b-[1.5px] border-black  focus:outline-none"
              />
              {submitted && !formData.firstName && (
                <p className="text-md text-red-600 mt-2">First name is required.</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                className="mt-2 block w-full text-lg border-b-[1.5px] border-black focus:outline-none"
              />
              {submitted && !formData.lastName && (
                <p className="text-md text-red-600 mt-2">Last name is required.</p>
              )}
            </div>
          </div>

          {/* Second row: Email, Phone */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="mt-2 block w-full text-lg border-b-[1.5px] border-black focus:outline-none"
              />
              {submitted && !formData.email && (
                <p className="text-md text-red-600 mt-2">Email is required.</p>
              )}
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="mt-2 block w-full text-lg border-b-[1.5px] border-black focus:outline-none"
              />
            </div>
          </div>

          {/* Company name and Help text */}
          <div>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Company name"
              className="mt-2 block w-full text-lg border-b-[1.5px] border-black focus:outline-none"
            />
            {submitted && !formData.companyName && (
              <p className="text-md text-red-600 mt-2">Company name is required.</p>
            )}
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">How can we help?</label>
            <textarea
              name="helpText"
              value={formData.helpText}
              onChange={handleChange}
              placeholder="Answer in a few words"
              className="mt-2 block w-full text-lg border-b-[1.5px] border-black focus:outline-none overflow-hidden"
              rows="1"
              onInput={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = `${e.target.scrollHeight}px`;
              }}
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full text-xl border-2 border-[#B2C6E2] text-blue-500 py-4 px-6 rounded-full text-lg shadow-md hover:bg-[#c2c5aa] focus:outline-none focus:ring-2 focus:ring-blue-500 hover:text-[#99582a]  focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;


