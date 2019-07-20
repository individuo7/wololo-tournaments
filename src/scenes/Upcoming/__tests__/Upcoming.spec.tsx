import React from "react";
import ReactDOM from "react-dom";
import { Upcoming } from "../Upcoming";

describe("Upcoming Scene", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Upcoming />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
