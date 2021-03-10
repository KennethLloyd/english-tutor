import React from 'react';
import {
  Button,
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { FaEllipsisV } from 'react-icons/fa';

const Teacher = ({ details }) => {
  return (
    <tr className="align-items-center">
      <td>
        <p className="mb-0">{details.order}</p>
      </td>
      <td>
        <p className="mb-0">{details.firstName}</p>
      </td>
      <td>
        <p className="mb-0">{details.lastName}</p>
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
          <Button outline color="danger" size="sm">
            Hide
          </Button>
        ) : (
          <Button outline color="success" size="sm">
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
  );
};

export default Teacher;
