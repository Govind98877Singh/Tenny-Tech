import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
  
  function FooterCom() {
    return (
      <footer className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 py-12 text-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {/* Contact Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Contact
              </h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:anisha.singla@teenytechtrek.com"
                    className="hover:text-yellow-300 transition duration-300"
                  >
                    anisha.singla@teenytechtrek.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919855806696"
                    className="hover:text-yellow-300 transition duration-300"
                  >
                    +91 9855806696
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+16478645465"
                    className="hover:text-yellow-300 transition duration-300"
                  >
                    +1 647 864 5465
                  </a>
                </li>
              </ul>
            </div>

            {/* Location Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Location
              </h2>
              <p className="text-sm leading-relaxed text-gray-300">
                C-201, 2nd floor, Sebiz Square Building, <br />
                Plot no C-6, Mohali, SAS Nagar - 160062, <br />
                Punjab, India
              </p>
            </div>

            {/* Follow Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Follow
              </h2>
              <div className="flex space-x-6">
                <a
                  href="https://www.instagram.com/teenytechtrek/"
                  aria-label="Instagram"
                  className="hover:scale-110 transition transform duration-200 hover:text-yellow-400"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" // Instagram icon URL
                    alt="Instagram"
                    className="w-8 h-8"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/teenytechtrek/"
                  aria-label="LinkedIn"
                  className="hover:scale-110 transition transform duration-200 hover:text-yellow-400"
                >
                  <img
                    src="Images/[CITYPNG.COM]HD Round Circular Linkedin IN Glossy Icon Transparent PNG - 2000x2000.png" // LinkedIn icon URL
                    alt="LinkedIn"
                    className="w-10 h-10"
                  />
                </a>
                <a
                  href="https://www.facebook.com"
                  aria-label="Facebook"
                  className="hover:scale-110 transition transform duration-200 hover:text-yellow-400"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" // Facebook icon URL
                    alt="Facebook"
                    className="w-8 h-8"
                  />
                </a>
              </div>
            </div>

           
          {/* Policies Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">
              Quick Links
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="hover:underline hover:text-yellow-300 transition duration-200"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:underline hover:text-yellow-300 transition duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/cancellation-policy"
                  className="hover:underline hover:text-yellow-300 transition duration-200"
                >
                  Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

          {/* Footer Bottom Section */}
          <div className="border-t border-yellow-500 mt-10 pt-6 text-center text-sm text-gray-300">
            <p>&copy; 2024 TeenyTechTrek. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  }

  export default FooterCom;
