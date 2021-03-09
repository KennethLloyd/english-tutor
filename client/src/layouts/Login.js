import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Container,
} from 'reactstrap';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';

import AuthNavbar from '../components/AuthNavbar.js';
import AuthFooter from '../components/AuthFooter.js';
import ErrorAlert from '../components/ErrorAlert';

import api from '../api/api';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [showError, setShowError] = useState(false);
  const history = useHistory();

  useEffect(() => {
    document.body.classList.add('bg-default');
    return () => {
      document.body.classList.remove('bg-default');
    };
  }, []);

  const handleLogin = async (e) => {
    try {
      e.preventDefault();

      const data = await api('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (data.hasOwnProperty('error')) {
        setErrorMessage(data.error);
        setShowError(true);

        localStorage.removeItem('token');
      } else {
        setShowError(false);
        localStorage.setItem('token', data.token);
        history.push('/admin');
      }
    } catch (e) {
      setShowError(true);
    }
  };

  return (
    <>
      <div className="main-content">
        <AuthNavbar />
        <div className="header bg-gradient-info py-7 py-lg-8">
          <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <Col lg="5" md="6">
                  <h1 className="text-white">Welcome!</h1>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div>
        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">
            <Col lg="5" md="7">
              <Card className="bg-secondary shadow border-0">
                <CardBody className="px-lg-5 py-lg-5">
                  <div className="text-center text-muted mb-4">
                    <small>Please use your admin credentials</small>
                  </div>
                  <Form onSubmit={handleLogin}>
                    <FormGroup className="mb-3">
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <FaUser />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Username"
                          type="string"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <FaLock />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </InputGroup>
                    </FormGroup>
                    <div className="text-center">
                      <Button className="my-4" color="primary" type="submit">
                        Sign in
                      </Button>
                    </div>
                    {showError ? (
                      <Row className="align-items-center justify-content-center">
                        <Col md="12">
                          <ErrorAlert
                            msg={errorMessage}
                            show={showError}
                            setShow={setShowError}
                          />
                        </Col>
                      </Row>
                    ) : (
                      ''
                    )}
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <AuthFooter />
    </>
  );
};

export default Login;
