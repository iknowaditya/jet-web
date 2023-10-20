import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Third() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("thirdSection");
      const elementPosition = element.getBoundingClientRect().top;

      if (elementPosition < window.innerHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.section
      id="thirdSection"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 1 }}
      className="overflow-hidden bg-white py-8 sm:py-16"
    >
      <section className="overflow-hidden bg-white ">
        <div>
          <h2 className="text-center text-4xl md:text-2xl lg:text-4xl font-bold  tracking-tight text-gray-900 mb-16 py-12 sm:text-4xl">
            The Pinnacle of{" "}
            <span className="relative whitespace-nowrap text-teal-500">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-teal-300/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
              </svg>
              <span className="relative">Private</span>
            </span>{" "}
            Jet Travel
          </h2>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <motion.div
              className="lg:pr-8 lg:pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 1 }}
            >
              <div className="text-start">
                <h1 className="text-2xl font-bold mb-4 tracking-wider  leading-relaxed">
                  SUITABLE FOR BUSINESS
                </h1>
                <p className="text-base tracking-tighter text-justify leading-relaxed text-gray-700">
                  Since time is becoming a more valuable resource, renting an
                  aircraft makes financial sense. With discretion and privacy
                  assured, it's a setting that encourages carrying on with
                  business, holding meetings while in flight, or getting some
                  well-deserved rest. Chartering is an exclusive option for
                  people who travel regularly for work. One of the numerous
                  advantages of chartering is that it cuts down on travel time,
                  reduces stress, and boosts productivity. From a private jet
                  with space for up to eight passengers to a corporate jet with
                  12 or more seats, our experts can assist you in finding the
                  ideal aircraft for your needs. Additionally, we provide
                  all-inclusive luxury jet charters so you may fly in comfort
                  and style.
                </p>
              </div>
            </motion.div>
            <motion.img
              src="https://images.pexels.com/photos/2245287/pexels-photo-2245287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Product screenshot"
              className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-full md:-ml-4 lg:-ml-0"
              width="2432"
              height="1442"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-32">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <motion.img
              src="https://images.pexels.com/photos/2245287/pexels-photo-2245287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Product screenshot"
              className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-full md:-ml-4 lg:-ml-0"
              width="2432"
              height="1442"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 1 }}
            />
            <motion.div
              className="lg:pr-8 lg:pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 1 }}
            >
              <div className="text-start">
                <h1 className="text-2xl font-bold mb-4 tracking-wider  leading-relaxed">
                  DINING IN PRIVACY
                </h1>
                <p className="text-base tracking-normal text-justify leading-relaxed text-gray-700">
                  The highest table you will ever sit at is 40,000 feet, which
                  is higher than Mount Everest. Private dining in the air has
                  been revolutionized by Jetlify By learning about the science
                  and art of dining, Guests may enjoy their time together on
                  board with the perfect flavor, no matter the occasion. We have
                  developed a reputation for providing exceptional customer
                  service. We can satisfy the most discriminating preferences by
                  offering special products from carefully chosen partners
                  because of our in-depth knowledge of the luxury market and our
                  comprehensive comprehension of our client's needs. With
                  Jetlify, set out on a handpicked journey across the best
                  experiences the globe has to offer.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-32">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <motion.div
              className="lg:pr-8 lg:pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 1 }}
            >
              <div className="text-start">
                <h1 className="text-2xl font-bold mb-4 tracking-wider  leading-relaxed">
                  GLOBALLY AVAILABLE
                </h1>
                <p className="text-base tracking-tighter text-justify leading-relaxed text-gray-700">
                  The availability of private jets varies by region and airport.
                  Major cities and airports in developed countries generally
                  have a greater number of private jet operators and options. In
                  remote or less-developed areas, the availability may be
                  limited. Booking a private jet well in advance is usually the
                  best way to ensure availability. Popular events, holidays, and
                  peak travel seasons can lead to increased demand for private
                  jet charters. The availability of specific types of private
                  jets can also vary. Larger and more luxurious jets, such as
                  Gulfstream or Bombardier models, may be available in fewer
                  numbers than smaller aircraft like Cessna or Beechcraft.
                </p>
              </div>
            </motion.div>
            <motion.img
              src="https://images.pexels.com/photos/2245287/pexels-photo-2245287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Product screenshot"
              className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-full md:-ml-4 lg:-ml-0"
              width="2432"
              height="1442"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-32">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <motion.img
              src="https://images.pexels.com/photos/2245287/pexels-photo-2245287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Product screenshot"
              className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-full md:-ml-4 lg:-ml-0"
              width="2432"
              height="1442"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 1 }}
            />
            <motion.div
              className="lg:pr-8 lg:pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 1 }}
            >
              <div className="text-start">
                <h1 className="text-2xl font-bold mb-4 tracking-wider  leading-relaxed">
                  Redefining Luxury Travel
                </h1>
                <p className="text-base tracking-tighter text-justify leading-relaxed text-gray-700">
                  Private jet travel for leisure is not just a mode of
                  transportation. it's a statement of luxury and sophistication.
                  It's an experience that transcends the boundaries of
                  traditional travel and provides a level of opulence that is
                  truly unrivaled. For those who demand the best and aspire to
                  explore the world with comfort and style, private jet travel
                  is the pinnacle of leisure travel In conclusion, Private jet
                  travel for leisure is an experience that redefines luxury
                  travel. Them the moment you step into the private terminal to
                  the time you land at your destination; every aspect of the
                  journey is meticulously tailored to meet your desires and
                  expectations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.section>
  );
}

export default Third;

/* 
add framer motion on this card section 


import React from "react";
import { motion } from "framer-motion";

function Third() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="overflow-hidden bg-white py-8 sm:py-16"
    >
      <section className="overflow-hidden bg-white ">
        <div>
          <h2 className="text-center text-4xl md:text-2xl lg:text-4xl font-bold  tracking-tight text-gray-900 mb-16 py-12 sm:text-4xl">
            The Pinnacle of{" "}
            <span className="relative whitespace-nowrap text-teal-500">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-teal-300/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
              </svg>
              <span className="relative">Private</span>
            </span>{" "}
            Jet Travel
          </h2>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">404</h1>
                <p className="text-lg leading-relaxed text-gray-700">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
            <img
              src="https://images.pexels.com/photos/2245287/pexels-photo-2245287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Product screenshot"
              className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-full md:-ml-4 lg:-ml-0"
              width="2432"
              height="1442"
            />
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-32">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <img
              src="https://img.freepik.com/free-photo/private-luxury-jet-airport-terminal_657883-288.jpg?w=1060&t=st=1697664276~exp=1697664876~hmac=aca276ce23aec4dc86e65708d308e5bbe08a24b15b4ad68c0c6836f79a254ca4"
              alt="Product screenshot"
              className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-full md:-mr-4 lg:-mr-0"
              width="2432"
              height="1442"
            />
            <div className="lg:pt-4">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">404</h1>
                <p className="text-lg leading-relaxed text-gray-700">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-32">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">404</h1>
                <p className="text-lg leading-relaxed text-gray-700">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
            <img
              src="https://images.pexels.com/photos/14983522/pexels-photo-14983522/free-photo-of-black-private-jet-in-the-airport.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Product screenshot"
              className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-full md:-ml-4 lg:-ml-0"
              width="2432"
              height="1442"
            />
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-32">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <img
              src="https://images.pexels.com/photos/9080928/pexels-photo-9080928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Product screenshot"
              className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-full md:-mr-4 lg:-mr-0"
              width="2432"
              height="1442"
            />
            <div className="lg:pt-4">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">404</h1>
                <p className="text-lg leading-relaxed text-gray-700">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.section>
  );
}

export default Third;

*/
