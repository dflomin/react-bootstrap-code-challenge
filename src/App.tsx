import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import Header from './components/Header/Header.component';
import { Home } from './pages/Home/Home';
import './App.scss';

function App() {
  return (
    <Router>
      <Container className="bs-no-padding" fluid={true}>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
          <Route path="/" exact component={Home} />
          <Route path="/link" component={Home} />
          <Route path="/disabled" component={Home} />
      </Container>
    </Router>
  );
}

export default withRouter(App);
