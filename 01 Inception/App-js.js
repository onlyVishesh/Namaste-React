const heading_js = document.createElement("h1");
heading_js.innerHTML = "This paragraph is created using Javascript";
const para_js = document.createElement("p");
para_js.innerHTML = "Hello, Javascript!!";

const root_js = document.querySelector(".root-js");
root_js.appendChild(heading_js);
root_js.appendChild(para_js);
