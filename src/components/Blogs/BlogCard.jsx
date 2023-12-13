import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ title, content, image, date, slug }) => {
  return (
    <div>
      <Link to={`/blog/${slug}/`}>
        <div className="group ">
          <div className="mb-6 overflow-hidden rounded-[10px] transition-all">
            <img src={image} alt={title} className="w-full" />
          </div>
          <div>
            <p className="block text-dark font-bold text-xl mb-3.5">
              <span className="bg-gradient-to-r from-primary/50 to-primary/40 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                {title}
              </span>
            </p>
          </div>
          <p
            dangerouslySetInnerHTML={{
              __html:
                content.slice(0, 100) + (content.length > 100 ? "..." : ""),
            }}
          ></p>
          <div className="flex flex-wrap gap-3 items-center justify-between mt-5">
            <div className="flex items-center">
              <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2" />
              <p className="font-medium rounded-full bg-blue-100 text-primary px-3 py-1.5">
                {format(new Date(date), "dd MMMM, yyyy")}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
