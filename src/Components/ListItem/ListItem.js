import React from "react";
import moment from "moment";

const ListItem = ({ todo, deleteTodo, updateTodo }) => {
  return (
    <div>
      <p>{todo.name}</p>
      <p>{todo.description}</p>
      <p>{moment(todo.createdDate).calendar()}</p>
      <button onClick={() => deleteTodo(todo)}>Delete</button>
      <button onClick={() => updateTodo(todo)}>Update</button>
    </div>
  );
};

export default ListItem;
