import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from 'reactstrap';

import NavBarSettings from '../components/NavBarSettings.js';

const Index = (props) => {
  return (
    <>
      <Container className="bg-gradient-info pt-5 pb-5" fluid>
        <NavBarSettings />
      </Container>
    </>
  );
};

export default Index;
