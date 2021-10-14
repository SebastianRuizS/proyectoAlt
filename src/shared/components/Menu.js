import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import menuIcon from '../../img/menuIcon.png';
import React, {useState} from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import signProductsIcon from '../../img/signProductsIcon.png';
import manageProductsIcon from '../../img/manageProductsIcon.png';
import signSalesIcon from '../../img/signSalesIcon.png';
import manageSalesIcon from '../../img/manageSalesIcon.png';
import userIcon from '../../img/userIcon.png';
import {Link} from 'react-router-dom';

const Menu = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <Nav className="me-3">
            <Nav.Item>
            <Button variant="dark" onClick={handleShow}>
                <img
                alt=""
                src={menuIcon}
                width="20"
                height="20"
                className="d-inline-block align-top mt-1 mb-1"
                />
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>iSell</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Container>
                    <Row style = {{height: '77vh'}} className="align-items-center">
                    <Col md = {12}>
                    <p>What do you want to do?</p>
                        <div className="d-grid gap-2">
                            <Link to="/SignProducts">
                            <Button variant="outline-dark" style={{width: "59vh"}} onClick={handleClose} size="lg">
                                <img
                                alt=""
                                src={signProductsIcon}
                                width="20"
                                height="20"
                                className="d-inline-block align-top mt-1 me-2"
                                /> Sign products</Button></Link>
                            <Link to="/ManageProducts">
                            <Button variant="outline-dark" style={{width: "59vh"}} onClick={handleClose} size="lg">
                                <img
                                alt=""
                                src={manageProductsIcon}
                                width="20"
                                height="20"
                                className="d-inline-block align-top mt-1 me-2"
                                />Manage products</Button></Link>
                            <Link to="/SignSales">
                            <Button variant="outline-dark" style={{width: "59vh"}} onClick={handleClose} size="lg">
                                <img
                                alt=""
                                src={signSalesIcon}
                                width="20"
                                height="20"
                                className="d-inline-block align-top mt-1 me-2"
                                />Sign sales</Button></Link>
                            <Link to="/ManageSales">
                            <Button variant="outline-dark" style={{width: "59vh"}} onClick={handleClose} size="lg">
                                <img
                                alt=""
                                src={manageSalesIcon}
                                width="20"
                                height="20"
                                className="d-inline-block align-top mt-1 me-2"
                                />Manage sales</Button></Link>
                            <Link to="/AboutUsers">
                            <Button variant="outline-dark" style={{width: "59vh"}} onClick={handleClose} size="lg">
                                <img
                                alt=""
                                src={userIcon}
                                width="20"
                                height="20"
                                className="d-inline-block align-top mt-1 me-2"
                                />About users</Button></Link>
                        </div>
                    </Col>
                    </Row>
                    </Container>
                </Offcanvas.Body>
            </Offcanvas>
            </Nav.Item>
        </Nav>
    );
};

export default Menu;