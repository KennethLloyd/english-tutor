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

import FileUploader from './FileUploader';
import ErrorAlert from './ErrorAlert';
import api from '../api/api';

const NavBarSettings = () => {
  const [logo, setLogo] = useState(null);
  const [teachersLabel, setTeachersLabel] = useState('Teachers');
  const [pricingLabel, setPricingLabel] = useState('Pricing');
  const [contactLabel, setContactLabel] = useState('Contact');
  const [showError, setShowError] = useState(false);

  const handleNavUpdate = () => {
    console.log({
      logo,
      teachersLabel,
      pricingLabel,
      contactLabel,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await api('/api/settings/navigation');
      if (!data) {
        setShowError(true);
      } else {
        setShowError(false);

        const { settings } = data;

        setLogo(settings.logoUrl);
        setTeachersLabel(settings.teachersLabel);
        setPricingLabel(settings.pricingLabel);
        setContactLabel(settings.contactLabel);
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
                    <h3 className="mb-0">Navigation Bar Settings</h3>
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
                          htmlFor="input-city"
                        >
                          Logo
                        </label>
                      </Col>
                      <Col md="6">
                        <FileUploader image={logo} setImage={setLogo} />
                      </Col>
                    </Row>
                    <Row className="align-items-center mt-0 mb-4">
                      <Col md="3">
                        <label
                          className="form-control-label-settings"
                          htmlFor="teachers-label"
                        >
                          Teachers Label
                        </label>
                      </Col>
                      <Col md="6">
                        <Input
                          className="form-control-alternative"
                          defaultValue="Teachers"
                          id="teachers-label"
                          placeholder="Teachers"
                          type="text"
                          value={teachersLabel}
                          onChange={(e) => setTeachersLabel(e.target.value)}
                        />
                      </Col>
                    </Row>
                    <Row className="align-items-center mt-0 mb-4">
                      <Col md="3">
                        <label
                          className="form-control-label-settings"
                          htmlFor="pricing-label"
                        >
                          Pricing Label
                        </label>
                      </Col>
                      <Col md="6">
                        <Input
                          className="form-control-alternative"
                          defaultValue="Pricing"
                          id="pricing-label"
                          placeholder="Pricing"
                          type="text"
                          value={pricingLabel}
                          onChange={(e) => setPricingLabel(e.target.value)}
                        />
                      </Col>
                    </Row>
                    <Row className="align-items-center mt-0 mb-4">
                      <Col md="3">
                        <label
                          className="form-control-label-settings"
                          htmlFor="contact-label"
                        >
                          Contact Label
                        </label>
                      </Col>
                      <Col md="6">
                        <Input
                          className="form-control-alternative"
                          defaultValue="Contact"
                          id="contact-label"
                          placeholder="Contact"
                          type="text"
                          value={contactLabel}
                          onChange={(e) => setContactLabel(e.target.value)}
                        />
                      </Col>
                    </Row>
                    <Row className="justify-content-center">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={handleNavUpdate}
                        size="md"
                      >
                        Save
                      </Button>
                    </Row>
                    {showError ? (
                      <Row className="align-items-center mt-4 justify-content-center">
                        <Col md="4">
                          <ErrorAlert
                            code={500}
                            show={showError}
                            setShow={setShowError}
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
