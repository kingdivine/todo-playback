import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  queryByText,
} from "@testing-library/react";

import ListItem from "./ListItem";

afterEach(cleanup);

describe("<ListItem/>", () => {
  const todo = {
    id: "abc123",
    name: "Item 1",
    description: "This is the first item to complete",
    createdDate: new Date("Thu Apr 09 2020 16:36:07 GMT+0100 (BST)"),
  };
  test("renders correctly", () => {
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
  test("calls delete item when delete button clicked", () => {
    const deleteFn = jest.fn();

    const { getByText } = render(
      <ListItem
        key={todo.id}
        todo={todo}
        deleteTodo={deleteFn}
        editTodo={jest.fn()}
      />
    );

    fireEvent.click(getByText("Delete"));
    expect(deleteFn).toHaveBeenCalledTimes(1);
  });
  test("calls edit item when edit button clicked", () => {
    const editFn = jest.fn();
    const { getByText } = render(
      <ListItem
        key={todo.id}
        todo={todo}
        deleteTodo={jest.fn()}
        editTodo={editFn}
      />
    );

    fireEvent.click(getByText("Edit"));
    expect(editFn).toHaveBeenCalledTimes(1);
  });
});
