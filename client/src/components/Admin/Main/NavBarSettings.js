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
  Spinner,
} from 'reactstrap';
import { useState, useEffect } from 'react';

import FileUploader from '../FileUploader';
import ErrorAlert from '../Alerts/ErrorAlert';
import SuccessAlert from '../Alerts/SuccessAlert';
import api from '../../../api/api';

const NavBarSettings = () => {
  const [logo, setLogo] = useState(null);
  const [logoThumbnail, setLogoThumbnail] = useState(null);
  const [teachersLabel, setTeachersLabel] = useState('');
  const [pricingLabel, setPricingLabel] = useState('');
  const [contactLabel, setContactLabel] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const handleNavUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('image', logo);
    formData.append('teachersLabel', teachersLabel);
    formData.append('pricingLabel', pricingLabel);
    formData.append('contactLabel', contactLabel);

    const headers = new Headers();
    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);

    setShowLoader(true);

    const data = await api('/settings/navigation', {
      method: 'PUT',
      headers,
      body: formData,
    });

    setShowLoader(false);

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
      const data = await api('/settings/navigation');
      if (!data) {
        setShowError(true);
      } else {
        setShowError(false);

        const { settings } = data;

        if (settings) {
          setLogoThumbnail(settings.logoUrl);
          setTeachersLabel(settings.teachersLabel);
          setPricingLabel(settings.pricingLabel);
          setContactLabel(settings.contactLabel);
        }
      }
    };
    setShowLoader(true);
    fetchData();
    setShowLoader(false);
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
                    <h3 className="mb-0">Navigation Bar Settings</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form autoComplete="off" onSubmit={handleNavUpdate}>
                  <div className="pl-lg-4">
                    <Row className="align-items-center mt-0 mb-4">
                      <Col md="3">
                        <label
                          className="form-control-label-settings"
                          htmlFor="input-city"
                        >
                          Logo
                        </label>
                      </Col>
                      <Col md="6">
                        <FileUploader
                          setImage={setLogo}
                          thumbnail={logoThumbnail}
                          setThumbnail={setLogoThumbnail}
                        />
                      </Col>
                    </Row>
                    <Row className="align-items-center mt-0 mb-4">
                      <Col md="3">
                        <label
                          className="form-control-label-settings required"
                          htmlFor="teachers-label"
                        >
                          Teachers Label
                        </label>
                      </Col>
                      <Col md="6">
                        <Input
                          className="form-control-alternative"
                          id="teachers-label"
                          type="text"
                          value={teachersLabel}
                          onChange={(e) => setTeachersLabel(e.target.value)}
                          autoComplete="off"
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="align-items-center mt-0 mb-4">
                      <Col md="3">
                        <label
                          className="form-control-label-settings required"
                          htmlFor="pricing-label"
                        >
                          Pricing Label
                        </label>
                      </Col>
                      <Col md="6">
                        <Input
                          className="form-control-alternative"
                          id="pricing-label"
                          type="text"
                          value={pricingLabel}
                          onChange={(e) => setPricingLabel(e.target.value)}
                          autoComplete="off"
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="align-items-center mt-0 mb-4">
                      <Col md="3">
                        <label
                          className="form-control-label-settings required"
                          htmlFor="contact-label"
                        >
                          Contact Label
                        </label>
                      </Col>
                      <Col md="6">
                        <Input
                          className="form-control-alternative"
                          id="contact-label"
                          type="text"
                          value={contactLabel}
                          onChange={(e) => setContactLabel(e.target.value)}
                          autoComplete="off"
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="justify-content-center">
                      <Button color="primary" size="md" type="submit">
                        Save
                      </Button>
                    </Row>
                    {showLoader ? (
                      <div className="d-flex justify-content-center mt-3 mb-0">
                        <Spinner color="info" />
                      </div>
                    ) : (
                      ''
                    )}
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
                            msg="Navbar settings updated"
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

export default NavBarSettings;
