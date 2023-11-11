"use client";
import React, { useState } from "react";
// import { BsChatSquareDots } from 'react-icons/bs';
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaBars,
  FaRenren,
} from "react-icons/fa";
import { HiX } from "react-icons/hi";
import TopBar from "./Topbar";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import useAuthentication from "@/hooks/useAuthentication";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { user, logOut } = useAuthentication();
  const handleNav = () => {
    setNav(!nav);
  };
  const signOutHandler = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error.message);
      });
  };
  //   const navsLinks = ["Home", "Destination", "About", "Login", "Register"];
  const navLinks = [
    {
      pathName: "Home",
      href: "/",
    },
    {
      pathName: "Destination",
      href: "/Destination",
    },
    {
      pathName: "About",
      href: "/About",
    },
    // {
    //   pathName: "Login",
    //   href: "/Login",
    // },
    // {
    //   pathName: "Register",
    //   href: "/Register",
    // },
  ];
  const pathName = usePathname();
  const router = useRouter();
  return (
    <>
      <TopBar />
      <div className="w-full min-h-[60px] flex justify-between items-center absolute z-50 text-white bg-gray-700/80">
        <ul className="hidden sm:flex px-4 gap-4 text-xl">
          <li
            className="flex gap-2 pb-2 items-center cursor-pointer"
            onClick={() => router.push("/")}
          >
            <FaRenren className="text-3xl text-orange-600"></FaRenren>
            <h1 className="text-2xl font-semibold mr-4 sm:text-3xl">Trisog</h1>
          </li>
          {navLinks.map((link) => (
            <li
              key={link.pathName}
              className={`hover:text-orange-600 flex items-center hover:scale-105 ${
                pathName === link.href ? "text-orange-600" : null
              }`}
            >
              <Link href={link.href} className="">
                {link.pathName}
              </Link>
            </li>
          ))}
          {user ? (
            <button
              className="bg-orange-600 px-4 py-2 rounded-md"
              onClick={signOutHandler}
            >
              Logout
            </button>
          ) : (
            <li
              className={`hover:text-orange-600 flex items-center hover:scale-105 ${
                pathName === "/Login" ? "text-orange-600" : null
              }`}
            >
              <Link href="/Login" className="">
                Login
              </Link>
            </li>
          )}
        </ul>
        <div className="flex justify-between">
          <FaFacebookF className="mx-4" />
          <FaTwitter className="mx-4" />
          <FaGooglePlusG className="mx-4" />
          <FaInstagram className="mx-4" />
        </div>
        {/* Hamburger Icon */}
        <div onClick={handleNav} className="sm:hidden z-10">
          {nav ? (
            <HiX size={20} className="mr-4 cursor-pointer" />
          ) : (
            <FaBars size={20} className="mr-4 cursor-pointer" />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          onClick={handleNav}
          className={
            nav
              ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col"
              : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
          }
        >
          <ul className="h-full w-full text-center pt-12 gap-2 flex flex-col items-center">
            <li
              className="flex gap-2 pb-2 items-center my-2 cursor-pointer"
              onClick={() => router.push("/")}
            >
              <FaRenren className="text-3xl text-orange-600"></FaRenren>
              <h1 className="text-2xl font-semibold mr-4 sm:text-3xl">
                Trisog
              </h1>
            </li>
            {navLinks.map((link) => (
              <li
                key={link.pathName}
                className={`flex items-center ${
                  pathName === link.href ? "text-orange-600" : null
                }`}
              >
                <Link href={link.href} className="">
                  {link.pathName}
                </Link>
              </li>
            ))}
            {user ? (
              <button
                className="bg-orange-600 px-4 py-2 rounded-md"
                onClick={signOutHandler}
              >
                Logout
              </button>
            ) : (
              <li
                className={`flex items-center hover:scale-105 ${
                  pathName === "/Login" ? "text-orange-600" : null
                }`}
              >
                <Link href="/Login" className="">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
