import React, { useState } from "react";
import ListItem from "../ListItem/ListItem";
import { v4 as uuidv4 } from "uuid";
import Form from "../Form/Form";
import { generateRandomMessage } from "../../helpers/messageGenerator";

import "./List.scss";

const List = ({ todos, createTodo, deleteTodo, updateTodo }) => {
  const [listVisible, setListVisibilty] = useState(true);
  const [todoToEdit, setTodoToEdit] = useState();

  const handleClickAdd = () => {
    setTodoToEdit(null);
    setListVisibilty(!listVisible);
  };

  const editTodo = (todo) => {
    setTodoToEdit(todo);
    setListVisibilty(!listVisible);
  };

  const handleSave = (todo, name, description) => {
    setListVisibilty(true);
    if (todo === null) {
      const newTodo = {
        id: uuidv4(),
        name,
        description,
        createdDate: new Date(),
      };
      createTodo(newTodo);
    } else {
      const updatedTodo = {
        ...todo,
        name,
        description,
      };
      updateTodo(updatedTodo);
    }
  };

  return (
    <div className="list-container">
      {listVisible ? (
        <div className="list-items-container">
          <div>
            <button className="add-btn" onClick={handleClickAdd}>
              Add Todo
            </button>
          </div>
          {todos.length > 0 ? (
            todos.map((todo) => (
              <ListItem
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            ))
          ) : (
            <h3 className="empty-list-message"> {generateRandomMessage()}</h3>
          )}
        </div>
      ) : (
        <Form todo={todoToEdit} handleSave={handleSave} />
      )}
    </div>
  );
};

export default List;
