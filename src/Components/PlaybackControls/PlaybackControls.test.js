import React from "react";
import { render, cleanup, fireEvent, waitFor } from "@testing-library/react";

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

  // test("toggles state when record button clicked", async () => {
  //   const { queryByText } = render(
  //     <PlayBackControls
  //       toggleRecord={jest.fn()}
  //       togglePlay={jest.fn()}
  //       clearRecording={jest.fn()}
  //       isRecording={false}
  //       isPlaying={false}
  //     />
  //   );

  //   expect(queryByText("Record")).toBeTruthy();
  //   expect(queryByText("Stop Recording")).toBeNull();
  // });
});
