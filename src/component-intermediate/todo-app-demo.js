import React, {useState} from "react";
import ReactDOM from "react-dom";

const TodoList = function ({todos, handleTodoStatusToggle, handleTodoRemove}) {
  return (
    <ol>
      {todos.map((todo, idx) => {
        return (
          <li key={idx}>
            <TodoItem
              idx={idx}
              todo={todo}
              handleTodoStatusToggle={handleTodoStatusToggle}
              handleTodoRemove={handleTodoRemove}
            />
          </li>
        );
      })}
    </ol>
  );
};

const TodoItem = function ({
  todo: {completed, text},
  idx,
  handleTodoStatusToggle,
  handleTodoRemove,
}) {
  const [count, setCount] = useState(0);
  const style = (count, completed) => {};
  return (
    <div>
      <span
        style={completed ? {textDecoration: "line-through"} : null}
        onClick={() => handleTodoStatusToggle(idx)}
      >
        {text}
        {/* {important} */}
      </span>
      &nbsp;
      <span>(중요도: {count})</span>
      &nbsp;
      <button onClick={() => setCount(count + 1)}>증가</button>
      &nbsp;
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>감소</button>
      &nbsp;
      <button onClick={() => handleTodoRemove(idx)}>삭제</button>
      <hr />
    </div>
  );
};

const TodoAdder = function ({handleTodoAdd}) {
  const [input, setInput] = useState("");
  const handleChange = e => setInput(e.target.value);
  {
    /* event가 발생한 target(input)의 value값 */
  }
  return (
    <div>
      <input type="text" onChange={handleChange} value={input} />
      <button
        onClick={() => {
          handleTodoAdd({completed: false, text: input}); //완료가안된todo를 생성해야하니 false값으로 주고 text는 input값에서 받아옴
          setInput("");
        }}
      >
        추가
      </button>
    </div>
  );
};

const TodoApp = function (props) {
  const [todos, setTodos] = useState([
    {completed: false, text: "리액트 공부하기"},
    {completed: true, text: "ES6 문법 공부하기"},
  ]);

  const handleTodoAdd = newTodo => setTodos(todos => todos.concat(newTodo));
  const handleTodoStatusToggle = todoIndex => {
    setTodos(todos => {
      return todos.map((todo, idx) => {
        if (idx === todoIndex) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  };
  const handleTodoRemove = todoIndex => {
    setTodos(todos => {
      return todos.filter((_, idx) => {
        return idx !== todoIndex;
      });
    });
  };

  return (
    <div>
      {/* 투두 리스트 출력 컴포넌트  */}
      <TodoList
        todos={todos}
        handleTodoStatusToggle={handleTodoStatusToggle}
        handleTodoRemove={handleTodoRemove}
      />

      {/* 할일추가 컴포넌트 */}
      <TodoAdder handleTodoAdd={handleTodoAdd} />
    </div>
  );
};

ReactDOM.render(<TodoApp />, document.getElementById("root"));
