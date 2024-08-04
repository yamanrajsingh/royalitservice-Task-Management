import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextInput,
  Label,
  Textarea,
  Button,
  Select,
  Alert,
} from "flowbite-react";

function AddTask() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState(false);

  const postTask = async (event) => {
    event.preventDefault();
    if (!title || !description || !date || !status) {
      setError(true);
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          description: description,
          date: date,
          status: status === "1",
        }),
      });

      if (response.ok) {
        navigate("/");
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
        setError(true);
      }
    } catch (error) {
      console.error("Network error:", error);
      setError(true);
    }
  };

  return (
    <div className="container">
      <h1 className="task-heading">Add Task</h1>
      <form className="flex max-w-md flex-col gap-4" onSubmit={postTask}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Enter Title" />
          </div>
          <TextInput
            id="email1"
            type="text"
            placeholder="Red Lipstick"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {error && !title && (
            <Alert color="failure" className="font-medium">
              <span > Please Enter Title</span>
            </Alert>
          )}
        </div>
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Your Description" />
          </div>
          <Textarea
            id="comment"
            placeholder="The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish."
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {error && !description && (
            <Alert color="failure" className="font-medium">
              <span >Please Enter Description</span>
            </Alert>
          )}
        </div>

        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="countries" value="Select your Status" />
          </div>
          <Select
            id="countries"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Completed</option>
            <option>Pending</option>
          </Select>
          {error && !status && (
            <Alert color="failure" className="font-medium">
              <span >Please Select Task Status</span>
            </Alert>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Enter Date" />
          </div>
          <TextInput
            id="email1"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          {error && !date && (
            <Alert color="failure" className="font-medium">
              <span   >Please Select Date</span>
            </Alert>
          )}
        </div>

        <Button type="submit">Add Task</Button>
      </form>
    </div>
  );
}

export default AddTask;
