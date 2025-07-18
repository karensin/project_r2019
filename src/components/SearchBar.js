import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'semantic-ui-react';
import { Popup } from 'semantic-ui-react'

class SearchBar extends Component {


    render() {
        return (
            <Container>
                <Navbar className="navbar-default container d-flex flex-column flex-md-row justify-content-end" s variant="dark">

                    <Navbar.Brand className="background labelFont d-flex flex-column justify-content-start"
                    >Project Crateless</Navbar.Brand>
                    <Nav className="navbar-collapse collapse justify-content-end">
                        <Nav.Link className="nav-link nav-font" href="#home">Adopt</Nav.Link>

                        <Popup
                            trigger={<Nav.Link className="nav-link nav-font" content='Foster' > Foster </Nav.Link>}
                            on='hover'
                            content="Coming soon!"

                        />
                        <Popup
                            trigger={<Nav.Link className="nav-link nav-font" content='Foster' > News </Nav.Link>}
                            on='hover'
                            content="Coming soon!"
                        />

                        <Nav.Link className="nav-link nav-font" href="#about">About</Nav.Link>
                    </Nav>
                </Navbar>
            </Container >

        )
    }

}
export default SearchBar;