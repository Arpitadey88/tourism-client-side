import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import error from '../../../image/notFound.gif';

const NotFound = () => {
    return (
        <div>
            <Card className="container-fluid text-center">
                <Card.Img style={{ height: '620px' }} className="banner-img" src={error} alt="Card image" />
                <Card.ImgOverlay>
                    <h3 className="ps-3">Error 404 – Page Not Found!</h3>
                    <Card.Body>
                        {/* <Card.Title>The page you requested is no longer here!</Card.Title> */}
                        <Card.Text>
                            Visit the Home Page
                            In order to improve our service, can you inform us that someone else has an incorrect link to our site?
                            Report broken link
                        </Card.Text>
                    </Card.Body>
                    <Link className="text-decoration-none" to="/"><Button className="mx-4 px-5 py-2 mt-1">Go Back</Button></Link>

                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default NotFound;