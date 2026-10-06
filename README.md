
# 🏡 WanderLust - Airbnb Clone

A full-stack **Airbnb-inspired web application** built using **Node.js, Express.js, MongoDB, Mongoose, and EJS**.

The project allows users to explore property listings, view detailed information, create and manage listings, write reviews, and authenticate using a secure login system.

This project was developed as a learning project while exploring **backend development, RESTful routing, MongoDB, authentication, sessions, MVC architecture, and full-stack web development**.

---

## 📌 Project Overview

WanderLust is an Airbnb-inspired accommodation listing platform where users can browse available properties and interact with listings.

The application follows a structured backend architecture with separate:

- Models
- Controllers
- Routes
- Views
- Middleware
- Utility functions

The application uses **MongoDB Atlas** as the database and **Mongoose** for database interaction.

---

## ✨ Features

### 🏠 Property Listings

- View available property listings
- View detailed information about individual properties
- Create new property listings
- Edit existing listings
- Delete listings
- Upload property images
- Store listing information in MongoDB

### 👤 User Authentication

- User registration
- User login and logout
- Session-based authentication
- Protected routes
- User-specific functionality
- Authentication using Passport.js and Passport-Local

### ⭐ Reviews

- Add reviews to listings
- Display reviews associated with listings
- Delete reviews
- Validate review data

### 🔐 Authorization

The application includes authorization checks to restrict certain operations to authenticated users and appropriate listing/review owners.

### 💬 Flash Messages

Flash messages provide feedback for actions such as:

- Successful login/logout
- Listing creation and updates
- Listing deletion
- Review operations
- Errors

### 🖼️ Image Upload

The project uses **Multer** and **Cloudinary** for handling image uploads and storing listing images.

### 🗄️ Database Sessions

MongoDB is used for session storage through `connect-mongo`.

---

## 🛠️ Technologies Used

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- MongoDB Atlas
- Mongoose

### Template Engine

- EJS
- EJS-Mate

### Authentication

- Passport.js
- Passport-Local
- Passport-Local-Mongoose

### Sessions

- Express Session
- Connect Mongo

### Image Upload & Storage

- Multer
- Cloudinary
- Multer Storage Cloudinary

### Validation

- Joi

### Other Technologies

- Method Override
- Connect Flash
- Cookie Parser
- Dotenv
- Axios

---

## 🏗️ Application Architecture

```text
User / Browser
      ↓
Express Server
      ↓
Routes
      ↓
Middleware
      ↓
Controllers
      ↓
Mongoose Models
      ↓
MongoDB Atlas
      ↓
EJS Views
      ↓
User / Browser
```
🧩 Main Components
###`app.js`

The main Express application file.

It is responsible for:

Creating the Express application
Configuring EJS
Serving static files
Connecting to MongoDB
Configuring sessions
Configuring Passport authentication
Registering application routes
Handling errors
Starting the server

The application connects to MongoDB using the ATLASDB_URL environment variable and uses MongoDB for session storage.

models/

The models directory contains the Mongoose schemas used by the application.
```text
models/
├── listing.js
├── review.js
└── user.js
```
These models represent the main data entities of the application.

controllers/

Business logic is separated into controllers:
```text
controllers/
├── listings.js
├── reviews.js
└── users.js
```
This keeps route definitions cleaner and separates application logic from routing.

routes/

The application separates routing into different modules:
```text
routes/
├── listing.js
├── review.js
└── user.js
```
views/

The application uses EJS templates for server-side rendering.
```text
views/
├── includes/
├── layouts/
├── listings/
├── users/
└── error.ejs
```
EJS-Mate is used to support reusable layouts and templates.

📁 Project Structure
```text
WebDev-Project/
│
├── controllers/
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
│
├── init/
│
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── public/
│
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── utils/
│
├── views/
│   ├── includes/
│   ├── layouts/
│   ├── listings/
│   ├── users/
│   └── error.ejs
│
├── .gitignore
├── app.js
├── cloudConfig.js
├── middleware.js
├── package.json
├── package-lock.json
├── schema.js
└── test.js
```
##🔐 Authentication & Sessions

Authentication is implemented using:

Passport.js
Passport-Local
Passport-Local-Mongoose
Express Session
Connect Mongo

Passport is configured with the local authentication strategy, while sessions are stored in MongoDB.

##☁️ MongoDB Atlas

The application uses MongoDB Atlas as the database.

The database connection is configured through:

ATLASDB_URL

MongoDB is also used for storing user sessions.

Note: Database credentials and other sensitive configuration values should be stored in a .env file and should never be committed to GitHub.

##🖼️ Cloudinary

Cloudinary is used for image storage and management.

The project uses:

Cloudinary
Multer
Multer Storage Cloudinary

to handle listing image uploads.

##🔑 Environment Variables

Create a .env file in the project root.

Example:

ATLASDB_URL=your_mongodb_atlas_connection_string
SECRET=your_session_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET=your_cloudinary_api_secret

The exact environment variable names should match the configuration used in the project.

Never commit your real .env file or API credentials to GitHub.

##⚙️ Installation
1. Clone the Repository
git clone https://github.com/chiwwwra/WebDev-Project.git
2. Navigate to the Project
cd WebDev-Project
3. Install Dependencies
npm install
4. Configure Environment Variables

Create a .env file in the project root and add the required MongoDB, session, and Cloudinary configuration.

5. Start the Application
node app.js

The application runs on:

https://wanderlust-qjdx.onrender.com
##🚀 How the Application Works
The user sends a request through the browser.
Express receives the request.
The appropriate route handles the request.
Middleware performs authentication, authorization, validation, or other required processing.
Controllers execute the application logic.
Mongoose communicates with MongoDB Atlas.
EJS renders the required view.
The response is returned to the browser.
##🔄 Request Flow
User
  ↓
Browser
  ↓
Express Server
  ↓
Route
  ↓
Middleware
  ↓
Controller
  ↓
Mongoose Model
  ↓
MongoDB Atlas
  ↓
EJS View
  ↓
Browser
##📚 Concepts Learned

This project helped me gain practical experience with:

Node.js
Express.js
MongoDB
MongoDB Atlas
Mongoose
RESTful routing
MVC architecture
EJS templating
Authentication
Authorization
Passport.js
Express sessions
MongoDB session storage
Middleware
Flash messages
Form handling
CRUD operations
Image uploads
Cloudinary
Joi validation
Error handling
Environment variables
Git and GitHub
##🎯 Learning Objectives

The main purpose of this project was to understand how a real-world web application can be structured and developed using a backend-focused JavaScript stack.

Through this project, I explored how:

Frontend
   ↓
Express Routes
   ↓
Middleware
   ↓
Controllers
   ↓
Mongoose Models
   ↓
MongoDB

work together to create a full-stack web application.

##🚧 Future Improvements

Possible future improvements include:

Online payment integration
Advanced search and filtering
Map-based property discovery
Improved responsive UI
User profile management
Wishlist/favorites functionality
Booking availability management
Host dashboard
Admin dashboard
More advanced review and rating functionality
Production deployment and monitoring
##⚠️ Disclaimer

This project is an educational Airbnb-inspired clone created for learning and development purposes.

It is not affiliated with or endorsed by Airbnb.

##👨‍💻 Author

Chiranjeev Kumar

B.Tech Student | Web Development & Software Development Enthusiast

GitHub: @chiwwwra

##⭐ Acknowledgement

This project was developed as part of my web development learning journey, where I explored backend development, databases, authentication, authorization, MVC architecture, and deployment concepts through a practical Airbnb-inspired application.

⭐ If you find this project useful, feel free to explore the repository and learn from it.
