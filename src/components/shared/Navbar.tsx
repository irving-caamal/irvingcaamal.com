import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SvgIcon from "./SvgIcon";
import GithubIcon from "../../../public/icons/github.svg";
import LinkedinIcon from "/public/icons/linkedin.svg";
import SpotifyIcon from "/public/icons/spotify.svg";

export function Navbar() {
  const [navbarColor, setNavbarColor] = useState<string>("");
  const [iconColors, setIconColors] = useState<string>("fill-current");
  const socialList = [
    {
      icon: GithubIcon,
      url: "https://github.com/irvv17",
      alt: "Github"
    },
    {
      icon: LinkedinIcon,
      url: "https://linkedin.com/in/irving-caamal",
      alt: "Linkedin"
    },
    {
      icon: SpotifyIcon,
      url: "https://open.spotify.com/user/irvv.17",
      alt: "Spotify"
    }
  ];

  function handleScroll() {
    console.log({ scrollY: window.scrollY });
    if (window.scrollY > 60) {
      setNavbarColor("bg-black text-white");
      setIconColors("fill-white");
    } else {
      setNavbarColor("fill-current");
      setIconColors("fill-current");
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`sticky top-0 w-full h-20 ${navbarColor} transition ease-in-out delay-50`}
    >
      <div className="flex justify-between items-center px-5 py-4">
        <Link href="/">
          <span className="text-xl font-bold cursor-pointer">
            Irving Caamal
          </span>
        </Link>
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
                  <SvgIcon
                    icon={social.icon}
                    width={24}
                    height={24}
                    classes={iconColors}
                  />
                </a>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
}
