import { FaDiceD6 } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center p-4 bg-teal-500 text-white z-50">
      <div className="flex items-center flex-shrink-0 text-xl">
        <FaDiceD6 className="mr-2" />
        <h1 className="font-semibold tracking-tight">StarGlobe Technologies</h1>
      </div>
      <ul className=" flex justify-between items-center">
        <li>
          <a
            href="#"
            className="text-sm font-semibold text-teal-200 hover:text-white mr-4"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-sm font-semibold text-teal-200 hover:text-white mr-4"
          >
            Feactures
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-sm font-semibold text-teal-200 hover:text-white mr-4"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-sm font-semibold text-teal-200 hover:text-white mr-4"
          >
            Support
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
