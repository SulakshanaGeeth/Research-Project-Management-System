import React from "react";
import StudentGroup from "./../Student/StudentGroup";
import RequestSupervisor from "./../Student/RequestSupervisor";
import SubmitDocument from "./../Student/SubmitDocument";
import SubmitPresentation from "./../Student/SubmitPresentation";

import "@testing-library/jest-dom";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

it("render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<StudentGroup></StudentGroup>, div);
});

it("render correct", () => {
  const inputNode = document.getElementById("supervisor_name");
  expect(inputNode);
});

it("render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RequestSupervisor></RequestSupervisor>, div);
});

it("render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SubmitDocument></SubmitDocument>, div);
});
it("render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SubmitPresentation></SubmitPresentation>, div);
});
