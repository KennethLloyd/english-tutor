import { Container, Card, Button, Row, Col, Form } from 'react-bootstrap';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const response = await fetch('api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    console.log(await response.json());
  };

  return (
    <Container className='vh-100'>
      <Row className='vh-100 align-items-center'>
        <Col>
          <Card style={{ width: '25rem' }} className='mx-auto'>
            <Card.Img variant="top" src="https://res.cloudinary.com/kennethlloyd/image/upload/v1614858760/mern-mariadb-bootstrap-starter/mern.png" />
            <Card.Body>
              <Form onSubmit={(e) => e.preventDefault()}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <div className="text-center">
                  <Button variant="primary" type="submit" onClick={handleLogin}>
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