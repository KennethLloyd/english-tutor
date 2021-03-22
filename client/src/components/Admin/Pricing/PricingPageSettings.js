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
import ErrorAlert from '../Alerts/ErrorAlert';
import SuccessAlert from '../Alerts/SuccessAlert';
import api from '../../../api/api';

const PricingPageSettings = () => {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [titleLabel, setTitleLabel] = useState('');
  const [titleLabelColor, setTitleLabelColor] = useState('#FFFFFF');
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState('#FFFFFF');
  const [headerTextColor, setHeaderTextColor] = useState('#FFFFFF');
  const [detailsBackgroundColor, setDetailsBackgroundColor] = useState(
    '#FFFFFF',
  );
  const [detailsTextColor, setDetailsTextColor] = useState('#FFFFFF');
  const [errorMsg, setErrorMsg] = useState('');
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const body = {
      backgroundColor,
      titleLabel,
      titleLabelColor,
      headerBackgroundColor,
      headerTextColor,
      detailsBackgroundColor,
      detailsTextColor,
    };

    const headers = new Headers();
    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);
    headers.append('Content-Type', 'application/json');

    setShowLoader(true);

    const data = await api('/settings/pricing', {
      method: 'PUT',
      headers,
      body: JSON.stringify(body),
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
      const data = await api('/settings/pricing');
      if (!data) {
        setShowError(true);
      } else {
        setShowError(false);

        const { settings } = data;

        if (settings) {
          setBackgroundColor(settings.backgroundColor);
          setTitleLabel(settings.titleLabel);
          setTitleLabelColor(settings.titleLabelColor);
          setHeaderBackgroundColor(settings.headerBackgroundColor);
          setHeaderTextColor(settings.headerTextColor);
          setDetailsBackgroundColor(settings.detailsBackgroundColor);
          setDetailsTextColor(settings.detailsTextColor);
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
                    <h3 className="mb-0">Pricing Page Settings</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form autoComplete="off" onSubmit={handleUpdate}>
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
                          className="form-control-label-settings required"
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
                          autoComplete="off"
                          required
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
                    <Row className="align-items-center mt-0 mb-4">
                      <Col md="3">
                        <label
                          className="form-control-label-settings"
                          htmlFor="header-background-color"
                        >
                          Header Background Color
                        </label>
                      </Col>
                      <Col md="6">
                        <ColorPicker
                          color={headerBackgroundColor}
                          setColor={setHeaderBackgroundColor}
                        />
                      </Col>
                    </Row>
                    <Row className="align-items-center mt-0 mb-4">
                      <Col md="3">
                        <label
                          className="form-control-label-settings"
                          htmlFor="header-text-color"
                        >
                          Header Text Color
                        </label>
                      </Col>
                      <Col md="6">
                        <ColorPicker
                          color={headerTextColor}
                          setColor={setHeaderTextColor}
                        />
                      </Col>
                    </Row>
                    <Row className="align-items-center mt-0 mb-4">
                      <Col md="3">
                        <label
                          className="form-control-label-settings"
                          htmlFor="details-background-color"
                        >
                          Details Background Color
                        </label>
                      </Col>
                      <Col md="6">
                        <ColorPicker
                          color={detailsBackgroundColor}
                          setColor={setDetailsBackgroundColor}
                        />
                      </Col>
                    </Row>
                    <Row className="align-items-center mt-0 mb-4">
                      <Col md="3">
                        <label
                          className="form-control-label-settings"
                          htmlFor="details-text-color"
                        >
                          Details Text Color
                        </label>
                      </Col>
                      <Col md="6">
                        <ColorPicker
                          color={detailsTextColor}
                          setColor={setDetailsTextColor}
                        />
                      </Col>
                    </Row>
                    <Row className="justify-content-center">
                      <Button color="primary" type="submit" size="md">
                        Save
                      </Button>
                    </Row>
                    {showLoader ? (
                      <div className="d-flex justify-content-center mt-3">
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
                            msg="Pricing page settings updated"
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

export default PricingPageSettings;
