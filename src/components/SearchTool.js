import React, { useEffect, useState, useRef } from 'react';
import { Container, ButtonToolbar, ToggleButton, ToggleButtonGroup, Button, Row, Col } from 'react-bootstrap';
import { Form, Input, Icon, Pagination, } from 'semantic-ui-react';
import { Grid, Rail, Ref, Segment, Sticky } from 'semantic-ui-react';
import GetData from './GetData';
import { boundChangePetData } from '../Redux/actions';
import { Suspense } from 'react';
import { Dimmer, Loader, Image } from 'semantic-ui-react'

const apiBase = "http://localhost:5050";

const SearchTool = () => {
    const contextRef = useRef();

    const [state, setState] = useState({
        petType: 'Dog',
        page: 1,
        location: '94112',
        sort: '-recent',
        age: '',
        coat: '',
        good_with_cats: false,
        good_with_dogs: false,
        good_with_children: false,
        input: '',
        items: [],
        isLoaded: false,
        totalPageCount: '',
        currentPage: '',
        empty: ''
    });

    const fetchAnimals = async () => {
        const queryParams = new URLSearchParams({
            type: state.petType,
            location: state.location,
            page: state.page,
            sort: state.sort,
            age: state.age,
            coat: state.coat,
            good_with_cats: state.good_with_cats,
            good_with_dogs: state.good_with_dogs,
            good_with_children: state.good_with_children,
            limit: 20
        });

        try {
            const res = await fetch(`${apiBase}/api/animals?${queryParams.toString()}`);
            if (!res.ok) {
                throw new Error(`API error: ${res.statusText}`);
            }
            const data = await res.json();

            boundChangePetData(data.animals || []);
            setState(prev => ({
                ...prev,
                items: data.animals || [],
                empty: data.animals?.length === 0 ? 'Sorry! No results.' : '',
                totalPageCount: data.pagination?.total_pages || 1,
                currentPage: data.pagination?.current_page || 1
            }));
        } catch (err) {
            console.error('Failed to fetch animals:', err);
            setState(prev => ({
                ...prev,
                items: [],
                empty: 'Error loading data.'
            }));
        } finally {
            setState(prev => ({
                ...prev,
                isLoaded: true
            }));
        }
    };

    useEffect(() => {
        console.log("Fetching animals with state:", state);
        fetchAnimals();
    }, []);

    const onChangeCity = (e) => {
        setState(prev => ({ ...prev, input: e.target.value }));
    };

    const onSubmitCity = async (e) => {
        e.preventDefault();
    };

    const onSpeciesChange = async (val) => {
        setState(prev => ({ ...prev, petType: val }));
    };

    const onAgeChange = async (val) => {
        setState(prev => ({ ...prev, age: val, }));
    };

    const onCoatChange = async (val) => {
        setState(prev => ({ ...prev, coat: val }));
    };

    const onEnvToggle = async (field) => {
        setState(prev => {
            const currentVal = prev[field];
            console.log({
                ...prev,
                [field]: !currentVal,
                page: 1
            })
            return {
                ...prev,
                [field]: !currentVal,
                page: 1
            };
        });
        // await fetchAnimals();
    };

    const onPageChange = async (e, { activePage }) => {
        setState(prev => ({ ...prev, page: activePage }));
    };


    const Loading = () => {
        return (
            <Segment>
                <Dimmer active>
                    <Loader />
                </Dimmer>
                <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
            </Segment>)
    }

    return (
        <Suspense fallback={<Loading />}>
            {
                state.empty ? <div style={{ textAlign: 'center', margin: '1rem', fontSize: '1.2rem', color: '#ff4d4d' }}>{state.empty}</div> :
                    <Container style={{ maxWidth: '100%' }} >
                        <Grid>
                            <Grid.Column columns={2}>
                                <Ref innerRef={contextRef}>
                                    <Container style={{ marginTop: '-12rem' }} >
                                        <Sticky>
                                            <Container fluid className="bg-white py-3 px-4 search-container">
                                                <h3 style={{ fontWeight: '600', marginBottom: '1rem' }}>
                                                    Search for Pets in Your Area
                                                </h3>

                                                <Row className="gy-3 gx-4 flex-nowrap overflow-auto">
                                                    <Col xs="auto">
                                                        <div className="fw-bold">Area code</div>

                                                        <Form onSubmit={onSubmitCity} className="mb-3">
                                                            <Input

                                                                placeholder="Enter ZIP code..."
                                                                value={state.input}
                                                                onChange={onChangeCity}
                                                                icon={<Icon name="search" link onClick={onSubmitCity} />}
                                                            />
                                                        </Form>
                                                    </Col>
                                                    <Col xs="auto">
                                                        <div className="fw-bold">Species</div>
                                                        <ToggleButtonGroup type="radio" name="species" onChange={onSpeciesChange}>
                                                            <ToggleButton value="Dog">Dog</ToggleButton>
                                                            <ToggleButton value="Cat">Cat</ToggleButton>
                                                            <ToggleButton value="Rabbit">Rabbit</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </Col>

                                                    <Col xs="auto">
                                                        <div className="fw-bold">Age</div>
                                                        <ToggleButtonGroup type="radio" name="age" onChange={onAgeChange}>
                                                            <ToggleButton value="baby">Baby</ToggleButton>
                                                            <ToggleButton value="young">Young</ToggleButton>
                                                            <ToggleButton value="adult">Adult</ToggleButton>
                                                            <ToggleButton value="senior">Senior</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </Col>

                                                    <Col xs="auto">
                                                        <div className="fw-bold">Coat</div>
                                                        <ToggleButtonGroup type="radio" name="coat" onChange={onCoatChange}>
                                                            <ToggleButton value="short">Short</ToggleButton>
                                                            <ToggleButton value="medium">Medium</ToggleButton>
                                                            <ToggleButton value="long">Long</ToggleButton>
                                                        </ToggleButtonGroup>
                                                    </Col>

                                                    <Col xs="auto">
                                                        <div className="fw-bold">Good With</div>
                                                        <ButtonToolbar className="d-flex gap-2">
                                                            <Button variant={state.good_with_cats ? 'primary' : 'secondary'} onClick={() => onEnvToggle('good_with_cats')}>Cats</Button>
                                                            <Button variant={state.good_with_dogs ? 'primary' : 'secondary'} onClick={() => onEnvToggle('good_with_dogs')}>Dogs</Button>
                                                            <Button variant={state.good_with_children ? 'primary' : 'secondary'} onClick={() => onEnvToggle('good_with_children')}>Children</Button>
                                                        </ButtonToolbar>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Sticky>

                                        <GetData items={state.items} isLoaded={state.isLoaded} />
                                        {state.totalPageCount > 1 && <Pagination className="d-flex" onPageChange={onPageChange} activePage={state.page} totalPages={state.totalPageCount} />}


                                    </Container>
                                </Ref>
                            </Grid.Column>
                        </Grid>
                    </Container>
            }
        </Suspense>
    );
};

export default SearchTool;