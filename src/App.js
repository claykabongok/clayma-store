import React from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./Components/Homepage";
import Shopping from "./Components/Shopping";
import Cart from "./Components/Cart/Cart";
import Catalog from "./Components/Catalog";
import { GlobalCartContextProvider } from "./context/CartContext";
import { ToastProvider } from 'react-toast-notifications';
import SearchProducts from './Components/SearchProducts';
function App() {
  return (
    <GlobalCartContextProvider>
       <ToastProvider>
       <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shopping} />
          <Route exact path="/search" component={SearchProducts}/>
          <Route exact path="/cart" component={Cart} />
          <Route
            exact
            path="/collections/:collectionname"
            component={Shopping}
          />
          <Route
            exact
            path="/catalog/item/:id/:productname"
            component={Catalog}
          />
          {/* <Route component={PageNotFound} /> */}
        </Switch>
      </Router>
       </ToastProvider>
     
    </GlobalCartContextProvider>
  );
}

export default App;
