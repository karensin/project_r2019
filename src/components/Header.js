import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import SearchTool from './SearchTool.js';


class Header extends Component {

    render() {
        return (
            <main role="main" className="header h-100 landing Aligner" style={{
                background: `url("${process.env.PUBLIC_URL + '/imgs/Home.png'}") no-repeat center / cover `
            }}>

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