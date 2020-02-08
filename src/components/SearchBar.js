import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class SearchBar extends Component {
    render() {
        return (
            <nav className="greybackground">
                <Navbar className="navbar-default container d-flex flex-column flex-md-row justify-content-end" s variant="dark">
                    {/* <img
                        src={process.env.PUBLIC_URL + "/imgs/logo2.png"}
                        className="logo"
                        width="55"
                        height="65"
                        alt="logo"

                    /> */}
                    <Navbar.Brand className="background labelFont d-flex flex-column justify-content-start"
                    >Project Crateless</Navbar.Brand>
                    <Nav className="navbar-collapse collapse justify-content-end">
                        <Nav.Link className="nav-link nav-font" href="#home">Adopt</Nav.Link>
                        <Nav.Link className="nav-link nav-font" href="#foster">Foster</Nav.Link>
                        <Nav.Link className="nav-link nav-font" href="#news">News</Nav.Link>
                        <Nav.Link className="nav-link nav-font" href="#about">About</Nav.Link>

                    </Nav>
                </Navbar>
            </nav >
        )
    }

}
export default SearchBar;