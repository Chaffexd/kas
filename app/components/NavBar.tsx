"use client";
import { useState } from "react";
import Hamburger from "./Hamburger";
import Link from "next/link";
import { motion } from "framer-motion";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(20px at 44px 50px)",
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

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
        <motion.ul 
          initial={false} 
          animate={isExpanded ? "open" : "closed"} 
          variants={sidebar} 
          className="sm:w-1/3 w-3/4 list-none flex flex-col justify-start absolute top-0 left-0 h-full bg-gray-200 p-8 z-10"
        >
          <Hamburger toggleBurger={toggleBurger} />
          <Link href={"/"} onClick={toggleBurger} className="ml-1 mb-2 text-4xl hover:text-rose-300">Home</Link>
          <Link href={"/gallery"} onClick={toggleBurger} className="ml-1 mb-2 text-4xl hover:text-rose-300">Gallery</Link>
          <Link href={"/about"} onClick={toggleBurger} className="ml-1 mb-2 text-4xl hover:text-rose-300">About Us</Link>
          <Link href={"/reservation"} onClick={toggleBurger} className="ml-1 mb-2 text-4xl hover:text-rose-300 sm:invisible visible">Reservation</Link>
        </motion.ul>
        <h1 className="text-4xl ml-24">KAS</h1>
        <h2 className="sm:visible invisible">RESERVATION</h2>
      </div>
    </>
  );
};

export default NavBar;