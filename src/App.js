import './App.css';
import { Container, Row, Col ,Card ,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

function App() {

  const [val,Setval] = useState("");

  const backspace = () => {
    try {

      Setval(val.slice( 0, -1));

    } catch (error) {
      Setval("");
    }
  }

  const calculate = () => {
    try {

      Setval(eval(val));

    } catch (error) {
      
    }
  }


  return (
    <div className="App">
      <h1>Calculator</h1>
      <hr />
      <Container>
        <Row>
          <Col md="6">
            <Card style={{ width: '19rem' }}>
              <Card.Body>
                  <div className="calc-main">
                    <input type="text" name="" className='form-control form-control-lg mb-4 text-center bg-light fs-4 text-primary shadow' value={val} id="" />
                    <Row>
                      <Col xs="3">
                        <button className='btn btn-light text-primary shadow p-3 fs-5' value={1} onClick={(e) => Setval(val + e.target.value)}>1</button>
                      </Col>
                      <Col xs="3">
                        <button className='btn btn-light text-primary shadow p-3 fs-5' value={2} onClick={(e) => Setval(val + e.target.value)}>2</button>
                      </Col>
                      <Col xs="3">
                        <button className='btn btn-light text-primary shadow p-3 fs-5' value={3} onClick={(e) => Setval(val + e.target.value)}>3</button>
                      </Col>
                      <Col xs="3">
                        <button className='btn btn-light text-primary shadow px-2 py-3 fs-5' value="c" onClick={() => backspace()}>C/CE</button>
                      </Col>
                    </Row>
                    <Row className='mt-3'>
                      <Col xs="3">
                        <button className='btn btn-light text-primary shadow p-3 fs-5' value={4} onClick={(e) => Setval(val + e.target.value)}>4</button>
                      </Col>
                      <Col xs="3">
                        <button className='btn btn-light text-primary shadow p-3 fs-5' value={5} onClick={(e) => Setval(val + e.target.value)}>5</button>
                      </Col>
                      <Col xs="3">
                        <button className='btn btn-light text-primary shadow p-3 fs-5' value={6} onClick={(e) => Setval(val + e.target.value)}>6</button>
                      </Col>
                      <Col xs="3">
                        <button className='btn btn-light text-primary shadow p-3 py-3 fs-5' value="+" onClick={(e) => Setval(val + e.target.value)}>+</button>
                      </Col>
                    </Row>
                    <Row className='mt-3'>
                      <Col xs="3">
                        <button className='btn btn-light text-primary shadow p-3 fs-5' value={7} onClick={(e) => Setval(val + e.target.value)}>7</button>
                      </Col>
                      <Col xs="3">
                        <button className='btn btn-light text-primary shadow p-3 fs-5' value={8} onClick={(e) => Setval(val + e.target.value)}>8</button>
                      </Col>
                      <Col xs="3">
                        <button className='btn btn-light text-primary shadow p-3 fs-5' value={9} onClick={(e) => Setval(val + e.target.value)}>9</button>
                      </Col>
                      <Col xs="3">
                        <button className='btn btn-light text-primary shadow p-3 py-3 fs-5' value="*" onClick={(e) => Setval(val + e.target.value)}>*</button>
                      </Col>
                    </Row>
                    <Row className='mt-3'>
                      <Col xs="3">
                        <button className='btn btn-light text-primary shadow p-3 fs-5' value="." onClick={(e) => Setval(val + e.target.value)}>.</button>
                      </Col>
                      <Col xs="3">
                        <button className='btn btn-light text-primary shadow p-3 fs-5' value={0} onClick={(e) => Setval(val + e.target.value)}>0</button>
                      </Col>
                      <Col xs="3">
                        <button className='btn btn-light text-primary shadow p-3 fs-5' value="=" onClick={() => calculate()}>=</button>
                      </Col>
                      <Col xs="3">
                        <button className='btn btn-light text-primary shadow p-3 py-3 fs-5' value="/" onClick={(e) => Setval(val + e.target.value)}>/</button>
                      </Col>
                    </Row>
                  </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
