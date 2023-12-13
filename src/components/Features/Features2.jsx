import React from "react";
import { FaCodeCommit } from "react-icons/fa6";
import { GiProgression } from "react-icons/gi";
import { MdWorkspacePremium } from "react-icons/md";
const Features2 = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-delay="100"
      data-aos-mirror="false"
    >
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="lg:w-3/4">
            <img src="/feature.svg" alt="features" width={700} height={700} />
          </div>
          {/* End Col */}
          <div className="space-y-6 lg:space-y-10">
            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border   shadow-sm mx-auto bg-primary  text-gray-200">
                <MdWorkspacePremium fontSize={24} />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                  Premium Quality Solutions
                </h3>
                <p className="mt-1 text-gray-600">
                  Experience excellence with our premium solutions, leveraging
                  cutting-edge technologies to elevate your business. Our
                  commitment to quality ensures sustained and exceptional
                  performance in your digital landscape.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border  shadow-sm mx-auto  bg-primary  text-gray-200">
                <FaCodeCommit fontSize={24} />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                  Enduring Commitment
                </h3>
                <p className="mt-1 text-gray-600">
                  We build for the long term. Our solutions, designed for
                  Startup, SaaS, and Business sites, promise longevity and
                  enduring value. We evolve with your business, providing
                  solutions that stand the test of time.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border  shadow-sm mx-auto  bg-primary  text-gray-200">
                <GiProgression fontSize={24} />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                  Partners in Progress
                </h3>
                <p className="mt-1 text-gray-600">
                  Coderlink is more than a service provider; we're your partners
                  in progress. We prioritize a collaborative approach, ensuring
                  your success is at the forefront of everything we do.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Icon Blocks */}
    </div>
  );
};

export default Features2;
