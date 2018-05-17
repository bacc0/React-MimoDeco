import React from 'react';
import Footer from '../components/common/Footer';

import Commercial from '../img/commercial.jpg';
import Hero from '../img/hero.jpg';
import Shop from '../img/shop.jpg';
import LogoBrush from '../img/brush-logo.png';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <header class="header" >
                    <div className="logo-box">
                        <img src={LogoBrush} alt="commercial" className="LogoBrush" />
                    </div>
                    <div className="text-box">
                        <h1 className="heading-primary ">
                            <span className="heading-primary-main"> Mimodeco</span>
                            <span className="heading-primary-sub ">In where live happens</span>
                        </h1>
                        <a href="/discover" className="btno "> Discover </a>
                    </div>
                </header>
                <main>
                    <div className="section-about">
                        <div className="u-center-text">
                            <h2 className="heading-secondary ">
                                Why Choose Us?
                            </h2>
                            <div class="padding-text">
                                <div class="row choose-text" >
                                    <p className="col col-lg-4" >
                                        <i className="material-icons big-icons left" >format_paint</i><samp className="big-icons-letter"> SERVICE</samp>
                                        <br />
                                        <br />
                                        <h3>Unlike others, we tidy up at the end of every day of work and we work hours which suit you.</h3>
                                    </p>
                                    <p className="col col-lg-4" >
                                        <i className="material-icons big-icons left" >compare_arrows</i><samp className="big-icons-letter"> SPEED</samp>
                                        <br />
                                        <br />
                                        <h3>We’ve done office, residential and retail refurbishments in a weekend.</h3>
                                    </p>
                                    <p className="col col-lg-4" >
                                        <i className="material-icons big-icons left" >money</i><samp className="big-icons-letter"> PRICE</samp>
                                        <br />
                                        <br />
                                        <h3> Competitive rates and a ‘no hassle’ guarantee.</h3>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bio">
                        <div className="bio-text">
                            <h3>What is an eco paint?</h3>
                            <p>
                                By 2010, paint manufacturers will be obliged to comply with stringent new EU limits on VOC levels. Some have complied already and are labelling their products as 'environmentally friendly' - but it ain't necessarily so. According to sustainablebuild.co.uk, many of the 'non-toxic' paints from conventional companies "still contain VOC solvents, chemical pigments and fungicides". Equally confusingly, the move towards low-VOC, water-based gloss paints is also controversial, as it means manufacturers have to add even more ingredients, using a more intensive production process, than before.
                            </p>
                        </div>
                    </div>
                    <div className="type-service">
                        <h2 className="u-center-text blue-text-lg">Commercial Refurbishment Experts in London</h2>
                        <br />
                        <div className="row">
                            <div className=" col col-lg-6 ">
                                <img src={Commercial} alt="commercial" className="painter" />
                            </div>
                            <div className="col col-lg-6 " >
                                <br />
                                <p className="grey-text  ">
                                    As commercial refurbishment experts in London and the greater London area, we work to the highest standards, with staff trained to leave zero mess, minimal disruption, and a beautiful finish to your commercial business.
                                </p>
                                <br />
                                <p className="grey-text">
                                    The Invisible Painter approach is simple – work diligently and honestly, creating as little hassle as possible for our customers. You’ll be pleasantly surprised by the speed of our workers. We are called the Invisible Painters because you’ll barely notice us since we take extra precautions to not disturb any activity you may have at your premises.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="type-service">
                        <h2 className="u-center-text blue-text-lg">Quality Residential Painting in London</h2>
                        <br />
                        <div className="row">
                            <div className="col col-lg-6">
                                <img src={Hero} alt="hero" className="painter" />
                            </div>
                            <div className="col col-lg-6" >
                                <br />
                                <p className="grey-text">
                                    experience as residential and commercial painters and decorators in London, allow the Invisible Painter to understand that you want an excellent service and minimal disruption to your daily routine. We will redecorate your residential premises using a timetable that suits you, whether that is overnight, early mornings or at weekends.
                                </p>
                                <br />
                                <p className="grey-text">
                                    experience as residential and commercial painters and decorators in London, allow the Invisible Painter to understand that you want an excellent service and minimal disruption to your daily routine. We will redecorate your residential premises using a timetable that suits you, whether that is overnight, early mornings or at weekends.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="type-service">
                        <h2 className="u-center-text blue-text-lg">How can painting & decorating help your retail store?</h2>
                        <br />
                        <div className="row">
                            <div className="col col-lg-6">
                                <img src={Shop} alt="shop" className="painter" />
                            </div>
                            <div className="col col-lg-6" >
                                <br />
                                <p className="grey-text">
                                    We can help you to improve your business property without the workload and stress that a retail painting and decorating project would involve. The Invisible Painter will help London businesses delight their clients, visitors and employees with minimal disruption. We also provide an exceptional retail shopfitters service in London.
                                </p>
                                <br />
                                <p className="grey-text">
                                    We know that undertaking a retail painting and decorating project is a huge decision, especially for a busy shop in London. A bad decision impacts your reputation and credibility, it can upset employees and turn away customers. That’s why we introduced our “no hassle” guarantee for new clients.
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default HomePage;
