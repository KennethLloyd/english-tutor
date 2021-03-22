import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AuthenticatedRoute from './AuthenticatedRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';
import Login from './layouts/Login';
import Admin from './layouts/Admin';
import Main from './views/Landing/Main';
import api from './api/api';

const App = () => {
  const [appName, setAppName] = useState('');
  const [appDescription, setAppDescription] = useState('');
  const [appFavicon, setAppFavicon] = useState('');
  const [adminLogo, setAdminLogo] = useState('');
  const [adminSalt, setAdminSalt] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await api('/admin-config');
      if (data) {
        const { adminConfig } = data;

        setAppName(adminConfig.appName);
        setAppDescription(adminConfig.appDescription);
        setAppFavicon(adminConfig.appFavicon);
        setAdminLogo(adminConfig.adminLogo);
        setAdminSalt(adminConfig.adminSalt);
      }
    };
    fetchData();
  }, []);

  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <Main
              title={appName}
              description={appDescription}
              appIcon={appFavicon}
            />
          )}
        />
        <UnauthenticatedRoute
          path="/admin/login"
          exact
          render={(props) => (
            <Login
              title={appName}
              appIcon={appFavicon}
              salt={adminSalt}
              {...props}
            />
          )}
        />
        <AuthenticatedRoute
          path="/admin"
          render={(props) => (
            <Admin
              title={appName}
              adminLogo={adminLogo}
              appIcon={appFavicon}
              {...props}
            />
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
