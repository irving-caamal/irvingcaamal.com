import React from "react";

export function Footer() {
  return (
    <footer
      className="w-full bg-gray-100 border-t-2 border-white
    text-black text-2xl bottom-0 h-auto p-8 flex justify-between dark:text-white dark:bg-black"
    >
      <p>Thanks for visiting my website</p>
      <p>
        You can check the source code{" "}
        <a
          href="https://github.com/irvv17/irvingcaamal.com"
          target="_blank"
          rel="noreferrer"
          className="text-blue-700"
        >
          here
        </a>
      </p>
    </footer>
  );
}
