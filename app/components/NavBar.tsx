import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="bg-transparent">
    <nav className="flex items-center justify-between flex-wrap">
      <div className="flex items-center flex-shrink-0 text-red-600">
        <img
          className="w-56"
          width="100"
          height="100"
          src="https://res.cloudinary.com/ddyk63iig/image/upload/v1679006908/Tuning-PNG-File_zhsr3j.png"
          alt="icon"
        />
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow flex justify-center  font-bold gap-6">
        <Link
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white text-2xl hover:text-red-500 mr-4"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-white text-2xl hover:text-red-500 mr-4"
          >
            About
          </Link>
          <Link
            href="/team"
            className="block mt-4 lg:inline-block lg:mt-0 text-white text-2xl hover:text-red-500 mr-4"
          >
            Team
          </Link>
          <Link
            href="/contact"
            className="block mt-4 lg:inline-block lg:mt-0 text-white text-2xl hover:text-red-500 mr-4"
          >
            Contact
          </Link>
          <Link
            href="/vehicles"
            className="block mt-4 lg:inline-block lg:mt-0 text-white text-2xl hover:text-red-500 mr-4"
          >
            Vehicles
          </Link>
          <Link
            href="/testimonials"
            className="block mt-4 lg:inline-block lg:mt-0 text-white text-2xl hover:text-red-500 mr-4"
          >
            Testimonials
          </Link>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default NavBar;
