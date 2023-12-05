type BurgerProps = {
    toggleBurger: () => void;
}

const Hamburger = ({ toggleBurger }: BurgerProps) => {
  

  return <button className="font-bold" onClick={toggleBurger}>☰</button>;
};

export default Hamburger;
