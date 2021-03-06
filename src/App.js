import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Homepage from './components/pages/homepage/homepade';
import ShopPage from './components/pages/shop/shop';
import Header from './components/header/header';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
