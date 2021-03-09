import { BrowserRouter as Router, Switch } from 'react-router-dom';

import AuthenticatedRoute from './AuthenticatedRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';
import Login from './layouts/Login';
import Admin from './layouts/Admin';

const App = () => {
  return (
    <Router>
      <Switch>
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
