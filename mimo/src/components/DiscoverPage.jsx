import React from 'react';
import Footer from '../components/common/Footer';

import DiscoveList from '../components/DiscoveList';

export class DiscoverPage extends React.Component{
    render() {
        const { unit } = this.props;
        return (
            <div class="discover-page-body">
                <header class="header-discover" > 
                    <span className="heading-primary-red"> Mimodeco</span>
                </header>
                   <h2 id="discover-work-text" >Discover our work</h2>
                   <DiscoveList unit={unit} />
                   <div className="footer-separator-discover" ></div>
                <Footer />
            </div>
            
        );
    }
}

export default DiscoverPage;