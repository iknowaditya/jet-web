import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import air1 from "../Assets/air1.jpg";
import air2 from "../Assets/air2.jpeg";
import air3 from "../Assets/air3.jpg";
import air4 from "../Assets/air4.jpg";

const Second = () => {
  const [containerControls, setContainerControls] = useState("hidden");
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setContainerControls("visible");
    }
  }, [inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const items = [
    { image: air1, text: "Very Light Jets " },
    { image: air2, text: "Small Light Jets" },
    { image: air3, text: "Super Light Jets" },
    { image: air4, text: "Midsize Cabin Jets" },
    { image: air4, text: "Super Midsize Cabin Jets" },
    { image: air4, text: "Heavy Jets" },
    { image: air2, text: "Executive Liners/Bizliners" },
    { image: air2, text: "Business jets" },
  ];

  return (
    <div className="py-20 bg-neutral-100">
      <div className="relative z-20 text-center">
        <h2 className="text-xl font-bold lg:text-4xl md:text-2xl font-body tracking-tighter  leading-relaxed">
          What are you looking for
          <span className="text-teal-500 text-5xl">?</span>
        </h2>
        <p className="px-6 pt-3 text-sm text-green-darker lg:text-lg md:text-base md:px-0 font-body tracking-tighter ">
          Check out our offerings for different types of Jets
        </p>
      </div>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={containerControls}
        className="container relative z-40 mx-auto mt-12"
      >
        <div className="flex flex-wrap justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">
          {items.map((item, index) => (
            <motion.a
              key={index}
              variants={itemVariants}
              href="/"
              className="block w-1/2 py-10 text-center border lg:w-1/4 text-base tracking-tighter leading-relaxed"
            >
              <div className="mx-5">
                <motion.img
                  src={item.image}
                  alt=""
                  className="object-cover w-50 h-60 rounded-xl mx-auto hover:scale-95 transition-transform"
                />
              </div>
              <p className="pt-4 text-sm font-medium capitalize font-body lg:text-lg md:text-base md:pt-6">
                {item.text}
              </p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Second;
