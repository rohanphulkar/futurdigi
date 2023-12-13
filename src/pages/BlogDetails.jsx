import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState();
  const fetchBlog = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/blog/posts/by-slug/${slug}/`
      );
      const result = await response.json();
      const status = await response.status;
      if (status === 200) {
        setBlog(result);
      } else {
        toast.error("Something went wrong.", { id: "1" });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.", { id: "1" });
    }
  };
  useEffect(() => {
    fetchBlog();
  }, [slug]);
  return (
    <div>
      {blog && (
        <div className="max-w-5xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-5xl">
            {/* Content */}
            <div className="space-y-5 md:space-y-8">
              <div className="space-y-3">
                <h2 className="text-2xl font-bold md:text-3xl">
                  {blog?.title}
                </h2>

                {/* Date */}
                <div className="flex items-center  gap-4 mt-7.5">
                  <div className="text-left">
                    <h4 className="font-medium text-custom-lg text-dark mb-1">
                      Published On
                    </h4>
                    <div className="flex items-center gap-1.5">
                      <p>
                        {format(new Date(blog?.created_at), "dd MMMM, yyyy")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Date End */}
              </div>
              <div className="aspect-w-6 aspect-h-3">
                <img
                  className="w-full object-cover rounded-xl"
                  src={blog?.image}
                  alt={blog?.title}
                  width={400}
                  height={400}
                />
              </div>

              <p
                className="text-lg text-gray-800 prose max-w-5xl"
                dangerouslySetInnerHTML={{ __html: blog?.content }}
              ></p>
            </div>
            {/* End Content */}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
