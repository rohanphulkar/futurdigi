import React, { useEffect, useState } from "react";

import toast from "react-hot-toast";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import TestimonialCard from "./TestimonialCard";
const Testimonial = () => {
  const [testimonials, setTestimonials] = useState();
  const fetchTestimonials = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/testimonials/`
      );
      const result = await response.json();
      const status = await response.status;
      if (status === 200) {
        if (result?.length > 0) {
          setTestimonials(result);
        }
      } else {
        toast.error("Something went wrong.", { id: "1" });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.", { id: "1" });
    }
  };
  useEffect(() => {
    fetchTestimonials();
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      {testimonials && (
        <>
          <h2
            className="mt-4 text-2xl font-bold text-center text-gray-800 md:text-4xl"
            id="testimonials"
          >
            What our client says
          </h2>
          <Slider {...settings}>
            {testimonials?.map((testimonial) => (
              <TestimonialCard
                client={testimonial.client}
                company={testimonial.company}
                testimonial={testimonial.testimonial}
              />
            ))}
          </Slider>
        </>
      )}
    </div>
  );
};

export default Testimonial;
