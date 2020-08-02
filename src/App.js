import React from 'react';
import './styles/App.scss';
import {
  BrowserRouter as Router, 
  Route,
  
  Switch,
} from "react-router-dom";

import Homepage from './Components/Homepage';
import Shopping from './Components/Shopping';
import Cart from './Components/Cart/Cart';
import Catalog from './Components/Catalog';
function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/shop" component={Shopping}/>
        {/* <Route exact path="/shop" component={Shopping}/> */}
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/collections/:collectionname" component={Shopping}/>
        <Route exact path="/catalog/item/:id/:productname" component={Catalog}/>
        {/* <Route component={PageNotFound} /> */}
      </Switch>

    </Router>
   
  );
}

export default App;
