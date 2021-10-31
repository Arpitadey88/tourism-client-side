import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';

const Booking = () => {
    return (
        <div className="p-4 border">
            <h2>Order to Place</h2>
            <Form>
                <Row className="mb-3">
                    <Col>
                        <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Last name" />
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="Your Address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <div>
                <h5>Phone scheduling is available Monday to Friday, 8:00 a.m. - 5:00 p.m.</h5>
                <div className="mb-2">
                    <Button variant="primary" size="lg">
                        Don’t have a MyHealth Account?
                    </Button>{' '}
                    <Button variant="primary" size="lg">
                        Create an account »
                    </Button>
                </div>
                <p>View Frequently Asked Questions about the COVID-19 Vaccine »</p>
            </div>
        </div>
    );
};

export default Booking;