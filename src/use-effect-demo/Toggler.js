import React, {useEffect, useState} from "react";

function Toggler(props) {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      {/* 자식 컴포넌트 값 모두 가져온거: children */}
      {toggle ? props.children : null}
      <button
        onClick={() => {
          setToggle(s => !s);
        }}
      >
        Toggle
      </button>
    </div>
  );
}

// Toggler 컴포넌트 export
export default Toggler;
