import { NavLink } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="logo">ALLISON FISH</div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}
