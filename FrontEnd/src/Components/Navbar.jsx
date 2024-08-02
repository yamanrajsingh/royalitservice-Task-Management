import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  const auth = true;
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary "
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/">
                  {" "}
                  <a class="nav-link active" aria-current="page">
                    Home
                  </a>{" "}
                </Link>
              </li>
              {auth && (
                <li className="nav-item">
                  <li className="nav-item">
                    <Link to="/add">
                      {" "}
                      <a class="nav-link active" aria-current="page">
                        Add Task
                      </a>{" "}
                    </Link>
                  </li>
                </li>
              )}
            </ul>
            {auth ? (
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            ) : (
              <ul className="navbar-nav  mb-2 mb-lg-0 d-flex">
                <li className="nav-item">
                  <Link to="/signin">
                    <button className="btn btn-outline-warning" type="submit">
                      Login
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup">
                    <button className="btn btn-outline-warning" type="submit">
                      Signup
                    </button>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
