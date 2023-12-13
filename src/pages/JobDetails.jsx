import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState();
  const fetchJobdetails = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/jobs/${id}`
      );
      const result = await response.json();
      const status = await response.status;
      if (status === 200) {
        setJob(result);
      } else {
        toast.error("Something went wrong", { id: "1" });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", { id: "1" });
    }
  };

  useEffect(() => {
    fetchJobdetails();
  }, []);
  return (
    <div>
      <div className="max-w-4xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl">
          {/* Content */}
          {job && (
            <div className="space-y-5 md:space-y-8">
              <div className="space-y-3">
                <h2 className="text-2xl font-bold md:text-3xl capitalize">
                  {job?.title}
                </h2>
                <div className="flex items-center text-lg space-x-2">
                  <h1 className="font-medium">Location:</h1>
                  <p className="text-primary font-semibold capitalize">
                    {job?.location}
                  </p>
                </div>
                <div className="flex items-center text-lg space-x-2">
                  <h1 className="font-medium">Job Type:</h1>
                  <p className="text-primary font-semibold capitalize">
                    {job?.type}
                  </p>
                </div>
                <h3 className="text-xl font-semibold">Description</h3>
                <div
                  dangerouslySetInnerHTML={{ __html: job?.description }}
                  className="prose prose-lg max-w-4xl"
                ></div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Requirements</h3>
                <div
                  dangerouslySetInnerHTML={{ __html: job?.requirements }}
                  className="prose prose-lg max-w-4xl"
                ></div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Responsibilities</h3>
                <div
                  dangerouslySetInnerHTML={{ __html: job?.responsibilities }}
                  className="prose prose-lg max-w-4xl"
                ></div>
              </div>
              <div className="mt-4">
                <Link to={`/job-apply`}>
                  <button
                    type="button"
                    className="bg-primary px-4 py-2 text-white rounded-full"
                  >
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* End Blog Article */}
    </div>
  );
};

export default JobDetails;
