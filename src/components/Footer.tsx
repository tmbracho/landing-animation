import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-4 bg-gray-50 w-full">
      <div className="grid grid-cols-3 gap-8">
        <div>
          <h1 className="font-semibold tracking-tight text-teal-600">
            StarGlobe Technologies
          </h1>
          <p className="mt-4 text-gray-500 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate
            quae nam molestias.
          </p>
          <ul className="mt-4 flex gap-6 text-xl">
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaGithub />
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-4 gap-8 col-span-2">
          <div>
            <p className="font-medium text-gray-900">Services</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  1on1 Coaching
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Company Review
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Accounts Review
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  HR Consulting
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  SEO Optimisation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-gray-900">Company</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Meet the Team
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Accounts Review
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-gray-900">Helpful Links</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Live Chat
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-gray-900">Legal</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Returns Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Hiring Statistics
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* <ul className="w-[300px] flex justify-between items-center">
          <li>
            <a href="#" className="text-sm font-semibold">
              Instagram
            </a>
          </li>
          <li>
            <a href="#" className="text-sm font-semibold">
              Snapchat
            </a>
          </li>
          <li>
            <a href="#" className="text-sm font-semibold">
              Dribble
            </a>
          </li>
        </ul> */}
      </div>
      <p className="text-xs text-gray-500 text-center pt-5">
        © 2023. StarGlobe Technologies. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
