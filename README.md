# 👨‍💼 Employee Management System

A full-stack Employee Management System developed using **Spring Boot**, **React.js**, and **MySQL**. The application enables organizations to efficiently manage employee records through a secure and user-friendly interface. It provides complete CRUD functionality with RESTful APIs and seamless frontend-backend integration.

---

## 🚀 Features

* Add New Employees
* View Employee List
* Update Employee Details
* Delete Employees
* Search Employee Records
* Responsive User Interface
* RESTful API Integration
* MySQL Database Connectivity
* Exception Handling
* Layered Architecture

---

## 🛠️ Tech Stack

### Backend

* Java 17
* Spring Boot
* Spring Data JPA
* Hibernate
* REST APIs
* Maven

### Frontend

* React.js
* JavaScript (ES6+)
* HTML5
* CSS3
* Bootstrap
* Axios

### Database

* MySQL

### Tools

* Git
* GitHub
* Postman
* IntelliJ IDEA
* Visual Studio Code

---

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

---

## ⚙️ Prerequisites

Before running the project, install:

* Java 17 or later
* Maven
* Node.js
* npm
* MySQL
* Git

---

## 🔧 Backend Setup

### Clone the repository

```bash
git clone https://github.com/Yogesh846/Employee_Management_System.git
```

### Navigate to the backend

```bash
cd Employee_Management_System/Backend
```

### Configure MySQL

Update the `application.properties` file:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
spring.datasource.username=your_username
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
```

### Run the Spring Boot application

```bash
mvn spring-boot:run
```

The backend will start at:

```text
http://localhost:8080
```

---

## 💻 Frontend Setup

Navigate to the frontend folder:

```bash
cd ../emsfrontend
```

Install dependencies:

```bash
npm install
```

Start the React application:

```bash
npm start
```

The frontend will start at:

```text
http://localhost:3000
```

---

## 📡 REST API Endpoints

### Employee APIs

| Method | Endpoint              | Description             |
| ------ | --------------------- | ----------------------- |
| GET    | `/api/employees`      | Get all employees       |
| GET    | `/api/employees/{id}` | Get employee by ID      |
| POST   | `/api/employees`      | Add a new employee      |
| PUT    | `/api/employees/{id}` | Update employee details |
| DELETE | `/api/employees/{id}` | Delete an employee      |

---

## 📸 Screenshots

Add screenshots of your application here, such as:

* Dashboard
* Employee List
* Add Employee Form
* Update Employee Form
* Delete Confirmation

---

## 🏗️ Architecture

* React.js Frontend
* Spring Boot REST APIs
* Spring Data JPA & Hibernate
* MySQL Database

---

## 📈 Future Enhancements

* Employee Authentication
* Role-Based Access Control (Admin/HR)
* Pagination & Sorting
* Advanced Search & Filters
* Profile Image Upload
* Email Notifications
* Dashboard Analytics
* Docker Deployment
* CI/CD Integration

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push to your branch.
5. Open a Pull Request.

---

## 📄 License

This project is created for learning and portfolio purposes.

---

## 👨‍💻 Author

**Yogesh Kachare**

**Java Full Stack Developer**

* 📧 Email: [yogeshkachare43@gmail.com](mailto:yogeshkachare43@gmail.com)
* 📱 Mobile: +91 9309816198
* 💼 GitHub: https://github.com/Yogesh846

If you found this project useful, please consider giving it a ⭐ on GitHub.
