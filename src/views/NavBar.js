import React from 'react'
import { Container, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';

function NavBar() {
    return (
        <div>

            <Navbar bg="light" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="#">HK Dashboard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <button className='btn btn-info m-1'>Welcome Back</button>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <NavDropdown.Item className='p-2 bg-info rounded m-2' href="/admin/addUser"  >Add User</NavDropdown.Item>
                            <NavDropdown.Item className='p-2 bg-info rounded m-2' href="/admin/allUsers"  >All Users</NavDropdown.Item>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
