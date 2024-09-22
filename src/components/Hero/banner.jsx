import { useState, useEffect } from "react";
import tshirtBase from "../../assets/img.png"; // Your t-shirt base image
import graphic1 from "../../assets/img1.webp";
import graphic2 from "../../assets/img2.webp";
import graphic3 from "../../assets/img3.webp"; // Add more graphics if needed

const Hero = () => {
  const [currentGraphic, setCurrentGraphic] = useState(graphic1); // Initial graphic

  useEffect(() => {
    const graphics = [graphic1, graphic2, graphic3]; 
    const interval = setInterval(() => {
      setCurrentGraphic((prevGraphic) => {
        // Get the next graphic in the array, cycling through
        const currentIndex = graphics.indexOf(prevGraphic);
        return graphics[(currentIndex + 1) % graphics.length];
      });
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []); // No need to include 'graphics' as dependency

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Section */}
        <div>
          <h1 className="text-4xl font-bold mb-6">
            Create and sell custom products
          </h1>
          <ul className="space-y-4 mb-6">
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✔</span>
              <span>100% Free to use</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✔</span>
              <span>900+ High-Quality Products</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✔</span>
              <span>Largest global print network</span>
            </li>
          </ul>

          <div className="flex space-x-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700">
              Start for free
            </button>
            <button className="border-2 border-gray-500 px-6 py-3 rounded-md hover:bg-gray-100">
              How it works?
            </button>
          </div>

          <p className="text-green-600 mt-4">
            Trusted by over 8M sellers around the world
          </p>
        </div>

        {/* Right Section - T-Shirt and Graphic Overlay */}
        <div className="relative flex justify-center">
          {/* Base T-Shirt Image */}
          <img
            src={tshirtBase}
            alt="tshirt"
            className="rounded-xl object-cover"
          />

          {/* Graphic Overlay */}
          <img
            src={currentGraphic}
            alt="graphic"
            className="absolute top-32" // Adjust the `top` value to position the graphic on the t-shirt
            style={{
              width: "100px", // Adjust width to fit the t-shirt
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
