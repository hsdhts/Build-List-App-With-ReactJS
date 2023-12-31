import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import {Link, useNavigate} from 'react-router-dom'

function Home() {

    let history = useNavigate()
    
    const handleEdit = (id, name, age) => {
        localStorage.setItem('Name', name )
        localStorage.setItem('Age', age )
        localStorage.setItem('Id', id )
    }
    const handleDelete = (id) => {
        var index = Employees.map(function(e) {
            return e.id
        }).indexOf(id);

        Employees.splice(index, 1);

        history('/')

    }
  return (
    <Fragment>
      <div style={{ margin: "10rem" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Employees && Employees.length > 0 ? (
              Employees.map((item, index) => (
                <tr key={index}>
                  <td>{item.Name}</td>
                  <td>{item.Age}</td>
                  <td>
                  <Link to={`/edit`}>
                  <Button style={{ marginRight: '10px' }} onClick={() => { handleEdit(item.id, item.Name, item.Age) }}>Edit</Button>
                  </Link>
                <Button style={{ marginLeft: '10px' }} onClick={() => { handleDelete(item.id) }}>DELETE</Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">No data available</td>
              </tr>
            )}
          </tbody>
        </Table>
        <br>
        </br>
        <Link className="d-grid gap-2" to="/create">
            <Button size="lg">Create</Button>
        </Link>
      </div>
    </Fragment>
  );
}

export default Home;
