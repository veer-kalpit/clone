

const CustomSolutionsBanner = () => {
  return (
    <div className="flex justify-between items-center p-6 rounded-lg bg-gradient-to-r from-green-100 via-green-200 to-green-500">
      {/* Left Text Section */}
      <div className="text-lg font-medium text-green-800">
        Are you a large business looking for custom solutions?
      </div>

      {/* Right Button Section */}
      <div>
        <button className="bg-white text-green-800 font-medium py-2 px-4 rounded shadow-md hover:bg-gray-100 transition">
          Talk to sales
        </button>
      </div>
    </div>
  );
};

export default CustomSolutionsBanner;
