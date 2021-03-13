import { Alert } from 'reactstrap';

const ErrorAlert = ({ msg, show, setShow }) => {
  return (
    <Alert color="danger" fade={true} toggle={() => setShow(!show)}>
      <span className="alert-inner--text">
        <strong>
          {msg ? msg : 'Internal Server Error. Please try again.'}
        </strong>
      </span>
    </Alert>
  );
};

export default ErrorAlert;
