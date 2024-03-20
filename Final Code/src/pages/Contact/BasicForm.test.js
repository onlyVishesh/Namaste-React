import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BasicForm from "./BasicForm";

describe("Basic form test cases", () => {
    
    it("Should if 2 input boxes are on the BasicForm", () => {
        render(<BasicForm />);
        
        const inputBoxes = screen.getAllByRole("textbox");
        
        expect(inputBoxes.length).toBe(3);
    });
    it("Should if 1 button is on the BasicForm", () => {
      render(<BasicForm />);
  
      const button = screen.getByRole("button");
  
      expect(button).toBeInTheDocument();
    });
});
