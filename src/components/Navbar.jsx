/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../src/assets/Frame 18556.png";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY >= 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);
  console.log(isScrolled);
  return (
    <nav
      className={`bg-white border-b-2 w-full gap-5  pb-4 border-[rgba(9,9,9,0.1)] roboto-regular mx-4 my-4 flex justify-between  items-center xl:px-10`}
    >
      <Link to={"/"} className="flex items-center ">
        <img
          src={logo}
          alt=""
          className=" w-[32.06px] h-[32.96px] xl:w-[28.18px] xl:h-[28.81px]"
        />
        <h1 className="hidden xl:flex md:flex roboto-black  ">HARVESTGROVE</h1>
      </Link>

      <div className="  hidden lg:flex lg:bg-transparent     lg:pr-[200px]  p-2 text-[#000000B2] ">
        <div className="flex justify-between xl:ml-12 gap-10">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-2  border-white flex items-center  gap-2"
                : " flex items-center  gap-2"
            }
            to={"/explore"}
          >
            {" "}
            <p>Explore</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-2  border-white flex items-center  gap-2"
                : " flex items-center  gap-2"
            }
            to={"/services"}
          >
            {" "}
            <p>Services</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-2  border-white flex items-center  gap-2"
                : " flex items-center  gap-2"
            }
            to={"/individuals"}
          >
            {" "}
            <p>Individuals</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-2  border-white flex items-center  gap-2"
                : " flex items-center  gap-2"
            }
            to={"/business"}
          >
            {" "}
            <p>Business</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-2  border-white flex items-center  gap-2"
                : " flex items-center  gap-2"
            }
            to={"/blog"}
          >
            {" "}
            <p>Blog</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-2  border-black flex items-center  gap-2"
                : " flex items-center  gap-2"
            }
            to={"/faq"}
          >
            {" "}
            <p>FAQs</p>
          </NavLink>
        </div>
      </div>

      <div className={``}>
        <span
          className={`text-white bg-slate-800 relative xl:hidden z-40
            ${
              isScrolled
                ? 'fixed bg-gray-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'
                : ''
            }`}
          onClick={() => setShow((prev) => !prev)}
        >
          {show ? (
            <img
              src="https://res.cloudinary.com/demmasgzp/image/upload/v1720177082/HarvestGrove/Group_6088_aqnmqf.png"
              alt=""
              className="h-14 w-14 text-3xl right-5 top-3 fixed z-30"
            />
          ) : (
            <img
              src="https://res.cloudinary.com/demmasgzp/image/upload/v1720177082/HarvestGrove/Group_6088_aqnmqf.png"
              alt=""
              className="h-14 w-14 text-3xl right-5 top-4 fixed z-30"
            />
          )}
        </span>
        {show && (
          <div className="  z-30  w-[75%] text-[#000000B2] border-gray-100 border-[2px]  bg-white  backdrop-blur-md   gap-7 flex flex-col barlow-condensed-regular items-start right-0 text-base  pl-5 pr-20 top-0 pt-20 h-screen absolute ">
            <NavLink className="flex items-center gap-2" to={"explore"}>
              <p>Explore</p>
            </NavLink>
            <NavLink className="flex items-center gap-2" to={"/services"}>
              <p>Services</p>
            </NavLink>
            <NavLink className="flex items-center gap-2" to={"/individuals"}>
              <p>Individuals</p>
            </NavLink>
            <NavLink className="flex items-center gap-2" to={"business"}>
              <p>Business</p>
            </NavLink>
            <NavLink className="flex items-center gap-2" to={"/blog"}>
              <p>Blog</p>
            </NavLink>
            <NavLink className="flex items-center gap-2" to={"/faq"}>
              <p>FAQs</p>
            </NavLink>
          </div>
        )}
      </div>
      <div className="flex md:mr-24 mr-24">
        <Link className="flex items-center justify-between ">
          <p className="border-[1px] p-[14px] px-[28px] border-black rounded-[100px]">
            Contact us
          </p>
          <img
            src="https://res.cloudinary.com/demmasgzp/image/upload/v1720179206/HarvestGrove/Line_15_1_pp2ejo.png"
            alt=""
            className="h-12 border-[1px] rounded-full border-black p-3"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
