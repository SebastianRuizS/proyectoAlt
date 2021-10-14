import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserRole from './UserRole';
import UserStatus from './UserStatus';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Update user
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
            <Row style = {{height: '40vh'}} className="justify-content-md-center align-items-center">
            <Col md = {10}>
                <p>Change the user's role</p>
                    <UserRole/>
                <p className ="mt-2">Change the users's status</p>
                    <UserStatus/>
            </Col>
            </Row>
            </Container>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="success" onClick={props.onHide}>Save</Button>
        </Modal.Footer>
        </Modal>
    );
}

function RmodalUsers() {
    const [modalShow, setModalShow] = React.useState(false);
    
    return (
        <>
        <Button variant="outline-primary" onClick={() => setModalShow(true)}>
            Update
        </Button>
    
        <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
        </>
    );
}
    

export default RmodalUsers;