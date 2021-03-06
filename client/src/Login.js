import { Container, Card, Button, Row, Col, Form } from 'react-bootstrap';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ErrorAlert from './components/ErrorAlert';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorCode, setErrorCode] = useState(null);
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await fetch('api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      });

      const data = await response.json();
      console.log(data);
      if (data.hasOwnProperty('error')) {
        setErrorMessage(data.error);
        setErrorCode(response.status);

        localStorage.removeItem('token');
      }
      else {
        localStorage.setItem('token', data.token);
        history.push('/home');
      }
    } catch (e) {
      setErrorCode(500);
    }
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
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="string" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
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
                &nbsp;
                {errorMessage && <ErrorAlert msg={errorMessage} code={errorCode} />}
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;