import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Form, FormControl } from 'react-bootstrap'

class SearchTool extends Component {
    constructor() {
        super()

        // this.changeHandler = this.changeHandler.bind(this);
    }




    changeHandler = (event) => {
        console.log('hi')
    }




    render() {
        return (
            <Container>
                <Form>

                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                    <Row>
                        <Col> <button>  Dog</button> </Col>
                        <Col> <button>  Cat</button> </Col>
                    </Row>
                    <Row>
                        Age
                        <Col>  </Col>
                    </Row>


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
                    ))}
                    <Button type="submit">
                        Search
                            </Button>

                </Form>
            </Container>
        )
    }
}
export default SearchTool;