# Simple Bookstore API

A simple Node.js REST API that manages a collection of books using an in-memory array.

## Features

- Get all books
- Get a single book by ID
- Add a new book
- Update a book by ID
- Delete a book by ID

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yousseftawakal/Simple-Bookstore-API.git
   cd Simple-Bookstore-API
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Usage

### Start the Server

```sh
npm start
```

### API Endpoints

#### Get All Books

- **Endpoint:** `GET /books`
- **Response:**
  ```json
  {
    "status": "success",
    "size": 10,
    "data": {
      "books": [
        { "id": 1739741870410, "title": "The Great Gatsby", "author": "F. Scott Fitzgerald" },
        ...
      ]
    }
  }
  ```

#### Get a Book by ID

- **Endpoint:** `GET /books/:id`
- **Response (Success):**
  ```json
  {
  	"status": "success",
  	"data": {
  		"book": { "id": 1739741870410, "title": "The Great Gatsby", "author": "F. Scott Fitzgerald" }
  	}
  }
  ```
- **Response (Not Found):**
  ```json
  {
  	"status": "fail",
  	"message": "No book found with that ID."
  }
  ```

#### Create a Book

- **Endpoint:** `POST /books`
- **Request Body:**
  ```json
  {
  	"title": "New Book",
  	"author": "Author Name"
  }
  ```
- **Response:**
  ```json
  {
  	"status": "success",
  	"data": {
  		"book": { "id": 1739741999999, "title": "New Book", "author": "Author Name" }
  	}
  }
  ```

#### Update a Book

- **Endpoint:** `PATCH /books/:id`
- **Request Body (Partial Update Allowed):**
  ```json
  {
  	"title": "Updated Title"
  }
  ```
- **Response:**
  ```json
  {
  	"status": "success",
  	"data": {
  		"book": { "id": 1739741870410, "title": "Updated Title", "author": "F. Scott Fitzgerald" }
  	}
  }
  ```

#### Delete a Book

- **Endpoint:** `DELETE /books/:id`
- **Response:**
  ```json
  {
  	"status": "success",
  	"data": null
  }
  ```

## Project Structure

```
📂 project-root
├── 📄 app.js
├── 📄 bookRoutes.js
├── 📄 bookController.js
└── 📄 package.json
```

## Technologies Used

- Node.js
- Express.js
