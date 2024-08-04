"use client";
import React from "react";
import { Navbar, Button, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";

function Nav() {
  const Navigate = useNavigate();
  const auth = localStorage.getItem("User");
  const logout = () => {
    localStorage.clear();
    Navigate("/signup");
  };

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Task Manager
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {auth && (
          <>
            <TextInput
              id="base"
              type="text"
              sizing="md"
              placeholder="Search ..."
            />
            <Button>Search</Button>
          </>
        )}

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {auth ? (
          <>
            <Navbar.Link href="/" active>
              Home
            </Navbar.Link>
            <Navbar.Link href="/add">Add Task</Navbar.Link>
            <Navbar.Link
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
            <Navbar.Link href="/signin">Login</Navbar.Link>
            <Navbar.Link href="/signup">SignUp</Navbar.Link>
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;
