import { Button, Modal, Row, Col, Spinner } from 'reactstrap';
import { useState } from 'react';

import ErrorAlert from '../Alerts/ErrorAlert';
import SuccessAlert from '../Alerts/SuccessAlert';
import api from '../../../api/api';

const DeletePricingModal = ({
  show,
  setShow,
  refresh,
  setRefresh,
  id,
  header,
}) => {
  const [errorMsg, setErrorMsg] = useState('');
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const handleSave = async () => {
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);

    setShowLoader(true);

    const data = await api(`/pricing/${id}`, {
      method: 'DELETE',
      headers,
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
        setShowSuccess(false);
        setShow(false);
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
          Delete Pricing
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
        Are you sure you want to delete <strong>{header}</strong>?
      </div>
      <div className="modal-footer">
        <Button color="primary" type="button" onClick={handleSave}>
          Confirm
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
              msg="Pricing deleted"
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

export default DeletePricingModal;
