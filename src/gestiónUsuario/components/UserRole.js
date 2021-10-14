import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const UserRole = () => {
    return(
        <DropdownButton id="dropdown-basic-button" variant ="outline-dark" title="Role">
        <Dropdown.Item href="#/action-1">Manager</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Seller</Dropdown.Item>
        </DropdownButton>
    );
};

export default UserRole;