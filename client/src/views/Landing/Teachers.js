import { css } from '@emotion/css';
import { Container, Row, Col } from 'reactstrap';

const Teachers = ({ config, list }) => {
  const titleLabel = config.titleLabel;

  const titleLabelColor = config.titleLabelColor;

  const teachers = list;

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
        {teachers.map((teacher, index) => {
          return (
            <Col sm="6" lg="4" className="mb-5" key={index}>
              <img
                className={css`
                  background: url(${teacher.photoUrl});
                  background-repeat: no-repeat;
                  background-size: cover;
                  background-position: 50% 50%;
                  transition: transform 0.5s;

                  overflow: hidden;
                  -webkit-border-radius: 240px;
                  -moz-border-radius: 240px;
                  border-radius: 240px;
                  width: 240px;
                  height: 240px;

                  &:hover {
                    transform: scale(1.1);
                  }
                `}
                alt=""
              />
              <h3 className="mt-3 mb-3 font-weight-normal">
                {teacher.firstName} {teacher.lastName}
              </h3>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Teachers;
