import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useParams, useNavigate } from 'react-router-dom';

function ViewEmployee() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [employee, setEmployee] = useState({});

    useEffect(() => {

        EmployeeService.getEmployeeById(id)
            .then((response) => {

                setEmployee(response.data);

            })
            .catch((error) => {

                console.log(error);

            });

    }, [id]);

    return (

        <div className="container">

            <div className="row justify-content-center">

                <div className="col-md-6">

                    <div className="card mt-4">

                        <div className="card-header bg-info text-white">
                            <h3 className="text-center">
                                Employee Details
                            </h3>
                        </div>

                        <div className="card-body">

                            <p>
                                <strong>ID:</strong> {employee.id}
                            </p>

                            <p>
                                <strong>First Name:</strong> {employee.firstName}
                            </p>

                            <p>
                                <strong>Last Name:</strong> {employee.lastName}
                            </p>

                            <p>
                                <strong>Email:</strong> {employee.email}
                            </p>

                            <p>
                                <strong>Department:</strong> {employee.department}
                            </p>

                            <p>
                                <strong>Salary:</strong> ₹{employee.salary}
                            </p>

                            <button
                                className="btn btn-primary"
                                onClick={() => navigate('/employees')}>
                                Back
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default ViewEmployee;