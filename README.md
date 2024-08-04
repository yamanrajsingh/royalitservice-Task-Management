# Task Management System

## Overview
A task management application to create, read, update, and delete tasks. Each task includes a title, description, status, and due date.

## Features

- User-friendly interface for managing tasks
- CRUD operations for tasks
- Pagination for task list
- Task filtering and sorting options
- User authentication and authorization

## Technologies Used

- Frontend: React,Flowbite-react,tailwind
- Backend: Node.js, Express
- Database: MongoDB, Mongoose
- Authentication: JWT, BCRYPT
- Testing: Postman


## Implementation
- **State Management**: The application uses React's `useState` for managing the state of tasks, editing mode, and search queries.
- **Fetching Data**: Initial tasks are fetched from  API and stored in the MongoDB.
- **Task Manipulation**: Users can add new tasks, update existing ones, and toggle their completion status. The state is updated accordingly, and the UI reflects these changes in real-time.
- **Search Functionality**: The search feature filters tasks based on user input, matching task descriptions in a case-insensitive manner.

## Setup and Running the Application

### Prerequisites
- **Node.js** and **npm** (Node Package Manager) installed on your machine.

### Installation

1. **Clone the Repository**

     **For Front-End**
  - git clone https://github.com/yamanrajsingh/royalitservice-Task-Management.git
  - cd royalitservice-Task-Management
  - cd FrontEnd
  - npm install

   **For Back-End**
 -  cd BackEnd
 -  npm install
   
3. **Running the Application**
  - npm run dev - FrontEnd
  - nodemon - BackEnd

### API Endpoints

  - GET /tasks: Fetch all tasks
  - GET /tasks/:id: Fetch a specific task by ID
  - POST /tasks: Create a new task
  - PUT /tasks/:id: Update an existing task by ID
  - DELETE /tasks/:id: Delete a task by ID














    
