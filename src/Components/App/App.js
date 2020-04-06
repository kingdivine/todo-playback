import React, { useState } from "react";
import List from "../List/List";
import PlaybackControls from "../PlaybackControls/PlaybackControls";
import { v4 as uuidv4 } from "uuid";
import "./App.scss";

const App = () => {
  let [todos, setTodos] = useState([]);
  let [userActions, setUserActions] = useState([]);
  let [isRecording, setRecording] = useState(false);
  let [isPlaying, setPlaying] = useState(false);

  const createTodo = (name, description) => {
    const newTodo = {
      id: uuidv4(),
      name,
      description,
      createdDate: new Date(),
    };
    setTodos([...todos, newTodo]);
    handleUserAction("CREATE", newTodo);
  };

  const deleteTodo = (todoToBeDeleted) => {
    handleUserAction("DELETE", todoToBeDeleted);
    setTodos(todos.filter((todo) => todo.id != todoToBeDeleted.id));
  };

  const updateTodo = (todoToBeUpdated) => {
    handleUserAction("UPDATE", todoToBeUpdated);
    setTodos(
      todos.map((todo) =>
        todo.id == todoToBeUpdated.id
          ? {
              ...todo,
              name: todoToBeUpdated.name,
              description: "jbhbjvjhv",
            }
          : todo
      )
    );
  };

  const handleUserAction = (action, todo) => {
    isRecording ? null : setUserActions([...userActions, { action, todo }]);
  };

  const toggleRecord = () => {
    setRecording(!isRecording);
  };

  const togglePlay = () => {
    setPlaying(!isPlaying);
  };

  const clearRecording = () => {
    setUserActions([]);
  };

  return (
    <div>
      <div>
        <h1>TODO PLAYBLACK</h1>
      </div>
      <PlaybackControls
        toggleRecord={toggleRecord}
        togglePlay={togglePlay}
        clearRecording={clearRecording}
      />
      <List
        todos={todos}
        addTodo={createTodo}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default App;
