import React from "react";
import ListItem from "../ListItem/ListItem";

const List = ({ todos, addTodo, deleteTodo, updateTodo }) => {
  return (
    <div>
      <div>
        <button onClick={() => addTodo("Task Name", "Task Desc.")}>Add</button>
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
