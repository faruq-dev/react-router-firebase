// import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // const navigate = useNavigate();
  return (
    <nav className="bg-[#C9C9C9]/50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow py-4">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
          Router
        </div>

        {/* Navigation NavLinks */}
        <ul className="hidden md:flex space-x-8">
          <li>
            {/* এখানে NavLink এর বদলে Link ইউজ করা হয় সাধারনত, তবে যদি Active লিংক কে স্টাইল করতে হয়য় তাহলে NavLink ইউজ করতে হবে, Link ও NavLinkদুটাই react router dom থেকে আসে */}
            <NavLink to={'/'}
              className={( {isActive}) => isActive ? "text-orange-400 font-bold hover:text-orange-500" : "hover:text-blue-600 dark:hover:text-blue-400 transition" }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={'about'}
              className={( {isActive}) => isActive ? "text-orange-400 font-bold hover:text-orange-500" : "hover:text-blue-600 dark:hover:text-blue-400 transition" }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to={'users'}
              className={( {isActive}) => isActive ? "text-orange-400 font-bold hover:text-orange-500" : "hover:text-blue-600 dark:hover:text-blue-400 transition" }
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to={'contact'}
              className={( {isActive}) => isActive ? "text-orange-400 font-bold hover:text-orange-500" : "hover:text-blue-600 dark:hover:text-blue-400 transition" }
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to={'login'}
              className={( {isActive}) => isActive ? "text-orange-400 font-bold hover:text-orange-500" : "hover:text-blue-600 dark:hover:text-blue-400 transition" }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to={'signup'}
              className="bg-blue-600 hover:bg-blue-500 py-3 px-6 text-white rounded-md font-medium "
            >
              Sign Up
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800 dark:text-gray-200 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
