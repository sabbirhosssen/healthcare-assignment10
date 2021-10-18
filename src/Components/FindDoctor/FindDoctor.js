import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import FindDoctorCard from './FindDoctorCard';

const FindDoctor = () => {
    const [doctor, setDoctor] = useState([]);
    useEffect(() => {
        fetch('./Doctordata.JSON')
            .then(res => res.json())
            .then(data => setDoctor(data))
    })

    return (
        <div id="doctor">
            <div className="text-center pt-5 m-5 ">
                <h1>Find A Doctor</h1>
            </div>

            <div>
                <Row xs={1} md={3} className="g-5  m-2 " >
                    {
                        doctor.map(doctor =>
                            <FindDoctorCard
                                key={doctor.id}
                                img={doctor.img}
                                name={doctor.name}
                                title={doctor.title}
                                address={doctor.address}
                                contact={doctor.contact}
                            ></FindDoctorCard>
                        )


                    }

                </Row>
            </div>
        </div>
    );
};

export default FindDoctor;