import React, { Component } from 'react';

import './css/nav.css'
import './css/main.css'
import './css/typography.css'
import './css/utilities.css'
import './css/footer.css'
import './css/contactPage.css'
import './css/getQuotePage.css'
import './css/parallax.css'
import './css/card.css'
import './css/Material.css'

import { Switch, Route } from 'react-router-dom';
import MenuPage from './components/MenuPage';
import ContactPage from './components/ContactPage';
import ContactPageSuccess from './components/ContactPageSuccess';
import DiscoverPage from './components/DiscoverPage';
import DiscoveList from './components/DiscoveList';
import GetQuotePage from './components/GetQuotePage';
import HomePage from './components/HomePage';
import MapPage from './components/MapPage';
import ErrorPage from './components/common/ErrorPage';
import Card from './components/Card';
import { unit } from './components/common/data.json';

class App extends Component {
  render() {
    return (
      <div>
        
         <MenuPage />
       
        <Switch>
          < Route exact path='/' component={HomePage} />
          < Route path='/contact' component={ContactPage} />
          < Route path='/success' component={ContactPageSuccess} />
          < Route path='/discover' render={ () => <  DiscoverPage unit = { unit }/>} />
          < Route path='/discover/list' component={DiscoveList} /> 
          < Route path='/quote' component={GetQuotePage} />
          < Route path='/map' component={MapPage} />
          < Route path='/card' component={Card} />
          < Route component={ErrorPage} />
        </Switch>

      </div>
    );
  }
}

export default App;
