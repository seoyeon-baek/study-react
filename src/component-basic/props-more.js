import React from "react";
import ReactDOM from "react-dom";

function PropsTest(props) {
  const {a, b, c} = props;
  return (
    <div>
      a={props.a} <br /> b={props.b} <br /> c={props.c}
    </div>
  );
}

ReactDOM.render(
  <PropsTest a="hello" b={100} c={{wolrd: 200}} />,
  document.getElementById("root")
);
