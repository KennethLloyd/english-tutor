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
        <Route
          path="/"
          exact
          render={() => <Main title={process.env.REACT_APP_NAME} />}
        />
        <UnauthenticatedRoute
          path="/admin/login"
          exact
          render={(props) => (
            <Login title={process.env.REACT_APP_ADMIN_NAME} {...props} />
          )}
        />
        <AuthenticatedRoute
          path="/admin"
          render={(props) => (
            <Admin title={process.env.REACT_APP_ADMIN_NAME} {...props} />
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
