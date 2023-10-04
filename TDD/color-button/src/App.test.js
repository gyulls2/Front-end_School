import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();

  const button = screen.getByRole("button", { name: "change to blue!" });
  expect(button).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(button);
  expect(button.textContent).toBe("change to red!");
});
