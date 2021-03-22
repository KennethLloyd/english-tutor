import {
  Button,
  Modal,
  Row,
  Col,
  Form,
  FormGroup,
  InputGroup,
  Input,
  Spinner,
} from 'reactstrap';
import { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

import ErrorAlert from '../Alerts/ErrorAlert';
import SuccessAlert from '../Alerts/SuccessAlert';
import api from '../../../api/api';

const EditPricingModal = ({ show, setShow, refresh, setRefresh, details }) => {
  const [header, setHeader] = useState(details.header);
  const [price, setPrice] = useState(details.price);
  const [status, setStatus] = useState(details.status);
  const [features, setFeatures] = useState(details.features);
  const [order, setOrder] = useState(details.order);
  const [errorMsg, setErrorMsg] = useState('');
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const handleSave = async (e) => {
    e.preventDefault();

    const featuresLabel = features
      .map((f) => f.feature.trim())
      .filter((f) => f !== '');

    const body = {
      order,
      header,
      price,
      status,
      features: featuresLabel,
    };

    const headers = new Headers();
    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);
    headers.append('Content-Type', 'application/json');

    setShowLoader(true);

    const data = await api(`/pricing/${details.id}`, {
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

      setTimeout(() => {
        setRefresh(!refresh);
        setShow(false);
        setShowSuccess(false);
      }, 1500);
    }
  };

  const handleAddFeature = (order) => {
    if (order < 8) {
      const newFeature = {
        order,
        feature: '',
      };

      setFeatures([...features, newFeature]);
    } else {
      setErrorMsg('Max features reached');
      setShowError(true);
    }
  };

  const onFeatureChange = (index, value) => {
    const featuresCopy = [...features];
    featuresCopy[index].feature = value;

    setFeatures(featuresCopy);
  };

  return show ? (
    <Modal
      className="modal-dialog-centered"
      isOpen={show}
      toggle={() => setShow(false)}
    >
      <div className="modal-header">
        <h3 className="modal-title" id="modal-title-default">
          Edit Pricing
        </h3>
        <button
          aria-label="Close"
          className="close"
          data-dismiss="modal"
          type="button"
          onClick={() => setShow(false)}
        >
          <span aria-hidden={true}>×</span>
        </button>
      </div>
      <div className="modal-body">
        <Form role="form" autoComplete="off" onSubmit={handleSave}>
          <FormGroup className="mb-3">
            <label htmlFor="header" className="modal-label">
              Header
            </label>
            <InputGroup className="input-group">
              <Input
                type="text"
                id="header"
                value={header}
                onChange={(e) => setHeader(e.target.value)}
                autoComplete="off"
              />
            </InputGroup>
          </FormGroup>
          <FormGroup className="mb-3">
            <label htmlFor="price" className="modal-label required">
              Price
            </label>
            <InputGroup className="input-group">
              <Input
                type="text"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                autoComplete="off"
              />
            </InputGroup>
          </FormGroup>
          <FormGroup className="d-flex">
            <FormGroup className="mb-3 mr-auto">
              <label htmlFor="status" className="modal-label">
                Status
              </label>
              <Input
                type="select"
                name="select"
                id="status"
                onChange={(e) => setStatus(e.target.value)}
                value={details.status}
              >
                <option value={true}>To Show</option>
                <option value={false}>Hidden</option>
              </Input>
            </FormGroup>
            <FormGroup className="mb-3 ml-auto">
              <label htmlFor="order" className="modal-label required">
                Order
              </label>
              <InputGroup className="input-group">
                <Input
                  type="number"
                  id="order"
                  value={order}
                  onChange={(e) => setOrder(e.target.value)}
                  required
                />
              </InputGroup>
            </FormGroup>
          </FormGroup>
          <FormGroup className="mb-3 ml-auto">
            <label htmlFor="features" className="modal-label">
              Features
            </label>
          </FormGroup>
          {features.map((item, index) => {
            return (
              <FormGroup key={index} className="mb-3 ml-auto">
                <InputGroup className="input-group">
                  <Input
                    type="text"
                    id="feature"
                    value={item.feature}
                    onChange={(e) => onFeatureChange(index, e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
            );
          })}
          <FaPlusCircle
            className="icon-primary ml-0 mb-5"
            size="35px"
            onClick={() => handleAddFeature(features.length)}
          />
          <FormGroup className="d-flex">
            <Button color="primary" type="submit">
              Save
            </Button>
            <Button
              className="ml-auto"
              color="link"
              data-dismiss="modal"
              type="button"
              onClick={() => setShow(false)}
            >
              Close
            </Button>
          </FormGroup>
        </Form>
      </div>
      {showLoader ? (
        <div className="d-flex justify-content-center mt-0 mb-3">
          <Spinner color="info" />
        </div>
      ) : (
        ''
      )}
      {showError ? (
        <Row className="align-items-center mt-0 justify-content-center">
          <Col xs="10">
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
        <Row className="align-items-center mt-0 justify-content-center">
          <Col xs="10">
            <SuccessAlert
              msg="Pricing updated"
              show={showSuccess}
              setShow={setShowSuccess}
            />
          </Col>
        </Row>
      ) : (
        ''
      )}
    </Modal>
  ) : (
    ''
  );
};

export default EditPricingModal;
