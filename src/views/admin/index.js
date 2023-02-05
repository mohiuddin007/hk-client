import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Route, Routes } from 'react-router'
import Sidebar from '../Sidebar'
import NavBar from '../NavBar'
import AddUser from '../user'
import AllUsers from '../user/AllUsers'

function Admin() {
    return (
        <Row>
            <Col lg="3" >
                {window.innerWidth < 800 ? <NavBar /> : <Sidebar />}
            </Col>
            <Col lg='9'>
                <Routes>
                    <Route path="addUser" element={<AddUser />} />
                    <Route path="allUsers" element={<AllUsers />} />
                </Routes>
            </Col>
        </Row>
    )
}

export default Admin
