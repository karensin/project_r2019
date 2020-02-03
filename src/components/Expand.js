import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonToolbar, Button, ToggleButton, Collapse, ToggleButtonGroup } from 'react-bootstrap/'
import { useState } from 'react';

function Expand() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                More
        </Button>
            <Collapse in={open}>
                <div>
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
                </div>
            </Collapse>
        </div>
    );
}

export default Expand;