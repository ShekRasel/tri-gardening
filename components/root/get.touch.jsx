import React from "react";
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const GetInTouch = () => {
  return (
    <div className="mt-10 responsive">
      <h1 className="text-primary text-xl md:text-2xl lg:text-3xl font-semibold text-center">
        Get In Touch
      </h1>
      <p className="mt-2 text-primary text-sm text-center">
        Have questions? We are here to help you grow your gardening knowledge
      </p>

      <div className="mt-10 flex flex-col md:flex-row gap-8 justify-evenly">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="flex gap-3">
            <p className="w-8 h-8 flex items-center justify-center rounded-full bg-light-green">
              <FaPhoneAlt className="text-white" />
            </p>
            <div>
              <h1 className="font-semibold text-primary">Phone</h1>
              <p className="text-xs lg:text-sm text-light-green">
                01712-452342
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <p className="w-8 h-8 flex items-center justify-center rounded-full bg-light-green">
              <FaFacebookF className="text-white" />
            </p>
            <div>
              <h1 className="font-semibold text-primary">Facebook Page</h1>
              <p className="text-xs lg:text-sm text-light-green">
                fb.com/gardening.tri
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <p className="w-8 h-8 flex items-center justify-center rounded-full bg-light-green">
              <IoLogoWhatsapp className="text-white" />
            </p>
            <div>
              <h1 className="font-semibold text-primary">Whatsapp</h1>
              <p className="text-xs lg:text-sm text-light-green">
                01712-452342
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <div className="border border-light-gray rounded-2xl p-6 bg-white shadow-sm max-w-md mx-auto text-sm">
            <form className="space-y-4">
              <div className="flex gap-4">
                {/* Name */}
                <div className="flex-1">
                  <label className="block text-sm text-gray-400 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none"
                  />
                </div>

                {/* Email */}
                <div className="flex-1">
                  <label className="block text-sm text-gray-400 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Your Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Type your message..."
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-light-green text-white font-medium py-2 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
