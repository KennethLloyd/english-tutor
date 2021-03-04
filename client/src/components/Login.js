import { Container, Card, Button, Row, Col, Form } from 'react-bootstrap';

const Login = () => {
  return (
    <Container className='vh-100'>
      <Row className='vh-100 align-items-center'>
        <Col>
          <Card style={{ width: '25rem' }} className='mx-auto'>
            <Card.Img variant="top" src="https://res.cloudinary.com/kennethlloyd/image/upload/v1614858760/mern-mariadb-bootstrap-starter/mern.png" />
            <Card.Body>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className="text-center">
                  <Button variant="primary" type="submit">
                    Sign in
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
