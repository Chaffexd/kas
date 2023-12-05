type BurgerProps = {
    toggleBurger: () => void;
}

const Hamburger = ({ toggleBurger }: BurgerProps) => {
  

  return <button className="font-bold w-6 " onClick={toggleBurger}>☰</button>;
};

export default Hamburger;
