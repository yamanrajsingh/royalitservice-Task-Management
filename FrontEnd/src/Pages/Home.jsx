import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "flowbite-react";

function Home({ Todo }) {
  const navigate = useNavigate();

  const itemDelete = (id) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      {Todo.map((todo) => (
        <div className="card">
          <Card className="max-w-sm " key={todo._id}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {todo.title}
            </h5>

            <h6 className="font-normal text-gray-700 dark:text-gray-400">
              {todo.description}
            </h6>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Due Date: {todo.date}
            </p>

            <div className="flex flex-wrap gap-2">
              <Button.Group outline>
                <Button color="yellow" disabled>
                  {todo.status ? "Completed" : "Pending"}
                </Button>
                <Button
                  color="green"
                  onClick={() => {
                    navigate("/update/" + todo._id);
                  }}
                >
                  Update
                </Button>
                <Button
                  color="red"
                  onClick={() => {
                    itemDelete(todo._id);
                  }}
                >
                  Delete
                </Button>
              </Button.Group>
            </div>
          </Card>
        </div>
      ))}
    </>
  );
}

export default Home;
