import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import BuscarProducto from '../../productoAdmin/components/BuscarProducto';
import AddProduct from '../components/AddProduct';
import ListaProductosVenta from '../components/ListaProductosVenta';

const RegistroVentas = () => {
    return(
        <Container>
        <Container className = "mt-5">
            <Row className="justify-content-md-center align-items-center">
                <Col md = {6}>
                    <div className = "text-center">
                    <h1>Sign sale</h1>
                    <p className = "mt-3 mb-4">Complete the next form and sign a new sale.</p>
                    </div>
                    <Container>
                        <Row>
                            <Form.Label column lg={2} className = "me-3">Code</Form.Label>
                            <Col>
                            <Form.Control type="text" placeholder="00A" />
                            </Col>
                        </Row>
                        <Row>
                            <Form.Label column lg={2} className = "me-3 mt-2">Client ID</Form.Label>
                            <Col>
                            <Form.Control type="text" placeholder="Product's name" className = "mt-2"/>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Label column lg={2} className = "me-3 mt-2">Client</Form.Label>
                            <Col>
                            <Form.Control type="text" placeholder="Product's description" className = "mt-2"/>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Label column lg={2} className = "me-3 mt-2">Seller</Form.Label>
                            <Col>
                            <Form.Control type="text" placeholder="Product's unit price" className = "mt-2"/>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Label column lg={2} className = "me-3 mt-2">Number</Form.Label>
                            <Col>
                            <Form.Control type="text" placeholder="Product's stock" className = "mt-2"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="d-grid gap-0">
                                <BuscarProducto/>
                                <AddProduct/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
        <Container className="mt-4">
            <Row className="justify-content-md-center align-items-center">
                <Col md={10}>
                <ListaProductosVenta/>
                <Button variant="dark">Bill</Button>
                </Col>
            </Row>
        </Container>
        </Container>
    );
};

export default RegistroVentas;