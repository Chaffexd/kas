import { motion } from "framer-motion";

type BurgerProps = {
    toggleBurger: () => void;
}

const Hamburger = ({ toggleBurger }: BurgerProps) => {
  

  return <motion.button whileHover={{ scale: 1.3 }} whileTap={{ scale: 1.5 }} className="font-bold w-6 " onClick={toggleBurger}>☰</motion.button>;
};

export default Hamburger;
