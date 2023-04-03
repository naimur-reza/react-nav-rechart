import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link, Outlet } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
const Nav = () => {
  const [show, setShow] = useState(true);

  const items = [
    "Home",
    "Dashboard",
    "Plans",
    "Members",
    "Posts",
    "Contact Us",
  ];
  return (
    <>
      <div
        className="text-violet-800 lg:hidden w-fit"
        onClick={() => setShow(!show)}>
        {show ? (
          <Bars3Icon className="w-7"></Bars3Icon>
        ) : (
          <XMarkIcon className="w-7"></XMarkIcon>
        )}
      </div>
      <nav
        className={`flex   gap-5 flex-col lg:flex-row justify-center p-4 text-gray-200 font-semibold  bg-gray-800 absolute lg:static z-10 w-full ${
          show ? " -top-72" : "top-7"
        } duration-500`}>
        {items.map((it) => (
          <li className="list-none">
            {" "}
            <ActiveLink to={`/${it}`}>{it}</ActiveLink>
          </li>
        ))}
      </nav>
      <Outlet></Outlet>
    </>
  );
};

export default Nav;
