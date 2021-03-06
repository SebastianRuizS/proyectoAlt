import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BuscarVenta from '../components/BuscarVenta';
import ListaVentas from '../components/ListaVentas';

const Ventas = () => {
    return(
        <Container>
                <Row style = {{height: '77vh'}} className="justify-content-md-center align-items-center">
                    <Col md = {10}>
                        <div className = "text-center">
                        <h1>Manage Sales</h1>
                        <Container>
                            <Row className="justify-content-md-center">
                                <BuscarVenta/>
                            </Row>
                            <Row>
                                <ListaVentas/>
                            </Row>
                        </Container>
                        </div>
                    </Col>
                </Row>
        </Container>
    );
};

export default Ventas;