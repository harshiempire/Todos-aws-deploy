import React from "react";

const EditTodo = ({ input, handleEditIntoOrig, setInput }) => {
  return (
    <div className="container m-3">
      <span className="pe-2">Edit box</span>
      <input
        className="input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btn btn-primary mx-2" onClick={handleEditIntoOrig}>
        Save
      </button>
    </div>
  );
};

export default EditTodo;
