const Footer = () => {
  return (
    <footer className="bg-teal-50 text-gray-400">
      <div className="footer-content container mx-auto py-10 border-t border-gray-500/25">
        <div className="footer-items flex gap-10 justify-between items-start">
          <div className="footer-one flex flex-col gap-1">
            <h2 className="logo text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-teal-700 mb-2">
              Blossom Spa
            </h2>
            <p className="w-3/5">
              Get the amazing spa and beauty facilities at your location
            </p>
            <p>Call us: +123 456 789</p>
          </div>
          <ul className="footer-two flex flex-col gap-1">
            <p className="mb-2 text-gray-500 uppercase font-medium">
              Useful Links
            </p>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Packages</a>
            </li>
            <li>
              <a href="#">Special Promo</a>
            </li>
          </ul>
          <ul className="footer-three flex flex-col gap-1">
            <p className="mb-2 text-gray-500 uppercase font-medium">
              Information
            </p>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Read Blogs</a>
            </li>
            <li>
              <a href="#">Join Us</a>
            </li>
          </ul>
          <ul className="footer-four flex flex-col gap-1">
            <p className="mb-2 text-gray-500 uppercase font-medium">Support</p>
            <li>
              <a href="#">FAQ's</a>
            </li>
            <li>
              <a href="#">Support Center</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
          </ul>
          <ul className="footer-five flex flex-col gap-1">
            <p className="mb-2 text-gray-500 uppercase font-medium">
              Social Media
            </p>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
        <p className="text-center mt-10">
          &copy; {new Date().getFullYear()} Blossom Spa. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
