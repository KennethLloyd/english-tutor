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

import ColorPicker from '../ColorPicker';
import FileUploader from '../FileUploader';
import ErrorAlert from '../Alerts/ErrorAlert';
import SuccessAlert from '../Alerts/SuccessAlert';
import api from '../../../api/api';

const HeroSettings = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [backgroundImageThumbnail, setBackgroundImageThumbnail] = useState(
    null,
  );
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);
  const [titleText, setTitleText] = useState('');
  const [titleTextColor, setTitleTextColor] = useState('#FFFFFF');
  const [subtitleText, setSubtitleText] = useState('');
  const [subtitleTextColor, setSubtitleTextColor] = useState('#FFFFFF');
  const [actionButtonText, setActionButtonText] = useState('');
  const [actionButtonTextColor, setActionButtonTextColor] = useState('#FFFFFF');
  const [actionButtonColor, setActionButtonColor] = useState('#FFFFFF');
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const handleHeroUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('image', backgroundImage);
    formData.append('backgroundOpacity', backgroundOpacity);
    formData.append('titleText', titleText);
    formData.append('titleTextColor', titleTextColor);
    formData.append('subtitleText', subtitleText || '');
    formData.append('subtitleTextColor', subtitleTextColor);
    formData.append('actionButtonText', actionButtonText || '');
    formData.append('actionButtonTextColor', actionButtonTextColor);
    formData.append('actionButtonColor', actionButtonColor);

    const headers = new Headers();
    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);

    setShowLoader(true);

    const data = await api('/settings/hero', {
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
      const data = await api('/settings/hero');
      if (!data) {
        setShowError(true);
      } else {
        setShowError(false);

        const { settings } = data;

        if (settings) {
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
      }
    };
    setShowLoader(true);
    fetchData();
    setShowLoader(false);
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
                <Form autoComplete="off" onSubmit={handleHeroUpdate}>
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
                          className="form-control-label-settings required"
                          htmlFor="background-opacity"
                        >
                          Background Opacity <small>(0-100)</small>
                        </label>
                      </Col>
                      <Col md="6">
                        <Input
                          className="form-control-alternative"
                          id="background-opacity"
                          type="number"
                          min="0"
                          max="100"
                          required
                          value={backgroundOpacity}
                          onChange={(e) => {
                            if (
                              (parseInt(e.target.value) >= 0 &&
                                parseInt(e.target.value) <= 100) ||
                              e.target.value === ''
                            ) {
                              setBackgroundOpacity(e.target.value);
                            }
                          }}
                          autoComplete="off"
                        />
                      </Col>
                    </Row>
                    <Row className="align-items-center mt-0 mb-4">
                      <Col md="3">
                        <label
                          className="form-control-label-settings required"
                          htmlFor="title-text"
                        >
                          Title Text
                        </label>
                      </Col>
                      <Col md="6">
                        <Input
                          className="form-control-alternative"
                          id="title-text"
                          type="text"
                          value={titleText}
                          required
                          onChange={(e) => setTitleText(e.target.value)}
                          autoComplete="off"
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
                          type="textarea"
                          value={subtitleText}
                          onChange={(e) => setSubtitleText(e.target.value)}
                          autoComplete="off"
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
                          type="text"
                          value={actionButtonText}
                          onChange={(e) => setActionButtonText(e.target.value)}
                          autoComplete="off"
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
                      <Button color="primary" type="submit" size="md">
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
