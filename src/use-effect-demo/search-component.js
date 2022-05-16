import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const handleChange = e => setSearch(e.target.value);

  return (
    <div>
      <input type="text" onChange={handleChange} onClick={search} />
      <input
        type="button"
        value="검색"
        onClick={() => {
          alert(search);
        }}
      />
    </div>
  );
};

const App = props => {
  const [userName, setUserName] = useState(null);


  useEffect(() => {
    if (userName !== null) {
      alert(userName);
    }
  }, [userName]);

  return (
    <>
      <Search onSearch={setUserName} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
