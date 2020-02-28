import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BoxLogin from './components/boxLogin/boxLogin'
import Main from './Pages/index'
// import { Container } from './styles';

export default function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/Login" exact component={BoxLogin}/>
        </Switch>
    </BrowserRouter>
  );
}
