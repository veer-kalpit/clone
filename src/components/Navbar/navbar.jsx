import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <main className="shadow-lg bg-white/70 backdrop-blur-sm">
        <div className="container">
          <nav className="flex justify-center items-center ">
            <a href="/" className="text-gray-800 text-3xl font-bold mr-5">
              Logo
            </a>

            {/* Hamburger Icon for Mobile */}
            <div className="sm:hidden">
              <button
                onClick={handleMenuToggle}
                className="text-gray-700 focus:outline-none"
              >
                {/* Icon for Hamburger Menu */}
                {isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:block">
              <ul className="flex font-semibold justify-center items-center gap-6">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-gray-900 px-4 py-4 inline-block select-none"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-gray-900 px-4 py-4 inline-block select-none"
                  >
                    About
                  </a>
                </li>
                {/* Contact with Dropdown on Hover */}
                <li className="relative group">
                  <a
                    href="#"
                    className="text-gray-700 hover:text-gray-900 px-4 py-4 inline-block select-none"
                  >
                    Contact
                  </a>
                  {/* Dropdown menu */}
                  <ul className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-4 transition-all duration-200 ease-in-out">
                    <li>
                      <a
                        href="#email"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                      >
                        Email Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#phone"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                      >
                        Call Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#location"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                      >
                        Find Us
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-red-500 hover:text-gray-900 hover:bg-red-500 px-4 py-2 border border-gray-700 rounded-md inline-block select-none transition-all duration-200"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-red-500 hover:text-gray-900 hover:bg-red-500 px-4 py-2 border border-gray-700 rounded-md inline-block select-none transition-all duration-200"
                  >
                    Sign In
                  </a>
                </li>
              </ul>
            </div>

            {/* Mobile Menu */}
            <div
              className={`sm:hidden ${
                isMenuOpen ? "block" : "hidden"
              } absolute top-16 left-0 w-full bg-white shadow-lg`}
            >
              <ul className="flex flex-col font-semibold justify-center items-center gap-4 p-4">
                <li>
                  <a href="/" className="text-gray-700 hover:text-gray-900">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    About
                  </a>
                </li>
                <li className="relative group">
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Contact
                  </a>
                  {/* Dropdown menu */}
                  <ul className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-4 transition-all duration-200 ease-in-out">
                    <li>
                      <a
                        href="#email"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                      >
                        Email Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#phone"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                      >
                        Call Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#location"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                      >
                        Find Us
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </main>
    </>
  );
};

export default Navbar;
