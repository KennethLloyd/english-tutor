import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Form,
  Input,
  Container,
  Row,
  Col,
} from 'reactstrap';
import { useState, useEffect } from 'react';

import ColorPicker from './ColorPicker';
import ErrorAlert from './ErrorAlert';
import SuccessAlert from './SuccessAlert';
import api from '../api/api';

const TeachersPageSettings = () => {
  const [backgroundColor, setBackgroundColor] = useState('');
  const [titleLabel, setTitleLabel] = useState('');
  const [titleLabelColor, setTitleLabelColor] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleUpdate = async () => {
    const body = {
      backgroundColor,
      titleLabel,
      titleLabelColor,
    };

    const headers = new Headers();
    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);
    headers.append('Content-Type', 'application/json');

    const data = await api('/settings/teachers', {
      method: 'PUT',
      headers,
      body: JSON.stringify(body),
    });

    if (!data || data.error) {
      setErrorMsg(data ? data.error : '');
      setShowError(true);
      setShowSuccess(false);
    } else {
      setShowSuccess(true);
      setShowError(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await api('/settings/teachers');
      if (!data) {
        setShowError(true);
      } else {
        setShowError(false);

        const { settings } = data;

        setBackgroundColor(settings.backgroundColor);
        setTitleLabel(settings.titleLabel);
        setTitleLabelColor(settings.titleLabelColor);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Container fluid className="pb-5">
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Teachers Page Settings</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <div className="pl-lg-4">
                    <Row className="align-items-center mt-0 mb-4">
                      <Col md="3">
                        <label
                          className="form-control-label-settings"
                          htmlFor="background-color"
                        >
                          Background Color
                        </label>
                      </Col>
                      <Col md="6">
                        <ColorPicker
                          color={backgroundColor}
                          setColor={setBackgroundColor}
                        />
                      </Col>
                    </Row>
                    <Row className="align-items-center mt-0 mb-4">
                      <Col md="3">
                        <label
                          className="form-control-label-settings"
                          htmlFor="title-label"
                        >
                          Title Label
                        </label>
                      </Col>
                      <Col md="6">
                        <Input
                          className="form-control-alternative"
                          id="title-label"
                          type="text"
                          value={titleLabel}
                          onChange={(e) => setTitleLabel(e.target.value)}
                        />
                      </Col>
                    </Row>
                    <Row className="align-items-center mt-0 mb-4">
                      <Col md="3">
                        <label
                          className="form-control-label-settings"
                          htmlFor="title-label-color"
                        >
                          Title Label Color
                        </label>
                      </Col>
                      <Col md="6">
                        <ColorPicker
                          color={titleLabelColor}
                          setColor={setTitleLabelColor}
                        />
                      </Col>
                    </Row>
                    <Row className="justify-content-center">
                      <Button color="primary" onClick={handleUpdate} size="md">
                        Save
                      </Button>
                    </Row>
                    {showError ? (
                      <Row className="align-items-center mt-4 justify-content-center">
                        <Col md="4">
                          <ErrorAlert
                            msg={errorMsg}
                            show={showError}
                            setShow={setShowError}
                          />
                        </Col>
                      </Row>
                    ) : (
                      ''
                    )}
                    {showSuccess ? (
                      <Row className="align-items-center mt-4 justify-content-center">
                        <Col md="4">
                          <SuccessAlert
                            msg="Teacher page settings updated"
                            show={showSuccess}
                            setShow={setShowSuccess}
                          />
                        </Col>
                      </Row>
                    ) : (
                      ''
                    )}
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TeachersPageSettings;
