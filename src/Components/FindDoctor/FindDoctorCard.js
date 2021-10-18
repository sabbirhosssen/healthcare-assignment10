import React from 'react';
import { Card, Col } from 'react-bootstrap';

const FindDoctorCard = (props) => {
    const { img, name, title, address, contact } = props
    console.log(props)
    return (
        <Col>
            <Card>
                <Card.Img variant="top" width="250px" height="250px" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {address}
                    </Card.Text>
                    <Card.Text>
                        {contact}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default FindDoctorCard;