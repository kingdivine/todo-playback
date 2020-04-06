import React from "react";

const PlaybackControls = ({ toggleRecord, togglePlay, clearRecording }) => {
  return (
    <div>
      <button onClick={toggleRecord}>Record</button>
      <button onClick={togglePlay}>Play/Stop</button>
      <button onClick={clearRecording}>Clear</button>
    </div>
  );
};

export default PlaybackControls;
