import React from 'react';
import "bootswatch/dist/minty/bootstrap.min.css";
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Header from './containers/Header';
import Login from './containers/Login';
import Menu from './containers/Menu';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/menu" component={Menu} />
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;
