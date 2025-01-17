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

import FileUploader from '../FileUploader';
import ErrorAlert from '../Alerts/ErrorAlert';
import SuccessAlert from '../Alerts/SuccessAlert';
import api from '../../../api/api';

const EditTeacherModal = ({ show, setShow, refresh, setRefresh, details }) => {
  const [thumbnail, setThumbnail] = useState(details.photoUrl);
  const [firstName, setFirstName] = useState(details.firstName);
  const [lastName, setLastName] = useState(details.lastName);
  const [status, setStatus] = useState(details.status);
  const [order, setOrder] = useState(details.order);
  const [photo, setPhoto] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const handleSave = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('image', photo);
    formData.append('order', order);
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('status', status);

    const headers = new Headers();
    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);

    setShowLoader(true);

    const data = await api(`/teachers/${details.id}`, {
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

      setRefresh(!refresh);
      setTimeout(() => {
        setShowSuccess(false);
        setShow(false);
        setShowSuccess(false);
      }, 1500);
    }
  };

  return show ? (
    <Modal
      className="modal-dialog-centered"
      isOpen={show}
      toggle={() => setShow(false)}
    >
      <div className="modal-header">
        <h3 className="modal-title" id="modal-title-default">
          Edit Teacher
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
            <label htmlFor="firstName" className="modal-label required">
              First name
            </label>
            <InputGroup className="input-group">
              <Input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                autoComplete="off"
              />
            </InputGroup>
          </FormGroup>
          <FormGroup className="mb-3">
            <label htmlFor="lastName" className="modal-label required">
              Last name
            </label>
            <InputGroup className="input-group">
              <Input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
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
            <label htmlFor="upload" className="modal-label">
              Photo
            </label>
            <div>
              <FileUploader
                setImage={setPhoto}
                thumbnail={thumbnail}
                setThumbnail={setThumbnail}
              />
            </div>
          </FormGroup>
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
              msg="Teacher updated"
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

export default EditTeacherModal;
