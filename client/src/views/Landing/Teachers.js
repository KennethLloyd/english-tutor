import { css } from '@emotion/css';
import { Container, Row, Col } from 'reactstrap';

const Teachers = ({ config, list }) => {
  const titleLabel = config.titleLabel
    ? config.titleLabel
    : 'Meet Our Teachers';

  const titleLabelColor = config.titleLabelColor
    ? config.titleLabelColor
    : '#000000';

  const teachers = list.length
    ? list
    : [
        {
          id: '064e4d37-80e0-4aa9-a260-57ea4e2b7081',
          order: 1,
          firstName: 'Koby',
          lastName: 'Whitehead',
          status: true,
          photoUrl:
            'https://res.cloudinary.com/kennethlloyd/image/upload/v1615715186/english-courses/1615715186567-koby.png.png',
          createdAt: '2021-03-14T09:46:26.000Z',
          updatedAt: '2021-03-14T09:46:26.000Z',
        },
        {
          id: '7a39f22c-7d1a-423e-b2dc-34c5cff500a6',
          order: 2,
          firstName: 'Leny',
          lastName: 'Greenaway',
          status: true,
          photoUrl:
            'https://res.cloudinary.com/kennethlloyd/image/upload/v1615715206/english-courses/1615715206426-lennie.png.png',
          createdAt: '2021-03-14T09:46:46.000Z',
          updatedAt: '2021-03-14T09:46:46.000Z',
        },
        {
          id: '2c804f3d-8d16-4955-b7c4-2804fac007d1',
          order: 3,
          firstName: 'Mateo',
          lastName: 'Vickers',
          status: true,
          photoUrl:
            'https://res.cloudinary.com/kennethlloyd/image/upload/v1615715222/english-courses/1615715222418-mateo.png.png',
          createdAt: '2021-03-14T09:47:02.000Z',
          updatedAt: '2021-03-14T09:47:18.000Z',
        },
        {
          id: '9a9a6334-c2b9-44da-b15a-94bd85ed72b5',
          order: 4,
          firstName: 'Dolores',
          lastName: 'Morrow',
          status: true,
          photoUrl:
            'https://res.cloudinary.com/kennethlloyd/image/upload/v1615715256/english-courses/1615715256610-dolores.png.png',
          createdAt: '2021-03-14T09:47:36.000Z',
          updatedAt: '2021-03-14T09:47:36.000Z',
        },
        {
          id: '8f6aaccb-905d-464e-abfb-20698f83f19f',
          order: 5,
          firstName: 'Brandon',
          lastName: 'Joyner',
          status: true,
          photoUrl:
            'https://res.cloudinary.com/kennethlloyd/image/upload/v1615715275/english-courses/1615715275543-brandon.png.png',
          createdAt: '2021-03-14T09:47:55.000Z',
          updatedAt: '2021-03-14T09:47:55.000Z',
        },
        {
          id: '0e69712d-4765-47bf-a635-4ef7edaaf1e6',
          order: 6,
          firstName: 'Mariah',
          lastName: 'Benitez',
          status: true,
          photoUrl:
            'https://res.cloudinary.com/kennethlloyd/image/upload/v1615715293/english-courses/1615715293268-mariah.png.png',
          createdAt: '2021-03-14T09:48:13.000Z',
          updatedAt: '2021-03-14T09:48:13.000Z',
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
