import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextInput, Button, Label, Alert } from "flowbite-react";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);

  const registerHandler = (e) => {
    e.preventDefault();
    if (name && email && password && phone) {
      axios
        .post("http://localhost:3000/signup", {
          username: name,
          email: email,
          password: password,
          phonenumber: phone,
        })
        .then((res) => {
          console.log(res);
          navigate("/signin");
        })
        .catch((err) => {
          console.error(err);
          setError(true);
        });
    } else {
      setError(true);
    }
  };

  return (
    <div className="container">
      <h1 className="task-heading">Registration</h1>

      <form className="flex max-w-md flex-col gap-4" onSubmit={registerHandler}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your Name" />
          </div>
          <TextInput
            id="email1"
            type="text"
            placeholder="Yaman Raj Singh"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {error && !name && (
            <Alert color="failure" className="font-medium">
              <span > Please Enter Your Name</span>
            </Alert>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="xyz@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && !email && (
            <Alert color="failure" className="font-medium">
              <span > Please Enter Email</span>
            </Alert>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            type="password"
            placeholder="***********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && !password && (
            <Alert color="failure" className="font-medium">
              <span > Please Enter Password</span>
            </Alert>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your Contact Number" />
          </div>
          <TextInput
            id="email1"
            type="number"
            placeholder="+91 8445899130"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {error && !phone && (
            <Alert color="failure" className="font-medium">
              <span > Please Enter Contact Number</span>
            </Alert>
          )}
        </div>
        <Button type="submit">Register</Button>
        {error && email && name && phone && password && (
          <Alert color="failure" className="font-medium">
            <span >Email id Already Exists ! </span>
          </Alert>
        )}
      </form>
    </div>
  );
}

export default Register;
