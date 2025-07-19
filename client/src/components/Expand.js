import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonToolbar, Button, ToggleButton, Collapse, ToggleButtonGroup, Container } from 'react-bootstrap/'
import { useState } from 'react';
import { Icon } from 'semantic-ui-react';

function Expand({ onEnvToggle, environmentalFactors, onCoatChange, selectedCoat }) {
    const [open, setOpen] = useState(false);
    const { cats, dogs, children } = environmentalFactors;
    const getColors = (color) => {
        if (selectedCoat.includes(color)) {
            return 'primary'
        }
        return 'secondary'
    }
    return (
        <Container>
            <Button
                variant="secondary" size="medium"
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                More filters <Icon name={open ? 'chevron up' : 'chevron down'} />
            </Button>
            <Collapse in={open} >
                <div className='mt-3'>
                    Coat
                    <div className="d-flex" style={{ gap: '0.5rem' }}>
                        {['Hairless', 'Short', 'Long', 'Wire', 'Curly'].map((coat) => {
                            return (
                                <Button key={coat} variant={getColors(coat)} onClick={() => onCoatChange(coat)}>
                                    {coat}
                                </Button>
                            )
                        })}
                    </div>

                    <div className="fw-bold mt-3">Good With</div>
                    <ButtonToolbar className="d-flex" style={{ gap: '0.5rem' }}>
                        <Button variant={cats ? 'primary' : 'secondary'} onClick={() => onEnvToggle('good_with_cats')}>Cats</Button>
                        <Button variant={dogs ? 'primary' : 'secondary'} onClick={() => onEnvToggle('good_with_dogs')}>Dogs</Button>
                        <Button variant={children ? 'primary' : 'secondary'} onClick={() => onEnvToggle('good_with_children')}>Children</Button>
                    </ButtonToolbar>

                </div>
            </Collapse>
        </Container >
    );
}

export default Expand;