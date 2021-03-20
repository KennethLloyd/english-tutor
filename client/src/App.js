import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AuthenticatedRoute from './AuthenticatedRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';
import Login from './layouts/Login';
import Admin from './layouts/Admin';
import Main from './views/Landing/Main';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <Main />} />
        <UnauthenticatedRoute
          path="/admin/login"
          exact
          render={(props) => <Login {...props} />}
        />
        <AuthenticatedRoute
          path="/admin"
          render={(props) => <Admin {...props} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
