import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import BuscarProducto from '../../productoAdmin/components/BuscarProducto';
import AddProduct from '../components/AddProduct';
import ListaProductosVenta from '../components/ListaProductosVenta';
import VentaStatus from './VentaStatus';


const ActualizarVenta = () => {
    return(
        <Container>
        <Container className = "mt-5">
            <Row className="justify-content-md-center align-items-center">
                <Col md = {6}>
                    <div className = "text-center">
                    <h1>Update sale</h1>
                    <p className = "mt-3 mb-4">Edit the fields you want to edit from the product selected.</p>
                    </div>
                    <Container className="mb-4">
                        <Row>
                            <Col md ={2}>
                            <VentaStatus/>
                            </Col>
                            <Col>
                            <Container>
                            <Row>
                                <Form.Label column lg={2} className = "me-0">Date</Form.Label>
                                <Col>
                                    <Form.Control type="text" placeholder="DD/MM/YYYY" />
                                </Col>
                            </Row>
                            </Container>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Form.Label column lg={2} className = "me-3 mt-2">Client ID</Form.Label>
                            <Col>
                            <Form.Control type="text" placeholder="Client's ID" className = "mt-2"/>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Label column lg={2} className = "me-3 mt-2">Client</Form.Label>
                            <Col>
                            <Form.Control type="text" placeholder="Client's name" className = "mt-2"/>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Label column lg={2} className = "me-3 mt-2">Seller</Form.Label>
                            <Col>
                            <Form.Control type="text" placeholder="Seller's name" className = "mt-2"/>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Label column lg={2} className = "me-3 mt-2">Number</Form.Label>
                            <Col>
                            <Form.Control type="text" placeholder="Number of the chosen product" className = "mt-2"/>
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
                <div className="d-grid gap-2 mb-4">
                    <Button variant="success">save</Button>
                    <Button variant="danger">Delete sale</Button>
                </div>
                </Col>
            </Row>
        </Container>
        </Container>
    );
};

export default ActualizarVenta;