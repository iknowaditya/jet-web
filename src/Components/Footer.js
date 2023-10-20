import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { RiTwitterXFill } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";
import { BiLogoInstagram } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer class="flex flex-col space-y-10 justify-center bg-neutral-900">
      <nav class="flex justify-center flex-wrap gap-6 text-neutral-300 font-medium mt-6 py-6">
        <a class="hover:text-neutral-500 " href="/">
          Fleet
        </a>
        <a class="hover:text-neutral-500" href="/">
          Experience
        </a>
        <a class="hover:text-neutral-500" href="/">
          Why Jetlifly
        </a>
        <a class="hover:text-neutral-500" href="/">
          Contact Us
        </a>
      </nav>

      <div class="flex justify-center space-x-5">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrFacebookOption className="text-neutral-400 text-4xl hover:text-neutral-500 " />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiTwitterXFill className="text-neutral-400 text-3xl mt-1 hover:text-neutral-500 " />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin className="text-neutral-400 text-4xl hover:text-neutral-500 " />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoInstagram className="text-neutral-400 text-4xl hover:text-neutral-500 " />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-neutral-400 text-4xl hover:text-neutral-500 " />
        </a>
      </div>
      <p class="text-center text-gray-600 font-medium ">
        &copy; 2023 JetliFly Ltd. All rights reservered.
      </p>
    </footer>
  );
}

export default Footer;
