# Employee Management System

A full-stack Employee Management System developed using **Spring Boot** for the backend and **React.js** for the frontend. This application enables users to perform CRUD (Create, Read, Update, Delete) operations on employee records through a modern web interface.

## 🚀 Features

* Add a new employee
* View all employees
* Update employee details
* Delete employee records
* Responsive user interface
* RESTful API integration
* MySQL database connectivity

## 🛠️ Tech Stack

### Backend

* Java
* Spring Boot
* Spring Data JPA
* Hibernate
* MySQL
* Maven

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Bootstrap
* Axios

## 📁 Project Structure

```text
Employee_Management_System/
│
├── Backend/
│   ├── src/
│   ├── pom.xml
│   └── ...
│
├── emsfrontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
└── README.md
```

## ⚙️ Prerequisites

Before running the project, make sure you have installed:

* Java 17 or later
* Maven
* Node.js
* npm
* MySQL
* Git

## 🔧 Backend Setup

1. Navigate to the Backend folder.

```bash
cd Backend
```

2. Configure your MySQL database in `application.properties`.

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
spring.datasource.username=your_username
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
```

3. Run the application.

```bash
mvn spring-boot:run
```

The backend will start on:

```
http://localhost:8080
```

## 💻 Frontend Setup

1. Navigate to the frontend folder.

```bash
cd emsfrontend
```

2. Install dependencies.

```bash
npm install
```

3. Start the React application.

```bash
npm start
```

The frontend will start on:

```
http://localhost:3000
```

## 🔗 REST API Endpoints

| Method | Endpoint              | Description        |
| ------ | --------------------- | ------------------ |
| GET    | `/api/employees`      | Get all employees  |
| GET    | `/api/employees/{id}` | Get employee by ID |
| POST   | `/api/employees`      | Create employee    |
| PUT    | `/api/employees/{id}` | Update employee    |
| DELETE | `/api/employees/{id}` | Delete employee    |

## 📸 Screenshots

You can add screenshots of:

* Home Page
* Employee List
* Add Employee Form
* Update Employee Page

## 🤝 Contributing

Contributions are welcome. Feel free to fork this repository, create a feature branch, and submit a pull request.

## 📄 License

This project is created for learning and educational purposes.

## 👨‍💻 Author

**Yogesh Kachare**

* Email: [yogeshkachare43@gmail.com](mailto:yogeshkachare43@gmail.com)
* LinkedIn: https://www.linkedin.com/in/yogesh-kachare-832b6a237/
* GitHub: https://github.com/Yogesh846
