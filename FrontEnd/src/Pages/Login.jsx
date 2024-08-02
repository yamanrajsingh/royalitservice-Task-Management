import React from "react";

function Login() {
  return (
    <div>
      <h1 className="lgn-heading">Login</h1>
      <div className="frm">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-success lgn-btn ">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
