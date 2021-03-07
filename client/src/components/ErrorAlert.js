import { Alert } from 'reactstrap';

const ErrorAlert = ({ msg, code, show, setShow }) => {
  return (
    <Alert color="danger" fade={true} toggle={() => setShow(!show)}>
      <span className="alert-inner--text">
        <strong>
          {code === 500 ? 'Internal Server Error. Please try again.' : msg}
        </strong>
      </span>
    </Alert>
  );
};

export default ErrorAlert;
