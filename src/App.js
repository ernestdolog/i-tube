import React from 'react';
import { AppLayout } from './components/AppLayout/AppLayout';
import Home from './containers/Home/Home';
import Watch from './containers/Watch/Watch';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <AppLayout>
        <Switch>
          <Route path="/watch" component={Watch}/>
          <Route path="/" component={Home}/>
        </Switch>
    </AppLayout>
  );
}

export default App;
