import React from "react";
import ReactDOM from "react-dom";
import {useState} from "react";

const StateDemoComponent = function (props) {
  const [state, setState] = useState({
    value1: "hello",
    value2: 1000,
  });

  return (
    <div>
      <button
        onClick={() => {
          if (state.value1 === "hello") {
            //기존 객체를 복사하는 과정에서 새롭게 값을 갱신해주는 것을 확인 가능
            state.value1 = "bye";
            console.log(state);
            setState({...state, value: "bye"});
            //     setState({...state, value: "bye"});
          } else {
            state.value2 = "hello";
            console.log(state);
            setState({...state, value: "hello"});
            //     setState({...state, value1: "hello"});
          }
        }}
      >
        {state.value1}
      </button>
      <br />
      <button
        onClick={() => {
          setState({...state, value2: state.value2 * 2});
        }}
      >
        {state.value2}
      </button>
    </div>
  );
};

ReactDOM.render(<StateDemoComponent />, document.getElementById("root"));
