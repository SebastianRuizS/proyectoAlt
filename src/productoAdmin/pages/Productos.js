import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListaProductos from '../components/ListaProductos';
import BuscarProducto from '../components/BuscarProducto';

const Productos = () =>{
    return(
        <Container>
                <Row style = {{height: '77vh'}} className="justify-content-md-center align-items-center">
                    <Col md = {10}>
                        <div className = "text-center">
                        <h1>Manage Products</h1>
                        <Container>
                            <Row className="justify-content-md-center">
                                <BuscarProducto/>
                            </Row>
                            <Row>
                                <ListaProductos/>
                            </Row>
                        </Container>
                        </div>
                    </Col>
                </Row>
        </Container>
    );
};

export default Productos;