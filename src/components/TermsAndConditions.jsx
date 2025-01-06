import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-gray-100 min-h-screen flex items-center justify-center px-4 sm:px-8 pt-24">
      {/* Main Container */}
      <div className="bg-white p-8 sm:p-12 rounded-xl shadow-2xl border border-gray-200 transition duration-300 ease-in-out hover:shadow-[0px_8px_30px_rgba(0,0,0,0.1)] max-w-4xl w-full">
        {/* Header Section */}
        <header className="text-center mb-10">
          <h1 className="text-5xl font-bold text-blue-700 mb-4 tracking-wide">
            Terms and Conditions
          </h1>
          <p className="text-gray-500 text-sm">
            Last Updated: <span className="font-medium">03-10-2024</span>
          </p>
        </header>

        {/* Content Section */}
        <section className="text-gray-800">
          <p className="mb-8 text-lg leading-relaxed">
            Welcome to <span className="font-semibold">Teeny Tech Trek!</span>{" "}
            These Terms and Conditions outline the rules and regulations for
            the use of our website and services. By accessing or using our
            services, you agree to comply with these terms. If you do not agree
            with any part of these terms, please do not use our services.
          </p>

          <ol className="list-decimal list-inside space-y-8 pl-4 sm:pl-8 border-l-4 border-blue-300">
            <li>
              <strong>Acceptance of Terms:</strong> By using our website and
              services, you confirm that you are at least 18 years old or have
              the consent of a parent or guardian. You agree to comply with all
              applicable laws and regulations.
            </li>
            <li>
              <strong>Services Provided:</strong> Teeny Tech Trek provides
              various technology solutions, including but not limited to web
              development, digital marketing, and Salesforce Cloud Development.
              We reserve the right to modify or discontinue any service at any
              time without prior notice.
            </li>
            <li>
              <strong>User Responsibilities:</strong> Users are responsible for
              maintaining the confidentiality of their account information and
              for all activities that occur under their account. You agree to
              notify us immediately of any unauthorized use of your account or
              any other breach of security.
            </li>
            <li>
              <strong>Intellectual Property:</strong> All content on our
              website, including text, graphics, logos, and software, is the
              property of Teeny Tech Trek or its content suppliers and is
              protected by copyright and intellectual property laws. You may
              not reproduce, distribute, or create derivative works from any
              content without our express written permission.
            </li>
            <li>
              <strong>Limitation of Liability:</strong> Teeny Tech Trek shall
              not be liable for any direct, indirect, incidental, or
              consequential damages arising from the use or inability to use
              our services. We do not guarantee that our services will be
              error-free or uninterrupted.
            </li>
            <li>
              <strong>Indemnification:</strong> You agree to indemnify and hold
              harmless Teeny Tech Trek, its affiliates, and their respective
              employees from any claims, losses, liabilities, damages, costs,
              or expenses arising out of your use of our services or violation
              of these terms.
            </li>
            <li>
              <strong>Governing Law:</strong> These Terms and Conditions shall
              be governed by and construed in accordance with the laws of{" "}
              <strong>India</strong>. Any disputes arising from these terms
              shall be resolved in the courts located in{" "}
              <strong>Mohali, Punjab</strong>.
            </li>
            <li>
              <strong>Changes to Terms:</strong> We reserve the right to update
              or modify these Terms and Conditions at any time without prior
              notice. Your continued use of our services after any changes
              constitutes your acceptance of the new terms.
            </li>
            <li>
              <strong>Contact Information:</strong> If you have any questions
              about these Terms and Conditions, please contact us at{" "}
              <a
                href="mailto:anisha.singla@teenytechtrek.com"
                className="text-blue-600 underline transition duration-200 hover:text-blue-800"
              >
                anisha.singla@teenytechtrek.com
              </a>
              .
            </li>
          </ol>

          <p className="mt-8 leading-relaxed text-lg">
            By using our services, you acknowledge that you have read,
            understood, and agreed to these Terms and Conditions.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;

