import React from "react";
import { render, cleanup } from "@testing-library/react";

import List from "./List";

afterEach(cleanup);

describe("<List/>", () => {
  test("renders correctly", () => {
    expect(
      render(
        <List
          todos={[]}
          createTodo={jest.fn()}
          deleteTodo={jest.fn()}
          updateTodo={jest.fn()}
        />
      )
    ).not.toBeNull();
  });
});
