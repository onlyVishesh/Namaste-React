import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Features from "./Features";

test("Should Load Features Component", () => {
  const feature = {
    title: "Sample Title",
    description: "Sample Description",
  };

  render(<Features feature={feature} />);

  const heading = screen.getByRole("heading", { name: "Sample Title" });
  expect(heading).toBeInTheDocument();
});
