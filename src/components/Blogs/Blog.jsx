import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import BlogSlider from "./BlogSlider";

const Blog = () => {
  const [blogs, setBlogs] = useState();
  const fetchBlogs = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/blog/posts/top-5/`,
        {
          next: {
            revalidate: 30,
          },
        }
      );
      const result = await response.json();
      const status = await response.status;
      if (status === 200) {
        setBlogs(result);
      } else {
        console.log("Some error occured");
        toast.error("Something went wrong.", { id: "1" });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.", { id: "1" });
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="false"
    >
      {blogs && (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            {/* text - start */}
            <div className="mb-10 md:mb-16">
              <h2 className="mt-4 text-2xl font-bold text-gray-800 md:text-4xl">
                Latest Posts
              </h2>
            </div>
            {/* text - end */}

            <BlogSlider blogs={blogs} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
