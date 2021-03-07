import { NavItem, NavLink, Nav, Container, Row, Col } from 'reactstrap';

const Login = () => {
  return (
    <>
      <footer className="py-5">
        <Container>
          <Row className="justify-content-xl-center">
            <Col xl="6">
              <div className="copyright text-center text-xl-center text-muted">
                © {new Date().getFullYear()}{' '}
                <a
                  className="font-weight-bold ml-1"
                  href="https://www.creative-tim.com?ref=adr-auth-footer"
                  target="_blank"
                >
                  English Tutor
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Login;
