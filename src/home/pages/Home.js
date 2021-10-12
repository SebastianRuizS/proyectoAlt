import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    return(
        <div>
            <Container>
                    <Row style = {{height: '77vh'}} className="justify-content-md-center align-items-center">
                        <Col md = "auto">
                            <div className = "text-center">
                            <h1>iSell</h1>
                            <p>for companies</p>
                            </div>
                        </Col>
                    </Row>
            </Container>
        </div>
    );
}

export default Home;