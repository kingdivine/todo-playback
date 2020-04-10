import React from "react";
import { render, cleanup } from "@testing-library/react";

import Form from "./Form";

afterEach(cleanup);

describe("<Form/>", () => {
  test("renders correctly", () => {
    expect(
      render(<Form todo={null} handleSave={jest.fn()} />)
    ).toMatchSnapshot();
  });
});
