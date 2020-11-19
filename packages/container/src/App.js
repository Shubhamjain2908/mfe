import { Switch } from '@material-ui/core';
import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AuthApp from './components/AuthApp';
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Switch>
            <Route path='/auth' component={AuthApp}></Route>
            <Route path='/' component={MarketingApp}></Route>
          </Switch>
        </div>
      </StylesProvider>
    </BrowserRouter>);
};
