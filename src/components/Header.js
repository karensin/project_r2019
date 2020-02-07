import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import SearchTool from './SearchTool.js';
import SearchBar from './SearchBar.js'


class Header extends Component {

    render() {
        return (
            <main role="main" className="Header h-100">
                <SearchBar />
                <Container>

                    <Row>
                        <Col><SearchTool /></Col>
                        <Col>Image</Col>
                    </Row>

                </Container>

            </main>
        )
    }
}
export default Header;