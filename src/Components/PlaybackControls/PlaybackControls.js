import React from "react";

import "./PlaybackControls.scss";

const PlaybackControls = ({
  toggleRecord,
  togglePlay,
  clearRecording,
  isRecording,
  isPlaying,
}) => {
  return (
    <div>
      <button className="record-btn" onClick={toggleRecord}>
        {isRecording ? "Stop Recording" : "Record"}
      </button>
      <button className="play-btn" disabled={isPlaying} onClick={togglePlay}>
        Play
      </button>
      <button className="clear-btn" onClick={clearRecording}>
        Clear
      </button>
    </div>
  );
};

export default PlaybackControls;
