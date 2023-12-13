import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 text-center">
          <div>
            <Link to="/" aria-label="footer-root-link">
              <button className="flex items-center space-x-2 text-3xl font-semibold">
                <img src="/logo.svg" alt="logo" width={36} height={36} />
                <span>FuturDigi</span>
              </button>
            </Link>
          </div>
          {/* End Col */}
          <ul className="text-center">
            <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
              <Link to="/about">
                <p className="inline-flex font-semibold gap-x-2 text-sm text-gray-700 hover:text-gray-800">
                  About
                </p>
              </Link>
            </li>
            <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
              <Link to="/careers">
                <p className="inline-flex font-semibold gap-x-2 text-sm text-gray-700 hover:text-gray-800">
                  Careers
                </p>
              </Link>
            </li>
            <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
              <Link to="/privacy-policy">
                <p className="inline-flex font-semibold gap-x-2 text-sm text-gray-700 hover:text-gray-800">
                  Privacy Policy
                </p>
              </Link>
            </li>
            <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
              <Link to="/terms-and-conditions">
                <p className="inline-flex font-semibold gap-x-2 text-sm text-gray-700 hover:text-gray-800">
                  Terms and Conditions
                </p>
              </Link>
            </li>
          </ul>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </footer>
    </div>
  );
};

export default Footer;
