import React from "react";
import moment from "moment";

import "./ListItem.scss";

const ListItem = ({ todo, deleteTodo, updateTodo }) => {
  return (
    <div className="list-item">
      <p className="item-name">{todo.name}</p>
      <p className="item-description">{todo.description}</p>
      <p className="item-date">{moment(todo.createdDate).calendar()}</p>
      <button onClick={() => deleteTodo(todo)}>Delete</button>
      <button onClick={() => updateTodo(todo)}>Update</button>
    </div>
  );
};

export default ListItem;
