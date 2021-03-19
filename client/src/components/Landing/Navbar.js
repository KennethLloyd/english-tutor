import { Link } from 'react-router-dom';
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Row,
  Col,
  Container,
} from 'reactstrap';

const LandingNavbar = ({
  logo,
  teachersLabel,
  pricingLabel,
  contactLabel,
  color,
}) => {
  const textColor = {
    color: color,
  };

  return (
    <>
      <Navbar className="navbar-top navbar-horizontal navbar-dark" expand="md">
        <Container className="pl-xl-9 pr-xl-9" fluid>
          <NavbarBrand to="/" tag={Link}>
            <img alt="logo" src={logo} />
          </NavbarBrand>
          <button className="navbar-toggler" id="navbar-collapse-main">
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse navbar toggler="#navbar-collapse-main">
            <div className="navbar-collapse-header d-md-none">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/">
                    <img alt="logo" src={logo} />
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button className="navbar-toggler" id="navbar-collapse-main">
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link-icon" to="/#teachers" tag={Link}>
                  <span className="nav-link-inner--text" style={textColor}>
                    {teachersLabel}
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link-icon" to="/#pricing" tag={Link}>
                  <span className="nav-link-inner--text" style={textColor}>
                    {pricingLabel}
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link-icon" to="/#contacts" tag={Link}>
                  <span className="nav-link-inner--text" style={textColor}>
                    {contactLabel}
                  </span>
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
};

export default LandingNavbar;
