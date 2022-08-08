import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
