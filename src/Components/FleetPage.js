import React from "react";

const FleetPage = () => {
  const fleetData = [
    {
      model: "Jet Model 1",
      description: "Description of Jet Model 1.",
      image: "air1.jpg",
    },
    {
      model: "Jet Model 2",
      description: "Description of Jet Model 2.",
      image: "air2.jpg",
    },
    {
      model: "Jet Model 2",
      description: "Description of Jet Model 2.",
      image: "air2.jpg",
    },
    {
      model: "Jet Model 2",
      description: "Description of Jet Model 2.",
      image: "air2.jpg",
    },
    {
      model: "Jet Model 2",
      description: "Description of Jet Model 2.",
      image: "air2.jpg",
    },
    {
      model: "Jet Model 2",
      description: "Description of Jet Model 2.",
      image: "air2.jpg",
    },
    {
      model: "Jet Model 2",
      description: "Description of Jet Model 2.",
      image: "air2.jpg",
    },
    {
      model: "Jet Model 2",
      description: "Description of Jet Model 2.",
      image: "air2.jpg",
    },
    // Add more fleet items as needed
  ];

  return (
    <div className="flex flex-col items-center ">
      <div>
        <img
          src="https://images.unsplash.com/photo-1646749700385-0a5ea84895e0?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Private Jet"
          className="w-[1300px] h-[500px] object-cover "
        />
      </div>
      <section className="py-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">About Our Aircraft</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
          odio sed nisl consectetur feugiat. Fusce tincidunt neque eu odio
          tincidunt, in auctor urna venenatis.
        </p>
      </section>

      <div className="flex flex-wrap justify-center mb-8">
        {fleetData.map((jet, index) => (
          <div
            key={index}
            className="max-w-xs mx-4 my-4 bg-white rounded-lg shadow-lg"
          >
            <img
              src={jet.image}
              alt={jet.model}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{jet.model}</h2>
              <p className="text-gray-700 mb-4">{jet.description}</p>
              <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <section className="mb-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">About Private Jets</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
          odio sed nisl consectetur feugiat. Fusce tincidunt neque eu odio
          tincidunt, in auctor urna venenatis.
        </p>
      </section>

      <section className="mb-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Costs and Booking</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
          odio sed nisl consectetur feugiat. Fusce tincidunt neque eu odio
          tincidunt, in auctor urna venenatis.
        </p>
      </section>
    </div>
  );
};

export default FleetPage;
