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
    handleSave(todo ? todo : null, name, description);
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
          placeholder="Description..."
          maxLength="140"
          cols="20"
          rows="5"
          onChange={(e) => handleDescriptionInputKeyPress(e)}
        ></textarea>
      </div>
      <div>
        <button disabled={name.length === 0} onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Form;
