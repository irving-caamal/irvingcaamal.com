import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Moon, Sun, Monitor } from "react-feather";
import { SvgIcon } from "../SvgIcon/index";
import { socialList } from "../../../utils/dummyData";
export function Navbar() {
  const [navbarColor, setNavbarColor] = useState<string>(
    "bg-white text-black dark:bg-black dark:text-white"
  );
  const [iconColors, setIconColors] = useState<string>("fill-current");

  function handleScroll() {
    if (window.scrollY > 60) {
      setNavbarColor("bg-black text-white dark:bg-white text-black");
      setIconColors("fill-white");
    } else {
      setNavbarColor("fill-current");
      setIconColors("fill-current");
    }
  }
  const handleClick = () => {};
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`sticky top-0 w-full h-20 ${navbarColor} transition ease-in-out delay-50`}
    >
      <div className="flex justify-between items-center px-5 py-4">
        <Link href="/">
          <span className="text-2xl font-bold cursor-pointer">
            Irving Caamal
          </span>
        </Link>
        <div className="flex">
          <button onClick={handleClick}>
            <Moon size={42} />
          </button>
          <ul className="flex space-evenly">
            {socialList.length > 0 &&
              socialList.map((social, index) => (
                <li key={index} className="mx-2">
                  <a
                    href={social.url}
                    target="_blank"
                    className="cursor-pointer"
                    rel="noreferrer"
                  >
                    {social.icon && (
                      <SvgIcon
                        icon={social.icon}
                        size={40}
                        className={`${iconColors} hover:bg-transparent hover:text-gray-700`}
                      />
                    )}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
