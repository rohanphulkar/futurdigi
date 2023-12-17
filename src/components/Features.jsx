const Features = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="1500" id="features">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div>
            <img
              className="rounded-xl img-shadow"
              src="/vector/vector-8.png"
              alt="Image Description"
            />
          </div>
          {/* End Col */}
          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              {/* Title */}
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
                  Why Us?
                </h2>
                <p className="text-gray-500 text-lg">
                  Our team at FuturDigi is driven by a passion for innovation.
                  Choose us for solutions that keep your business ahead in a
                  rapidly evolving digital landscape.
                </p>
              </div>
              {/* End Title */}
              {/* List */}
              <div className="space-y-8 md:space-y-10">
                <div className=" flex flex-col rounded-xl transition ">
                  <div className="">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="p-4 px-5 bg-prime text-white font-bold rounded-full text-xl">
                          01
                        </div>
                        <div className="ms-3">
                          <h3 className="text-gray-800 text-lg">
                            Elevate your business with our premium, cutting-edge
                            solutions for exceptional digital performance.
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col rounded-xl transition ">
                  <div className="">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="p-4  bg-prime text-white font-bold rounded-full text-xl">
                          02
                        </div>
                        <div className="ms-3">
                          <h3 className="text-gray-800 text-lg">
                            We create lasting solutions for Startups, SaaS, and
                            Business sites, evolving with your business for
                            enduring value.
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col rounded-xl transition ">
                  <div className="">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="p-4  bg-prime text-white font-bold rounded-full text-xl">
                          03
                        </div>
                        <div className="ms-3">
                          <h3 className="text-gray-800 text-lg">
                            We're not just service providers; we're your
                            partners in progress, prioritizing collaboration for
                            your success.
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End List */}
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
