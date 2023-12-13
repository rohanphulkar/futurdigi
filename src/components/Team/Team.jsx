import React from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  const data = [
    {
      id: 1,
      name: "Rohan Phulkar",
      designation: "Founder",
      image: "/rohan.webp",
      linkedin: "https://linkedin.com/in/rohanphulkar",
    },
    {
      id: 2,
      name: "Ratik Vohra",
      designation: "Founder",
      image: "/ratik.webp",
      linkedin: "https://www.linkedin.com/in/ratik-vohra-9a8763214/",
    },
    {
      id: 3,
      name: "Gaurav Shrivastav",
      designation: "Founder",
      image: "/gaurav.webp",
      linkedin: "https://www.linkedin.com/in/gaurav-shrivastav-93075723b/",
    },
  ];
  return (
    <div>
      <section
        className="bg-white"
        id="team"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-md lg:mb-16">
            <h2 className="mt-4 text-2xl font-bold text-gray-800 md:text-4xl">
              Meet Our Team
            </h2>
            <p className="text-gray-500 sm:text-xl">
              Discover the skilled minds shaping success. Committed to
              excellence, our team bring ideas to life with creativity and
              precision.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 text-left">
            {data?.map((entry) => (
              <TeamCard
                key={entry.id}
                name={entry.name}
                image={entry.image}
                designation={entry.designation}
                linkedin={entry.linkedin}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
