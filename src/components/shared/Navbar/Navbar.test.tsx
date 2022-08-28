import { Navbar } from ".";
import { screen, render } from "@testing-library/react";

describe("Navbar", () => {
  const setup = () => {
    return render(<Navbar />);
  };
  it("should render the navbar", () => {
    setup();
    expect(screen.getByText("Irving Caamal")).toBeInTheDocument();
  });
});
