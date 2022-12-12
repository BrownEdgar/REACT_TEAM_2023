import { useState } from "react";

import './sass/App.scss'

export default function App() {
  const [data, setData] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    setList((oldData) => [...oldData, data]);
    setData("");
    e.preventDefault();
  };

  const handleDelete = (id) => {
    setList((oldData) => oldData.filter((elem, index) => index !== id));
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="wrapper-frame">
          <div className="wrapper-frame-header">
            <h1 className="wrapper-frame-header-title">You have {list.length} Todos</h1>
          </div>
          <div className="wrapper-frame-list">
            {list.map((item, id) => (
              <div key={id} className="wrapper-frame-list-items">
                <p>{item}</p>
                <button onClick={() => handleDelete(id)}    className="wrapper-form-button">Delete</  button>
              </div>
            ))}
            <form onSubmit={(e) => handleSubmit(e)} className="wrapper-form">
              <input type="text" className="input" placeholder="Enter Item" value={data}  onChange={(e) => setData(e.target.value)}/>
              <button className="wrapper-form-button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
