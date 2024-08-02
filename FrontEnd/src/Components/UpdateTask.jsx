import React, { useState } from "react";
import { useParams } from "react-router-dom";

function UpdateTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");

  const params = useParams();
  fetch(`https://dummyjson.com/products/${params.id}`)
    .then((res) => res.json())
    .then((data) => {
      setTitle(data.title);
      setDescription(data.description);
      setStatus(data.category);
      setDate("2002-10-12");
    }
);



  return (
    <div>
      <h1 className="lgn-heading">Add Task</h1>
      <div className="frm">
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Title here..."
              aria-describedby="emailHelp"
              value={title}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter description here..."
              value={description}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Status
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              
            >
              <option selected>{status.length>0 ? status :
                "Open this to select status"}</option>
              <option value="1">Compeleted</option>
              <option value="2">Pending</option>
            </select>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Date
            </label>
            <input
              type="date"
              className="form-control"
              id="exampleInputPassword1"
              value={date}
            />
          </div>

          <button type="submit" className="btn btn-success lgn-btn">
            Update Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateTask;
