import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { css } from '@emotion/css';

const Footer = () => {
  const [label, setLabel] = useState('© 2021 All Rights Reserved');
  const [backgroundColor, setBackgroundColor] = useState('#2BACE3');
  const [textColor, setTextColor] = useState('#FFFFFF');

  return (
    <footer
      className={css`
        padding: 1.5rem 3rem;
        background-color: ${backgroundColor};
        color: ${textColor};
      `}
    >
      <Container fluid>
        <Row>
          <Col
            className={css`
              text-align: left;
              @media (max-width: 767px) {
                text-align: center;
              }
            `}
            md="6"
          >
            {label}
          </Col>
          <Col
            md="6"
            className={css`
              text-align: right;
              @media (max-width: 767px) {
                text-align: center;
              }
            `}
          >
            <a href="/#home">Back to Top</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
