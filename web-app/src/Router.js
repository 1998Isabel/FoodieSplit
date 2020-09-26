import React from 'react';
import "bootswatch/dist/minty/bootstrap.min.css";
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Header from './containers/Header';
import Login from './containers/Login';
import Menu from './containers/Menu';
import CheckoutPersonal from './containers/CheckoutPersonal';
import PaymentPersonal from './containers/PaymentPersonal';

function Router() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/menu" component={Menu} />
          <Route path="/checkout/personal" component={CheckoutPersonal} />
          <Route path="/payment/personal" component={PaymentPersonal} />
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default Router;
