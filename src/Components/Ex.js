import React from "react";

const Ex = () => {
  return (
    <>
      <div>
        <img
          src="https://images.unsplash.com/photo-1582132810136-930d922d0de8?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Private Jet"
          className="w-[1300px] h-[500px] object-cover object-bottom"
        />
      </div>
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-4">
          Our Experience in the Aviation Market
        </h2>
        <p className="text-gray-700 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ipsum
          vehicula, ullamcorper est a, vestibulum purus. Proin facilisis finibus
          enim, a egestas turpis sollicitudin ac.
        </p>

        <h2 className="text-3xl font-bold mb-4">Customer Satisfaction</h2>
        <p className="text-gray-700 mb-6">
          We are dedicated to providing top-notch products and services to our
          customers. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla vel odio sed nisl consectetur feugiat.
        </p>

        <h2 className="text-3xl font-bold mb-4">Years of Experience</h2>
        <p className="text-gray-700 mb-6">
          With a combined experience of XX years in the aviation market, we have
          the expertise to deliver exceptional products and services tailored to
          your needs.
        </p>

        <h2 className="text-3xl font-bold mb-4">Our Jets</h2>
        <div className="flex flex-wrap justify-center mb-8">
          <div className="max-w-xs mx-4 my-4 bg-white rounded-lg shadow-lg">
            <img
              src="/jet1.jpg"
              alt="Jet Model 1"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Jet Model 1</h2>
              <p className="text-gray-700 mb-4">Description of Jet Model 1.</p>
              <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700">
                Book Now
              </button>
            </div>
          </div>
          <div className="max-w-xs mx-4 my-4 bg-white rounded-lg shadow-lg">
            <img
              src="/jet2.jpg"
              alt="Jet Model 2"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Jet Model 2</h2>
              <p className="text-gray-700 mb-4">Description of Jet Model 2.</p>
              <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ex;
