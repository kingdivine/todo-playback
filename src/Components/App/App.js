import React, { useState, useEffect } from "react";
import List from "../List/List";
import PlaybackControls from "../PlaybackControls/PlaybackControls";

import "./App.scss";

const App = () => {
  const [todos, setTodos] = useState([]);
  const storedActions =
    JSON.parse(window.localStorage.getItem("userActions")) || [];
  const [userActions, setUserActions] = useState(storedActions);
  const [isRecording, setRecording] = useState(false);
  const [isPlaying, setPlaying] = useState(false);

  useEffect(() => {
    window.localStorage.setItem("userActions", JSON.stringify(userActions));
  });

  const createTodo = (newTodo) => {
    setTodos((todos) => [...todos, newTodo]);
    handleUserAction("CREATE", newTodo);
  };

  const deleteTodo = (todoToBeDeleted) => {
    handleUserAction("DELETE", todoToBeDeleted);
    setTodos((todos) => todos.filter((todo) => todo.id != todoToBeDeleted.id));
  };

  const updateTodo = (todoToBeUpdated) => {
    handleUserAction("UPDATE", todoToBeUpdated);
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id == todoToBeUpdated.id
          ? {
              ...todo,
              name: todoToBeUpdated.name,
              description: todoToBeUpdated.description,
            }
          : todo
      )
    );
  };

  const handleUserAction = (action, todo) => {
    isRecording ? setUserActions([...userActions, { action, todo }]) : {};
  };

  const toggleRecord = () => {
    setRecording(!isRecording);
  };

  const togglePlay = () => {
    if (userActions.length === 0) {
      return;
    }
    setPlaying(true);
    setTodos([]);
    setRecording(false);
    executePlayback();
  };

  const clearRecording = () => {
    setUserActions([]);
  };

  const executePlayback = () => {
    let i = 0;
    let playbackInterval = setInterval(() => {
      switch (userActions[i].action) {
        case "CREATE":
          createTodo(userActions[i].todo);
          break;
        case "DELETE":
          deleteTodo(userActions[i].todo);
          break;
        case "UPDATE":
          updateTodo(userActions[i].todo);
          break;
      }
      i++;
      if (i == userActions.length) {
        clearInterval(playbackInterval);
        setUserActions([]);
        setPlaying(false);
      }
    }, 1000);
  };

  return (
    <div className="app-container">
      <div>
        <h1>TODO PLAYBACK</h1>
      </div>
      <PlaybackControls
        toggleRecord={toggleRecord}
        togglePlay={togglePlay}
        clearRecording={clearRecording}
        isRecording={isRecording}
        isPlaying={isPlaying}
      />
      <List
        todos={todos}
        createTodo={createTodo}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
        isPlaying={isPlaying}
      />
    </div>
  );
};

export default App;
