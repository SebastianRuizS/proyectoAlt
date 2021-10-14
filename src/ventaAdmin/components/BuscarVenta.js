import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import searchIcon from '../../img/search.svg';

const BuscarVenta = () =>{
    return(
        <InputGroup style={{width: '90vh'}} className="mb-4 mt-4">
            <Form.Control
            placeholder="Search sales"
            aria-label="Search sales"
            aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
            <img
            alt=""
            src={searchIcon}
            width="20"
            height="20"
            className="d-inline-block align-top mt-1 me-0"
            />
            </Button>
        </InputGroup>
    );
};

export default BuscarVenta;