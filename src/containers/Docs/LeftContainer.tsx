import { DocsItems } from "@/lib/data";
import { AlignJustify } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const LeftContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full md:w-60 md:h-screen border-r border-white/20 pl-10 pr-4 md:py-4 relative">
      <div className="relative mb-6 w-full md:w-fit flex justify-center md:block">
        <div
          className={
            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-white via-white to-orange-600 blur-lg w-32 h-4 -z-10"
          }
        />
        <Link className="font-bold text-4xl py-4 sour-gummy-custom" to="/">
          React<span className={"text-orange-600 "}>Kit</span>
        </Link>
        <AlignJustify
          className={
            "absolute md:hidden top-1/2 transform -translate-y-1/2 left-0 z-50"
          }
          onClick={toggleDropdown}
        />
      </div>
      <div
        className={`${
          !isOpen && "hidden"
        } absolute z-50 w-screen h-screen md:w-auto md:h-auto bg-neutral-950 md:block`}
      >
        {DocsItems.map((item, index) => (
          <div key={index} className={"flex flex-col"}>
            <h2 className={`font-bold text-base mb-2 my-4 truncate`}>
              {item.title}
            </h2>
            {item.links.map((link, i) => (
              <NavLink
                key={i}
                to={link.url === "" ? "." : link.url}
                end={link.url === ""}
                className={({ isActive }) =>
                  `font-semibold hover:text-white py-2 text-sm truncate 
                    ${isActive ? "text-white underline" : "text-gray-400"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftContainer;
