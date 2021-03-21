import { Container, Row, Col } from 'reactstrap';

const AuthFooter = () => {
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
                >
                  All Rights Reserved
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default AuthFooter;
