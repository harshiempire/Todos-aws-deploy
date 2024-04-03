// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import TodoItems from "./TodoItems";

import "../App.css";
import EditTodo from "./EditTodo";
import AddTodo from "./AddTodo";

function TodolistRefactor() {
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [indexToChange, setIndexToChange] = useState(0);
  //   const [save,setSave] =useState("");
  // const [boxes, setBoxes] = useState([]);
  const [boxes, setBoxes] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const handleClick = () => {
    if (input !== "") {
      setBoxes((prevInput) => [...prevInput, input]);
      setInput("");
    }
  };
  const handleDelete = (index) => {
    const tempBox = [...boxes];
    tempBox.splice(index, 1);
    setBoxes(tempBox);
  };

  const handleEditIntoOrig = () => {
    const tempArr = [...boxes];
    tempArr[indexToChange] = input;
    setBoxes(tempArr);
    setIsEditing(false);
    setInput("");
  };
  const handleEdit = (eachInput, index) => {
    setIndexToChange(index);
    setInput(eachInput);
    setIsEditing(true);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(boxes));
    console.log(boxes);
  }, [boxes]);

  return (
    <div className="App">
      {!isEditing ? (
        <AddTodo input={input} handleClick={handleClick} setInput={setInput} />
      ) : (
        <EditTodo
          input={input}
          handleEditIntoOrig={handleEditIntoOrig}
          setInput={setInput}
        />
      )}
      <div>
        <div class="h4 pb-2 mb-4 text-danger border-bottom border-danger">
          Todo list
        </div>
        <div className="container">
          {boxes.map((eachInput, index) => (
            <TodoItems
              todo={eachInput}
              index={index}
              onHandleDelete={handleDelete}
              onHandleEdit={handleEdit}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodolistRefactor;
