import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import banderaColombia from '../img/banderaColombia.png';


const Footer = () => {
    return(
            <Navbar bg="light" variant="light">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Item><p className = "mt-3">Copyright &copy; 2021. All rights reserved. Universidad de Antioquia with MinTIC.</p></Nav.Item>
                    </Nav>
                    <Nav className="justify-content-end">
                        <Row>
                            <Col>
                                <Nav.Item>
                                    <img
                                    alt=""
                                    src={banderaColombia}
                                    width="25"
                                    height="25"
                                    className="d-inline-block align-top mt-3"
                                    />
                                </Nav.Item>
                            </Col>
                            <Col>
                                <Nav.Item>
                                    <p className = "mt-3">Colombia</p>
                                </Nav.Item>
                            </Col>
                        </Row>
                    </Nav>
                </Container>
            </Navbar>
    );
}

export default Footer;