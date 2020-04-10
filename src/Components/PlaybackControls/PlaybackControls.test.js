import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitFor,
  getByText,
} from "@testing-library/react";

import PlayBackControls from "./PlaybackControls";

afterEach(cleanup);

describe("<PlayBackControls/>", () => {
  test("renders correctly", () => {
    expect(
      render(
        <PlayBackControls
          toggleRecord={jest.fn()}
          togglePlay={jest.fn()}
          clearRecording={jest.fn()}
          isRecording={false}
          isPlaying={false}
        />
      )
    ).toMatchSnapshot();
  });

  test("toggles recording when record button clicked", async () => {
    const recordFn = jest.fn();
    const { getByText } = render(
      <PlayBackControls
        toggleRecord={recordFn}
        togglePlay={jest.fn()}
        clearRecording={jest.fn()}
        isRecording={false}
        isPlaying={false}
      />
    );

    fireEvent.click(getByText("Record"));
    expect(recordFn).toHaveBeenCalledTimes(1);
  });

  test("toggles playing when play button clicked", () => {
    const playFn = jest.fn();
    const { getByText } = render(
      <PlayBackControls
        toggleRecord={jest.fn()}
        togglePlay={playFn}
        clearRecording={jest.fn()}
        isRecording={false}
        isPlaying={false}
      />
    );

    fireEvent.click(getByText("Play"));
    expect(playFn).toHaveBeenCalledTimes(1);
  });
});
