import { useState } from 'react';
import { css } from '@emotion/css';
import { Container, Row, Col } from 'reactstrap';

const Teachers = () => {
  const [titleLabel, setTitleLabel] = useState('Meet Our Teachers');
  const [titleLabelColor, setTitleLabelColor] = useState('#000000');
  const [teachers, setTeachers] = useState([
    {
      id: '413a14bf-5c0c-49d7-b0f5-371b896debbb',
      order: 1,
      firstName: 'Minnie',
      lastName: 'Kim',
      photoUrl:
        'https://res.cloudinary.com/kennethlloyd/image/upload/v1615362964/english-courses/1615362962532-ypQiRrj.jpeg.jpg',
    },
    {
      id: 'a7698bc3-619e-494e-aa48-214c51fdd10a',
      order: 2,
      firstName: 'Shuhua',
      lastName: 'Yeh',
      photoUrl:
        'https://res.cloudinary.com/kennethlloyd/image/upload/v1615363042/english-courses/1615363040813-l1xCFvU.jpeg.jpg',
    },
    {
      id: 'a6898bc3-619e-494e-aa48-214c51fdd10a',
      order: 3,
      firstName: 'Miyeon',
      lastName: 'Cho',
      photoUrl:
        'https://res.cloudinary.com/kennethlloyd/image/upload/v1615300678/english-courses/1615300677280-DKyGika.jpeg.jpg',
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
        {teachers.map((teacher) => {
          return (
            <Col sm="6" lg="4" className="mb-5">
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
