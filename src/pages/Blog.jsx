import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState();
  const fetchBlogs = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/blog/posts/`
      );
      const result = await response.json();
      const status = await response.status;
      if (status === 200) {
        setBlogs(result);
      } else {
        toast.error("Something went wrong", { id: "1" });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", { id: "1" });
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div className="max-w-[85rem] mx-auto">
      <div className="my-12 text-center">
        <h2 className="text-dark mb-3.5 text-2xl font-bold sm:text-4xl xl:text-heading-3">
          Latest Posts
        </h2>
        <p>Select a category to see more related content</p>
      </div>
      <div class="grid lg:grid-cols-3 lg:gap-y-16 gap-10">
        {blogs?.slice(0, 1)?.map((post) => (
          <Link key={post.id} to={`/blog/${post.slug}`}>
            <div className="group hover:bg-blue-50 rounded-xl p-5 transition-all">
              <div className="aspect-w-16 aspect-h-10">
                <img
                  className="w-full object-cover rounded-xl"
                  src={post.image}
                  alt={post.title}
                />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-gray-800">
                {post.title}
              </h3>
              <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800">
                Learn more
                <svg
                  className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
