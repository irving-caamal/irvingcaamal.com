import { render, screen } from "@testing-library/react";
import { Moon } from "react-feather";
import { SvgIcon } from ".";
describe("SvgIcon", () => {
  const setup = () => {
    return render(<SvgIcon icon={Moon} />);
  };
  it("should render the svg icon", () => {
    setup();
    expect(screen.getByTestId("svg-icon")).toBeTruthy();
  });
});
