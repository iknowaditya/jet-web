import React from "react";
import airbg from "../Assets/airbg.jpg";

function Hero() {
  return (
    <section
      className="flex flex-col h-screen items-center "
      style={{
        backgroundImage: `url(${airbg})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div class="relative px-6 lg:px-8">
        <div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-80 sm:pb-40 ">
          <div>
            <div>
              <h1 class="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl dark:text-gray-100">
                Title of your website
              </h1>
              <p class="mt-6 text-lg leading-8 text-gray-600 sm:text-center dark:text-gray-200">
                Long description of your website, Long description of your
                website, Long description of your website, Long description of
                your website, Long description of your website,
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
