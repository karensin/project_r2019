import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function About() {
    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={10} lg={8}>
                    <h1 className="mb-4 text-center">About Project Crateless</h1>

                    <p>
                        <strong>Project Crateless</strong> was created to shine a light on shelter animals
                        that have been waiting the longest for a home. While many platforms prioritize newly
                        admitted pets, we believe the spotlight should be on the animals who have been overlooked.
                    </p>

                    <p>
                        Our mission is to help these long-term residents find their forever homes faster by
                        bringing visibility to their stories. Every animal deserves a chance at love — and we’re
                        here to make sure none are left behind.
                    </p>

                    <hr className="my-5" />

                    <div className="text-center">
                        <h3 className="mb-3">Ready to make a difference?</h3>
                        <p className="mb-4">
                            Explore animals near you that need a forever home. Adopt your future best friend today.
                        </p>
                        <Button variant="success" size="lg" href="/adopt">
                            <span role="img" aria-label="dog">🐶</span> Adopt Your Animal
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}