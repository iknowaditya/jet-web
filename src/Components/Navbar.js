import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import logo from "../Assets/clogo.png";
import call from "../Assets/call.svg";
import ham from "../Assets/ham.svg";
import { NAV_LINKS } from "../Constants";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <motion.nav
      className="absolute py-8 w-full"
      initial={{ opacity: 0, y: -20 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Animation state when component mounts
      transition={{ duration: 0.5 }} // Transition duration
    >
      <div className="flex items-center justify-between max-w-screen-lg mx-auto px-6 lg:px-20 3xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: -20 }} // Initial animation state
          animate={{ opacity: 1, y: 0 }} // Animation state when component mounts
          transition={{ duration: 0.5, delay: 0.2 }} // Transition duration and delay
        >
          <Link to="/">
            {" "}
            <img src={logo} alt="logo" width={90} height={35} />
          </Link>
        </motion.div>
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <motion.a
              href={link.href}
              key={link.key}
              whileHover={{ scale: [1, 1.1] }}
              whileTap={{ scale: 0.95 }}
              className="text-[16px] font-[400] text-white flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to={link.href}>{link.label}</Link>
            </motion.a>
          ))}
          <div className="flex items-center gap-2 justify-center">
            <img src={call} alt="logo" width={25} height={25} />
            <h1 className="text-white items-center justify-center">
              +1 -(401) 405-4653
            </h1>
          </div>
        </ul>
        <motion.div
          className="lg:flex lg:items-center lg:justify-center hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link to="/booknow">
            <button
              type="button"
              className="py-2.5 px-6 mr-2 mb-2 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-lg  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1   dark:bg-teal-600 dark:text-gray-200  dark:hover:text-white dark:hover:bg-teal-700"
            >
              Book Now
            </button>
          </Link>
        </motion.div>
        <motion.img
          src={ham}
          alt="icon"
          width={32}
          height={32}
          className="lg:hidden cursor-pointer inline-block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        />
      </div>
    </motion.nav>
  );
}

export default Navbar;
