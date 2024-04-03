import React from "react";

const AddTodo = ({ input, handleClick, setInput }) => {
  return (
    <div className="container m-3">
      <span className="pe-2">Input box</span>
      <input
        className="input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btn btn-primary mx-2" onClick={handleClick}>
        add
      </button>
    </div>
  );
};

export default AddTodo;
