# Role-Based Access Control (RBAC) with JWT Authentication

This project implements **Role-Based Access Control (RBAC)** using **JWT (JSON Web Tokens)** for authentication and authorization. The application is built with **Node.js**, **Express**, **MongoDB**, and **JWT** for managing user roles and securing routes.

## Features

- **User Registration**: Allows users to sign up with their email and password.
- **User Login**: Allows users to log in and receive a JWT token.
- **Role-Based Authorization**: Access to certain routes is restricted based on user roles (e.g., `user`, `admin`).
- **JWT Authentication**: The app uses JWT tokens to secure routes and ensure authenticated access.

## Technologies Used

- **Node.js** - Backend runtime
- **Express.js** - Web framework for Node.js
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - JSON Web Tokens for authentication
- **dotenv** - Manage environment variables
- **bcryptjs** - Password hashing
- **cors** - Cross-origin request handling

## Installation

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (with npm)
- [MongoDB](https://www.mongodb.com/) (either locally or using MongoDB Atlas)
- A tool like [Postman](https://www.postman.com/) or [cURL](https://curl.se/) for testing the API

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/rbac-jwt-auth.git
cd rbac-jwt-auth
