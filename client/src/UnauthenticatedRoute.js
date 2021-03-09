import { Route, Redirect } from 'react-router-dom';

const UnauthenticatedRoute = ({ children, ...rest }) => {
  const token = localStorage.getItem('token');

  const isAuthenticated = token ? true : false;

  return (
    <Route {...rest}>
      {!isAuthenticated ? children : <Redirect to="/admin" />}
    </Route>
  );
};

export default UnauthenticatedRoute;
