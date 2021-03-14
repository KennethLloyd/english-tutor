import { useState } from 'react';
import {
  Button,
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { FaEllipsisV } from 'react-icons/fa';

import EditPricingModal from './EditPricingModal';
import DeletePricingModal from './DeletePricingModal';
import api from '../../../api/api';

const Pricing = ({
  details,
  refresh,
  setRefresh,
  setErrorMsg,
  setShowError,
}) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const toggleEditModal = () => {
    setShowEditModal(!showEditModal);
  };

  const toggleDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };

  const updateStatus = async (status) => {
    const body = {
      status,
    };

    const headers = new Headers();
    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);
    headers.append('Content-Type', 'application/json');

    const data = await api(`/pricing/${details.id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(body),
    });

    if (!data || data.error) {
      setErrorMsg(data ? data.error : '');
      setShowError(true);
    } else {
      setShowError(false);
      setRefresh(!refresh);
    }
  };

  return (
    <tr className="align-items-center">
      <td>
        <p className="mb-0">{details.order}</p>
      </td>
      <td>
        <p className="mb-0">{details.header}</p>
      </td>
      <td>
        <p className="mb-0">{details.price}</p>
      </td>
      <td>
        {details.status === true ? (
          <Badge color="" className="badge-dot mr-4">
            <i className="bg-success" />
            To Show
          </Badge>
        ) : (
          <Badge color="" className="badge-dot mr-4">
            <i className="bg-danger" />
            Hidden
          </Badge>
        )}
      </td>
      <td>
        {details.status === true ? (
          <Button
            outline
            color="danger"
            size="sm"
            onClick={() => updateStatus(false)}
          >
            Hide
          </Button>
        ) : (
          <Button
            outline
            color="success"
            size="sm"
            onClick={() => updateStatus(true)}
          >
            Show
          </Button>
        )}
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
            <DropdownItem onClick={toggleEditModal}>Edit</DropdownItem>
            <DropdownItem onClick={toggleDeleteModal}>Delete</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <EditPricingModal
          show={showEditModal}
          setShow={setShowEditModal}
          refresh={refresh}
          setRefresh={setRefresh}
          details={details}
        />
        <DeletePricingModal
          show={showDeleteModal}
          setShow={setShowDeleteModal}
          refresh={refresh}
          setRefresh={setRefresh}
          id={details.id}
          header={details.header}
        />
      </td>
    </tr>
  );
};

export default Pricing;
