"use client";
import React, { useState } from "react";
import { Navbar, Button, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";

function Nav() {
  const Navigate = useNavigate();
  const auth = localStorage.getItem("User");
  const [search,Setsearch] = useState("");
  const logout = () => {
    localStorage.clear();
    Navigate("/signup");
  };

  return (
    <Navbar fluid rounded className="navbar">
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Task Manager
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {auth && (
          <>
            <TextInput
            className="search"
              id="base"
              type="text"
              sizing="md"
              placeholder="Search ..."
              value={search}
              onChange={(e) => Setsearch(e.target.value)}
            />
            <Button>Search</Button>
          </>
        )}

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {auth ? (
          <>
            <Navbar.Link href="/" active  className="nav">
            
              Home
            </Navbar.Link>
            <Navbar.Link href="/add"  className="nav">Add Task</Navbar.Link>
            <Navbar.Link
             className="nav"
              href="/signin"
              onClick={() => {
                logout();
              }}
            >
              Logout ( {JSON.parse(auth).data.name} )
            </Navbar.Link>
          </>
        ) : (
          <>
            <Navbar.Link href="/signin" className="nav">Login</Navbar.Link>
            <Navbar.Link href="/signup"  className="nav">SignUp</Navbar.Link>
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;
