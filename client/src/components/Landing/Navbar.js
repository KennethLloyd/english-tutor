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
import { css, cx } from '@emotion/css';
import { lightenDarkenColor } from '../../utils/utils';

const LandingNavbar = ({
  logo,
  teachersLabel,
  pricingLabel,
  contactLabel,
  textColor,
  headerColor,
  scrollClass,
}) => {
  const fontColor = css`
    color: ${textColor};
    &:hover {
      color: ${lightenDarkenColor(textColor, 90)};
    }
  `;

  return (
    <>
      <Navbar
        fixed="top"
        className="navbar-top navbar-horizontal navbar-dark"
        style={{ backgroundColor: scrollClass === 'scroll' ? headerColor : '' }}
        expand="md"
      >
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
                <NavLink
                  className="nav-link-icon mr-6"
                  to="/#teachers"
                  tag={Link}
                >
                  <span className={fontColor}>{teachersLabel}</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link-icon mr-6"
                  to="/#pricing"
                  tag={Link}
                >
                  <span className={fontColor}>{pricingLabel}</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link-icon" to="/#contacts" tag={Link}>
                  <span className={fontColor}>{contactLabel}</span>
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
