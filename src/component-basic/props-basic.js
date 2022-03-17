import React from "react";
import ReactDOM from "react-dom";

//비구조화할당 (구조분해할당)
// const arr = [100, 200];
// const [v1, v2] = arr;

// //일반 배열 선언
// // const v1 = arr[0];
// // const v2 = arr[1];

// const [v3] = arr; //100출력하고 200은 버린다.

// //객체 비구조화 할당
const user = {name: "John", age: 20};
// // const {name, age} = user;

// // const name = user.name;
// // const age = user.age;

// // const name = "Hello";
// const {name: n, age} = user;

const name = "Hello";
const {name: n, age} = user;

function f({name: n, age}) {
  console.log(n, age);
}

function f2(user) {
  const name = user.name;
  const age = user.age;
  console.log(name, age);
}

const ComponetWithMultipleProps = function (props) {
  console.log(props);
  const {value1, value2, whatever} = props;
  const propsObj = {
    value1: 2,
    value2: "javaScript",
    whatever: 2.345,
  };

  return (
    <p>
      {propsObj.value1}
      {propsObj.value2}
      {propsObj.whatever}
    </p>
  );
};

// const ComponentWithProps = function (props) {
//   props.value.a = 2;
//   props.value.b = "vue";
//   return <p>{JSON.stringify(props)}</p>;
// };

// const Greeting = props => {
//   const {name} = props;
//   return (
//     <div>
//       <h1>Hello, {name}</h1>
//     </div>
//   );
// };

const Greeting = props => {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
    </div>
  );
};

const Sum = props => {
  return (
    <div>
      <h1>
        x: {props.x} <br /> y: {props.y}
      </h1>
    </div>
  );
};

const PersonProfile = function ({name, age, gender, profile, highlight}) {
  return (
    // hightlight는 undefined이고 true면 빨강 false면 Null 추출
    <div
      className="person"
      style={highlight ? {color: "red", backgroundColor: "yellow"} : null}
    >
      <h1>Profile</h1>
      <img src={profile} />
      <p>name : {name}</p>
      <p>age : {age}</p>
      <p>gender : {gender}</p>
    </div>
  );
};

const anotherPerson = {
  name: "Jane",
  age: 28,
  gender: "female",
  profile: "https://randomuser.me/api/portraits/women/75.jpg",
};

ReactDOM.render(
  // <Greeting name="김미림" />,
  // <Sum x={1} y={2} />,
  //   <ComponentWithProps value={{a: 1, b: "react"}} />,
  //   <ComponentWithProps value={() => {}} />,
  <div>
    <PersonProfile
      name="John"
      age={35}
      gender="male"
      profile="https://randomuser.me/api/portraits/men/75.jpg"
    />
    <PersonProfile {...anotherPerson} highlight />
  </div>,
  document.getElementById("root")
);
