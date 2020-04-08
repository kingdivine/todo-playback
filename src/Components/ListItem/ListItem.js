import React from "react";
import moment from "moment";

import "./ListItem.scss";

const ListItem = ({ todo, deleteTodo, editTodo }) => {
  return (
    <div className="list-item">
      <p className="item-name">{todo.name}</p>
      <p className="item-description">{todo.description}</p>
      <p className="item-date">{moment(todo.createdDate).calendar()}</p>
      <button onClick={() => deleteTodo(todo)}>Delete</button>
      <button onClick={() => editTodo(todo)}>Edit</button>
    </div>
  );
};

export default ListItem;
