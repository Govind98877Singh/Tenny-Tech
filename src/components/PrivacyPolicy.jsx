import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-gray-100 min-h-screen flex items-center justify-center px-4 sm:px-8 pt-24">
      {/* Main Container */}
      <div className="bg-white p-8 sm:p-12 rounded-xl shadow-lg border border-gray-200 transition duration-300 ease-in-out hover:shadow-[0px_8px_30px_rgba(0,0,0,0.15)] max-w-4xl w-full">
        {/* Header Section */}
        <header className="text-center mb-10">
          <h1 className="text-5xl font-bold text-blue-800 mb-4 tracking-wide">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm">
            Last Updated: <span className="font-medium">03-10-2024</span>
          </p>
        </header>

        {/* Content Section */}
        <section className="text-gray-800">
          <p className="mb-8 text-lg leading-relaxed">
            At <span className="font-semibold">Teeny Tech Trek</span>, we are
            committed to protecting your privacy. This Privacy Policy outlines
            how we collect, use, and safeguard your personal information when
            you visit our website or use our services. By using our website,
            you consent to the practices described in this policy.
          </p>

          <ol className="list-decimal list-inside space-y-8 pl-4 sm:pl-8 border-l-4 border-blue-400">
            <li>
              <strong>Information We Collect:</strong> We may collect personal
              information from you when you:
              <ul className="list-disc list-inside mt-2 ml-4 space-y-2">
                <li>Register for an account</li>
                <li>Subscribe to our newsletter</li>
                <li>Fill out a form</li>
              </ul>
              <p className="mt-2">
                The types of personal information we may collect include:
              </p>
              <ul className="list-disc list-inside mt-2 ml-4 space-y-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Billing information</li>
                <li>Company name</li>
              </ul>
            </li>

            <li>
              <strong>How We Use Your Information:</strong> We use the
              information we collect for various purposes, including:
              <ul className="list-disc list-inside mt-2 ml-4 space-y-2">
                <li>To provide and maintain our services</li>
                <li>To process transactions and send you confirmations</li>
                <li>
                  To communicate with you about your account or transactions
                </li>
                <li>
                  To send periodic emails regarding your order or other products
                  and services
                </li>
              </ul>
            </li>

            <li>
              <strong>Data Protection:</strong> We implement a variety of
              security measures to maintain the safety of your personal
              information. Your personal data is stored in secure networks and
              is only accessible by a limited number of persons who have special
              access rights to such systems.
            </li>

            <li>
              <strong>Sharing Your Information:</strong> We do not sell, trade,
              or otherwise transfer your personally identifiable information to
              outside parties without your consent, except to provide services
              you have requested or as required by law.
            </li>

            <li>
              <strong>Third-Party Services:</strong> Our website may contain
              links to third-party websites. We do not control these websites
              and are not responsible for their content or privacy practices. We
              encourage you to review the privacy policies of any third-party
              sites you visit.
            </li>

            <li>
              <strong>Cookies:</strong> We use cookies to enhance your
              experience on our website. Cookies are small files that a site or
              its service provider transfers to your computer's hard drive
              through your web browser (if you allow) that enables the site’s or
              service provider’s systems to recognize your browser and capture
              certain information. You can choose to have your computer warn you
              each time a cookie is being sent or turn off all cookies through
              your browser settings.
            </li>

            <li>
              <strong>Your Rights:</strong> You have the right to access,
              correct, or delete your personal information at any time. If you
              wish to exercise these rights, please contact us using the
              information provided below.
            </li>

            <li>
              <strong>Changes to This Privacy Policy:</strong> We may update our
              Privacy Policy from time to time. We will notify you of any
              changes by posting the new Privacy Policy on this page with an
              updated effective date.
            </li>

            <li>
              <strong>Contact Us:</strong> If you have any questions about this
              Privacy Policy, please contact us at:
              <p className="mt-2">
                Email:{" "}
                <a
                  href="mailto:anisha.singla@teenytechtrek.com"
                  className="text-blue-600 underline transition duration-200 hover:text-blue-800"
                >
                  anisha.singla@teenytechtrek.com
                </a>
              </p>
            </li>
          </ol>

          <p className="mt-8 leading-relaxed text-lg">
            By using our services, you acknowledge that you have read,
            understood, and agreed to this Privacy Policy.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
