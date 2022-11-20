import Home from "../index.page";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("should render the home page title", () => {
    render(<Home />);

    expect(
      screen.getByText((content, node) => {
        const hasText = (node) => node.textContent === "Hi, I'm Irving Caamal";
        const nodeHasText = hasText(node);
        const childrenDontHaveText = Array.from(node.children).every(
          (child) => !hasText(child)
        );

        return nodeHasText && childrenDontHaveText;
      })
    ).toBeInTheDocument();
  });
});
