import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateEmployee() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        email: '',
        department: '',
        salary: ''
    });

    useEffect(() => {

        EmployeeService.getEmployeeById(id)
            .then((response) => {

                setEmployee(response.data);

            })
            .catch((error) => {

                console.log(error);

            });

    }, [id]);

    const handleChange = (e) => {

        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });

    };

    const updateEmployee = (e) => {

        e.preventDefault();

        EmployeeService.updateEmployee(id, employee)
            .then(() => {

                navigate('/employees');

            })
            .catch((error) => {

                console.log(error);

            });

    };

    return (

        <div className="container">

            <div className="row justify-content-center">

                <div className="col-md-6">

                    <div className="card mt-4">

                        <div className="card-header bg-warning text-dark">
                            <h3 className="text-center">
                                Update Employee
                            </h3>
                        </div>

                        <div className="card-body">

                            <form onSubmit={updateEmployee}>

                                <div className="mb-3">
                                    <label className="form-label">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="firstName"
                                        value={employee.firstName}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="lastName"
                                        value={employee.lastName}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={employee.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Department
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="department"
                                        value={employee.department}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Salary
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="salary"
                                        value={employee.salary}
                                        onChange={handleChange}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-success me-2">
                                    Update
                                </button>

                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => navigate('/employees')}>
                                    Cancel
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default UpdateEmployee;