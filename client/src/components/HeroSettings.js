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
import FileUploader from './FileUploader';
import ErrorAlert from './ErrorAlert';
import SuccessAlert from './SuccessAlert';
import api from '../api/api';

const HeroSettings = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [backgroundImageThumbnail, setBackgroundImageThumbnail] = useState(
    null,
  );
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
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleHeroUpdate = async () => {
    const formData = new FormData();

    formData.append('image', backgroundImage);
    formData.append('backgroundOpacity', backgroundOpacity);
    formData.append('titleText', titleText);
    formData.append('titleTextColor', titleTextColor);
    formData.append('subtitleText', subtitleText);
    formData.append('subtitleTextColor', subtitleTextColor);
    formData.append('actionButtonText', actionButtonText);
    formData.append('actionButtonTextColor', actionButtonTextColor);
    formData.append('actionButtonColor', actionButtonColor);

    const headers = new Headers();
    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);

    const data = await api('/settings/hero', {
      method: 'PUT',
      headers,
      body: formData,
    });

    if (!data) {
      setShowError(true);
      setShowSuccess(false);
    } else {
      setShowSuccess(true);
      setShowError(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await api('/settings/hero');
      if (!data) {
        setShowError(true);
      } else {
        setShowError(false);

        const { settings } = data;

        setBackgroundImageThumbnail(settings.backgroundImageUrl);
        setBackgroundOpacity(settings.backgroundOpacity);
        setTitleText(settings.titleText);
        setTitleTextColor(settings.titleTextColor);
        setSubtitleText(settings.subtitleText);
        setSubtitleTextColor(settings.subtitleTextColor);
        setActionButtonText(settings.actionButtonText);
        setActionButtonTextColor(settings.actionButtonTextColor);
        setActionButtonColor(settings.actionButtonColor);
      }
    };
    fetchData();
  }, []);

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
                          setImage={setBackgroundImage}
                          thumbnail={backgroundImageThumbnail}
                          setThumbnail={setBackgroundImageThumbnail}
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
                        onClick={handleHeroUpdate}
                        size="md"
                      >
                        Save
                      </Button>
                    </Row>
                    {showError ? (
                      <Row className="align-items-center mt-4 justify-content-center">
                        <Col md="4">
                          <ErrorAlert show={showError} setShow={setShowError} />
                        </Col>
                      </Row>
                    ) : (
                      ''
                    )}
                    {showSuccess ? (
                      <Row className="align-items-center mt-4 justify-content-center">
                        <Col md="4">
                          <SuccessAlert
                            msg="Hero settings updated"
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

export default HeroSettings;
