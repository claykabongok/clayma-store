import React, { Suspense, lazy } from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { GlobalCartContextProvider } from "./context/CartContext";
import { ToastProvider } from "react-toast-notifications";
import loadingIcon from "./assets/images/dashboardloader3.gif";
const Homepage = lazy(() => import("./Components/Homepage"));
const Shopping = lazy(() => import("./Components/Shopping"));
const Cart = lazy(() => import("./Components/Cart/Cart"));
const Catalog = lazy(() => import("./Components/Catalog"));

const SearchProducts = lazy(() => import("./Components/SearchProducts"));
const PageNotFound = lazy(() => import("./Components/PageNotFound"));

function App() {
  return (
    <GlobalCartContextProvider>
      <ToastProvider>
        <Router>
          <Suspense
            fallback={
              <img src={loadingIcon} alt="loading" className="loadingIcon" />
            }
          >
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/shop" component={Shopping} />
              <Route exact path="/search" component={SearchProducts} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/trend/:collectionname" component={Shopping} />
              <Route exact path="/collections" component={Shopping} />
              <Route
                exact
                path="/collections/:collectionname"
                component={Shopping}
              />
              <Route
                exact
                path="/catalog/item/:id/:productname/:action"
                component={Catalog}
              />

              <Route component={PageNotFound} />
            </Switch>
          </Suspense>
        </Router>
      </ToastProvider>
    </GlobalCartContextProvider>
  );
}

export default App;
