import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import FasalityCard from './FasalityCard';





const Fasality = () => {
    const [fasality, setFasality] = useState([]);
    useEffect(() => {
        fetch('./Servicedata.json')
            .then(res => res.json())
            .then(data => setFasality(data))

    }, [])


    return (
        <div>
            <div className="text-center pt-3 m-5">
                <h1>Help Center</h1>
            </div>

            <div>
                <Row xs={1} md={2} className="g-3  m-4 " style={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundImage: `url("https://www.ibnsinatrust.com/image/Best_laboratory_test.jpg")`

                }} >
                    {
                        fasality.map(fasality => <FasalityCard
                            key={fasality.id}
                            img={fasality.img}
                            title={fasality.title}
                        >
                        </FasalityCard>
                        )


                    }

                </Row>
            </div>

        </div>
    );
};




export default Fasality;