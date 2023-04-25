import Home from "../index.page";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("should render the home page title", () => {
    render(<Home />);

    expect(
      screen.queryAllByText((content, node) => {
        const hasText = (node: Element | null) =>
          node?.textContent?.trim() !== "";
        const nodeHasText = hasText(node);
        const childrenDontHaveText = Array.from(node!.children).every(
          (child) => !hasText(child)
        );

        return nodeHasText && childrenDontHaveText;
      }).length
    ).toBeGreaterThan(0);
  });
});
