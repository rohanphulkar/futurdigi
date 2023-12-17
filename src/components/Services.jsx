const Services = () => {
  return (
    <div>
      <div className="bg-white" data-aos="fade-up" data-aos-duration="1000">
        <div
          className="mx-auto max-w-2xl py-12 px-4 sm:px-6  lg:max-w-7xl lg:px-8"
          id="services"
        >
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
              Services We Provide
            </h2>
            <p className="text-gray-500 text-lg">
              We offer a suite of services designed to propel your business into
              the digital future. Our commitment to excellence sets us apart,
              ensuring that each service is tailored to meet your unique needs.
            </p>
          </div>
          {/* Card */}
          <div
            className="text-gray-600 body-font"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
              <div className="lg:flex-grow order-2 md:order-1 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">
                  Digital Marketing
                </h1>
                <p className="mb-8 leading-relaxed">
                  Elevate your brand with our strategic digital marketing
                  services. From targeted campaigns to social media strategies,
                  we go beyond conventional methods, leveraging data-driven
                  insights to maximize your online presence. At FuturDigi, we
                  bring innovation to every campaign, ensuring your brand's
                  message resonates effectively.
                </p>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 order-1 md:order-2">
                <img
                  className="object-cover object-center rounded bg-gradient"
                  alt="hero"
                  src="/vector/vector-2.png"
                />
              </div>
            </div>
          </div>{" "}
          {/* Card End */}
          {/* Card */}
          <div
            className="text-gray-600 body-font"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img
                  className="object-cover object-center rounded bg-gradient"
                  alt="hero"
                  src="/vector/vector-6.png"
                />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">
                  Graphic Designing
                </h1>
                <p className="mb-8 leading-relaxed">
                  Captivate your audience with our creative graphic designing
                  services. Our talented team combines artistic flair with
                  strategic thinking to create visually stunning designs that
                  leave a lasting impression. We understand the power of visual
                  communication and translate your brand into captivating
                  graphics that stand out in a crowded digital landscape.
                </p>
              </div>
            </div>
          </div>
          {/* Card End */}
          {/* Card */}
          <div
            className="text-gray-600 body-font"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
              <div className="lg:flex-grow order-2 md:order-1 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">
                  Software, Web, and Mobile Development
                </h1>
                <p className="mb-8 leading-relaxed">
                  Experience excellence in software, web, and mobile development
                  with FuturDigi. Our team of experienced developers crafts
                  solutions that align seamlessly with your business objectives.
                  We pride ourselves on staying at the forefront of technology,
                  ensuring your digital presence is not only functional but also
                  cutting-edge.
                </p>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 order-1 md:order-2">
                <img
                  className="object-cover object-center rounded bg-gradient"
                  alt="hero"
                  src="/vector/vector-4.png"
                />
              </div>
            </div>
          </div>{" "}
          {/* Card End */}
          {/* Card */}
          <div
            className="text-gray-600 body-font"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img
                  className="object-cover object-center rounded bg-gradient"
                  alt="hero"
                  src="/vector/tech-2.png"
                />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">
                  Efficient Cloud Services
                </h1>
                <p className="mb-8 leading-relaxed">
                  Harness the power of the cloud with our efficient cloud
                  services. Whether it's migration, integration, or
                  optimization, we ensure your business operates seamlessly and
                  securely in the digital realm. FuturDigi's cloud solutions are
                  designed for efficiency, scalability, and resilience,
                  providing a robust foundation for your digital infrastructure.
                </p>
              </div>
            </div>
          </div>
          {/* Card End */}
        </div>
      </div>
    </div>
  );
};

export default Services;
