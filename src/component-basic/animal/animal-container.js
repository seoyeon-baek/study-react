import React from "react";
import ReactDOM from "react-dom";

const add = (x, y) => {
  return x + y;
};

//인자가 하나일경우 소괄호 생략, 중괄호 및 return 생략가능 (한줄일 경우만 가능)
// 중괄호 안쓰면 해당 식이 평가된 값이 바로 반환됨
const double = x => 2 * x;

//인자 값이 하나가 아닌 아무것도 없는 경우에도 생략하면 안됨
const sayHello = () => console.log("hello");

//함수 선언식을 통해서 컴포넌트 정의 가능
function Cat() {
  return <div>😺</div>;
}

//함수 표현식을 사용해서 컴포넌트 정의 가능
const Dog = function () {
  return <div>🐶</div>;
};

//화살표함수로 컴포넌트 정의 가능
const Pig = () => <div>🐷</div>;

function AnimalContainer() {
  return (
    <div style={{fontSize: "100px"}}>
      <Cat />
      <Dog />
      <Pig />
    </div>
  );
}
ReactDOM.render(<AnimalContainer />, document.getElementById("root"));
