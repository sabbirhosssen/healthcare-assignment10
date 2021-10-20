import React, { useEffect, } from 'react';
import { useParams } from 'react-router';


const Hospital = (props) => {


    let { serviceId } = useParams();
    // const { serviceData, setServiceData } = useState([])
    useEffect(() => {
        fetch(`./Servicesfakedata.json`)
            .then(res => res.json())
            .then(data => console.log('data'))
    }, [])
    // console.log(serviceData)
    // useEffect(() => {
    //     const singleData = serviceData.find(singleService => singleService.serviceId == serviceId)
    //     console.log(singleData);

    // }, [serviceData])





    return (
        <div>
            <div><h2>Our Service Number : {serviceId}</h2></div>
            <br /><br /><br />


        </div>
    );
};

export default Hospital;