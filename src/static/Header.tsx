import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className=" h-20 bg-purple-400 flex justify-center items-center gap-10 font-bold">
      <NavLink to="/">
        <nav>Home</nav>
      </NavLink>
      <NavLink to="/about">
        <nav>About</nav>
      </NavLink>
      <NavLink to="/services">
        <nav>Services</nav>
      </NavLink>
    </div>
  );
};

export default Header;
