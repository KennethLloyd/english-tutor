import { Alert } from 'reactstrap';

const SuccessAlert = ({ msg, show, setShow }) => {
  return (
    <Alert color="success" fade={true} toggle={() => setShow(!show)}>
      <span className="alert-inner--text">
        <strong>Success!</strong> {msg}
      </span>
    </Alert>
  );
};

export default SuccessAlert;
