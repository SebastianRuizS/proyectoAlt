import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Update product
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p className = 'text-center mb-0'>
            Edit the fields you want to edit from the product selected. 
            </p>
            <Container>
            <Row style = {{height: '40vh'}} className="justify-content-md-center align-items-center">
            <Col md = {10}>
            <Container>
                <Row>
                    <Form.Label column lg={2} className = "me-3 mt-2">Name</Form.Label>
                    <Col>
                    <Form.Control type="text" placeholder="Product's name" className = "mt-2"/>
                    </Col>
                </Row>
                <Row>
                    <Form.Label column lg={2} className = "me-3 mt-2">Description</Form.Label>
                    <Col>
                    <Form.Control type="text" placeholder="Product's description" className = "mt-2"/>
                    </Col>
                </Row>
                <Row>
                    <Form.Label column lg={2} className = "me-3 mt-2">Price</Form.Label>
                    <Col>
                    <Form.Control type="text" placeholder="Product's unit price" className = "mt-2"/>
                    </Col>
                </Row>
                <Row>
                    <Form.Label column lg={2} className = "me-3 mt-2">Stock</Form.Label>
                    <Col>
                    <Form.Control type="text" placeholder="Product's stock" className = "mt-2"/>
                    </Col>
                </Row>
            </Container>
            </Col>
            </Row>
            </Container>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-danger">Delete product</Button>
            <Button variant="success" onClick={props.onHide}>Save</Button>
        </Modal.Footer>
        </Modal>
    );
}

function Rmodal() {
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
    

export default Rmodal;