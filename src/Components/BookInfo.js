import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function BookInfo() {
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  const handleDepartureDateChange = (date) => {
    setDepartureDate(date);
  };

  const handleReturnDateChange = (date) => {
    setReturnDate(date);
  };

  return (
    <section className="bg-white  ">
      <div className="flex justify-center min-h-screen">
        <div className="flex items-center w-full max-w-3xl  mx-auto lg:px- lg:w-3/4">
          <div className="w-full">
            <div className="items-center justify-center flex ">
              <h1 className="text-3xl font-bold  tracking-normal text-gray-800 capitalize ">
                Request A Quote For A{" "}
                <span className="relative whitespace-nowrap text-teal-500">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 418 42"
                    className="absolute top-2/3 left-0 h-[0.58em] w-full fill-teal-300/70"
                    preserveAspectRatio="none"
                  >
                    <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                  </svg>
                  <span className="relative">Charter</span>
                </span>{" "}
                Jet Rental.
              </h1>
            </div>

            <p className="mt-12 text-gray-500">
              Please fill out the form below and a Charter Jet One
              representative will follow up shortly regarding your custom
              private jet charter request.
            </p>

            <form className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm text-gray-600">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Your Text Here.."
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600">
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Your Text Here.."
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600">
                  Phone number
                </label>
                <input
                  type="text"
                  placeholder="Your Text Here.."
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="Your Text Here.."
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label class="block mb-2 text-sm text-gray-600 ">Country</label>
                <select
                  id="country"
                  name="country"
                  autocomplete="country"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40"
                >
                  <option className="text-gray-700">USA</option>
                  <option className="text-gray-700">Canada</option>
                  <option className="text-gray-700">Mexico</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600">
                  Number of Passengers
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40"
                >
                  {[...Array(20).keys()].map((i) => (
                    <option key={i + 1} className="text-gray-700">
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex">
                <div className="w-1/2 pr-2">
                  <label className="block mb-2 text-sm text-gray-600">
                    Departure Date
                  </label>
                  <DatePicker
                    selected={departureDate}
                    onChange={handleDepartureDateChange}
                    placeholderText="Select Date"
                    dateFormat="MM/dd/yyyy"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="w-1/2 pl-2">
                  <label className="block mb-2 text-sm text-gray-600">
                    Return Date
                  </label>
                  <DatePicker
                    selected={returnDate}
                    onChange={handleReturnDateChange}
                    placeholderText="Select Date"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-teal-400 focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-4 text-sm text-gray-600 ">
                  Departure City
                </label>
                <input
                  type="departure city"
                  placeholder="Your Text Here.."
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600">
                  Arrival City
                </label>
                <input
                  type="arrival city*"
                  placeholder="Your Text Here.."
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm text-gray-600">
                  Preferred Aircraft
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40"
                >
                  <option className="text-gray-700">Very Light Jets</option>
                  <option className="text-gray-700">Small Light Jets</option>
                  <option className="text-gray-700">Super Light Jets</option>
                  <option className="text-gray-700">Midsize Cabin Jets</option>
                  <option className="text-gray-700">
                    Super Midsize Cabin Jets
                  </option>
                  <option className="text-gray-700">heavy Jets</option>
                  <option className="text-gray-700">
                    Executive Liners/Bizliners
                  </option>
                  <option className="text-gray-700">Business Jets</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600">
                  Have You Flown Privately Before?
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40"
                >
                  <option className="text-gray-700">Yes</option>
                  <option className="text-gray-700">No</option>
                </select>
              </div>

              <button
                type="button"
                class="text-white mt-6 my-2 py-3 items-center justify-center bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-base   focus:outline-none dark:focus:ring-teal-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookInfo;
