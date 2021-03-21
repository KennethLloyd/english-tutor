import { css } from '@emotion/css';
import { Container, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';

const Contacts = ({ config, list }) => {
  const titleLabel = config.titleLabel ? config.titleLabel : 'Contact Us';

  const titleLabelColor = config.titleLabelColor
    ? config.titleLabelColor
    : '#000000';

  const contactCardTitle = config.contactCardTitle
    ? config.contactCardTitle
    : 'You can reach us through the following:';

  const contactCardTitleColor = config.contactCardTitleColor
    ? config.contactCardTitleColor
    : '#000000';

  const contactCardBackgroundColor = config.contactCardBackgroundColor
    ? config.contactCardBackgroundColor
    : '#FFFFFF';

  const contacts = list.length
    ? list
    : [
        {
          platformName: 'Phone',
          details: '+1-555-555-1212',
          iconUrl:
            'https://res.cloudinary.com/kennethlloyd/image/upload/v1615716020/english-courses/1615716020440-phone.svg.svg',
        },
        {
          platformName: 'Email',
          details: 'johndoe@gmail.com',
          iconUrl:
            'https://res.cloudinary.com/kennethlloyd/image/upload/v1615716042/english-courses/1615716042609-email.svg.svg',
        },
        {
          platformName: 'Viber',
          details: '+1-555-777-2154',
          iconUrl:
            'https://res.cloudinary.com/kennethlloyd/image/upload/v1615716063/english-courses/1615716063461-viber.svg.svg',
        },
        {
          platformName: 'Telegram',
          details: '+1-555-847-5681',
          iconUrl:
            'https://res.cloudinary.com/kennethlloyd/image/upload/v1615716082/english-courses/1615716082859-telegram.svg.svg',
        },
      ];

  return (
    <Container fluid>
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
    </Container>
  );
};

export default Contacts;
