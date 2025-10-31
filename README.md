# MERN Stack Blog Application

This is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) blog application that allows users to create, read, update, and delete blog posts. It also includes features like categories, user authentication, and more.

## Features

*   **Posts:** Create, read, update, and delete blog posts.
*   **Categories:** Organize posts into categories.
*   **User Authentication:** User registration and login. (In progress)
*   **RESTful API:** A well-structured API for managing blog data.
*   **React Frontend:** A responsive and interactive user interface built with React.

## Technologies Used

*   **MongoDB:** NoSQL database for storing blog data.
*   **Express.js:** Web framework for Node.js, used for building the RESTful API.
*   **React.js:** JavaScript library for building the user interface.
*   **Node.js:** JavaScript runtime for the backend server.
*   **Mongoose:** Object Data Modeling (ODM) library for MongoDB and Node.js.
*   **Axios:** Promise-based HTTP client for making API requests from the React frontend.
*   **React Router:** For handling routing in the React application.
*   **Express Validator:** For input validation in the Express API.

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```

2.  **Install server dependencies:**
    ```bash
    cd server
    npm install
    ```

3.  **Install client dependencies:**
    ```bash
    cd client
    npm install
    ```

4.  **Set up environment variables:**
    Create a `.env` file in the `server` directory and add the following:
    ```
    MONGODB_URI=<your_mongodb_connection_string>
    ```
    Create a `.env` file in the `client` directory and add the following:
    ```
    VITE_API_URL=http://localhost:5000/api
    ```

5.  **Start the development servers:**
    In the `server` directory:
    ```bash
    npm run dev
    ```
    In the `client` directory:
    ```bash
    npm run dev
    ```

## API Endpoints

### Posts

*   `GET /api/posts`: Get all blog posts.
*   `GET /api/posts/:id`: Get a specific blog post.
*   `POST /api/posts`: Create a new blog post.
*   `PUT /api/posts/:id`: Update an existing blog post.
*   `DELETE /api/posts/:id`: Delete a blog post.

### Categories

*   `GET /api/categories`: Get all categories.
*   `POST /api/categories`: Create a new category.

### Authentication

*   `POST /api/auth/register`: Register a new user.
*   `POST /api/auth/login`: Log in a user.

## Folder Structure

```
.
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── ...
└── server/
    ├── models/
    ├── routes/
    ├── .env.example
    └── server.js
```

## Screenshots

*Coming soon...*