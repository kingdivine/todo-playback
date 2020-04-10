import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import Form from "./Form";

afterEach(cleanup);

describe("<Form/>", () => {
  const todo = {
    id: "abc123",
    name: "Item 1",
    description: "This is the first item to complete",
    createdDate: new Date("Thu Apr 09 2020 16:36:07 GMT+0100 (BST)"),
  };
  test("renders empty form correctly", () => {
    expect(
      render(<Form todo={null} handleSave={jest.fn()} />)
    ).toMatchSnapshot();
  });
  test("renders edit form correctly ", () => {
    expect(
      render(<Form todo={todo} handleSave={jest.fn()} />)
    ).toMatchSnapshot();
  });
  test("renders disbaled save button initially when empty", () => {
    const saveFn = jest.fn();
    const { getByText } = render(<Form todo={null} handleSave={saveFn} />);
    fireEvent.click(getByText("Save"));
    expect(saveFn).toHaveBeenCalledTimes(0);
  });
  test("enables save button after valid input", () => {
    const saveFn = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <Form todo={null} handleSave={saveFn} />
    );
    fireEvent.change(getByPlaceholderText("Name"), {
      target: { value: todo.name },
    });
    fireEvent.click(getByText("Save"));
    expect(saveFn).toHaveBeenCalledTimes(1);
  });
});
