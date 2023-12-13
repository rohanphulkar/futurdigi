import React from "react";
import { FaCode } from "react-icons/fa6";
import { LuBrainCircuit } from "react-icons/lu";
import { MdAndroid, MdCloudDone } from "react-icons/md";
import { PiGlobeBold } from "react-icons/pi";
import { SiEnterprisedb } from "react-icons/si";
const Services = () => {
  return (
    <div>
      <div
        className="py-16"
        id="services"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
      >
        <div className="xl:container m-auto space-y-16 px-6 text-gray-500 md:px-12">
          <div>
            <h2 className="mt-4 text-2xl font-bold text-gray-800 md:text-4xl">
              Services for Digital Success
            </h2>
            <p>
              Explore FuturDigi's suite of services, from software development
              to web and mobile solutions.
            </p>
          </div>
          <div className="md:-mx-8 mt-12 grid gap-8 lg:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* card */}
            <div className="group relative p-8 rounded-3xl sm:gap-8 sm:flex transition duration-300 hover:shadow-2xl hover:shadow-gray-300">
              <div className="relative">
                <FaCode fontSize={36} className="text-red-600" />
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-gray-800 transition">
                  Software Development
                </h3>
                <p className="text-gray-600">
                  Whether you need a specific solution for your business or a
                  brand-new product, we work closely with you to design and
                  develop software that perfectly aligns with your objectives.
                  Expect innovation, flexibility, and excellence with FuturDigi.
                </p>
              </div>
            </div>
            {/* end Cards */}
            {/* card */}
            <div className="group relative p-8 rounded-3xl sm:gap-8 sm:flex transition duration-300 hover:shadow-2xl hover:shadow-gray-300">
              <div className="relative">
                <PiGlobeBold fontSize={36} className="text-primary" />
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-gray-800 transition">
                  Web Development
                </h3>
                <p className="text-gray-600">
                  We create responsive and feature-rich web applications that
                  engage your audience and help your business stand out in the
                  digital landscape. Explore the possibilities of the web with
                  FuturDigi.
                </p>
              </div>
            </div>
            {/* end Cards */}
            {/* card */}
            <div className="group relative p-8 rounded-3xl sm:gap-8 sm:flex transition duration-300 hover:shadow-2xl hover:shadow-gray-300">
              <div className="relative">
                <MdAndroid fontSize={36} className="text-green-500" />
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-gray-800 transition">
                  Mobile App Development
                </h3>
                <p className="text-gray-600">
                  In today's mobile-centric world, mobile app development is
                  essential for reaching and engaging your audience. FuturDigi
                  specializes in crafting mobile applications for both iOS and
                  Android platforms.
                </p>
              </div>
            </div>
            {/* end Cards */}
            {/* card */}
            <div className="group relative p-8 rounded-3xl sm:gap-8 sm:flex transition duration-300 hover:shadow-2xl hover:shadow-gray-300">
              <div className="relative">
                <LuBrainCircuit fontSize={36} className="text-amber-400" />
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-gray-800 transition">
                  AI Solutions
                </h3>
                <p className="text-gray-600">
                  Elevate your business with our cutting-edge AI services. From
                  intelligent data analysis to real-world applications, our
                  expertise in Artificial Intelligence transforms your digital
                  landscape.
                </p>
              </div>
            </div>
            {/* end Cards */}
            {/* card */}
            <div className="group relative p-8 rounded-3xl sm:gap-8 sm:flex transition duration-300 hover:shadow-2xl hover:shadow-gray-300">
              <div className="relative">
                <SiEnterprisedb fontSize={36} className="text-violet-600" />
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-gray-800 transition">
                  Enterprise Software Solutions
                </h3>
                <p className="text-gray-600">
                  Efficiency and data management are critical for business
                  success. Our enterprise software solutions are designed to
                  optimize your operations and decision-making processes.
                </p>
              </div>
            </div>
            {/* end Cards */}
            {/* card */}
            <div className="group relative p-8 rounded-3xl sm:gap-8 sm:flex transition duration-300 hover:shadow-2xl hover:shadow-gray-300">
              <div className="relative">
                <MdCloudDone fontSize={36} className="text-rose-500" />
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-gray-800 transition">
                  Cloud Integration & Services
                </h3>
                <p className="text-gray-600">
                  Our cloud integration service helps you harness the benefits
                  of cloud technology. We assist you in migrating to the cloud,
                  ensuring scalability, security, and cost-efficiency.
                </p>
              </div>
            </div>
            {/* end Cards */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
