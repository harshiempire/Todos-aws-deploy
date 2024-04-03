// import logo from './logo.svg';
import React, { useEffect, useState } from "react";

import "../App.css";

function Todolistarray() {
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
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
  const [indexToChange, setIndexToChange] = useState(0);

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
  // const handleEdit = (index)=>{

  //   //how to insert is the first idea and
  //   // next should i make a modal or input box where the value is the present todo list value
  //   // and save button should appear
  //   // const Checkarr = [...boxes]
  //   // setSave(Checkarr[index])
  //   // setEdit(true)
  //   const newEditStates = [...editStates];
  // newEditStates[index] = true;
  // setSave(boxes[index]); // Initialize save state with the current value
  // setEditStates(newEditStates);

  // }
  // const handleSave = (index)=>{
  //   const newEditStates = [...editStates];
  // newEditStates[index] = false;
  // setEditStates(newEditStates);

  //   const EditArr = [...boxes]
  //   EditArr[index] = input
  //   setBoxes(EditArr)
  //   setEdit(false)
  // }

  // const handleEdit = (index) => {
  //   const checkArr = [...boxes];
  //   setSave(checkArr[index]);
  //   setInput(""); // Clear the input
  //   setEditedInput(checkArr[index]); // Set the edited input
  //   setEdit(true);
  // };

  // const handleSave = (index) => {
  //   const editArr = [...boxes];
  //   editArr[index] = editedInput; // Use editedInput for saving
  //   setBoxes(editArr);
  //   setEdit(false);
  //   setEditedInput(""); // Clear the edited input
  // };

  // useEffect(()=>{
  //   console.log(editStates)
  // },[editStates])

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
      ) : (
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
      )}
      <div>
        <div class="h4 pb-2 mb-4 text-danger border-bottom border-danger">
          Todo list
        </div>
        <div className="container">
          {boxes.map((eachInput, index) => (
            <div className="border border-primary my-2" key={index}>
              {eachInput}

              <button
                className="btn btn-primary m-2"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
              <button
                className="btn btn-primary m-2"
                onClick={() => handleEdit(eachInput, index)}
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todolistarray;
