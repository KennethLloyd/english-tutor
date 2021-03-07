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
import { useState, useRef } from 'react';

import ColorPicker from './ColorPicker';
import FileUploader from './FileUploader';

const HeroSettings = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [backgroundOpacity, setBackgroundOpacity] = useState(80);
  const [titleText, setTitleText] = useState('English Tutor');
  const [titleTextColor, setTitleTextColor] = useState('#000000');
  const [subtitleText, setSubtitleText] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque.',
  );
  const [subtitleTextColor, setSubtitleTextColor] = useState('#000000');
  const [actionButtonText, setActionButtonText] = useState('LEARN MORE');
  const [actionButtonTextColor, setActionButtonTextColor] = useState('#FFFFFF');
  const [actionButtonColor, setActionButtonColor] = useState('#2BACE3');

  const handleNavUpdate = () => {
    console.log({
      backgroundImage,
      backgroundOpacity,
      titleText,
      titleTextColor,
      subtitleText,
      subtitleTextColor,
      actionButtonText,
      actionButtonTextColor,
      actionButtonColor,
    });
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Hero Settings</h3>
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
                          Background Image
                        </label>
                      </Col>
                      <Col md="6">
                        <FileUploader
                          image={backgroundImage}
                          setImage={setBackgroundImage}
                        />
                      </Col>
                    </Row>
                    <Row className="align-items-center mt-0 mb-4">
                      <Col md="3">
                        <label
                          className="form-control-label-settings"
                          htmlFor="background-opacity"
                        >
                          Background Opacity
                        </label>
                      </Col>
                      <Col md="6">
                        <Input
                          className="form-control-alternative"
                          defaultValue="80"
                          id="background-opacity"
                          placeholder="80"
                          type="number"
                          value={backgroundOpacity}
                          onChange={(e) => setBackgroundOpacity(e.target.value)}
                        />
                      </Col>
                    </Row>
                    <Row className="align-items-center mt-0 mb-4">
                      <Col md="3">
                        <label
                          className="form-control-label-settings"
                          htmlFor="title-text"
                        >
                          Title Text
                        </label>
                      </Col>
                      <Col md="6">
                        <Input
                          className="form-control-alternative"
                          defaultValue="English Tutor"
                          id="title-text"
                          placeholder="English Tutor"
                          type="text"
                          value={titleText}
                          onChange={(e) => setTitleText(e.target.value)}
                        />
                      </Col>
                    </Row>
                    <Row className="align-items-center mt-0 mb-4">
                      <Col md="3">
                        <label
                          className="form-control-label-settings"
                          htmlFor="title-text-color"
                        >
                          Title Text Color
                        </label>
                      </Col>
                      <Col md="6">
                        <ColorPicker
                          color={titleTextColor}
                          setColor={setTitleTextColor}
                        />
                      </Col>
                    </Row>
                    <Row className="align-items-center mt-0 mb-4">
                      <Col md="3">
                        <label
                          className="form-control-label-settings"
                          htmlFor="subtitle-text"
                        >
                          Subtitle Text
                        </label>
                      </Col>
                      <Col md="6">
                        <Input
                          className="form-control-alternative"
                          defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque."
                          id="subtitle-text"
                          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque."
                          type="textarea"
                          value={subtitleText}
                          onChange={(e) => setSubtitleText(e.target.value)}
                        />
                      </Col>
                    </Row>
                    <Row className="align-items-center mt-0 mb-4">
                      <Col md="3">
                        <label
                          className="form-control-label-settings"
                          htmlFor="subtitle-text-color"
                        >
                          Subtitle Text Color
                        </label>
                      </Col>
                      <Col md="6">
                        <ColorPicker
                          color={subtitleTextColor}
                          setColor={setSubtitleTextColor}
                        />
                      </Col>
                    </Row>
                    <Row className="align-items-center mt-0 mb-4">
                      <Col md="3">
                        <label
                          className="form-control-label-settings"
                          htmlFor="action-button-text"
                        >
                          Action Button Text
                        </label>
                      </Col>
                      <Col md="6">
                        <Input
                          className="form-control-alternative"
                          defaultValue="LEARN MORE"
                          id="action-button-text"
                          placeholder="LEARN MORE"
                          type="text"
                          value={actionButtonText}
                          onChange={(e) => setActionButtonText(e.target.value)}
                        />
                      </Col>
                    </Row>
                    <Row className="align-items-center mt-0 mb-4">
                      <Col md="3">
                        <label
                          className="form-control-label-settings"
                          htmlFor="action-button-text-color"
                        >
                          Action Button Text Color
                        </label>
                      </Col>
                      <Col md="6">
                        <ColorPicker
                          color={actionButtonTextColor}
                          setColor={setActionButtonTextColor}
                        />
                      </Col>
                    </Row>
                    <Row className="align-items-center mt-0 mb-4">
                      <Col md="3">
                        <label
                          className="form-control-label-settings"
                          htmlFor="action-button-color"
                        >
                          Action Button Color
                        </label>
                      </Col>
                      <Col md="6">
                        <ColorPicker
                          color={actionButtonColor}
                          setColor={setActionButtonColor}
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

export default HeroSettings;
