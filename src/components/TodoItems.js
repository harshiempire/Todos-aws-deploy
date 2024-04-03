import React from "react";

const TodoItems = ({ todo, index, onHandleDelete, onHandleEdit }) => {
  return (
    <div className="border border-primary my-2" key={index}>
      {todo}

      <button
        className="btn btn-primary m-2"
        onClick={() => onHandleDelete(index)}
      >
        Delete
      </button>
      <button
        className="btn btn-primary m-2"
        onClick={() => onHandleEdit(todo, index)}
      >
        Edit
      </button>
    </div>
  );
};

export default TodoItems;
