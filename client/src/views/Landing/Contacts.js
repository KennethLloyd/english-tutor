import { css } from '@emotion/css';
import { Container, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';

const Contacts = ({ config, list }) => {
  const titleLabel = config.titleLabel;
  const titleLabelColor = config.titleLabelColor;
  const contactCardTitle = config.contactCardTitle;
  const contactCardTitleColor = config.contactCardTitleColor;
  const contactCardBackgroundColor = config.contactCardBackgroundColor;

  const contacts = list;

  return (
    <Container fluid>
      {titleLabel ? (
        <Row className="text-center pt-5">
          <Col className="pb-4">
            <h1
              className={css`
                color: ${titleLabelColor};
                font-weight: 500;
              `}
            >
              {titleLabel}
            </h1>
          </Col>
        </Row>
      ) : (
        ''
      )}
      {contacts.length ? (
        <Row className="text-center py-5 px-xl-9 justify-content-center">
          <Col className="mb-5 d-flex justify-content-center">
            <Card
              className={css`
                padding: 1rem;
              `}
            >
              <CardBody
                className={css`
                  background: ${contactCardBackgroundColor};
                  min-height: 50px;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: flex-start;
                  border-radius: 15px;
                `}
              >
                <CardTitle
                  className={css`
                    font-size: 1.4rem;
                    font-weight: 300;
                    color: ${contactCardTitleColor};
                  `}
                >
                  {contactCardTitle}
                </CardTitle>
                {contacts.map((contact, index) => {
                  return (
                    <div className="mb-2 d-flex" key={index}>
                      <div
                        className={css`
                          display: flex;
                          width: 120px;
                          flex-direction: column;
                          align-items: center;
                        `}
                      >
                        <img
                          className={css`
                            height: 60px;
                            width: 60px;
                          `}
                          src={contact.iconUrl}
                          alt=""
                        />
                        <p
                          className={css`
                            color: ${contactCardTitleColor};
                          `}
                        >
                          {contact.platformName}
                        </p>
                      </div>
                      <span
                        className={css`
                          color: ${contactCardTitleColor};
                          font-weight: 300;
                          margin-top: 20px;
                        `}
                      >
                        {contact.details}
                      </span>
                    </div>
                  );
                })}
              </CardBody>
            </Card>
          </Col>
        </Row>
      ) : (
        ''
      )}
    </Container>
  );
};

export default Contacts;
