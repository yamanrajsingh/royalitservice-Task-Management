import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextInput, Button, Label, Alert } from "flowbite-react";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const loginHandler = (e) => {
    e.preventDefault();
    if (email && password) {
      axios
        .post("http://localhost:3000/signin", { email, password })
        .then((res) => {
          localStorage.setItem("User", JSON.stringify(res));
          navigate("/");
        })
        .catch((err) => {
          setError(true);
          console.error(err);
        });
    } else {
      setError(true);
    }
  };

  return (
    <div className="container">
      <h1 className="login-heading">Login</h1>

      <form className="flex max-w-md flex-col gap-4" onSubmit={loginHandler}>
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
            <Alert color="failure">
              <span className="font-medium"> Please Enter Email</span>
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
            <Alert color="failure">
              <span className="font-medium"> Please Enter Password</span>
            </Alert>
          )}
        </div>
        <Button type="submit">Login</Button>
        {error && (
          <Alert color="failure">
            <span className="font-medium">Wrong Email And Password ! </span>
            Please type correct email and password
          </Alert>
        )}
      </form>
    </div>
  );
}

export default Login;
