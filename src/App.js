import './App.css';
import Login from './Login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import background from "./images/sanber.jpg";

function App() {
  return (
    <div style={bg}>
      <Container fluid='md'>
        <Row>
          <Col md={4} sm={2} xs={1}></Col>
          <Col md={4} sm={8} xs={10}><Login/></Col>
          <Col md={4} sm={2} xs={1}></Col>
        </Row>
      </Container>
    </div>
  );
}

const bg = {
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '100vh',
  justifyContent: 'center',
}

export default App;
