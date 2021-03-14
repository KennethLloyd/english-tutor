import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Table,
  CardFooter,
  Spinner,
} from 'reactstrap';
import { useState, useEffect } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

import ErrorAlert from '../Alerts/ErrorAlert';
import Pagination from '../Pagination';
import Contact from './Contact';
import AddContactModal from './AddContactModal';
import api from '../../../api/api';

const ContactList = () => {
  const [total, setTotal] = useState(0);
  const [contacts, setContacts] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [showError, setShowError] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [showAddModal, setShowAddModal] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const pageLimit = 10;

  const toggleAddModal = () => {
    setShowAddModal(!showAddModal);
  };

  useEffect(() => {
    let queryString = `?page=${activePage}&limit=${pageLimit}`;

    const fetchData = async () => {
      const data = await api(`/contacts${queryString}`);
      if (!data) {
        setShowError(true);
      } else {
        setShowError(false);

        setTotal(data.total);
        setContacts(data.contacts);
      }
    };

    setShowLoader(true);
    fetchData();
    setShowLoader(false);
  }, [activePage, refresh]);

  return (
    <>
      <Container fluid className="pb-5">
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Contact List</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Row className="justify-content-start">
                  <FaPlusCircle
                    className="icon-primary ml-4"
                    size="35px"
                    onClick={toggleAddModal}
                  />
                  <AddContactModal
                    show={showAddModal}
                    setShow={setShowAddModal}
                    refresh={refresh}
                    setRefresh={setRefresh}
                  />
                </Row>
                {showLoader ? (
                  <div className="d-flex justify-content-center mt-0 mb-3">
                    <Spinner color="info" />
                  </div>
                ) : (
                  ''
                )}
                {showError ? (
                  <Row className="align-items-center mt-4 justify-content-center">
                    <Col md="4">
                      <ErrorAlert
                        msg={errorMsg}
                        show={showError}
                        setShow={setShowError}
                      />
                    </Col>
                  </Row>
                ) : (
                  ''
                )}
                <Table
                  className="align-items-center table-flush mt-3"
                  responsive
                >
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Order</th>
                      <th scope="col">Platform Name</th>
                      <th scope="col">Details</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((item) => {
                      return (
                        <Contact
                          details={item}
                          key={item.id}
                          refresh={refresh}
                          setRefresh={setRefresh}
                          setErrorMsg={setErrorMsg}
                          setShowError={setShowError}
                        />
                      );
                    })}
                  </tbody>
                </Table>
              </CardBody>
              <CardFooter className="py-3">
                <Pagination
                  total={total}
                  pageLimit={pageLimit}
                  activePage={activePage}
                  setActivePage={setActivePage}
                />
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactList;
