import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
const Navbar = ({ activeLink, handleLinkClick }) => {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
        <img src="/assets/logo.svg" alt="logo" />
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
          <Link
            to="aboutUs"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            About Us
          </Link>

          <Link
            to="teacher"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Teachers
          </Link>

          <Link
            to="student"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Students
          </Link>

          <Link
            to="careers"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Career
          </Link>

          <Link
            to="values"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Values
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Contact
          </Link>
        </div>
        <button className="btn bg-white text-[#7270dd] border-none hover:bg-[#7270dd] hover:text-white capitalize rounded-full">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
