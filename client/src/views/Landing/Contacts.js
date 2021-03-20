import { useState } from 'react';
import { css } from '@emotion/css';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardHeader,
} from 'reactstrap';

const Contacts = () => {
  const [titleLabel, setTitleLabel] = useState('Contact Us');
  const [titleLabelColor, setTitleLabelColor] = useState('#000000');
  const [contactCardTitle, setContactCardTitle] = useState(
    'You can reach us through the following:',
  );
  const [contactCardTitleColor, setContactCardTitleColor] = useState('#000000');
  const [contactCardBackgroundColor, setContactCardBackgroundColor] = useState(
    '#FFFFFF',
  );
  const [contacts, setContacts] = useState([
    {
      id: '894459fa-2da3-4953-9042-83d9e109583e',
      order: 1,
      platformName: 'Phone',
      details: '+1-555-555-1212',
      status: true,
      iconUrl:
        'https://res.cloudinary.com/kennethlloyd/image/upload/v1615716020/english-courses/1615716020440-phone.svg.svg',
    },
    {
      id: '02ea9ea8-fe9a-459f-852a-bf16ccefc8dc',
      order: 2,
      platformName: 'Email',
      details: 'johndoe@gmail.com',
      status: true,
      iconUrl:
        'https://res.cloudinary.com/kennethlloyd/image/upload/v1615716042/english-courses/1615716042609-email.svg.svg',
    },
    {
      id: '4a8d68a1-969a-4516-9754-b65c55974a51',
      order: 3,
      platformName: 'Viber',
      details: '+1-555-777-2154',
      status: true,
      iconUrl:
        'https://res.cloudinary.com/kennethlloyd/image/upload/v1615716063/english-courses/1615716063461-viber.svg.svg',
    },
    {
      id: 'fac48656-e9b8-44e7-bc32-880ac82d288f',
      order: 4,
      platformName: 'Telegram',
      details: '+1-555-847-5681',
      status: true,
      iconUrl:
        'https://res.cloudinary.com/kennethlloyd/image/upload/v1615716082/english-courses/1615716082859-telegram.svg.svg',
    },
    {
      id: '349597d6-0979-4a73-a814-5c6a61c7a0ec',
      order: 7,
      platformName: 'Messenger',
      details: 'my.messenger.username',
      status: false,
      iconUrl:
        'https://res.cloudinary.com/kennethlloyd/image/upload/v1615716127/english-courses/1615716127656-messenger.svg.svg',
    },
  ]);

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
              {contacts.map((contact) => {
                return (
                  <div className="mb-2 d-flex">
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
