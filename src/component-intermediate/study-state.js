import React from "react";
import ReactDOM from "react-dom";
import {useState} from "react";

function Counter(props) {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("a");

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>증가</button>
      <button onClick={() => setCount(count - 1)}>감소</button>
      <h1>{text}</h1>
      <button
        onClick={function () {
          setText(text + "a");
        }}
      >
        증가
      </button>
    </div>
  );
}

const UserProfile = props => {
  const [name, setName] = useState("아무개");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState(null);

  return (
    <div>
      {name} {age} {email}
    </div>
  );
};
ReactDOM.render(<UserProfile />, document.getElementById("root"));
