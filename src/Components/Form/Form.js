import React, { useState } from "react";

import "./Form.scss";

const Form = ({ todo, handleSave }) => {
  const [name, setName] = useState(todo ? todo.name : "");
  const [description, setDescription] = useState(todo ? todo.description : "");

  const handleNameInputKeyPress = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleDescriptionInputKeyPress = (event) => {
    event.preventDefault();
    setDescription(event.target.value);
  };

  const handleSaveClick = () => {
    handleSave(todo ? todo : null, name.trim(), description.trim());
  };

  return (
    <div className={"form-container"}>
      <div>
        <input
          value={name}
          type="text"
          placeholder="Name"
          maxLength="30"
          onChange={(e) => handleNameInputKeyPress(e)}
        ></input>
      </div>
      <div>
        <textarea
          value={description}
          placeholder="Enter task description..."
          maxLength="140"
          rows="10"
          onChange={(e) => handleDescriptionInputKeyPress(e)}
        ></textarea>
      </div>
      <div>
        <button
          className="save-btn"
          disabled={name.trim() === ""}
          onClick={handleSaveClick}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Form;
