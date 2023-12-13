import React from "react";

const Hero = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="false"
      data-aos-delay="50"
    >
      <div className="relative overflow-hidden" id="about">
        <div className="relative z-10">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
            <div className="max-w-4xl text-center mx-auto">
              {/* Title */}
              <div className="mt-5 max-w-6xl">
                <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
                  Elevate Your Business with FuturDigi
                </h1>
              </div>
              {/* End Title */}
              <div className="mt-5 max-w-3xl mx-auto">
                <p className="text-lg text-gray-600 text-center">
                  Unlock the full potential of your business with futurdigi's
                  expert software development services. Our solutions are
                  tailored to fit your unique needs and goals.
                </p>
              </div>
              {/* Buttons */}
              <div className="mt-8 gap-3 flex justify-center">
                <a
                  className="py-3 px-4 inline-flex items-center gap-x-2  font-semibold rounded-full border border-transparent bg-primary text-white"
                  href="#contact"
                >
                  Contact Us
                  <svg
                    className="flex-shrink-0 w-4 h-4"
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
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </div>
              {/* End Buttons */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
