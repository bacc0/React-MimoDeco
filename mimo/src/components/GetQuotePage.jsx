import React from 'react';
import Footer from '../components/common/Footer';


export class GetQuotePage extends React.Component{
    render() {
        return (
            <div>
                <div className='container-a'>
                    <div className="group-1 ">
                        <div className="background">
                           <div className="header-quote">
                                    <div className="map-text col-lg-3 col-sm-4 col-xs-12">
                                        <br />
                                        <h3>London office</h3>
                                        <hr />
                                        <p>52 Battersea Park Road, </p>
                                        <p>Battersea, </p>
                                        <p>London SW11 4JP </p>

                                        <a className="phone-link-yellow" href="tel:07428-390052">07428 390052</a>
                                        <br />
                                        <br />
                                    </div>
                            </div> 
                        </div>
                        <div className="foreground">
                            <center>
                                <div className='main-quote'>
                                    <h2>Contact</h2>
                                    <br />
                                    <p>WE'D REALLY LOVE TO HEAR FROM YOU SO
                                            WHY NOT DROP US AN EMAIL
                                            AND WE'LL GET BACK TO YOU AS SOON AS WE CAN.
                                            CALL US TO SET UP AN APPOINTMENT
                                     </p>
                                     <div><strong>
                                        <a className="phone-link-l-blue" href="tel:07428-390052">07428 390052</a>
                                    </strong></div>

                                    <br />
                                    <div className="">
                                        <a href="/contact" className="btno btn-quote">MAIL US</a>
                                    </div>
                                </div>
                            </center>
                            <div className="footer-separator-quote-map" ></div>
                           <Footer/> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GetQuotePage;



