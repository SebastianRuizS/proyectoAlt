import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import gLogo from '../../img/gLogo.png';
import {Link} from 'react-router-dom';

const LogOutHeader = ({logIn}) => {

    return(
        <Navbar bg="dark" Sticky = "top" variant="dark" isLoggedIn={false}>
            <Container>
                <Link to="/" style={{textDecoration: 'none'}}>
                <Navbar.Brand>iSell</Navbar.Brand>
                </Link>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                <Nav className="justify-content-end">
                    <Nav.Item>
                        <Button variant="outline-light" onClick={logIn}>
                            <Container>
                                <Row>
                                    <Col md = {4}>
                                        <img
                                        alt=""
                                        src={gLogo}
                                        width="20"
                                        height="20"
                                        className="d-inline-block align-top mt-1"
                                        />
                                    </Col>
                                    <Col>
                                        <p className = "mb-1">Log in</p>
                                    </Col>
                                </Row>
                            </Container>
                        </Button>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default LogOutHeader;