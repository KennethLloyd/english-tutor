import { css } from '@emotion/css';
import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import { FcCheckmark } from 'react-icons/fc';

const Pricing = ({ config, list }) => {
  const titleLabel = config.titleLabel;
  const titleLabelColor = config.titleLabelColor;
  const headerBackgroundColor = config.headerBackgroundColor;
  const headerTextColor = config.headerTextColor;
  const detailsBackgroundColor = config.detailsBackgroundColor;
  const detailsTextColor = config.detailsTextColor;

  const pricings = list;

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
        {pricings.map((pricing, index) => {
          return (
            <Col
              sm="6"
              lg="4"
              className="mb-5 d-flex justify-content-center"
              key={index}
            >
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
                  {pricing.header ? (
                    <h1
                      className={css`
                        font-size: 2.2rem;
                        font-weight: 400;
                        color: ${headerTextColor};
                      `}
                    >
                      {pricing.header}
                    </h1>
                  ) : (
                    ''
                  )}
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
                  {pricing.features.map((featureItem, idx) => {
                    return (
                      <div className="mb-3" key={idx}>
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
