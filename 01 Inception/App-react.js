const heading_react = React.createElement(
  "h1",
  { id: "heading" },
  "This paragraph is created using React"
);
const para_react = React.createElement("p", {}, "Hello, React!!");

const root_react = ReactDOM.createRoot(document.querySelector(".root-react"));
root_react.render([heading_react, para_react]);
