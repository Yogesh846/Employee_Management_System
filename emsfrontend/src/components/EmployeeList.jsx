import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

function EmployeeList() {

    const [employees, setEmployees] = useState([]);
    const [keyword, setKeyword] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, []);

    const getAllEmployees = () => {
        EmployeeService.getAllEmployees()
            .then(res => {
                setEmployees(res.data);
            });
    };

    const deleteEmployee = (id) => {
        EmployeeService.deleteEmployee(id)
            .then(() => {
                getAllEmployees();
            });
    };

    const searchEmployee = () => {

        if (keyword === "") {
            getAllEmployees();
        } else {
            EmployeeService.searchEmployee(keyword)
                .then(res => {
                    setEmployees(res.data);
                });
        }
    };

    return (
        <div>

            <h2 className="text-center mb-3">
                Employee List
            </h2>

            <button
                className="btn btn-primary mb-3"
                onClick={() => navigate('/add-employee')}>
                Add Employee
            </button>

            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search Employee"
                    value={keyword}
                    onChange={(e) =>
                        setKeyword(e.target.value)}
                />

                <button
                    className="btn btn-success"
                    onClick={searchEmployee}>
                    Search
                </button>
            </div>

            <table className="table table-bordered">

                <thead>

                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Actions</th>
                </tr>

                </thead>

                <tbody>

                {
                    employees.map(employee => (

                        <tr key={employee.id}>

                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>{employee.department}</td>
                            <td>{employee.salary}</td>

                            <td>

                                <button
                                    className="btn btn-info me-2"
                                    onClick={() =>
                                        navigate(`/view-employee/${employee.id}`)}>
                                    View
                                </button>

                                <button
                                    className="btn btn-warning me-2"
                                    onClick={() =>
                                        navigate(`/update-employee/${employee.id}`)}>
                                    Edit
                                </button>

                                <button
                                    className="btn btn-danger"
                                    onClick={() =>
                                        deleteEmployee(employee.id)}>
                                    Delete
                                </button>

                            </td>

                        </tr>
                    ))
                }

                </tbody>

            </table>

        </div>
    );
}

export default EmployeeList;