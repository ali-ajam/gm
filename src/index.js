import React from 'react';
import ReactDOM from 'react-dom';
// react library for routing
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// core styles
import 'assets/scss/styles.scss';
import AdminLayout from 'layouts/Admin.js';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' render={() => <AdminLayout />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
