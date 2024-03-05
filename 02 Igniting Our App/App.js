import React from "react";
import ReactDOM from "react-dom/client";

const heading_react = React.createElement(
  "h1",
  { id: "heading" },
  "This paragraph is created using React"
);
const para_react = React.createElement("p", {}, "Hello, Parcel!!");

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render([heading_react, para_react]);
