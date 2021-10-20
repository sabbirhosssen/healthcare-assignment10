import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Headere = () => {
    return (
        <div>

            <Row>
                <Col className="">
                    <img src="https://www.ibnsinatrust.com/image/04/logo-light.png" alt="mainlogo" width="260px" />
                </Col>
                <Col className="">
                    <img src="https://www.ibnsinatrust.com/image/callcenter.png" alt="callcenterlogo" width="250px" />
                </Col>
                <Col className="">
                    <img src="https://www.ibnsinatrust.com/image/email.png" alt="ibnsinaemail" width="250px" />
                </Col>

            </Row>
        </div>
    );
};

export default Headere;