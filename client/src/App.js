import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Login from './layouts/Login';
import Admin from './layouts/Admin';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/admin" render={(props) => <Admin {...props} />} />
        <Route path="/auth" render={(props) => <Login {...props} />} />
        <Redirect from="/" to="/admin/index" />
      </Switch>
    </Router>
  );
};

export default App;
