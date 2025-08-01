# Authentication Backend API

A complete Node.js backend application with user registration and login functionality using JWT authentication.

## Features

- **User Registration** with validation
- **User Login** with JWT token generation
- **Password Hashing** using bcryptjs
- **Input Validation** with express-validator
- **JWT Authentication** middleware
- **MongoDB** database integration
- **CORS** enabled for frontend integration
- **Error Handling** middleware

## User Model Fields

- First Name (required, 2-50 characters)
- Last Name (required, 2-50 characters)
- School Name (required, 2-100 characters)
- Email (required, unique, valid email format)
- Password (required, minimum 6 characters with uppercase, lowercase, and number)
- Confirm Password (must match password)

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd project\ solo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Copy `.env` file and update the following variables:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/auth_db
   JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
   JWT_EXPIRES_IN=7d
   ```

4. **Start MongoDB**
   - Make sure MongoDB is running on your system
   - Or use MongoDB Atlas cloud database

5. **Run the application**
   ```bash
   # Development mode with nodemon
   npm run dev
   
   # Production mode
   npm start
   ```

## API Endpoints

### Base URL
```
http://localhost:5000
```

### 1. Health Check
```http
GET /api/health
```

**Response:**
```json
{
  "success": true,
  "message": "Server is running successfully",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### 2. User Registration
```http
POST /api/auth/register
```

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "schoolName": "Example University",
  "email": "john.doe@example.com",
  "password": "Password123",
  "confirmPassword": "Password123"
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "user_id",
      "firstName": "John",
      "lastName": "Doe",
      "fullName": "John Doe",
      "schoolName": "Example University",
      "email": "john.doe@example.com",
      "createdAt": "2024-01-01T00:00:00.000Z"
    },
    "token": "jwt_token_here"
  }
}
```

### 3. User Login
```http
POST /api/auth/login
```

**Request Body:**
```json
{
  "email": "john.doe@example.com",
  "password": "Password123"
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": "user_id",
      "firstName": "John",
      "lastName": "Doe",
      "fullName": "John Doe",
      "schoolName": "Example University",
      "email": "john.doe@example.com",
      "createdAt": "2024-01-01T00:00:00.000Z"
    },
    "token": "jwt_token_here"
  }
}
```

### 4. Get User Profile (Protected)
```http
GET /api/auth/profile
Authorization: Bearer <jwt_token>
```

**Success Response:**
```json
{
  "success": true,
  "message": "Profile retrieved successfully",
  "data": {
    "user": {
      "id": "user_id",
      "firstName": "John",
      "lastName": "Doe",
      "fullName": "John Doe",
      "schoolName": "Example University",
      "email": "john.doe@example.com",
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  }
}
```

## Authentication

For protected routes, include the JWT token in the Authorization header:

```http
Authorization: Bearer <your_jwt_token>
```

## Error Responses

All error responses follow this format:

```json
{
  "success": false,
  "message": "Error description",
  "errors": [] // Array of validation errors (if applicable)
}
```

## Validation Rules

### Registration
- **firstName**: 2-50 characters, letters and spaces only
- **lastName**: 2-50 characters, letters and spaces only
- **schoolName**: 2-100 characters
- **email**: Valid email format, unique
- **password**: Minimum 6 characters, must contain uppercase, lowercase, and number
- **confirmPassword**: Must match password

### Login
- **email**: Valid email format
- **password**: Required

## Project Structure

```
project solo/
├── config/
│   └── database.js          # Database connection
├── controllers/
│   └── authController.js    # Authentication logic
├── middleware/
│   ├── auth.js             # JWT authentication middleware
│   └── validation.js       # Input validation rules
├── models/
│   └── User.js             # User model schema
├── routes/
│   └── auth.js             # Authentication routes
├── .env                    # Environment variables
├── app.js                  # Main application file
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## Security Features

- Password hashing with bcryptjs
- JWT token authentication
- Input validation and sanitization
- CORS configuration
- Environment variable protection
- Error handling middleware

## Development

- Uses nodemon for automatic server restart during development
- Comprehensive error logging
- Input validation with detailed error messages
- MongoDB integration with Mongoose ODM

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.