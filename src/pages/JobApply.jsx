import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const JobApply = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      toast.loading("Submitting, Please wait...", { id: "1" });
      var { name, phone, email, resume, job, cover } = e.target;
      console.log(resume.files[0]);
      const data = new FormData();
      data.append("full_name", name.value);
      data.append("phone_number", phone.value);
      data.append("email", email.value);
      data.append("resume", resume?.files[0]);
      data.append("job", job.value);
      data.append("cover_letter", cover.value);
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/job-apply/`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const result = await response.data;
      const status = await response.status;
      if (status === 200) {
        toast.success("Your application has been submitted", { id: "1" });
      } else {
        toast.error("Something went wrong", { id: "1" });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", { id: "1" });
    }
    name.value = "";
    email.value = "";
    phone.value = "";
    resume.value = "";
    cover.value = "";
  };
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            Job Application
          </h1>
        </div>
        <div className="mt-12">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            method="POST"
            encType="multipart/form-data"
          >
            <div className="grid gap-4 lg:gap-6">
              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 text-sm flex text-gray-700 font-medium"
                  >
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="py-3 px-4 border block w-full border-gray-200 rounded-lg text-sm outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="flex mb-2 text-sm text-gray-700 font-medium"
                  >
                    Phone Number<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    name="phone"
                    id="phone"
                    required
                    className="py-3 px-4 border block w-full border-gray-200 rounded-lg text-sm outline-none "
                  />
                </div>
              </div>
              {/* End Grid */}
              <div>
                <label
                  htmlFor="email"
                  className="flex mb-2 text-sm text-gray-700 font-medium"
                >
                  Email Address<span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  autoComplete="email"
                  className="py-3 px-4 border block w-full border-gray-200 rounded-lg text-sm outline-none "
                />
              </div>
              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label
                    htmlFor="resume"
                    className="flex mb-2 text-sm text-gray-700 font-medium"
                  >
                    Resume<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="file"
                    name="resume"
                    id="resume"
                    accept=".docx, .doc, .pdf, .txt"
                    required
                    className="py-1 px-4 block w-full border bg-blue-50  border-gray-200 rounded-lg text-sm outline-none file:bg-blue-500  file:text-white file:mr-2 file:rounded-full file:border-0 file:px-4 file:py-2"
                  />
                </div>
                <div>
                  <label
                    htmlFor="job"
                    className="flex mb-2 text-sm text-gray-700 font-medium"
                  >
                    Applying for<span className="text-red-600">*</span>
                  </label>
                  <select
                    type="text"
                    name="job"
                    id="job"
                    required
                    className="py-3 px-4 border block w-full border-gray-200 rounded-lg text-sm outline-none"
                  >
                    {jobs ? (
                      jobs?.map((job) => (
                        <option value={job?.id} className="capitalize">
                          {job.title}
                        </option>
                      ))
                    ) : (
                      <option value="">Loading...</option>
                    )}
                  </select>
                </div>
              </div>
              {/* End Grid */}
              <div>
                <label
                  htmlFor="cover"
                  className="block mb-2 text-sm text-gray-700 font-medium"
                >
                  Cover Letter (Optional)
                </label>
                <textarea
                  id="cover"
                  name="cover"
                  rows={4}
                  className="py-3 px-4 block border w-full border-gray-200 rounded-lg text-sm outline-none"
                  defaultValue={""}
                />
              </div>
            </div>
            {/* End Grid */}

            <div className="mt-6 grid">
              <button
                type="submit"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary text-white"
              >
                Submit
              </button>
            </div>
          </form>
          {/* End Form */}
        </div>
      </div>
    </div>
  );
};

export default JobApply;
