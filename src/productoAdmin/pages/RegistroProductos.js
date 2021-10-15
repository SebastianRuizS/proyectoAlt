import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const RegistroProductos = () => {
    return(
        <Container>
            <Row style = {{height: '77vh'}} className="justify-content-md-center align-items-center">
                <Col md = {6}>
                    <div className = "text-center">
                    <h1>Sign product</h1>
                    <p className = "mt-3 mb-4">Complete the next form and sign a new product.</p>
                    </div>
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
                        <Row>
                            <Col>
                                <Button variant="dark" className = "float-end mt-3">Save</Button>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default RegistroProductos;