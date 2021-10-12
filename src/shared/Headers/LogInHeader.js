import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Menu from '../components/Menu';
import {Link} from 'react-router-dom';

const LogInHeader = ({logOut}) =>{

    return(
        <Navbar bg="dark" Sticky = "top" variant="dark">
            <Container>
                <Menu/>
                <Link to="/" style={{textDecoration: 'none'}}>
                <Navbar.Brand href="/">iSell</Navbar.Brand>
                </Link>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                <Nav className="justify-content-end">
                    <Nav.Item>
                        <Button variant="outline-light" onClick={logOut}>Log Out</Button>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default LogInHeader;