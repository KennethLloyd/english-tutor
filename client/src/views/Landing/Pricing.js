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
import { FcCheckmark } from 'react-icons/fc';

const Pricing = () => {
  const [titleLabel, setTitleLabel] = useState('Pricing And Plans');
  const [titleLabelColor, setTitleLabelColor] = useState('#000000');
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState('#2BACE3');
  const [headerTextColor, setHeaderTextColor] = useState('#FFFFFF');
  const [detailsBackgroundColor, setDetailsBackgroundColor] = useState(
    '#FFFFFF',
  );
  const [detailsTextColor, setDetailsTextColor] = useState('#525F7F');
  const [pricings, setPricings] = useState([
    {
      id: '3b1838cf-4828-43cf-8541-ed53b689acc1',
      order: 2,
      header: '1 Lesson',
      price: '10 dollars per hour',
      features: [
        {
          id: '6932e483-20e0-4634-9cb7-2c7fd07a8d6a',
          pricingId: '3b1838cf-4828-43cf-8541-ed53b689acc1',
          feature: 'everlasting support',
          order: 1,
        },
        {
          id: 'e89cf876-0c8e-490d-a8b0-36a94d1fc5e0',
          pricingId: '3b1838cf-4828-43cf-8541-ed53b689acc1',
          feature: '24/7 availability',
          order: 2,
        },
      ],
    },
    {
      id: '01a34331-bbcd-4595-bd74-37ab2d4a103a',
      order: 5,
      header: '5 Lessons',
      price: 'free for you',
      features: [
        {
          id: '7723f975-3f1b-47f6-9675-e9df5f1ec5f2',
          pricingId: '01a34331-bbcd-4595-bd74-37ab2d4a103a',
          feature: 'reddest red',
          order: 1,
        },
        {
          id: '8d485e2e-d735-484b-af8a-b4c6c1206ef4',
          pricingId: '01a34331-bbcd-4595-bd74-37ab2d4a103a',
          feature: 'mahiwaga',
          order: 2,
        },
        {
          id: '4046246b-d6fb-487a-8af9-18b33f434be3',
          pricingId: '01a34331-bbcd-4595-bd74-37ab2d4a103a',
          feature: 'jeon jelly',
          order: 3,
        },
        {
          id: '67dca04b-14b1-48af-91a0-920d5632ce29',
          pricingId: '01a34331-bbcd-4595-bd74-37ab2d4a103a',
          feature: 'whos that pokemon',
          order: 4,
        },
      ],
    },
    {
      id: '01a34331-bbcd-4595-bd74-3qqqb2d4a103a',
      order: 6,
      header: '10 Lessons',
      price: '60$ per month',
      features: [
        {
          id: '7723f975-3f1b-47f6-9675-e9df5f1ec5f2',
          pricingId: '01a34331-bbcd-4595-bd74-37ab2d4a103a',
          feature: 'reddest red',
          order: 1,
        },
        {
          id: '8d485e2e-d735-484b-af8a-b4c6c1206ef4',
          pricingId: '01a34331-bbcd-4595-bd74-37ab2d4a103a',
          feature: 'mahiwaga',
          order: 2,
        },
        {
          id: '4046246b-d6fb-487a-8af9-18b33f434be3',
          pricingId: '01a34331-bbcd-4595-bd74-37ab2d4a103a',
          feature: 'jeon jelly',
          order: 3,
        },
        {
          id: '67dca04b-14b1-48af-91a0-920d5632ce29',
          pricingId: '01a34331-bbcd-4595-bd74-37ab2d4a103a',
          feature: 'whos that pokemon',
          order: 4,
        },
      ],
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
        {pricings.map((pricing) => {
          return (
            <Col sm="6" lg="4" className="mb-5 d-flex justify-content-center">
              <Card
                className={css`
                  width: 360px;
                  border-radius: 10px;
                `}
              >
                <CardHeader
                  className={css`
                    background: ${headerBackgroundColor};
                    min-height: 250px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                  `}
                >
                  <h1
                    className={css`
                      font-size: 2.2rem;
                      font-weight: 400;
                      color: ${headerTextColor};
                    `}
                  >
                    {pricing.header}
                  </h1>
                  <h1
                    className={css`
                      color: ${headerTextColor};
                      font-weight: 300;
                    `}
                  >
                    {pricing.price}
                  </h1>
                </CardHeader>
                <CardBody
                  className={css`
                    background: ${detailsBackgroundColor};
                    min-height: 400px;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                  `}
                >
                  {pricing.features.map((featureItem) => {
                    return (
                      <div className="mb-3">
                        <FcCheckmark size="25" />
                        &nbsp;{' '}
                        <span
                          className={css`
                            color: ${detailsTextColor};
                            font-weight: 300;
                          `}
                        >
                          {featureItem.feature}
                        </span>
                      </div>
                    );
                  })}
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Pricing;
