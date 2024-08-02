import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AddTask from "./Pages/AddTask";
import Home from "./Pages/Home";
import { useEffect, useState } from "react";
import UpdateTask from "./Components/UpdateTask";
function App() {
  const [Todo, SetTodo] = useState([]);
  useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => SetTodo(data.products));
  },[]);
  
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home Todo={Todo} />} />
          <Route path="/add" element={<AddTask />} />
          <Route path="/update/:id" element={<UpdateTask />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
