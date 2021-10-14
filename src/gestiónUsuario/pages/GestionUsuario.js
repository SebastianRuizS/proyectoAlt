import ListaUsuarios from '../components/ListaUsuarios';
import BuscarUsuario from '../components/BuscarUsuario';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const GestionUsuario = () => {
    return(
        <Container>
                <Row style = {{height: '77vh'}} className="justify-content-md-center align-items-center">
                    <Col md = {10}>
                        <div className = "text-center">
                        <h1>Users</h1>
                        <Container>
                            <Row className="justify-content-md-center">
                                <BuscarUsuario/>
                            </Row>
                            <Row>
                                <ListaUsuarios/>
                            </Row>
                        </Container>
                        </div>
                    </Col>
                </Row>
        </Container>
    );
};

export default GestionUsuario;