import { useState } from "react";

const testimonials = [
  {
    name: "Robert A. Voltaire",
    avatar: "https://via.placeholder.com/50",
    storeLink: "/",
    text: "Printify has been an incredible service for us musicians unable to keep large amounts of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!",
  },
  {
    name: "Jane Doe",
    avatar: "https://via.placeholder.com/50",
    storeLink: "/",
    text: "I love using Printify for my e-commerce store. It makes everything so easy and efficient!",
  },
  {
    name: "John Smith",
    avatar: "https://via.placeholder.com/50",
    storeLink: "/",
    text: "The customer service is outstanding, and the integration with my shop was seamless!",
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="flex flex-col items-center text-center py-10">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-4">
        Trusted by over 8M sellers around the world
      </h2>
      <p className="text-gray-600 mb-10 max-w-2xl">
        Whether you are just getting started or run an enterprise-level
        e-commerce business, we do everything we can to ensure a positive
        merchant experience.
      </p>

      {/* Testimonial Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        {/* User Profile */}
        <div className="flex items-center mb-4">
          <img
            src={testimonials[currentIndex].avatar}
            alt="User Avatar"
            className="rounded-full w-12 h-12 mr-4"
          />
          <div className="text-left">
            <h4 className="text-lg font-semibold">
              {testimonials[currentIndex].name}
            </h4>
            <a
              href={testimonials[currentIndex].storeLink}
              className="text-green-600 text-sm"
            >
              Store link
            </a>
            <div className="text-yellow-400 mt-1">
              {/* Render stars here */}
              {[...Array(5)].map((star, index) => (
                <span key={index}>⭐</span>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-700">{testimonials[currentIndex].text}</p>
      </div>

      {/* Pagination Dots */}
      <div className="flex space-x-2 mt-6">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index ? "bg-green-600" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex space-x-4 mt-4">
        <button onClick={handlePrev} className="text-green-600 font-semibold">
          Prev
        </button>
        <button onClick={handleNext} className="text-green-600 font-semibold">
          Next
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
