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
import PausePage from './containers/PausePage';
import PaymentFinal from './containers/PaymentFinal';
import SuccessPage from './containers/SuccessPage';

function Router() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/menu" component={Menu} />
          <Route path="/checkout" component={CheckoutPersonal} />
          <Route path="/pause" component={PausePage} />
          <Route exact path="/payment" component={PaymentPersonal} />
          <Route path="/payment/final" component={PaymentFinal} />
          <Route path="/payment/success" component={SuccessPage} />
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default Router;
