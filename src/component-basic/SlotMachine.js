import React from "react";
import ReactDOM from "react-dom";

function SlotMachine(props) {
  const {s1, s2, s3} = props;
  const allSame = s1 === s2 && s2 === s3;
  const allSeven = allSame && s1 === "7";
  return (
    <div>
      <div>
        {s1} {s2} {s3}{" "}
      </div>
      {allSame && (
        <div style={allSeven ? {color: "red"} : null}>Congrates!</div>
      )}
      <hr />
    </div>
  );
}

ReactDOM.render(
  <div>
    <SlotMachine s1="x" s2="y" s3="z" />
    <SlotMachine s1="x" s2="x" s3="x" />
    <SlotMachine s1="7" s2="7" s3="7" />
    <SlotMachine s1="🍓" s2="🍒" s3="🥝" />
    <SlotMachine s1="🍒" s2="🍒" s3="🍒" />
  </div>,
  document.getElementById("root")
);
