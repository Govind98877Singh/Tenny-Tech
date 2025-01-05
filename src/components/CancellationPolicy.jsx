import React from "react";

const CancellationPolicy = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-gray-100 min-h-screen flex items-center justify-center px-4 sm:px-8 pt-24">
      {/* Main Container */}
      <div className="bg-white p-8 sm:p-12 rounded-xl shadow-lg border border-gray-200 transition duration-300 ease-in-out hover:shadow-[0px_8px_30px_rgba(0,0,0,0.15)] max-w-4xl w-full">
        {/* Header Section */}
        <header className="text-center mb-10">
          <h1 className="text-5xl font-bold text-blue-800 mb-4 tracking-wide">
            Cancellation Policy
          </h1>
          <p className="text-gray-500 text-sm">
            Last Updated: <span className="font-medium">03-10-2024</span>
          </p>
        </header>

        {/* Content Section */}
        <section className="text-gray-800">
          <p className="mb-8 text-lg leading-relaxed">
            At <span className="font-semibold">Teeny Tech Trek</span>, we are
            dedicated to ensuring customer satisfaction with our services. If
            you are not completely satisfied with your purchase, please review
            our refund policy below.
          </p>

          <ol className="list-decimal list-inside space-y-8 pl-4 sm:pl-8 border-l-4 border-blue-400">
            <li>
              <strong>Cancellation Period:</strong> Customers may cancel their
              order or service within <span className="font-medium">5 days</span>{" "}
              from the date of purchase for a full refund. Cancellations made
              after this period may incur fees.
            </li>

            <li>
              <strong>How to Cancel:</strong> To initiate a cancellation, please
              contact us:
              <ul className="list-disc list-inside mt-2 ml-4 space-y-2">
                <li>Email:{" "}
                  <a
                    href="mailto:anisha.singla@teenytechtrek.com"
                    className="text-blue-600 underline transition duration-200 hover:text-blue-800"
                  >
                    anisha.singla@teenytechtrek.com
                  </a>
                </li>
                <li>Phone: +91 9855806696</li>
              </ul>
              <p className="mt-2">
                Include your order number and the reason for cancellation in
                your request.
              </p>
            </li>

            <li>
              <strong>Refund Process:</strong> Once we receive your refund
              request, we will:
              <ul className="list-disc list-inside mt-2 ml-4 space-y-2">
                <li>Review your request within 5 business days.</li>
                <li>
                  Notify you of the approval or rejection of your refund.
                </li>
                <li>
                  If approved, process your refund back to the original payment
                  method used during the purchase.
                </li>
              </ul>
            </li>

            <li>
              <strong>Timing of Refunds:</strong> Refunds will typically be
              processed within <span className="font-medium">5-7 business days</span>{" "}
              after approval. Please note that depending on your bank or credit
              card provider, it may take additional time for the funds to appear
              in your account.
            </li>

            <li>
              <strong>Fees:</strong> We do not charge any fees for processing
              refunds. However, certain services may incur administrative fees
              if outlined in the service agreement.
            </li>

            <li>
              <strong>Changes to this Policy:</strong> Teeny Tech Trek reserves
              the right to update or modify this Refund Policy at any time. Any
              changes will be posted on our website with an updated effective
              date.
            </li>

            <li>
              <strong>Contact Us:</strong> For any questions regarding our
              Refund Policy or to initiate a refund request, please reach out to
              us at:
              <ul className="list-disc list-inside mt-2 ml-4 space-y-2">
                <li>Email:{" "}
                  <a
                    href="mailto:anisha.singla@teenytechtrek.com"
                    className="text-blue-600 underline transition duration-200 hover:text-blue-800"
                  >
                    anisha.singla@teenytechtrek.com
                  </a>
                </li>
                <li>Phone: +91 9855806696</li>
              </ul>
            </li>
          </ol>

          <p className="mt-8 leading-relaxed text-lg">
            By using our services, you acknowledge that you have read,
            understood, and agreed to this Refund Policy.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CancellationPolicy;
