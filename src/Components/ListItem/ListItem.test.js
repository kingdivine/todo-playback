import React from "react";
import { render, cleanup } from "@testing-library/react";

import ListItem from "./ListItem";

afterEach(cleanup);

describe("<ListItem/>", () => {
  test("renders correctly", () => {
    const todo = {
      id: "abc123",
      name: "Item 1",
      description: "This is the first item to complete",
      createdDate: "Thu Apr 09 2020 16:36:07 GMT+0100 (BST)",
    };
    expect(
      render(
        <ListItem
          key={todo.id}
          todo={todo}
          deleteTodo={jest.fn()}
          editTodo={jest.fn()}
        />
      )
    ).toMatchSnapshot();
  });
});
