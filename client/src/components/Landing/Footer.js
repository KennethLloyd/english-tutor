import { Container, Row, Col } from 'reactstrap';
import { css } from '@emotion/css';

const Footer = ({ config }) => {
  const label = config.footerLabel
    ? config.footerLabel
    : '© 2021 All Rights Reserved';
  const backgroundColor = config.footerBackgroundColor
    ? config.footerBackgroundColor
    : '#2BACE3';
  const textColor = config.footerTextColor ? config.footerTextColor : '#FFFFFF';

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
