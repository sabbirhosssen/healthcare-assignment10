import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>

            <br /><br /><br />



            <div className="m-0 mb-0 bg-black text-white">
                <div className="container">
                    <div className="row pt-3 py-2">
                        {/* colam 1  */}
                        <div className="col-md-4 col-sm-6 ">
                            <img src="https://www.ibnsinatrust.com/image/04/logo-light.png" alt="" width="150px" />
                            <p className="py-2">
                                To serve the hummanity as a whole with this noble vision the ibn sina trust started its journey in june 1980 . The trust has agreed upon the provied healthcare service to the people of bangladesh with affordable cost .
                            </p>
                            <h5>House # 48, Road # 9/A ,Dhanmondi ,Dhaka 1209</h5>
                            <h5>Hotline : 10615 , +8809757656556</h5>
                            <h5>info@ibnsinatrust.com</h5>
                        </div>
                        {/* colam 3  */}
                        <div className="col-md-4 col-sm-6">
                            <h3 className="text-blue py-2">Visitor Counter</h3>
                            <ul className="list-unstyled">
                                <li className="py-3">Total visitor : 64964336</li>
                                <li className="py-3">unique visitor : 50043</li>
                                <li className="py-3">Page visitor : 10003849</li>

                            </ul>
                        </div>
                        {/* colam 3  */}
                        <div className="col-md-4 col-sm-6">
                            <h3> Contact Us</h3>
                            <ul className="list-unstyled py-4">
                                <li className="py-3">
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />

                                </li>

                                <InputGroup>
                                    <FormControl as="textarea" aria-label="With textarea" placeholder="Messeage" />
                                </InputGroup>


                                <li className="py-3"><Button className="bg-primary">Submit</Button></li>
                            </ul>
                        </div>

                    </div>
                    <p className="text-white pt-3">Copyright © 2021 . inbsinahealthcare.eu.com</p>
                </div>

            </div>

        </div>


    );
};

export default Footer;