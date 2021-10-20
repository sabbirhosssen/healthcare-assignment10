import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const ServiceCard = (props) => {
    const { img, title } = props

    return (
        <Col>

            <Card className="bg-info">
                <Row >

                    <Col sm={4}>
                        <Card.Img variant="bg-info" height="100px" width="50px" src={img} />
                    </Col>
                    <Col sm={8}>
                        <Card.Body>
                            <Card.Title variant="text-center text-durk" >{title}</Card.Title>


                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Col>
    );
};

export default ServiceCard;