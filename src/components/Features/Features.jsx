import React from "react";

const Features = () => {
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
        <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <h2 className="font-bold text-2xl md:text-3xl text-gray-800">
              Elevate Your Business with Expert Software Development Services
            </h2>
            <p className="mt-2 md:mt-4 text-gray-600">
              We understand that in the modern digital landscape, having the
              right software solutions can be a game-changer for your success.
              That&apos;s why we offer a range of cutting-edge services tailored
              to your unique needs.
            </p>
          </div>
          {/* End Col */}
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
              {/* Icon Block */}
              <div className="flex gap-x-5">
                <div className="text-3xl font-extrabold text-primary">1.</div>
                <div className="grow">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Tailored Excellence:
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Crafting unique software solutions aligning precisely with
                    goals ensures effectiveness in addressing specific needs and
                    achieving business success.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex gap-x-5">
                <div className="text-3xl font-extrabold text-primary">2.</div>
                <div className="grow">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Diverse Expertise:
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Our team's proficiency spans various technologies, enabling
                    the delivery of comprehensive services from software
                    development to advanced AI solutions.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex gap-x-5">
                <div className="text-3xl font-extrabold text-primary">3.</div>
                <div className="grow">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Proven Track Record:
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Explore testimonials showcasing our commitment to excellence
                    and successful projects, a testament to consistent
                    high-quality solution delivery.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex gap-x-5">
                <div className="text-3xl font-extrabold text-primary">4.</div>
                <div className="grow">
                  <h3 className="text-lg font-semibold text-gray-800">
                    AI-Powered Innovation:
                  </h3>
                  <p className="mt-1 text-gray-600">
                    As pioneers in ML and AI, we seamlessly integrate
                    intelligent solutions into software, ensuring businesses
                    stay ahead in the evolving technological landscape.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
    </div>
  );
};

export default Features;
