import React, { createRef, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
// import { Form, FormControl } from 'react-bootstrap'
import { ButtonToolbar, ToggleButton, ToggleButtonGroup } from 'react-bootstrap/'
import Expand from './Expand.js';
import GetData from './GetData.js';
import { boundChangePetData, boundChangePetAge, boundChangePetEnvoriment } from '../Redux/actions'
import DisplayData from './DisplayData.js';
import { Icon, Input, Button, Form } from 'semantic-ui-react'
import {
    Checkbox,
    Grid,
    Header,
    Image,
    Item,
    Rail,
    Ref,
    Segment,
    Sticky,
} from 'semantic-ui-react';
import _ from 'lodash';
import { Dropdown } from 'semantic-ui-react'

// const ageOptions = [
//     { key: 'baby', text: 'Baby', value: 'baby' },
//     { key: 'young', text: 'Young', value: 'young' },
//     { key: 'adult', text: 'Adult', value: 'adult' },
//     { key: 'Senior', text: 'Senior', value: 'senior' },


// ]
const domain = "https://api.petfinder.com";
const tokenUrl = '/v2/oauth2/token';
const url = `/v2/animals`;
// const Placeholder = () => <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />

// function DropdownExampleMultipleSelection() {
//     return (<Dropdown placeholder='Age' fluid multiple selection options={ageOptions} />)
// }
class SearchTool extends Component {
    contextRef = createRef()
    constructor() {
        super()
        this.state = {
            active: true,
            petType: 'Dog',
            page: 1,
            location: '94112',
            sort: '-recent',
            coat: '',
            age: '',
            good_with_children: false,
            good_with_dogs: false,
            good_with_cats: false,
            input: '',
            hasError: false,
            limit: '40'
        }
    }

    handleToggle = () =>
        this.setState((prevState) => ({ active: !prevState.active }))

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
            age: this.state.age,
            good_with_children: this.state.good_with_children,
            good_with_dogs: this.state.good_with_dogs,
            good_with_cats: this.state.good_with_cats,
            coat: this.state.coat,
            limit: this.state.limit
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

            // if (jsonRes.status && jsonRes.status !== 200) {
            //     console.log('failed')
            //     this.setState({
            //         hasError: true
            //     })
            //     return false
            // }
            this.setState({
                isLoaded: true,
                items: jsonRes.animals
            });
            boundChangePetData(jsonRes.animals)
            console.log(jsonRes, 'response')

            // boundChangePetAge(jsonRes.animals)
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

    async handleChangePetAge(val) {
        let newVal = this.state.age
        if (this.state.age !== '') {
            newVal = this.state.age + ',' + val
            console.log(newVal, 'newVal')
        } else {
            newVal = val
        }
        console.log(newVal, 'newVALstate')
        this.setState({
            age: newVal
        });
        await this.getToken();
        await this.requestData();
    }
    async handleChangePetCoat(val) {
        let newVal = this.state.coat
        if (this.state.age !== '') {
            newVal = this.state.coat + ' ,' + val
            console.log(newVal, 'newVal')
        } else {
            newVal = val
        }
        console.log(newVal, 'newVALstate')
        this.setState({
            coat: newVal
        });
        await this.getToken();
        await this.requestData();
    }


    async handleChangeCats(val) {
        // let newVal = this.state.environment
        console.log('valkkk', val)
        if (this.state.good_with_cats === '') {
            this.setState({
                good_with_cats: true
            });
        }
        if (this.state.good_with_cats === true) {
            this.setState({
                good_with_cats: false
            });
        }
        if (this.state.good_with_cats === false) {
            this.setState({
                good_with_cats: true
            });
        }

        await this.getToken();
        await this.requestData();
    }
    async handleChangeDogs(val) {
        // let newVal = this.state.environment
        console.log('valkkk', val)

        if (this.state.good_with_dogs === true) {
            this.setState({
                good_with_dogs: false
            });
        }
        if (this.state.good_with_cats === false) {
            this.setState({
                good_with_dogs: true
            });
        }
        await this.getToken();
        await this.requestData();
    }
    async handleChangeChildren(val) {
        console.log('valkkk', val)
        if (this.state.good_with_children === true) {
            this.setState({
                good_with_children: false
            });
        }
        if (this.state.good_with_children === false) {
            this.setState({
                good_with_children: true
            });
        }
        await this.getToken();
        await this.requestData();
    }
    async onClickPageNext() {

        this.setState({
            page: this.state.page += 1

        });
        console.log(this.state.page, 'page')
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
    // async onChangeAreaCode(e) {
    //     console.log(e, 'input_____')
    //     if (data) {
    //         this.setState({
    //             location: data
    //         })
    //     }

    //     await this.getToken();
    //     await this.requestData();
    // }
    onChangeSearchCity(e) {
        console.log(e.target.value, 'look at me')
        this.setState({
            input: e.target.value

        })
        if (this.onSubmitSearchCity) {
            e.target.value = ''
        }

        // setInput(e.target.value)
    }
    async onSubmitSearchCity(e, input) {
        console.log(e, 'clicked')
        e.preventDefault()

        this.setState({
            location: this.state.input,

        })
        this.setState({
            input: ''
        })


        await this.getToken();
        await this.requestData();


        // return false
    }

    render() {
        // const { active } = this.state

        // if (this.state.hasError === true) {
        //     return <div> fak </div>
        // }


        return (
            <Container h-100>
                <Grid >
                    <Grid.Column columns={2}>
                        <Ref innerRef={this.contextRef}>
                            <Container >
                                {/* <Segment position='right'> 'data goes here' */}
                                <Container className="displayData mt-auto p-2">
                                    <Sticky className="stickyDirectionBar" >
                                        <Row className=" justify-content-around">
                                            <Button className="directionbtn d-flex justify-content-start" variant="warning" offset='200' onClick={this.onClickPagePrev.bind(this)}> <Icon name='left arrow' /> Prev  </Button>
                                            <Button className="directionbtn d-flex justify-content-end" variant="warning" onClick={this.onClickPageNext.bind(this)}> Next<Icon name='right arrow' /></Button>
                                        </Row>
                                    </Sticky>

                                    <GetData className="displayData mt-auto p-2" items={this.state.items} isLoaded={this.state.isLoaded} />
                                </Container>

                                <Rail >
                                    <Sticky className="stickySearchBar" >
                                        <Segment className="positionSticky">
                                            <div> </div>
                                            <Form onSubmit={this.onSubmitSearchCity.bind(this)}>
                                                <Form.Field type="submit">
                                                    <Input
                                                        placeholder='Zip Code....'

                                                        onChange={this.onChangeSearchCity.bind(this)}
                                                        icon={<Icon name='search' inverted circular link onClick={this.onSubmitSearchCity.bind(this)} />}
                                                    />

                                                </Form.Field>
                                            </Form>
                                            <div> Pick your favorite furry </div>
                                            <Button.Group>
                                                <ToggleButtonGroup type="radio" name="options" onChange={this.handleChange.bind(this)}>
                                                    <div> Species </div>
                                                    <ToggleButton variant="secondary" size='lg' className="speciesBtn" value={'dog'}>Dog</ToggleButton>
                                                    <Button.Or />
                                                    <ToggleButton variant="secondary" size='lg' className="speciesBtn" value={'cat'}>Cat</ToggleButton>
                                                    <Button.Or />
                                                    <ToggleButton variant="secondary" size='lg' className="speciesBtn" value={'rabbit'}>Rabbit</ToggleButton>
                                                </ToggleButtonGroup>
                                            </Button.Group>
                                            <div> Age </div>
                                            <ButtonToolbar className="m-1">
                                                <ToggleButtonGroup type="checkbox" onChange={this.handleChangePetAge.bind(this)}>
                                                    <ToggleButton variant="secondary" value={'baby'}>baby</ToggleButton>
                                                    <ToggleButton variant="secondary" value={'young'}>young </ToggleButton>
                                                    <ToggleButton variant="secondary" value={'adult'}>adult</ToggleButton>
                                                    <ToggleButton variant="secondary" value={'senior'}>Senior</ToggleButton>
                                                </ToggleButtonGroup>
                                            </ButtonToolbar>
                                            <div> Environment</div>
                                            <ButtonToolbar className="m-1">
                                                <Button.Group type="checkbox" >
                                                    <Button variant="secondary" onClick={this.handleChangeCats.bind(this)} value={'good_with_cats'}>cats</Button>
                                                    <Button variant="secondary" onClick={this.handleChangeDogs.bind(this)} value={'good_with_dogs'}>dogs </Button>
                                                    <Button variant="secondary" onClick={this.handleChangeChildren.bind(this)} value={'good_with_children'}>children</Button>
                                                </Button.Group>
                                            </ButtonToolbar>
                                            <div> Coat length</div>
                                            {/* <Container className=''> */}
                                            <ButtonToolbar className=" m-1">
                                                <ToggleButtonGroup className='wrapper' type="checkbox" onChange={this.handleChangePetCoat.bind(this)}>
                                                    <ToggleButton variant="secondary" value={'short'}>short</ToggleButton>
                                                    <ToggleButton variant="secondary" value={'medium'}>medium </ToggleButton>
                                                    <ToggleButton variant="secondary" value={'long'}>long</ToggleButton>
                                                </ToggleButtonGroup>
                                            </ButtonToolbar>
                                            <div> Coat type</div>
                                            <ButtonToolbar className=" m-1">
                                                <ToggleButtonGroup className='wrapper' type="checkbox" onChange={this.handleChangePetCoat.bind(this)}>

                                                    <ToggleButton variant="secondary" value={'wire'}>wire</ToggleButton>
                                                    <ToggleButton variant="secondary" value={'hairless'}>hairless</ToggleButton>
                                                    <ToggleButton variant="secondary" value={'curly'}>curly</ToggleButton>
                                                </ToggleButtonGroup>
                                            </ButtonToolbar>
                                            {/* </Container> */}
                                            {/* <Checkbox
                                                    checked={active}
                                                    label='Activate Sticky on right'
                                                    onChange={this.handleToggle}
                                                    toggle
                                                /> */}
                                        </Segment>
                                    </Sticky>
                                </Rail>
                            </Container>
                        </Ref>
                    </Grid.Column>
                </Grid>

                {/* <Col className="SearchToolBox col-2 float-left"> */}


                {/* <Button variant="outline-light">Search</Button> */}

                {/* <ButtonToolbar> */}


                {/* </ButtonToolbar> */}

                {/* <Expand /> */}
                {/* <Button >
                                    Search
                    </Button> */}

                {/* </Col> */}

                {/* </Row> */}

            </Container >
        )
    }
}
export default SearchTool;