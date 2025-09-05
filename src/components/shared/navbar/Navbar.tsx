import { useState } from "react";
import logo from "../../../assets/logos/neuropep-logo.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "../../ui/select";
import {
  AddToCartSvg,
  HumanSvg,
  SearchSvg,
} from "../../../svg-container/SvgContainer";
import { NavLink } from "react-router";

const Navbar = () => {
  const [, setDropdown1Open] = useState(false);
  const [selected1, setSelected1] = useState("SP");

  const options = [
    { value: "EN", label: "English" },
    { value: "SP", label: "Spanish" },
  ];
  return (
    <div className="flex justify-between items-center font-inter">
      {/* This is the logo section */}
      <img className="w-[118px] h-[80px] object-cover" src={logo} alt="logo" />
      {/* This is the navigation section */}
      <div className="flex gap-12 text-lg">
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
          About Us
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
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-[#4EA2ED] font-semibold"
              : "text-[#637381] font-normal"
          }
        >
          Contact Us
        </NavLink>
      </div>
      {/* This is the language and svg */}
      <div className="flex gap-12 items-center">
        {/* This is the language and other svg */}
        <div className="flex space-x-2 p-4">
          <div className="relative inline-block text-left">
            <Select
              value={selected1}
              onValueChange={(value) => {
                setSelected1(value);
                setDropdown1Open(false);
              }}
              onOpenChange={setDropdown1Open}
            >
              <SelectTrigger className="w-[66px] h-[35px] rounded-[8px] border border-[#e0e2e5] bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                <span>{selected1}</span>
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label.charAt(0).toUpperCase() +
                      option.label.slice(1).toLowerCase()}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* This is the svg section */}
        <div className="flex gap-[18px] items-center">
          <AddToCartSvg />
          <SearchSvg />
          <HumanSvg />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
