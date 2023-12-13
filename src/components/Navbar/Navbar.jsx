import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const handleScroll = () => {
    const scrollY = window.scrollY;

    const threshold = 100;

    if (scrollY > threshold) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <header
        className={`${
          sticky
            ? "fixed  left-0 max-w-[100vw] top-0 backdrop-blur-lg border-b bg-white/25 transition-all duration-500 ease-in-out"
            : ""
        } flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full  text-sm py-3 sm:py-0`}
      >
        <nav
          className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Link to="/" aria-label="navbar-root-link">
              <button className="flex items-center space-x-2 text-3xl font-semibold">
                <img src="/logo.svg" alt="logo" width={36} height={36} />
                <span>FuturDigi</span>
              </button>
            </Link>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle w-9 h-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border "
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1={3} x2={21} y1={6} y2={6} />
                  <line x1={3} x2={21} y1={12} y2={12} />
                  <line x1={3} x2={21} y1={18} y2={18} />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="flex flex-col text-base gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
              <a href="/about">
                <p className="font-medium  bg-gradient-to-r from-primary/50 to-primary/40 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] md:my-6">
                  About
                </p>
              </a>
              <a href="/#services">
                <p className="font-medium  bg-gradient-to-r from-primary/50 to-primary/40 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] md:my-6">
                  Services
                </p>
              </a>
              <Link to="/blog">
                <p className="font-medium  bg-gradient-to-r from-primary/50 to-primary/40 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] md:my-6">
                  Blog
                </p>
              </Link>
              <a href="/#team">
                <p className="font-medium  bg-gradient-to-r from-primary/50 to-primary/40 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] md:my-6">
                  Our Team
                </p>
              </a>
              <a href="/#testimonials">
                <p className="font-medium  bg-gradient-to-r from-primary/50 to-primary/40 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] md:my-6">
                  Testimonials
                </p>
              </a>
              <a href="/#contact">
                <p className="font-medium  bg-gradient-to-r from-primary/50 to-primary/40 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] md:my-6">
                  Contact
                </p>
              </a>
              <Link to="/careers">
                <p className="font-medium  bg-gradient-to-r from-primary/50 to-primary/40 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] md:my-6">
                  Careers
                </p>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
