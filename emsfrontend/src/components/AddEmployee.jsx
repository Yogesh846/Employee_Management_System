import React, { useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

function AddEmployee() {

    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        email: '',
        department: '',
        salary: ''
    });

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };

    const saveEmployee = (e) => {

        e.preventDefault();

        EmployeeService.createEmployee(employee)
            .then(() => {
                navigate('/employees');
            });
    };

    return (
        <div className="card p-4">

            <h3>Add Employee</h3>

            <form onSubmit={saveEmployee}>

                <input className="form-control mb-2"
                       name="firstName"
                       placeholder="First Name"
                       onChange={handleChange} />

                <input className="form-control mb-2"
                       name="lastName"
                       placeholder="Last Name"
                       onChange={handleChange} />

                <input className="form-control mb-2"
                       name="email"
                       placeholder="Email"
                       onChange={handleChange} />

                <input className="form-control mb-2"
                       name="department"
                       placeholder="Department"
                       onChange={handleChange} />

                <input className="form-control mb-2"
                       name="salary"
                       placeholder="Salary"
                       onChange={handleChange} />

                <button className="btn btn-success">
                    Save
                </button>

            </form>

        </div>
    );
}

export default AddEmployee;