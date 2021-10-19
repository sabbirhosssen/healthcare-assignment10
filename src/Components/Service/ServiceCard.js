import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const ServiceCard = (props) => {
    const { img, title, text } = props

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
                            <Card.Text>{text}
                            </Card.Text>
                            <Card.Title variant="text-center bg-info" ><Button> Ditals</Button></Card.Title>

                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Col>
    );
};

export default ServiceCard;