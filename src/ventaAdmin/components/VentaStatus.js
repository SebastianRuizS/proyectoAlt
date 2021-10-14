import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const VentaStatus = () => {
    return(
        <DropdownButton id="dropdown-basic-button" variant ="info" title="Status">
        <Dropdown.Item href="#/action-1">In process</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Delivered</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Canceled</Dropdown.Item>
        </DropdownButton>
    );
};

export default VentaStatus;