import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { useNavigate } from 'react-router-dom'

function Edit() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [id, setId] = useState('');

    let history = useNavigate();

    var index = Employees.findIndex(e => e.id === id);

    useEffect(() => {
        setName(localStorage.getItem("Name"));
        setAge(localStorage.getItem("Age"));
        setId(localStorage.getItem("Id"));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        let updatedEmployee = { ...Employees[index], Name: name, Age: age };
        Employees[index] = updatedEmployee;

        // Update localStorage if needed
        localStorage.setItem("Name", name);
        localStorage.setItem("Age", age);
        localStorage.setItem("Id", id);

        history("/");
    }

    return (
        <div>
            <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name" value={name} required onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control type="text" placeholder="Enter Age" value={age} required onChange={(e) => setAge(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Button onClick={handleSubmit} type="update">Update</Button>

            </Form>
        </div>
    )

}

export default Edit;
