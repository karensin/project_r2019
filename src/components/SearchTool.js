import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Form, FormControl } from 'react-bootstrap'
import { ButtonToolbar, ToggleButton, ToggleButtonGroup } from 'react-bootstrap/'
import Expand from './Expand.js';
import GetData from './GetData.js';
import { boundChangePetData } from '../Redux/actions'
import DisplayData from './DisplayData.js';
import { Icon, Input, Button } from 'semantic-ui-react'


const domain = "https://api.petfinder.com";
const tokenUrl = '/v2/oauth2/token';
const url = `/v2/animals`;

class SearchTool extends Component {
    constructor() {
        super()
        this.state = {
            petType: 'Dog',
            page: '1',
            location: '94112',
            sort: '-recent',
            good_with_children: 'true'
        }
    }

    async getToken() {
        const response = await fetch(`${domain}${tokenUrl}`, {
            body: "grant_type=client_credentials&client_id=cx1Q1hP2mvR6jeG447cARka8URjwpWlyn6myKedV3w6ap3qy0v&client_secret=S0dclp9P1odBVYNRx9MrotL78XE0tAU4L57YCYH2",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: 'POST'
        });
        const jsonResponse = await response.json();
        this.token = jsonResponse.access_token;
    }

    async requestData() {
        const params = {
            type: this.state.petType,
            page: this.state.page,
            location: this.state.location,
            sort: this.state.sort,
            good_with_children: this.state.good_with_children,
        }

        var queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
        console.log(queryString, 'queryString', params, 'params')
        const bearer = `Bearer ${this.token}`;
        try {
            //teach string interpolation 
            const res = await fetch(domain + url + '?' + queryString, {
                withCredentials: true,
                headers: {
                    Authorization: bearer,
                    'Content-Type': 'application/json'
                }
            });
            const jsonRes = await res.json();
            this.setState({
                isLoaded: true,
                items: jsonRes.animals
            });
            boundChangePetData(jsonRes.animals)

        } catch (error) {
            console.log(error);
        }
    }

    async handleChange(val) {
        this.setState({
            petType: val
        });
        await this.getToken();
        await this.requestData();
    }
    async onClickPageNext() {

        this.setState({
            page: this.state.page += 1
        });

        await this.getToken();
        await this.requestData();
    }
    async onClickPagePrev() {
        if (this.state.page === 1) {
            console.log('first Page')
            return
        }
        this.setState({
            page: this.state.page -= 1
        });
        await this.getToken();
        await this.requestData();
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col className="SearchToolBox col-2 float-left">
                        <Form >
                            {/* <Input
                                    icon={<Icon name='search' inverted circular link />}
                                    placeholder='Search...'
                                /> */}
                            {/* <Button variant="outline-light">Search</Button> */}
                            <Row>
                                {/* <ButtonToolbar> */}
                                <Button.Group>
                                    <ToggleButtonGroup type="radio" name="options" onChange={this.handleChange.bind(this)}>
                                        <ToggleButton variant="secondary" size="lg" value={'dog'}>Dog</ToggleButton>
                                        <Button.Or />
                                        <ToggleButton variant="secondary" size="lg" value={'cat'}>Cat</ToggleButton>
                                    </ToggleButtonGroup>
                                </Button.Group>
                                {/* </ButtonToolbar> */}
                            </Row>
                            <Expand />
                            {/* <Button >
                                    Search
                    </Button> */}
                        </Form>
                    </Col>
                    <Col className="displayData col-8">
                        <Container>
                            <Row>
                                <Col > <Button className="float-left " variant="warning" onClick={this.onClickPagePrev.bind(this)}> Prev </Button>  </Col>
                                <Col > <Button className="float-right" variant="warning" onClick={this.onClickPageNext.bind(this)}> Next</Button></Col>
                                <GetData items={this.state.items} isLoaded={this.state.isLoaded} />
                            </Row>
                        </Container>
                    </Col>
                </Row>

            </Container>
        )
    }
}
export default SearchTool;