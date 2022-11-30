import { Link, NavLink } from "react-router-dom";
import { BsFlower1 } from "react-icons/bs";

const Navbar = () => {
  return (
    <header className="bg-teal-100/50">
      <nav className="container mx-auto flex py-5 border-b border-gray-500/25 items-center justify-between">
        <h2 className="logo flex items-center gap-2 text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-teal-700">
          <BsFlower1 className="text-teal-500" /> Blossom Spa
        </h2>
        <ul className="links flex gap-7 text-lg">
          <li>
            <NavLink end to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="services">Services</NavLink>
          </li>
          <li>
            <NavLink to="packages">Packages</NavLink>
          </li>
          <li>
            <NavLink to="gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="testimonials">Testimonials</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
        </ul>
        <Link
          to="sign-up"
          className="bg-gradient-to-br from-teal-500 to-teal-600 self-start text-teal-50 py-3 px-5 rounded-full shadow-xl shadow-teal-200/50"
        >
          Sign up
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
