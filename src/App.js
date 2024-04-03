import Todolistarray from "./components/Todolistarray";
import TodolistlocalStorage from "./components/TodolistlocalStorage";
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import TodolistRefactor from "./components/TodoListRefactor";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Todolistarray />} />
      <Route path="/TodolistlocalStorage" element={<TodolistlocalStorage />} />
      <Route path="/TodoRefactor" element={<TodolistRefactor />} />
    </Routes>
  );
}

export default App;
