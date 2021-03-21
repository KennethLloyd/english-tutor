import { css } from '@emotion/css';
import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import { FcCheckmark } from 'react-icons/fc';

const Pricing = ({ config, list }) => {
  const titleLabel = config.titleLabel
    ? config.titleLabel
    : 'Pricing And Plans';

  const titleLabelColor = config.titleLabelColor
    ? config.titleLabelColor
    : '#000000';

  const headerBackgroundColor = config.headerBackgroundColor
    ? config.headerBackgroundColor
    : '#2BACE3';

  const headerTextColor = config.headerTextColor
    ? config.headerTextColor
    : '#FFFFFF';

  const detailsBackgroundColor = config.detailsBackgroundColor
    ? config.detailsBackgroundColor
    : '#FFFFFF';

  const detailsTextColor = config.detailsTextColor
    ? config.detailsTextColor
    : '#525F7F';

  const pricings = list.length
    ? list
    : [
        {
          header: '1 Lesson',
          price: '$10',
          features: [
            {
              feature: '60 minute lessons',
            },
            {
              feature: 'commodo elit at imperdiet',
            },
            {
              feature: 'pharetra vel turpis nunc',
            },
          ],
        },
        {
          header: '5 Lessons',
          price: '$45',
          features: [
            {
              feature: '60 minute lessons',
            },
            {
              feature: 'commodo elit at imperdiet',
            },
            {
              feature: 'pharetra vel turpis nunc',
            },
            {
              feature: 'commodo elit at imperdiet',
            },
            {
              feature: 'commodo elit at imperdiet',
            },
          ],
        },
        {
          header: '10 Lessons',
          price: '$80',
          features: [
            {
              feature: '60 minute lessons',
            },
            {
              feature: 'commodo elit at imperdiet',
            },
            {
              feature: 'pharetra vel turpis nunc',
            },
            {
              feature: 'pharetra vel turpis nunc',
            },
            {
              feature: 'pharetra vel turpis nunc',
            },
            {
              feature: 'pharetra vel turpis nunc',
            },
            {
              feature: 'pharetra vel turpis nunc',
            },
            {
              feature: 'pharetra vel turpis nunc',
            },
          ],
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
        {pricings.map((pricing) => {
          return (
            <Col sm="6" lg="4" className="mb-5 d-flex justify-content-center">
              <Card
                className={css`
                  width: 360px;
                  border-radius: 10px;
                  transition: transform 0.5s;

                  &:hover {
                    transform: scale(1.1);
                  }
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
                    border-bottom-left-radius: 10px;
                    border-bottom-right-radius: 10px;
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
