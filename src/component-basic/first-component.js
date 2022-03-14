import React from "react";
import ReactDOM from "react-dom";

function FirstComponent() {
  return <div>First Component</div>; //jsx return
}

ReactDOM.render(<FirstComponent />, document.getElementById("root"));
