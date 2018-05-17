 import React from 'react';

export class Card extends React.Component {
    render() {
        const {  image, title, description, extraInfo } = this.props;
        return (
            <div className="body-card">
                <div className="body-card-up  img-card-holder">
                    <img className="img-card" src={ image} />
                </div>
                <footer className="footer-card" >
                     <div className="icons-unit-card-holder">
                         <a  href={extraInfo} > <i className="material-icons icons-unit-card" >info</i></a>
                     </div>
                     <div className="title-card">
                        <cite  id="title-card" title="Source Title" >{title}</cite>
                    </div>
                    <div className="description-card">
                        <p>{description}</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Card;



