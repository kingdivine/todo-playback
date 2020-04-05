import React from "react";
import List from "../List/List";
import Controls from "../Controls/Controls";
import Filters from "../Filters/Filters";
import "./App.scss";

const App = () => {
  return (
    <div>
      <div>
        <h1>TODO PLAYBLACK</h1>
      </div>
      <Controls />
      <Filters />
      <List />
    </div>
  );
};

export default App;
