import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Careers = () => {
  const [jobs, setJobs] = useState();
  const fetchJobs = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/jobs/`);
      const result = await response.json();
      const status = await response.status;
      if (status === 200) {
        setJobs(result);
      } else {
        toast.error("Something went wrong", { id: "1" });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", { id: "1" });
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <div>
      {/* FAQ */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-5xl mx-auto mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
            Current Openings
          </h2>
        </div>
        {/* End Title */}
        <div className="max-w-4xl mx-auto space-y-4 divide-y divide-gray-200">
          {jobs?.map((job) => (
            <div
              key={job.id}
              className="flex items-center border justify-between p-6 rounded-lg"
            >
              <div>
                <span className="text-primary capitalize font-bold">
                  {job?.category}
                </span>
                <h3 className="font-bold text-lg capitalize">{job?.title}</h3>
                <div className="flex items-center gap-3 mt-2">
                  <span className="bg-blue-100 text-primary rounded-full px-3 py-1 capitalize">
                    {job?.type}
                  </span>
                  <span className="text-slate-600  flex gap-1 items-center capitalize">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>{" "}
                    {job?.location}
                  </span>
                </div>
              </div>
              <div>
                <Link to={`/job/${job.id}`}>
                  <button className="bg-primary text-white font-medium px-4 py-2 rounded-full flex gap-1 items-center">
                    Job Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End FAQ */}
    </div>
  );
};

export default Careers;
