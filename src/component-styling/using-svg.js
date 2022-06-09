import React from "react";
import ReactDOM from "react-dom";
import SmileFace from "./smile.svg";
// 컴포넌트처럼 사용하기 위해서 import
import {ReactComponent as SmileFaceComponent} from "./smile.svg";
const App = function (props) {
  return (
    <div>
      {/* 이미지의 src 속성으로 불러온 값을 전달 */}
      <img src={SmileFace} style={{width: "200px"}} />
      <br />
      {/* component화 해서 불러오기 (이미지경로는 위에껄로 불러온거임) */}
      <SmileFaceComponent style={{width: "200px"}} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
