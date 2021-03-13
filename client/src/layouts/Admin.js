import React from 'react';
import { useLocation, Switch, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import AuthenticatedRoute from '../AuthenticatedRoute';
import AdminNavbar from '../components/Admin/AdminNavbar.js';
import AdminFooter from '../components/Admin/AdminFooter.js';
import Sidebar from '../components/Admin/Sidebar.js';

import routes from '../routes.js';

const Admin = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === '/admin') {
        return (
          <AuthenticatedRoute
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
    }
    return 'Brand';
  };

  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: '/admin',
          imgSrc:
            'https://res.cloudinary.com/kennethlloyd/image/upload/v1615110700/english-courses/english-tutor-logo-dark.svg',
          imgAlt: '...',
        }}
      />
      <div className="main-content" ref={mainContent}>
        <AdminNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        />
        <Switch>
          {getRoutes(routes)}
          <Redirect from="*" to="/admin/index" />
        </Switch>
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
};

export default Admin;
