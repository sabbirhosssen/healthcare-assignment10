import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('./Servicesfakedata.JSON')
            .then(res => res.json())
            .then(data => setService(data))
    })
    return (
        <div>
            <div className="text-center pt-3 m-5">
                <h1>Our Services</h1>
            </div>
            <div>
                <Row xs={1} md={3} className="g-3  m-4 " >
                    {
                        service.map(service => <ServiceCard
                            key={service.id}
                            img={service.img}
                            title={service.title}
                            text={service.textarea}
                        ></ServiceCard>

                        )


                    }

                </Row>
            </div>

        </div>
    );
};

export default Services;