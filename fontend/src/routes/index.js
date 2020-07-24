import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '~/pages/Main';
import SingnUp from '~/pages/Auth/SingUp';
import SingnIn from '~/pages/Auth/SingIn';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/singin" component={SingnIn} />
      <Route path="/singup" component={SingnUp} />
      <Route path="/" exact component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
