import React, { Fragment } from 'react';
import {  Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';

function Home() {
    return (
        <Fragment>
            <div style={{ margin: "10rem" }}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length > 0
                                ? Employees.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            {item.Name}
                                        </td>
                                        <td>
                                            {item.Age}
                                        </td>
                                    </tr>
                                ))
                                : (
                                    <tr>
                                        <td colSpan="2">No data available</td>
                                    </tr>
                                )
                        }
                    </tbody>
                </Table>
            </div>
        </Fragment>
    );
}

export default Home;
