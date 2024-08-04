import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AddTask from "./Pages/AddTask";
import Home from "./Pages/Home";
import { useEffect, useState } from "react";
import UpdateTask from "./Components/UpdateTask";
import PrivateComponenet from "./Components/PrivateComponent";

function App() {
  const [Todo, SetTodo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tasks/")
      .then((res) => res.json())
      .then((data) => SetTodo(data));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Nav Todo ={Todo} />
       
        <Routes>
          <Route element={<PrivateComponenet />}>
            <Route path="/" element={<Home Todo={Todo} />} />
            <Route path="/add" element={<AddTask />} />
            <Route path="/update/:id" element={<UpdateTask />} />
          </Route>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
