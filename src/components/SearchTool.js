import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import { Form, FormControl } from 'react-bootstrap'
import { ButtonToolbar, Button, ToggleButton, ToggleButtonGroup } from 'react-bootstrap/'
import Expand from './Expand.js';

import Test from '../Test.js'

class SearchTool extends Component {
    constructor() {
        super()

    }




    changeHandler = (event) => {
        console.log('it works')
    }




    render() {
        return (
            <Container className="SearchToolBox">
                <Form>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2 w-50" />
                    <Button variant="outline-light">Search</Button>
                    <Row>
                        <Col> <button>  Dog</button> </Col>
                        <Col> <button>  Cat</button> </Col>
                    </Row>
                    <Row>

                        <Col>  </Col>
                    </Row>

                    {/* 
                    {['checkbox'].map(type => (
                        <div key={`custom-inline-${type}`} className="mb-3">
                            <Form.Check
                                custom
                                inline
                                label="1"
                                type={type}
                                id={`custom-inline-${type}-1`}
                                onChange={this.changeHandler}
                            />
                            <Form.Check
                                custom
                                inline
                                label="2"
                                type={type}
                                id={`custom-inline-${type}-2`}
                            />
                            <Form.Check
                                custom
                                inline
                                label="3"
                                type={type}
                                id={`custom-inline-${type}-3`}
                            />
                        </div>
                    ))} */}

                    <Expand />
                    <Button>
                        Search
                            </Button>

                </Form>
                <Test />

            </Container>
        )
    }
}
export default SearchTool;