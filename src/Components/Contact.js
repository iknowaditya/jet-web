import React from "react";
import logo from "../Assets/logo-black.png";
import navicon from "../Assets/navicon.svg";
import Callicon from "../Assets/callicon.svg";
import mail from "../Assets/mail.svg";
import time from "../Assets/time.svg";

function Contact() {
  return (
    <div className="flex bg-neutral-200 rounded-3xl py-8 my-8 max-w-6xl mx-auto">
      {/* Left Side: Company Information */}
      <div className="flex-1    flex justify-center">
        <div className="text-center max-w-xs  rounded-3xl  justify-center flex flex-col items-center">
          <div className="   flex justify-center items-start">
            <img
              src={logo}
              alt="logo"
              width="150"
              height="50"
              className=" mb-6"
            />
          </div>
          <div className="mb-6 flex flex-col items-center">
            <img
              src={navicon}
              alt="logo"
              width="30"
              height="30"
              className="mb-2"
            />
            <p className="text-base text-neutral-600">304 S Jones Blvd,</p>
            <p className="text-base text-neutral-600">Suite #302,</p>
            <p className="text-base text-neutral-600">Las Vegas, NV, 89107</p>
          </div>
          <div className="mb-6 flex flex-col items-center">
            <img
              src={Callicon}
              alt="logo"
              width="30"
              height="30"
              className="mb-2"
            />
            <p className="text-base text-neutral-600">
              Phone: +1 -(401) 405-4653
            </p>
            <p className="text-base text-neutral-600">Fax: (123) 456-7890</p>
          </div>
          <div className="mb-6 flex flex-col items-center">
            <img
              src={mail}
              alt="logo"
              width="30"
              height="30"
              className="mb-2"
            />
            <p className="text-base text-neutral-600">
              care@cheapairticketusa.com
            </p>
          </div>
          <div className=" flex flex-col items-center">
            <img
              src={time}
              alt="logo"
              width="30"
              height="30"
              className="mb-2"
            />
            <p className="text-base text-neutral-600">
              Mon- Sun: 10:00 AM - 20:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="flex-1 p-4  flex justify-center px-12">
        <div className="w-full max-w-md bg-white border border-neutral-800 rounded-3xl">
          <div className="py-12 ">
            <div className="text-center text-4xl font-bold text-neutral-800 mb-8">
              Contact Us
            </div>
            <div className="p-4 md:p-8">
              <div className="flex flex-col mb-4 md:flex-row md:gap-4">
                <input
                  type="text"
                  name="name"
                  className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 sm:text-sm"
                  placeholder="First Name *"
                />
                <input
                  type="text"
                  name="email"
                  className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 sm:text-sm"
                  placeholder="Last Name *"
                />
              </div>
              <div className="flex flex-col mb-4 md:flex-row md:gap-4">
                <input
                  type="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 sm:text-sm"
                  placeholder="Email *"
                />
                <input
                  type="tel"
                  name="phone"
                  className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 sm:text-sm"
                  placeholder="Phone *"
                />
              </div>

              <div className="mb-4">
                <textarea
                  name="textarea"
                  id="text"
                  cols="30"
                  rows="6"
                  className="w-full resize-none rounded-md border border-slate-300 p-3 font-semibold text-gray-300 placeholder-slate-400"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="cursor-pointer rounded-lg bg-teal-700 hover:bg-teal-800 px-8 py-3 text-base font-bold text-white"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
