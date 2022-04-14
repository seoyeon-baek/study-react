import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

const ClickGame = function (props) {
  const [timerState, setTimerState] = useState({
    time: props.time,
    timeout: false,
  });

  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    console.log("setInterval");
    const id = setInterval(() => {
      setTimerState(prevState => {
        console.log("from setInterval", id);
        if (prevState.time === 1) {
          console.log("clearInterval (by timeout)");
          clearInterval(id);
          return {...prevState, timeout: true, time: prevState.time - 1};
        } else {
          return {...prevState, time: prevState.time - 1};
        }
      });
    }, 1000);
    return () => {
      console.log("clearInterval (by unmount)", id);
      clearInterval(id);
    };
  }, []);

  const style = {
    color: "wihte",
    fontSize: "24px",
    fontWeight: "bold",
    border: "0px",
    borderRadius: "50%",
    background: "red",
    width: "100px",
    height: "100px",
  };

  if (timerState.timeout) {
    style.background = "gray";
    //     style.display = "none";
  }

  return (
    <div>
      {timerState.timeout ? (
        <h2>게임 끝</h2>
      ) : (
        <h2>남은 시간: {timerState.time}</h2>
      )}
      <h2>클릭횟수: {clickCount}</h2>
      {timerState.timeout ? null : (
        <button
          style={style}
          onClick={() => {
            if (timerState.timeout === false) setClickCount(c => c + 1);
          }}
        >
          클릭
        </button>
      )}
    </div>
  );
};

ReactDOM.render(<ClickGame time={5} />, document.getElementById("root"));
