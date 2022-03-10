import React from "react";
import ReactDOM from "react-dom";

const div1 = (
  <div>
    {true}
    {false}
    {undefined}
    {null}
  </div>
);

const unreadMessages = ["메세지2", "메세지3"];
const div2 = (
  <div>
    <h1>Hello!</h1>
    {/* 만약 읽지 않은 메세지가 있다면 경고문 출력 */}
    {unreadMessages.length > 0 ? (
      <h2>You have {unreadMessages.length} unread messages.</h2>
    ) : (
      <h2>메세지를 다 읽으셨습니다.</h2>
    )}
  </div>
);

function conditionalRender(age) {
  if (age >= 20) {
    return <div>성인</div>;
  } else {
    return <div>미성년자</div>;
  }
}

const div3 = <div>{conditionalRender(30)}</div>;

let age = 30;
let el;
if (age >= 20) {
  el = <div>성인</div>;
} else {
  el = <div>미성년자</div>;
}

const div4 = <div>{el}</div>;

const h1 = (
  <h1 style={{color: "red", backgroundColor: "lightblue", fontSize: "50px"}}>
    Hello Style!
  </h1>
);
ReactDOM.render(h1, document.getElementById("root"));
