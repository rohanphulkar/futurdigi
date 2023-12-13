import React from "react";

const About = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="false"
    >
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div>
            <img className="rounded-xl" src="/about.svg" alt="about" />
          </div>
          {/* End Col */}
          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              {/* Title */}
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
                  About Us
                </h2>
                <p className="text-gray-500">
                  At FuturDigi, we believe that technology has the power to
                  transform businesses and change lives. That's why we provide
                  top-notch software development services to help businesses and
                  individuals reach their full potential. Our team of
                  experienced developers is dedicated to creating innovative
                  solutions that cater to the unique needs of each client.
                  Whether you need a custom software solution, website
                  development, or mobile app development, we have the expertise
                  and skills to bring your ideas to life. We understand that
                  every business is different, which is why we take the time to
                  listen and understand your specific requirements before
                  creating a tailored solution for your company. With our
                  cutting-edge technology and industry knowledge, we strive to
                  elevate your business to new heights.
                </p>
              </div>
              {/* End Title */}
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
    </div>
  );
};

export default About;
