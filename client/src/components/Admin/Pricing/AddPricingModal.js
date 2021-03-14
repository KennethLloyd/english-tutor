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

const AddPricingModal = ({ show, setShow, refresh, setRefresh }) => {
  const [header, setHeader] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState(true);
  const [features, setFeatures] = useState([]);
  const [order, setOrder] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const resetState = () => {
    setOrder(0);
    setHeader('');
    setPrice('');
    setStatus(true);
    setFeatures([]);
    setErrorMsg('');
    setShowError(false);
    setShowSuccess(false);
  };

  const handleSave = async () => {
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

    const data = await api('/pricing', {
      method: 'POST',
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

      setRefresh(!refresh);
      setTimeout(() => {
        resetState();
        setShow(false);
      }, 3000);
    }
  };

  const handleAddFeature = (order) => {
    const newFeature = {
      order,
      feature: '',
    };

    setFeatures([...features, newFeature]);
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
          Add New Pricing
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
        <Form role="form">
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
              />
            </InputGroup>
          </FormGroup>
          <FormGroup className="mb-3">
            <label htmlFor="price" className="modal-label">
              Price
            </label>
            <InputGroup className="input-group">
              <Input
                type="text"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
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
              >
                <option value={true}>To Show</option>
                <option value={false}>Hidden</option>
              </Input>
            </FormGroup>
            <FormGroup className="mb-3 ml-auto">
              <label htmlFor="order" className="modal-label">
                Order
              </label>
              <InputGroup className="input-group">
                <Input
                  type="number"
                  id="order"
                  value={order}
                  onChange={(e) => setOrder(e.target.value)}
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
            className="icon-primary ml-0"
            size="35px"
            onClick={() => handleAddFeature(features.length)}
          />
        </Form>
      </div>
      <div className="modal-footer">
        <Button color="primary" type="button" onClick={handleSave}>
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
              msg="New pricing added"
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

export default AddPricingModal;
