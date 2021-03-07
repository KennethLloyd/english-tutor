import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from 'reactstrap';

import { useState, useRef } from 'react';

const NavBarSettings = () => {
  const [logoName, setLogoName] = useState(null);
  const [logo, setLogo] = useState(null);
  const [teachersLabel, setTeachersLabel] = useState('Teachers');
  const [pricingLabel, setPricingLabel] = useState('Pricing');
  const [contactLabel, setContactLabel] = useState('Contact');
  const inputFile = useRef(null);

  const handleNavUpdate = () => {
    console.log({
      logo,
      logoName,
      teachersLabel,
      pricingLabel,
      contactLabel,
    });
  };

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
                        <input
                          type="file"
                          id="file"
                          ref={inputFile}
                          onChange={(e) => {
                            setLogoName(e.target.files[0].name);
                            setLogo(URL.createObjectURL(e.target.files[0]));
                          }}
                          style={{ display: 'none' }}
                        />
                        <Button
                          outline
                          color="primary"
                          href="#pablo"
                          onClick={(e) => inputFile.current.click()}
                          size="sm"
                        >
                          Upload
                        </Button>
                        {logo ? (
                          <>
                            <img src={logo} width="100" height="85" />
                            &nbsp;
                          </>
                        ) : (
                          ''
                        )}
                        {logoName ? (
                          <span className="thumbnail-name">{logoName}</span>
                        ) : (
                          ''
                        )}
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
