import React, { createRef, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
// import { Form, FormControl } from 'react-bootstrap'
import { ButtonToolbar, ToggleButton, ToggleButtonGroup } from 'react-bootstrap/'
import Expand from './Expand.js';
import GetData from './GetData.js';
import { boundChangePetData, boundChangePetAge, boundChangePetEnvoriment } from '../Redux/actions'
import DisplayData from './DisplayData.js';
import { Icon, Input, Button, Form, Pagination } from 'semantic-ui-react'
import {
    Grid,
    Rail,
    Ref,
    Segment,
    Sticky,
} from 'semantic-ui-react';


const domain = "https://api.petfinder.com";
const tokenUrl = '/v2/oauth2/token';
const url = `/v2/animals`;

class SearchTool extends Component {
    contextRef = createRef()
    constructor() {
        super()
        this.state = {
            empty: '',
            active: true,
            petType: 'Dog',
            page: 1,
            location: '94112',
            sort: '-recent',
            coat: '',
            age: '',
            good_with_children: '',
            good_with_dogs: '',
            good_with_cats: '',
            input: '',
            hasError: false,
            limit: '20',
            totalPageCount: '',
            currentPage: '',
            isloading: null,
            loadingMessage: 'loading...'
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
            totalPageCount: this.state.totalPageCount,
            location: this.state.location,
            sort: this.state.sort,
            age: this.state.age,
            good_with_children: this.state.good_with_children,
            good_with_dogs: this.state.good_with_dogs,
            good_with_cats: this.state.good_with_cats,
            coat: this.state.coat,
            limit: this.state.limit
        }
        let queryString = ''
        for (let param in params) {
            if (params[param] !== '') {
                queryString += (param + '=' + params[param] + '&')
            }
        }
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
            if (!jsonRes.animals.length) {
                console.log('empty page')
                this.setState({
                    empty: 'Sorry! Looks like we ran out of furries in your area, Please check back for new furry updates!'
                })
            }
            if (jsonRes.pagination) {
                this.setState({
                    totalPageCount: jsonRes.pagination.total_pages,
                    currentPage: jsonRes.pagination.current_page,
                })
            }
            console.log(jsonRes, 'response', jsonRes.pagination, this.state.totalPageCount, this.state.currentPage)

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
        } else {
            newVal = val
        }
        this.setState({
            age: newVal,
            isloading: true
        });
        await this.getToken();
        await this.requestData();
        this.setState({
            isloading: false
        })
    }
    async handleChangePetCoat(val) {
        let newVal = this.state.coat
        if (this.state.age !== '') {
            newVal = this.state.coat + ' ,' + val
        } else {
            newVal = val
        }

        this.setState({
            coat: newVal
        });
        await this.getToken();
        await this.requestData();
    }


    async handleChangeCats(val) {
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
        if (this.state.good_with_children === true && this.state.good_with_dogs === true && this.state.good_with_cats === true) {
            this.setState({
                good_with_children: true,
                good_with_dogs: true,
                good_with_cats: true
            });
        }

        await this.getToken();
        await this.requestData();
    }
    async handleChangeDogs(val) {

        if (this.state.good_with_dogs === true) {
            this.setState({
                good_with_dogs: false
            });
        }
        if (this.state.good_with_dogs === false) {
            this.setState({
                good_with_dogs: true
            });
        }
        if (this.state.good_with_children === true && this.state.good_with_dogs === true && this.state.good_with_cats === true) {
            console.log('did u happen')
            this.setState({
                good_with_children: true,
                good_with_dogs: true,
                good_with_cats: true
            });
        }
        await this.getToken();
        await this.requestData();
    }
    async handleChangeChildren(val) {

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
        if (this.state.good_with_children === true && this.state.good_with_dogs === true && this.state.good_with_cats === true) {

            this.setState({
                good_with_children: true,
                good_with_dogs: true,
                good_with_cats: true
            });
        }
        await this.getToken();
        await this.requestData();
    }
    async onClickPageNext() {

        this.setState({
            page: this.state.page += 1,
            isloading: true
        });
        console.log(this.state.page, 'page')
        await this.getToken();
        await this.requestData();
        this.setState({
            page: this.state.page += 1,
            isloading: false
        });

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

    onChangeSearchCity(e) {
        console.log(e.target.value, 'look at me')
        this.setState({
            input: e.target.value

        })
        if (this.onSubmitSearchCity) {
            e.target.value = ''
        }
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

    }

    async test(e, data) {
        console.log('____my data', data)
        this.setState({
            isloading: true,
            page: data.activePage
        })
        await this.getToken();
        await this.requestData();
        this.setState({
            isloading: false,
        })
    }
    isLoading() {
        if (this.state.isloading) {
            return this.state.loadingMessage
        }
    }
    render() {
        // const { active } = this.state

        // if (this.state.hasError === true) {
        //     return <div> fak </div>
        // }
        if (this.state.isLoading === true) {
            return <div> loading....</div>
        }


        return (
            <Container className="dataBox">

                <Grid >
                    <Grid.Column columns={2}>
                        <Ref innerRef={this.contextRef}>
                            <Container className="databox">
                                {/* <Segment position='right'> 'data goes here' */}
                                <Container className="displayData mt-auto p-2">
                                    <Sticky className="stickyDirectionBar d-flex justfiy-content-center" >
                                        <Pagination onPageChange={((e, data) => this.test(e, data))} defaultActivePage={this.state.page} totalPages={this.state.totalPageCount} />
                                        {/* <Button className="directionbtn d-flex justify-content-start" variant="warning" offset='200' onClick={this.onClickPagePrev.bind(this)}> <Icon name='left arrow' /> Prev  </Button>
                                            <Button className="directionbtn d-flex justify-content-end" variant="warning" onClick={this.onClickPageNext.bind(this)}> Next<Icon name='right arrow' /></Button> */}
                                    </Sticky>
                                    <div>  {this.state.empty} </div>
                                    <GetData className="dataBox displayData mt-auto p-2" items={this.state.items} isLoaded={this.state.isLoaded}>
                                    </GetData>
                                    {/* <h1> {this.state.loadingMessage}</h1> */}
                                </Container>
                                <Rail >
                                    <Sticky className="stickySearchBar" >
                                        <Segment className="positionSticky">
                                            <div> </div>
                                            <Form onSubmit={this.onSubmitSearchCity.bind(this)}>
                                                <Form.Field type="submit">
                                                    Zip code
                                                    <Input
                                                        placeholder='94112....'
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