/*eslint-disable no-undef*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import React from "react";

const data = ["test_1", "test_2", "test_3", "test_4", "test_5"];

describe("Sign Up", () => {
  test("renders without crash", () => {
    render(<App />);
  });

  test("find text", () => {
    render(<div>test div</div>);
    expect(screen.getByText(/div/i)).toBeInTheDocument();
  });

  test("find one of list", () => {
    render(
      <div>
        {data.map(item => <div key={item}>{item}</div>)}
      </div>);
    expect(screen.getByText("test_3")).toBeInTheDocument();
  });
});
