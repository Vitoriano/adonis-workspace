import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';

import history from './history';

import Main from '~/pages/Main';
import SingnUp from '~/pages/Auth/SingUp';
import SingnIn from '~/pages/Auth/SingIn';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/singin" component={SingnIn} />
      <Route path="/singup" component={SingnUp} />
      <Route path="/" exact component={Main} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
