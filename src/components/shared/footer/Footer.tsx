import { RiTwitterXFill } from "react-icons/ri";
import footerLogo from "../../../assets/logos/footer-logo.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#F2F4F6] font-inter">
      <div className="mx-[220px] py-[26px]">
        <div className="flex justify-between mt-[56px]">
          {/* This is the left side div */}
          <div>
            <Link to={"/"}>
              <img
                className="w-[187px] h-[126px] object-cover"
                src={footerLogo}
                alt="footer-logo"
              />
            </Link>
            {/* This is the social icon */}
            <div className="flex gap-4 mt-[72px]">
              {/* Twitter (X) */}
              <span
                className="border border-[#D4D4D8] rounded-full p-[10px] cursor-pointer 
                  transition-colors duration-300 hover:bg-black hover:text-white"
              >
                <RiTwitterXFill />
              </span>
              {/* Facebook */}
              <span
                className="border border-[#D4D4D8] rounded-full p-[10px] cursor-pointer 
                  transition-colors duration-300 hover:bg-[#1877F2] hover:text-white"
              >
                <FaFacebookF />
              </span>
              {/* LinkedIn */}
              <span
                className="border border-[#D4D4D8] rounded-full p-[10px] cursor-pointer 
                  transition-colors duration-300 hover:bg-[#0A66C2] hover:text-white"
              >
                <FaLinkedinIn />
              </span>
            </div>
          </div>
          {/* This is the right side div */}
          <div className="grid grid-cols-3 ">
            {/* This is the section row */}
            <div className="flex flex-col gap-[26px] font-inter">
              <NavLink
                to="/quick-links"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#4EA2ED] font-semibold"
                    : "text-[#637381] font-normal"
                }
              >
                Quick links
              </NavLink>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#4EA2ED] font-semibold"
                    : "text-[#637381] font-normal"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#4EA2ED] font-semibold"
                    : "text-[#637381] font-normal"
                }
              >
                Shop
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#4EA2ED] font-semibold"
                    : "text-[#637381] font-normal"
                }
              >
                About us
              </NavLink>
              <NavLink
                to="/coas"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#4EA2ED] font-semibold"
                    : "text-[#637381] font-normal"
                }
              >
                COAs
              </NavLink>
            </div>
            {/* This is the second row */}
            <div className="flex flex-col gap-[26px] font-inter">
              <NavLink
                to="/help"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#4EA2ED] font-semibold"
                    : "text-[#637381] font-normal"
                }
              >
                Help
              </NavLink>
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#4EA2ED] font-semibold"
                    : "text-[#637381] font-normal"
                }
              >
                FAQ
              </NavLink>
              <NavLink
                to="/customer-support"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#4EA2ED] font-semibold"
                    : "text-[#637381] font-normal"
                }
              >
                Customer Support
              </NavLink>
            </div>
            {/* This is the get in touch */}
            <div className="font-inter">
              <h3 className="text-[1rem] dark:text-[#abc2d3] font-bold text-[#37404A]">
                Get In Touch
              </h3>
              <div className="flex gap-[2px] flex-col bg-[#F9FAFB] text-[#424242] relative mt-[28px]">
                <input
                  type="email"
                  className="py-4 px-4 dark:bg-slate-900 dark:border-[#DFE3E8] dark:placeholder:text-slate-500 dark:text-[#abc2d3] w-full pr-[90px] rounded-md border border-[#DFE3E8] outline-none"
                  placeholder="Enter email address"
                />

                <button className="h-[99%] rounded-[12px] bg-gradient-to-b from-[#6DB1EE] to-[#4EA2ED] px-[30px] text-white text-base font-bold absolute top-[0px] right-0 cursor-pointer">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* This is the copy right  */}
        <div className="mt-[38px] mb-[28px]">
          <hr />
        </div>
        <p className="text-center text-[#637381] text-base">
          © Copyright 2024, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
