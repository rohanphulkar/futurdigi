import axios from "axios";
import toast from "react-hot-toast";
import { FaLinkedinIn } from "react-icons/fa6";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading("Submitting...", { id: "1" });
    try {
      const { name, email, phone, service, message } = e.target;
      const response = await axios.post(
        "https://futurdigi-mail.vercel.app/",
        {
          name: name.value,
          email: email.value,
          phone: phone.value,
          serviceType: service.value,
          message: message.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.data;
      const status = await response.status;
      if (status === 200) {
        toast.success("Thank you. We will get back to you.");
      } else {
        toast.error("Something went wrong", { id: "1" });
      }
    } catch (error) {
      console.log(error);
      toast.error("Internal server error", { id: "1" });
    }
  };
  return (
    <div>
      <div
        className="relative bg-white"
        data-aos="fade-up"
        data-aos-duration="1000"
        id="contact"
      >
        <div className="relative mx-auto max-w-[85rem] lg:grid lg:grid-cols-5">
          <div className="py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="mx-auto max-w-lg">
              <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
                Get In Touch
              </h2>
              <p className="mt-3 text-lg leading-6 text-gray-600">
                For inquiries, collaborations, or questions, feel free to reach
                out. We're here to assist and eager to explore how FuturDigi can
                enhance your digital endeavors.
              </p>
              <dl className="mt-8 text-base text-gray-500">
                <div className="mt-6 text-prime text-xl">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    {/* Heroicon name: outline/envelope */}
                    <svg
                      className="h-8 w-8 flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    <a href="mailto:hello@futurdigi.com" className="ml-3">
                      hello@futurdigi.com
                    </a>
                  </dd>
                </div>
                <div className="mt-5 text-prime text-xl">
                  <dt className="sr-only">Linkedin</dt>
                  <dd className="flex items-center">
                    {/* Heroicon name: outline/phone */}
                    <FaLinkedinIn fontSize={28} />
                    <a
                      href="https://www.linkedin.com/company/futurdigi"
                      className="ml-3"
                    >
                      @futurdigi
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="p-4 py-6 rounded-lg bg-gray-50 md:p-8">
              <form onSubmit={handleSubmit} method="POST">
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-gray-600">
                      Name<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Name"
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:outline-none"
                    />
                  </div>
                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-gray-600">
                      Phone Number<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      required
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:outline-none"
                    />
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-4">
                  <div className="">
                    <label className="block mb-2 text-sm text-gray-600">
                      Email address<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email Address"
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:outline-none"
                    />
                  </div>
                  <div className="">
                    <label className="block mb-2 text-sm text-gray-600">
                      What service you want?{" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <select
                      type="text"
                      name="service"
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:outline-none"
                    >
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile App Development">
                        Mobile App Development
                      </option>
                      <option value="Digital Marketing">
                        Digital Marketing
                      </option>
                      <option value="Graphic Designing">
                        Graphic Designing
                      </option>
                    </select>
                  </div>
                </div>
                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm text-gray-600">
                    Message<span className="text-red-600">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 focus:outline-none"
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-prime rounded-lg  focus:outline-none"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
