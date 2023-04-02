import React, { useState } from "react";
import { Bars3Icon ,XMarkIcon } from "@heroicons/react/24/solid";
const Nav = () => {
  const [show, setShow] = useState(false);

  const items = [
    "Home",
    "About Us",
    "Services",
    "Portfolio",
    "Blog",
    "Contact Us",
  ];
  return (
    <>
    <div className="text-violet-800 lg:hidden w-fit" onClick={()=> setShow(!show)}>
        {
            !show ? <Bars3Icon  className="w-7"></Bars3Icon> : <XMarkIcon  className="w-7"></XMarkIcon>
        }
    </div>
        <nav className={`flex   gap-5 flex-col lg:flex-row justify-center p-4 text-gray-200 font-semibold  bg-gray-800 absolute lg:static z-10 w-full ${show ?" -top-72" : "top-7"} duration-500`}>
          {items.map((it) => (
            <li className="list-none">
              {" "}
              <a href="">{it}</a>
            </li>
          ))}
        </nav>
    </>
  );
};

export default Nav;
