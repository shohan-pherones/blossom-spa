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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Packages</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
        <a
          href="#"
          className="bg-gradient-to-br from-teal-500 to-teal-600 self-start text-teal-50 py-3 px-5 rounded-full shadow-xl shadow-teal-200/50"
        >
          Sign up
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
