import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const UserStatus = () => {
    return(
        <DropdownButton id="dropdown-basic-button" variant ="outline-dark" title="Status">
        <Dropdown.Item href="#/action-1">Authorized</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Not authorized</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Pending</Dropdown.Item>
        </DropdownButton>
    );
};

export default UserStatus;