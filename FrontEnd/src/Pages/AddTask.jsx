import React from "react";

function AddTask() {
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
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Status
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Open this select status</option>
              <option value="1">Compeleted</option>
              <option value="2">Pending</option>
            </select>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Select Date
            </label>
            <input
              type="date"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-success lgn-btn">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTask;
