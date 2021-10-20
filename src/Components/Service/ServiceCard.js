import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    // const {service}=props.service
    const { img, title, textarea, id } = service

    return (
        <Col>

            <Card style={{ border: 'none' }}>
                <Row >

                    <Col sm={4}>
                        <Card.Img variant="bg-info" height="100px" width="50px" src={img} />
                    </Col>
                    <Col sm={8}>
                        <Card.Body className="text-start">
                            <Card.Title  >{title}</Card.Title>
                            <Card.Text>{textarea}
                            </Card.Text>

                            <Link to={`/hospital/${id},${title},${textarea} `}>
                                <Card.Title variant="text-center bg-info" ><Button> Add To Service</Button>
                                </Card.Title>
                            </Link>

                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Col>
    );
};

export default ServiceCard;