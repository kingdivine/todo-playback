import React from "react";
import { render, cleanup } from "@testing-library/react";

import List from "./List";

afterEach(cleanup);

describe("<List/>", () => {
  const todos = [
    {
      id: "abc123",
      name: "Item 1",
      description: "This is the first item to complete",
      createdDate: new Date("Thu Apr 09 2020 16:36:07 GMT+0100 (BST)"),
    },
    {
      id: "def456",
      name: "Item 2",
      description: "This is the second item to complete",
      createdDate: new Date("Thu Apr 09 2020 16:37:07 GMT+0100 (BST)"),
    },
    {
      id: "ghi789",
      name: "Item 3",
      description: "This is the third item to complete",
      createdDate: new Date("Thu Apr 09 2020 16:38:07 GMT+0100 (BST)"),
    },
  ];
  test("renders empty list correctly", () => {
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
  test("renders non-empty list correctly", () => {
    expect(
      render(
        <List
          todos={todos}
          createTodo={jest.fn()}
          deleteTodo={jest.fn()}
          updateTodo={jest.fn()}
        />
      )
    ).toMatchSnapshot();
  });
});
