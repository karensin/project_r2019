import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import { Form, FormControl } from 'react-bootstrap'
import { ButtonToolbar, Button, ToggleButton, ToggleButtonGroup } from 'react-bootstrap/'
class SearchTool extends Component {
    constructor() {
        super()

        this.changeHandler = this.changeHandler.bind(this);
    }




    changeHandler() {
        console.log('it works')
    }




    render() {
        return (
            <Container>
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


                    {/* {['checkbox'].map(type => (
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
                    Age
                    <ButtonToolbar>
                        <ToggleButtonGroup type="checkbox">
                            <ToggleButton value={1}>Puppy</ToggleButton>
                            <ToggleButton value={2}>Junior </ToggleButton>
                            <ToggleButton value={3}>Adult</ToggleButton>      <ToggleButton value={4}>Senior</ToggleButton>

                        </ToggleButtonGroup>
                    </ButtonToolbar>
                    Coat
                    <ButtonToolbar>
                        <ToggleButtonGroup type="checkbox" >
                            <ToggleButton value={1}>Hairless</ToggleButton>
                            <ToggleButton value={2}>Short </ToggleButton>
                            <ToggleButton value={3}>Long</ToggleButton>      <ToggleButton value={4}>Wire</ToggleButton>
                            <ToggleButton value={4}>Curly</ToggleButton>
                        </ToggleButtonGroup>
                    </ButtonToolbar>
                    Good with
                    <ButtonToolbar>
                        <ToggleButtonGroup type="checkbox" >
                            <ToggleButton value={1}>Children</ToggleButton>
                            <ToggleButton value={2}>Dogs </ToggleButton>
                            <ToggleButton value={3}>Cats</ToggleButton>
                        </ToggleButtonGroup>
                    </ButtonToolbar>



                    <Button type="submit">
                        Search
                            </Button>

                </Form>
            </Container>
        )
    }
}
export default SearchTool;