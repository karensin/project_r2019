import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'


class Header extends Component {

    render() {
        return (
            <main role="main" className="Header h-100">
                <Container>
                    <Row>
                        <Col>SearchTool</Col>
                        <Col>Image</Col>
                    </Row>
                    <Row>
                        <Col>SearchTool</Col>
                        <Col>Image</Col>
                    </Row>
                </Container>

            </main>
        )
    }
}
export default Header;