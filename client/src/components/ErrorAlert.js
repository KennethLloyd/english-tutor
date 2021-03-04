import { useState } from 'react';
import { Alert } from 'react-bootstrap';

const ErrorAlert = ({ msg, code }) => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        {code === 500 ? 'Internal Server Error. Please try again.' : msg}
      </Alert>
    );
  }
  return null;
};

export default ErrorAlert;
