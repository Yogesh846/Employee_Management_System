# 👨‍💼 Employee Management System

A full-stack **Employee Management System** developed using **Spring Boot, ReactJS, MySQL, and Bootstrap**. This application enables organizations to efficiently manage employee records with secure authentication, role-based access, and a responsive user interface.

---

## 📌 Project Overview

The Employee Management System is a web-based application that simplifies employee management by providing features such as employee registration, updating employee information, searching employees, and secure access using authentication and authorization.

This project demonstrates full-stack development skills including REST API development, database integration, frontend-backend communication, and secure application development.

---

## 🚀 Features

- 🔐 User Authentication (Login)
- 👥 Role-Based Access Control (Admin/User)
- ➕ Add Employee
- 📋 View Employee List
- ✏️ Update Employee Details
- ❌ Delete Employee (Admin Only)
- 🔍 Search Employee by Name
- 📱 Responsive Bootstrap UI
- 🌐 RESTful API Integration
- 🗄️ MySQL Database
- ⚠️ Exception Handling
- 🔄 CRUD Operations

---

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript (ES6)
- Bootstrap 5
- Axios
- React Router DOM

### Backend
- Java
- Spring Boot
- Spring MVC
- Spring Data JPA
- Spring Security
- Hibernate

### Database
- MySQL

### Tools & Technologies
- Maven
- Postman
- Git & GitHub
- Eclipse / IntelliJ IDEA
- VS Code

---

## 📂 Project Structure

### Backend

```
employee-management-system
│
├── controller
├── service
├── repository
├── entity
├── dto
├── config
├── security
├── exception
└── EmployeeManagementApplication
```

### Frontend

```
src
│
├── components
├── services
├── pages
├── App.js
└── index.js
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/employee-management-system.git
```

---

### Backend Setup

1. Open project in Eclipse or IntelliJ.
2. Configure MySQL database.
3. Update `application.properties`.

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ems
spring.datasource.username=root
spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update
```

4. Run Spring Boot Application.

Server will start at:

```
http://localhost:8080
```

---

### Frontend Setup

Navigate to frontend folder

```bash
cd ems-frontend
```

Install dependencies

```bash
npm install
```

Run React Application

```bash
npm start
```

Application runs at

```
http://localhost:3000
```

---

## 📡 REST API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login |
| GET | /api/employees | Get All Employees |
| GET | /api/employees/{id} | Get Employee By ID |
| POST | /api/employees | Add Employee |
| PUT | /api/employees/{id} | Update Employee |
| DELETE | /api/employees/{id} | Delete Employee |
| GET | /api/employees/search?name= | Search Employee |

---

## 📸 Screenshots

Add screenshots here.

Example:

- Login Page
- Dashboard
- Employee List
- Add Employee
- Update Employee

---

## 🔒 Security

- Spring Security
- Authentication
- Role-Based Authorization
- Password Encryption (BCrypt)

---

## 🎯 Learning Outcomes

Through this project I gained practical experience in:

- Building REST APIs using Spring Boot
- Implementing CRUD operations
- React component development
- React Router
- API integration using Axios
- Database design using MySQL
- Spring Security
- Role-Based Access Control
- Git & GitHub version control

---

## 🔮 Future Enhancements

- JWT Authentication
- Pagination
- Sorting & Filtering
- Export Employee Data (PDF/Excel)
- Profile Image Upload
- Email Notifications
- Dashboard Analytics
- Docker Deployment
- Cloud Deployment

---

## 👨‍💻 Author

**Yogesh Kachare**

📧 Email: yogeshkachare43@gmail.com

📱 Mobile: +91 9309816198

💼 Java Full Stack Developer

---

## ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub.
