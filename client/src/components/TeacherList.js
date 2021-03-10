import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Table,
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';
import { useState, useEffect } from 'react';
import {
  FaPlusCircle,
  FaEllipsisV,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';

import ColorPicker from './ColorPicker';
import ErrorAlert from './ErrorAlert';
import SuccessAlert from './SuccessAlert';
import api from '../api/api';

const TeacherList = () => {
  const [backgroundColor, setBackgroundColor] = useState('');
  const [titleLabel, setTitleLabel] = useState('');
  const [titleLabelColor, setTitleLabelColor] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAdd = () => {
    console.log('add');
  };

  // const handleUpdate = async () => {
  //   const body = {
  //     backgroundColor,
  //     titleLabel,
  //     titleLabelColor,
  //   };

  //   const headers = new Headers();
  //   headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);
  //   headers.append('Content-Type', 'application/json');

  //   const data = await api('/settings/teachers', {
  //     method: 'PUT',
  //     headers,
  //     body: JSON.stringify(body),
  //   });

  //   if (!data || data.error) {
  //     setErrorMsg(data ? data.error : '');
  //     setShowError(true);
  //     setShowSuccess(false);
  //   } else {
  //     setShowSuccess(true);
  //     setShowError(false);
  //   }
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await api('/settings/teachers');
  //     if (!data) {
  //       setShowError(true);
  //     } else {
  //       setShowError(false);

  //       const { settings } = data;

  //       setBackgroundColor(settings.backgroundColor);
  //       setTitleLabel(settings.titleLabel);
  //       setTitleLabelColor(settings.titleLabelColor);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <Container fluid className="pb-5">
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Teachers List</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Row className="justify-content-start">
                  <FaPlusCircle
                    className="icon-primary ml-4"
                    size="35px"
                    onClick={handleAdd}
                  />
                </Row>
                <Table
                  className="align-items-center table-flush mt-3"
                  responsive
                >
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Order</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="align-items-center">
                      <td>
                        <p className="mb-0">1</p>
                      </td>
                      <td>
                        <p className="mb-0">Skywalker</p>
                      </td>
                      <td>
                        <p className="mb-0">Luke</p>
                      </td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-success" />
                          To Show
                        </Badge>
                      </td>
                      <td>
                        <Button outline color="danger" size="sm">
                          Hide
                        </Button>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            role="button"
                            size="sm"
                            color=""
                            onClick={(e) => e.preventDefault()}
                          >
                            <FaEllipsisV />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem onClick={(e) => e.preventDefault()}>
                              Edit
                            </DropdownItem>
                            <DropdownItem onClick={(e) => e.preventDefault()}>
                              Delete
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr className="align-items-center">
                      <td>
                        <p className="mb-0">2</p>
                      </td>
                      <td>
                        <p className="mb-0">Skywalker</p>
                      </td>
                      <td>
                        <p className="mb-0">Leia</p>
                      </td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-danger" />
                          Hidden
                        </Badge>
                      </td>
                      <td>
                        <Button outline color="success" size="sm">
                          Show
                        </Button>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            role="button"
                            size="sm"
                            color=""
                            onClick={(e) => e.preventDefault()}
                          >
                            <FaEllipsisV />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem onClick={(e) => e.preventDefault()}>
                              Edit
                            </DropdownItem>
                            <DropdownItem onClick={(e) => e.preventDefault()}>
                              Delete
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
              <CardFooter className="py-3">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <FaChevronLeft />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink onClick={(e) => e.preventDefault()}>
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink onClick={(e) => e.preventDefault()}>
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink onClick={(e) => e.preventDefault()}>
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink onClick={(e) => e.preventDefault()}>
                        <FaChevronRight />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TeacherList;
