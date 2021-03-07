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
import { SketchPicker } from 'react-color';
import { useState, useRef } from 'react';

const HeroSettings = () => {
  const [backgroundImageName, setBackgroundImageName] = useState(null);
  const [bakcgroundImage, setBackgroundImage] = useState(null);
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

  const [displayTitleTextCP, setDisplayTitleTextCP] = useState(false);
  const [displaySubtitleTextCP, setDisplaySubtitleTextCP] = useState(false);
  const [displayActionButtonTextCP, setDisplayActionButtonTextCP] = useState(
    false,
  );
  const [displayActionButtonCP, setDisplayActionButtonCP] = useState(false);

  const inputFile = useRef(null);

  const styles = {
    titleTextColor: {
      width: '36px',
      height: '14px',
      borderRadius: '2px',
      background: titleTextColor,
    },
    subtitleTextColor: {
      width: '36px',
      height: '14px',
      borderRadius: '2px',
      background: subtitleTextColor,
    },
    actionButtonTextColor: {
      width: '36px',
      height: '14px',
      borderRadius: '2px',
      background: actionButtonTextColor,
    },
    actionButtonColor: {
      width: '36px',
      height: '14px',
      borderRadius: '2px',
      background: actionButtonColor,
    },
    swatch: {
      padding: '5px',
      background: '#fff',
      borderRadius: '1px',
      boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
      display: 'inline-block',
      cursor: 'pointer',
    },
    popover: {
      position: 'absolute',
      zIndex: '2',
    },
    cover: {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    },
  };

  // title text color
  const handleTitleTextCPClick = () => {
    setDisplayTitleTextCP(!displayTitleTextCP);
  };

  const handleTitleTextCPClose = () => {
    setDisplayTitleTextCP(false);
  };

  const handleTitleTextCPChange = (color) => {
    setTitleTextColor(color.hex);
  };

  // subtitle text color
  const handleSubtitleTextCPClick = () => {
    setDisplaySubtitleTextCP(!displaySubtitleTextCP);
  };

  const handleSubtitleTextCPClose = () => {
    setDisplaySubtitleTextCP(false);
  };

  const handleSubtitleTextCPChange = (color) => {
    setSubtitleTextColor(color.hex);
  };

  // action button text color
  const handleActionButtonTextCPClick = () => {
    setDisplayActionButtonTextCP(!displayActionButtonTextCP);
  };

  const handleActionButtonTextCPClose = () => {
    setDisplayActionButtonTextCP(false);
  };

  const handleActionButtonTextCPChange = (color) => {
    setActionButtonTextColor(color.hex);
  };

  // action button color
  const handleActionButtonCPClick = () => {
    setDisplayActionButtonCP(!displayActionButtonCP);
  };

  const handleActionButtonCPClose = () => {
    setDisplayActionButtonCP(false);
  };

  const handleActionButtonCPChange = (color) => {
    setActionButtonColor(color.hex);
  };

  const handleNavUpdate = () => {
    console.log({
      backgroundImageName,
      bakcgroundImage,
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
                        <input
                          type="file"
                          id="file"
                          ref={inputFile}
                          onChange={(e) => {
                            setBackgroundImageName(e.target.files[0].name);
                            setBackgroundImage(
                              URL.createObjectURL(e.target.files[0]),
                            );
                          }}
                          style={{ display: 'none' }}
                        />
                        <Button
                          outline
                          color="primary"
                          onClick={(e) => inputFile.current.click()}
                          size="sm"
                        >
                          Upload
                        </Button>
                        {bakcgroundImage ? (
                          <>
                            <img
                              src={bakcgroundImage}
                              width="120"
                              height="85"
                            />
                            &nbsp;
                          </>
                        ) : (
                          ''
                        )}
                        {backgroundImageName ? (
                          <span className="thumbnail-name">
                            {backgroundImageName}
                          </span>
                        ) : (
                          ''
                        )}
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
                        <div>
                          <div
                            style={styles.swatch}
                            onClick={handleTitleTextCPClick}
                          >
                            <div style={styles.titleTextColor} />
                          </div>
                          {displayTitleTextCP ? (
                            <div style={styles.popover}>
                              <div
                                style={styles.cover}
                                onClick={handleTitleTextCPClose}
                              />
                              <SketchPicker
                                color={titleTextColor}
                                onChange={handleTitleTextCPChange}
                              />
                            </div>
                          ) : null}
                        </div>
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
                        <div>
                          <div
                            style={styles.swatch}
                            onClick={handleSubtitleTextCPClick}
                          >
                            <div style={styles.subtitleTextColor} />
                          </div>
                          {displaySubtitleTextCP ? (
                            <div style={styles.popover}>
                              <div
                                style={styles.cover}
                                onClick={handleSubtitleTextCPClose}
                              />
                              <SketchPicker
                                color={subtitleTextColor}
                                onChange={handleSubtitleTextCPChange}
                              />
                            </div>
                          ) : null}
                        </div>
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
                        <div>
                          <div
                            style={styles.swatch}
                            onClick={handleActionButtonTextCPClick}
                          >
                            <div style={styles.actionButtonTextColor} />
                          </div>
                          {displayActionButtonTextCP ? (
                            <div style={styles.popover}>
                              <div
                                style={styles.cover}
                                onClick={handleActionButtonTextCPClose}
                              />
                              <SketchPicker
                                color={actionButtonTextColor}
                                onChange={handleActionButtonTextCPChange}
                              />
                            </div>
                          ) : null}
                        </div>
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
                        <div>
                          <div
                            style={styles.swatch}
                            onClick={handleActionButtonCPClick}
                          >
                            <div style={styles.actionButtonColor} />
                          </div>
                          {displayActionButtonCP ? (
                            <div style={styles.popover}>
                              <div
                                style={styles.cover}
                                onClick={handleActionButtonCPClose}
                              />
                              <SketchPicker
                                color={actionButtonColor}
                                onChange={handleActionButtonCPChange}
                              />
                            </div>
                          ) : null}
                        </div>
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
