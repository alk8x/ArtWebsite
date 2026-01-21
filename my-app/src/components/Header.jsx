import { NavLink } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="logo">
        <NavLink to="/" className="logo-link">
          <h1>ALLISON FISH</h1>
        </NavLink>
      </div>

      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Home
        </NavLink>

        <NavLink to="/portfolio" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Portfolio
        </NavLink>

        <NavLink to="/shop" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Shop
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          About
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Contact
        </NavLink>
      </nav>

    </header>
  );
}

