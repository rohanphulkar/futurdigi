import React from "react";
import toast from "react-hot-toast";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";
const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      toast.loading("Processing, Please wait...", { id: "1" });
      toast.loading("Processing, Please Wait...", { id: "1" });
      var { name, phone, email, message } = e.target;
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/send-email/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name.value,
            email: email.value,
            phone: phone.value,
            message: message.value,
          }),
        }
      );
      const status = await response.status;
      if (status === 200) {
        toast.success("Your query has been submitted.", { id: "1" });
      } else {
        toast.error("Something went wrong.", { id: "1" });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.", { id: "1" });
    }
  };
  return (
    <div
      id="contact"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="false"
    >
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl lg:max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="mt-4 text-2xl font-bold text-gray-800 md:text-4xl">
              Contact Us
            </h2>
            <p className="mt-1 text-gray-600">
              We&apos;d love to talk about how we can help you.
            </p>
          </div>
          <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
            {/* Card */}
            <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8">
              <h2 className="mb-8 text-xl font-semibold text-gray-800">
                Fill in the form
              </h2>
              <form method="POST" onSubmit={handleSubmit}>
                <div className="grid gap-4">
                  {/* Grid */}

                  <div>
                    <label htmlFor="name" className="sr-only">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:ring-0 outline-none"
                      placeholder="First Name"
                    />
                  </div>

                  {/* End Grid */}
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="py-3 px-4 border block w-full border-gray-200 rounded-md text-smfocus:ring-0 outline-none"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="py-3 px-4 border block w-full border-gray-200 rounded-md text-smfocus:ring-0 outline-none"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="py-3 px-4 border block w-full border-gray-200 rounded-md text-smfocus:ring-0 outline-none resize-none"
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                </div>
                {/* End Grid */}
                <div className="mt-4 grid">
                  <button
                    type="submit"
                    className="inline-flex justify-center items-center gap-x-3 text-center bg-primary border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-0  transition py-3 px-4 "
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
            {/* End Card */}
            <div className="divide-y divide-gray-200">
              {/* Icon Block */}
              <div className="flex gap-x-7 py-6">
                <MdOutlineAlternateEmail fontSize={24} />
                <div>
                  <h3 className="font-semibold text-gray-800">Email Address</h3>

                  <a
                    className="mt-2 inline-flex items-center gap-x-2 text-lg font-semibold text-primary "
                    href="mailto:hello@futurdigi.com"
                  >
                    hello@futurdigi.com
                  </a>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex gap-x-7 py-6">
                <FiInstagram fontSize={24} />
                <div>
                  <h3 className="font-semibold text-gray-800">Instagram</h3>

                  <a
                    className="mt-2 inline-flex items-center gap-x-2 text-lg font-semibold text-primary"
                    href="https://www.instagram.com/futurdigi/"
                    target="_blank"
                  >
                    @futurdigi
                  </a>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className=" flex gap-x-7 py-6">
                <FiLinkedin fontSize={24} />
                <div>
                  <h3 className="font-semibold text-gray-800">Linkedin</h3>

                  <a
                    className="mt-2 inline-flex items-center gap-x-2 text-lg font-semibold text-primary "
                    href="https://www.linkedin.com/company/futurdigi/"
                  >
                    @futurdigi
                  </a>
                </div>
              </div>
              {/* End Icon Block */}
            </div>
          </div>
        </div>
      </div>
      {/* End Contact Us */}
    </div>
  );
};

export default Contact;
