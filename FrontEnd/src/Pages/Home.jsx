import React from "react";
import { useNavigate } from "react-router-dom";

function Home({ Todo }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="row">
        {Todo.map((todo) => (
          <div className="col-sm-6 mb-3 mb-sm-0" key={todo.id}>
            <div className="card">
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                X
              </span>
              <div className="card-body">
                <h5 className="card-title">{todo.title}</h5>
                <p className="card-text">{todo.description}</p>
                <p className="card-text">
                  {" "}
                  <b> Due Date</b> : {todo.reviews[0].date}
                </p>
                <a href="#" className="btn btn-success st-btn">
                  {todo.category}
                </a>
                <button
                  className="btn btn-primary up-btn"
                  onClick={() => {
                    navigate("/update/" + todo.id);
                  }}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
