import React from "react";
import ListItem from "../ListItem/ListItem";
import { v4 as uuidv4 } from "uuid";

const List = ({ todos, createTodo, deleteTodo, updateTodo }) => {
  const handleClickAdd = () => {
    const newTodo = {
      id: uuidv4(),
      name: uuidv4(),
      description: "Task description",
      createdDate: new Date(),
    };
    createTodo(newTodo);
  };
  return (
    <div>
      <div>
        <button onClick={handleClickAdd}>Add</button>
      </div>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
};

export default List;
