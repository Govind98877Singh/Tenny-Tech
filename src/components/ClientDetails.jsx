import React from "react";

function ClientDetails() {
  return (

      <div className="w-full pl-10">
        

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Client Details Form */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Client Details
            </h2>
            <p className="text-lg text-gray-500 mb-6">
              Tell us a bit about yourself
            </p>

            {/* Form */}
            <form className="space-y-12 w-[43rem] ">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-700"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="mt-2 block w-96  border-b-[1.5px] border- focus:ring-blue-500 focus:border-blue-500 sm:text-base "
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="mt-2 block w-full border-b-[1.5px] border- focus:ring-blue-500 focus:border-blue-500 sm:text-base"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="mt-2 block w-80  border-b-[1.5px] border-  focus:ring-blue-500 focus:border-blue-500 sm:text-base"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                <div>
                  <label
                    htmlFor="company-name"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Company Description
                  </label>
                  <input
                    type="text"
                    id="company-Description"
                    placeholder="Enter company name"
                    className="mt-2 block w-full  border-b-[1.5px] border- focus:ring-blue-500 focus:border-blue-500 sm:text-base"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company-description"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company name"
                    placeholder="Enter company name"
                    className="mt-2 block w-80  border-b-[1.5px] border- focus:ring-blue-500 focus:border-blue-500 sm:text-base"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    
  );
}

export default ClientDetails;
