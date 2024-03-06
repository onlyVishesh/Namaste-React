import React from "react";
import ReactDOM from "react-dom/client";

// React Element

// React Element is a plain JavaScript object that represents a DOM element or a component and renders as html using react dom.

const heading = React.createElement(
  "h1",
  { className: "heading" },
  "Hey, Welcome to the React World"
);

// JSX Element

// JSX is a syntax extension for JavaScript and comes with the full power of JavaScript. You can use it with React to describe what the UI should look like. JSX produces React “elements”.

// jsx is not html in javascript. it transpiled before it reaches the JS with the help of parcel babel

// jsx element --> react.createElement --> javascript object

const jsxHeading = (
  <h1 className="heading">Hey, Welcome to the React Jsx World</h1>
);

// React Component

// there are 2 type of component
// 1. Class based component - old method
// 2. functional component - new method

// functional component is just a js function

const Title = (name) => {
  return <p className="title">Welcome {name}, This is the title of the page</p>;
};

const Heading = () => {
  return (
    <h1 className="heading">
      Hey, Welcome to the React Functional Component World
    </h1>
  );
};

// component composition

const Intro = () => {

  const PI = 3.1415
  
  return (
    <>
      <Heading />
      <h3>Value of &#960; is {PI}</h3>
      {Title("onlyVishesh")}
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));

// render replaces the content of the container with a new one.
root.render([heading, jsxHeading, <Intro />]);
