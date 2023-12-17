const Hero = () => {
  return (
    <div className="">
      <div className="">
        <div className="">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8  pt-24 space-y-8 bg-gradient">
            {/* Title */}

            <div className="">
              <div
                className="max-w-3xl text-center mx-auto "
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                <h1 className="block font-bold  text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  Elevate Your Brand with FuturDigi
                </h1>
              </div>
              {/* End Title */}
              <div
                className="max-w-3xl text-center mx-auto"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <p className="text-lg">
                  Unlock the full potential of your business with futurdigi's
                  expert software development services. Our solutions are
                  tailored to fit your unique needs and goals.
                </p>

                <img
                  src="/vector/tech-1.png"
                  alt=""
                  className="mx-auto"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
