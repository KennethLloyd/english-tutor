import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AuthenticatedRoute from './AuthenticatedRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';
import Login from './layouts/Login';
import Admin from './layouts/Admin';
import Main from './views/Landing/Main';
import api from './api/api';

const App = () => {
  const [appName, setAppName] = useState('English Tutor');
  const [adminLogo, setAdminLogo] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await api('/admin-config');
      if (data) {
        const { adminConfig } = data;

        setAppName(adminConfig.appName);
        setAdminLogo(adminConfig.adminLogo);
      }
    };
    fetchData();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <Main title={appName} />} />
        <UnauthenticatedRoute
          path="/admin/login"
          exact
          render={(props) => <Login title={appName} {...props} />}
        />
        <AuthenticatedRoute
          path="/admin"
          render={(props) => (
            <Admin title={appName} adminLogo={adminLogo} {...props} />
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
