import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

function DrawStar(props) {
  const result = [];
  for (let i = 0; i < props.num; i++) {
    let s = "";
    for (let j = 0; j <= i; i++) {
      s += "*";
    }
    result.push(s);
    result.push(<br />);
  }
  return <div>{result}</div>;
}
ReactDOM.render(<DrawStar />, document.getElementById("root"));
