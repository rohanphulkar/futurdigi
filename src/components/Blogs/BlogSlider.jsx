import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import BlogCard from "./BlogCard";
const BlogSlider = ({ blogs }) => {
  let blogsLength = blogs.length < 3 ? blogs.length : 3;
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: blogsLength,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {blogs?.map((blog) => (
            <div key={blog.id} className="max-w-sm">
              <BlogCard
                title={blog.title}
                content={blog.content}
                image={blog.image}
                date={blog.created_at}
                slug={blog.slug}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BlogSlider;
