"use client";
import { useState } from "react";
import Hamburger from "./Hamburger";

const NavBar = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleBurger = () => {
    setIsExpanded(!isExpanded);
  };
  console.log(isExpanded)
  return (
    <>
      <div className="w-full flex p-8 justify-between text-rose-500 text-xl font-bold leading-relaxed">
          <Hamburger toggleBurger={toggleBurger} />
          {isExpanded && (
            <ul className="w-1/3 list-none absolute top-0 left-0 h-full bg-gray-200 p-8">
                <Hamburger toggleBurger={toggleBurger} />
                <li className="ml-1">1</li>
                <li className="ml-1">2</li>
                <li className="ml-1">3</li>
            </ul>
          )}
        <h1 className="text-4xl">KAS</h1>
        <h2>RESERVATION</h2>
      </div>
    </>
  );
};

export default NavBar;
