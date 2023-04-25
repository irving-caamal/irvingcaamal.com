import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NavBar } from ".";

describe("Navbar", () => {
  const setup = () => {
    return render(<NavBar />);
  };
  it("should render the navbar", () => {
    setup();
    expect(screen.queryAllByText("Irving Caamal").length).toBeGreaterThan(0);
  });
});
