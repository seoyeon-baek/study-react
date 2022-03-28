import React from "react";
import ReactDOM from "react-dom";
import {useState} from "react";

const StateDemoComponent = props => {
  const [state, setState] = useState({
    value: "hello",
    value2: {
      inner1: "world",
      inner2: 1234,
    },
    value3: {
      inner3: "react",
      inner4: 9999,
    },
  });

  return (
    <div>
      <h1>{state.value1}</h1>
      <h1>{JSON.stringify(state.value2)}</h1>
      <h1>{JSON.stringify(state.value3)}</h1>
      <button
        onClick={() => {
          // 중첩 객체인 value2의 inner2 값만을 수정하고 싶다고 가정
          setState({
            ...state,
            value2: {
              // 중첩 객체의 내용도 복사 필요 (안그러면 inner1 값이 사라지게 됨)
              ...state.value2,
              inner2: 5678,
            },
          });
        }}
      >
        값 변경
      </button>
    </div>
  );
};
