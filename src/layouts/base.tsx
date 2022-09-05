import React from "react";
import { Footer } from "../components/shared/Footer";
import { Navbar } from "../components/shared/Navbar";

export function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col w-full">
      <Navbar />
      <main className="flex flex-auto flex-wrap justify-center items-center gap-x-4 p-4 md:p-8 text-black  bg-white dark:bg-black dark:text-white">
        {children}
      </main>
      <Footer />
    </div>
  );
}
