import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from 'reactstrap';
import { useState, useEffect } from 'react';

import FileUploader from './FileUploader';

const TeacherModal = ({ show, setShow }) => {
  const [thumbnail, setThumbnail] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState('To Show');
  const [order, setOrder] = useState(0);
  const [photo, setPhoto] = useState(null);

  const handleSave = () => {
    console.log({
      firstName,
      lastName,
      status,
      order,
      photo,
    });
  };

  return show ? (
    <Modal
      className="modal-dialog-centered"
      isOpen={show}
      toggle={() => setShow(false)}
    >
      <div className="modal-header">
        <h3 className="modal-title" id="modal-title-default">
          Add New Teacher
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
            <label htmlFor="firstName" className="modal-label">
              First name
            </label>
            <InputGroup className="input-group">
              <Input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup className="mb-3">
            <label htmlFor="lastName" className="modal-label">
              Last name
            </label>
            <InputGroup className="input-group">
              <Input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
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
                <option value="To Show">To Show</option>
                <option value="Hidden">Hidden</option>
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
    </Modal>
  ) : (
    ''
  );
};

export default TeacherModal;
