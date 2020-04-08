import React from "react";
import ListItem from "../ListItem/ListItem";
import { v4 as uuidv4 } from "uuid";

import "./List.scss";

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
    <div className="list-container">
      <div>
        <button onClick={handleClickAdd}>Add Todo</button>
      </div>
      <div className="list-items-container">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <ListItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          ))
        ) : (
          <h3 className="empty-list-message"> No todos to display!</h3>
        )}
      </div>
    </div>
  );
};

export default List;
