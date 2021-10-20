import React from 'react';
import { useParams } from 'react-router';

const Hospital = () => {
    const { serviceId, serviceTitle } = useParams();
    return (
        <div>
            <div><h2>Our Service Number : {serviceId}</h2></div>
            <br /><br /><br />
            <div><h2>{serviceTitle}</h2></div>

        </div>
    );
};

export default Hospital;