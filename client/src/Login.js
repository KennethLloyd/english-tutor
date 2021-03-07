import {
  Container,
  Card,
  CardImg,
  CardBody,
  Button,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
} from 'reactstrap';
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
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();
      console.log(data);
      if (data.hasOwnProperty('error')) {
        setErrorMessage(data.error);
        setErrorCode(response.status);

        localStorage.removeItem('token');
      } else {
        localStorage.setItem('token', data.token);
        history.push('/home');
      }
    } catch (e) {
      setErrorCode(500);
    }
  };

  return (
    <div style={{ backgroundColor: '#F0F0F0' }}>
      <Container className="vh-100">
        <Row className="vh-100 align-items-center">
          <Col>
            <Card style={{ width: '25rem' }} className="mx-auto">
              <CardImg
                top
                src="https://res.cloudinary.com/kennethlloyd/image/upload/v1615019479/english-courses/english-tutor.svg"
              />
              <hr />
              <CardBody>
                <Form onSubmit={(e) => e.preventDefault()}>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Input
                          id="username"
                          placeholder="Enter username"
                          type="string"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Input
                          id="password"
                          placeholder="Password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </FormGroup>
                      <div className="text-center">
                        <Button
                          color="primary"
                          type="submit"
                          onClick={handleLogin}
                        >
                          Sign in
                        </Button>
                      </div>
                      &nbsp;
                      {errorMessage && (
                        <ErrorAlert msg={errorMessage} code={errorCode} />
                      )}
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
