import React from "react";
import ReactDOM from "react-dom";

function Child(props) {
  return <div>{props.children}</div>;
}

const Card = function (props) {
  return (
    <div
      style={{
        width: props.width,
        height: props.height,
        borderRadius: "6px",
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 8px 24px",
      }}
    >
      {props.children}{" "}
    </div>
  );
};

ReactDOM.render(
  <div>
    <Child>Hello</Child>
    <Child>
      <h1>Title</h1>
      <ul>
        <li>item1</li>
        <li>item2</li>
      </ul>
    </Child>
  </div>,
  document.getElementById("root")
);
