import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Navbar } from ".";

describe("Navbar", () => {
  const setup = () => {
    return render(<Navbar />);
  };
  it("should render the navbar", () => {
    setup();
    expect(screen.getByText("Irving Caamal")).toBeInTheDocument();
  });
});
