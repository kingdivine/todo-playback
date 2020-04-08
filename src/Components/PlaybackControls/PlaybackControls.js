import React from "react";

const PlaybackControls = ({
  toggleRecord,
  togglePlay,
  clearRecording,
  isRecording,
  isPlaying,
}) => {
  return (
    <div>
      <button onClick={toggleRecord}>
        {isRecording ? "Stop Recording" : "Record"}
      </button>
      <button disabled={isPlaying} onClick={togglePlay}>
        Play
      </button>
      <button onClick={clearRecording}>Clear</button>
    </div>
  );
};

export default PlaybackControls;
