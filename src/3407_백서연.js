import React, {useState} from "react";
import ReactDOM from "react-dom";

const Rectangle = props => {
  return (
    <div
      style={{
        width: props.width,
        height: props.height,
        backgroundColor: props.color,
      }}
    ></div>
  );
};

const CheckOdd = props => {
  return (
    <div>
      {props.num}은{props.num % 2 === 0 ? "짝수임" : "홀수임"}
    </div>
  );
};

const Calculator = ({num1, num2, op}) => {
  let result;
  if (op === "+") result = num1 + num2;
  if (op === "-") result = num1 - num2;
  if (op === "*") result = num1 * num2;
  if (op === "/") result = num1 / num2;
  return (
    <div>
      <div>숫자1:{num1}</div>
      <div>숫자2:{num2}</div>
      <div>연산자:{op}</div>
      <div>결과:{result}</div>
      <br />
    </div>
  );
};

ReactDOM.render(
  <div>
    <Rectangle width="100px" height="100px" color="#FF0000" />
    <Rectangle width="200px" height="100px" color="#0000FF" />
    <CheckOdd num={3} />
    <CheckOdd num={4} />
    <Calculator num1={2} num2={5} op="+" />
    <Calculator num1={2} num2={5} op="-" />
    <Calculator num1={2} num2={5} op="*" />
    <Calculator num1={4} num2={2} op="/" />
  </div>,
  document.getElementById("root")
);
