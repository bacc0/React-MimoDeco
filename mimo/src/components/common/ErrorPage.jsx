import React from 'react';

export class ErrorPage extends React.Component{
    render() {
        return (
            <div>
                <h1>ERROR! 404</h1>
                <div className="type-service">
                    <h2 className="u-center-text">ERROR! 404</h2>
                    <br />
                    <div className="row">
                        <div className=" col col-lg-6 ">
                        </div>
                        <div className="col col-lg-6 " >
                            <br />
                            <p className="grey-text">
                                As commercial refurbishment experts in London and the greater London area, we work to the highest standards, with staff trained to leave zero mess, minimal disruption, and a beautiful finish to your commercial business.
                            </p>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ErrorPage;