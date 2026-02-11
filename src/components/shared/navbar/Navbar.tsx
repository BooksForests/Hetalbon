import { useEffect, useState } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = ({ scrollEffectEnabled }: { scrollEffectEnabled: boolean }) => {
  const [toggleDropdown, settoggleDropdown] = useState(false);

  // const location = useLocation();

  useEffect(() => {
    if (scrollEffectEnabled) {
      const handleScroll = () => {
        const navbar = document.querySelector(".navbar");
        const item = document.querySelector(".item");
        if (navbar && window.scrollY > 100) {
          navbar.classList.add("shadow", "bg-white");
          navbar.classList.remove("bg-transparent");
          item?.classList.add("text-black");
          item?.classList.remove("text-white");
        } else {
          navbar?.classList.remove("shadow", "bg-white");
          navbar?.classList.add("bg-transparent");
          item?.classList.remove("text-black");
          item?.classList.add("text-white");
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      const navbar = document.querySelector(".navbar");
      const item = document.querySelector(".item");
      if (navbar) {
        navbar.classList.add("shadow", "bg-white");
        navbar.classList.remove("bg-transparent");
        item?.classList.add("text-black");
        item?.classList.remove("text-white");
      }
    }
  }, [scrollEffectEnabled]);

  return (
    <header className="navbar w-full fixed top-0 py-4 z-50">
      <nav className="flex justify-between items-center lg:px-12 px-6">
        <div>
          <Link to="/" className="flex gap-1 items-center">
            <img src={logo} alt="logo" className="w-12 object-contain" />
            <div className="text-2xl text-gray-500 drop-shadow-lg flex items-center gap-1">
              <div className="font-bold text-[#a97105] drop-shadow-sm">
                Hetalbon
              </div>
              Eco Resort
            </div>
          </Link>
        </div>
        <div className="lg:ml-28 max-md:hidden">
          <ul className="flex flex-row  gap-10 text-lg max-sm:text-sm mx-6 font-semibold text-white item">
            <Link to="/">
              <li className="item cursor-pointer">Home</li>
            </Link>
            <Link to="/about">
              <li className="item cursor-pointer">About Us</li>
            </Link>
            <Link to="/services">
              <li className="item cursor-pointer">Our Services</li>
            </Link>
            <Link to="/MediaPage">
              <li className="item cursor-pointer">Achievements</li>
            </Link>
            <Link to="/gallery">
              <li className="item cursor-pointer">Resort Gallery</li>
            </Link>
            <Link to="/bookings">
              <li className="item cursor-pointer">Book now</li>
            </Link>
            <Link to="/contact">
              <li className="item cursor-pointer">Contact Us</li>
            </Link>
          </ul>
        </div>

        <div
          className="md:hidden  ml-5 "
          onClick={() => settoggleDropdown(!toggleDropdown)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#a97105"
            className="size-10 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>

        {/* Dropdown Menu */}
        <div
          className={`absolute md:hidden right-0 bottom-0 top-1    h-screen  w-3/5 p-5 rounded-lg bg-white shadow-lg min-w-40 flex flex-col gap-2   transition-transform duration-300 ease-in-out transform ${
            toggleDropdown ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className=" flex justify-between items-center">
            <div className=" font-semibold text-xl text-[#a97105]">Menu</div>

            <svg
              onClick={() => settoggleDropdown(false)}
              xmlns="http://www.w3.org/2000/svg"
              fill="#a97105"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              className="size-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          {/* Dropdown Content */}

          <ul className="flex flex-col text-xl font-medium justify-center   gap-4 ">
            <Link to="/" onClick={() => settoggleDropdown(false)}>
              <li className="item cursor-pointer text-black">Home</li>
            </Link>
            <Link to="/about" onClick={() => settoggleDropdown(false)}>
              <li className="item cursor-pointer text-black">About</li>
            </Link>
            <Link to="/services" onClick={() => settoggleDropdown(false)}>
              <li className="item cursor-pointer text-black">Our Services</li>
            </Link>
            <Link to="/gallery" onClick={() => settoggleDropdown(false)}>
              <li className="item cursor-pointer text-black">Resort Gallery</li>
            </Link>
            <Link to="/bookings" onClick={() => settoggleDropdown(false)}>
              <li className="item cursor-pointer text-black">Book now</li>
            </Link>
            <Link to="/contact" onClick={() => settoggleDropdown(false)}>
              <li className="item cursor-pointer text-black">Contact Us</li>
            </Link>
          </ul>
        </div>
        {/* ... */}
      </nav>
    </header>
  );
};

export default Navbar;
