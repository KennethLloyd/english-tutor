import { useState } from 'react';
import { UncontrolledAlert } from 'reactstrap';

const ErrorAlert = ({ msg, code }) => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <UncontrolledAlert
        color="danger"
        fade={false}
        onClose={() => setShow(false)}
      >
        <span className="alert-inner--text">
          <strong>
            {code === 500 ? 'Internal Server Error. Please try again.' : msg}
          </strong>
        </span>
      </UncontrolledAlert>
    );
  }
  return null;
};

export default ErrorAlert;
