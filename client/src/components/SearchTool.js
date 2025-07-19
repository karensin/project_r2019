import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Form, Input, Icon, Pagination, ButtonContent } from 'semantic-ui-react';
import { Grid, Rail, Ref, Segment, Sticky } from 'semantic-ui-react';
import GetData from './GetData';
import { boundChangePetData } from '../Redux/actions';
import { Dimmer, Loader, Image } from 'semantic-ui-react'
import { ButtonOr, ButtonGroup, Button } from 'semantic-ui-react'
import Expand from './Expand';
import { use } from 'react';
const apiBase = "http://localhost:5050";

const SearchTool = () => {
    const contextRef = useRef();
    const [isLoading, setLoading] = useState(false);
    const [state, setState] = useState({
        petType: 'Dog',
        page: 1,
        location: '94112',
        sort: '-recent',
        age: undefined,
        coat: [],
        good_with_cats: undefined,
        good_with_dogs: undefined,
        good_with_children: undefined,
        input: '',
        items: [],
        totalPageCount: '',
        currentPage: '',
        empty: '',
        status: 'adoptable'
    });

    const fetchAnimals = async () => {
        setLoading(true);

        const queryParams = new URLSearchParams();
        const params = {
            type: state.petType,
            location: state.location,
            page: state.page,
            sort: state.sort,
            age: state.age,
            coat: state.coat.length > 0 ? state.coat.map(c => c.toLowerCase()).join(',') : undefined,
            good_with_cats: state.good_with_cats,
            good_with_dogs: state.good_with_dogs,
            good_with_children: state.good_with_children,
            limit: 20
        };
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined && value !== '') {
                queryParams.append(key, value);
            }
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

            }));
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAnimals();
    }, []);



    const onChangeCity = (val) => {

        setState(prev => ({ ...prev, input: val }));
    };

    const onSubmitCity = async (e) => {
        e.preventDefault();
    };

    const onSpeciesChange = (val) => {
        setState(prev => ({ ...prev, petType: val }));
    };

    const onAgeChange = (val) => {
        setState(prev => ({ ...prev, age: val, }));
    };

    const onCoatChange = (val) => {
        setState(prev => {
            const coatList = prev.coat.includes(val) ? prev.coat.filter(c => c !== val) : [...prev.coat, val];

            return { ...prev, coat: coatList }
        });
    };

    const onEnvToggle = (field) => {
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

    const onPageChange = (e, { activePage }) => {
        setState(prev => ({ ...prev, page: activePage }));
    };



    if (state.isLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Segment>
                    <Dimmer active inverted>
                        <Loader size='massive'>Loading</Loader>
                    </Dimmer>
                    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </Segment>
            </div>
        )
    }

    const environmentalFactors = {
        children: state.good_with_children,
        cats: state.good_with_cats,
        dogs: state.good_with_dogs
    }

    return (
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
                                                    value={state.location}
                                                    onChange={(e) => onChangeCity(e.target.value)}
                                                    icon={<Icon name="search" link />}
                                                />
                                            </Form>
                                        </Col>
                                        <Col xs="auto">
                                            <div className="fw-bold">Species</div>
                                            <ButtonGroup >
                                                <Button onClick={() => onSpeciesChange('Dog')} color={state.petType === 'Dog' ? "blue" : 'grey'} value="Dog" >Dog</Button>
                                                <ButtonOr />
                                                <Button onClick={() => onSpeciesChange('Cat')} color={state.petType === 'Cat' ? 'blue' : 'grey'} value="Cat">Cat</Button>
                                            </ButtonGroup>
                                        </Col>

                                        <Col xs="auto">
                                            <div className="fw-bold">Age</div>
                                            <ButtonGroup type="radio" name="age" >
                                                <Button onClick={() => onAgeChange('baby')} color={state.age === 'baby' ? 'blue' : 'grey'} value="baby">Baby</Button>
                                                <Button onClick={() => onAgeChange('young')} color={state.age === 'young' ? 'blue' : 'grey'} value="young">Young</Button>
                                                <Button onClick={() => onAgeChange('adult')} color={state.age === 'adult' ? 'blue' : 'grey'} value="adult">Adult</Button>
                                                <Button onClick={() => onAgeChange('senior')} color={state.age === 'senior' ? 'blue' : 'grey'} value="senior">Senior</Button>
                                            </ButtonGroup>
                                        </Col>

                                        <div className=" mr-4 ml-auto mb-auto mt-auto">
                                            <Button animated size='big' color="blue" onClick={fetchAnimals}>
                                                <ButtonContent visible>
                                                    Search
                                                    <Icon name='paw' />
                                                </ButtonContent>
                                                <ButtonContent hidden>
                                                    Adopt Today !
                                                </ButtonContent>
                                            </Button>
                                        </div>
                                    </Row>
                                    <Row className="gy-3 gx-4 flex-nowrap overflow-auto mt-2">
                                        <Expand onEnvToggle={onEnvToggle} environmentalFactors={environmentalFactors} onCoatChange={onCoatChange} selectedCoat={state.coat} />
                                    </Row>
                                </Container>
                            </Sticky>

                            <GetData items={state.items} isLoaded={state.isLoading} />
                            {state.totalPageCount > 1 && <Pagination className="d-flex" onPageChange={onPageChange} activePage={state.page} totalPages={state.totalPageCount} />}
                        </Container>
                    </Ref>
                </Grid.Column>
            </Grid>
        </Container>
    );
};

export default SearchTool;