import React, {Fragment} from 'react';
import { LinkContainer } from "react-router-bootstrap";
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import Highlight from '../../components/Highlight/Highlight.component';
import Feature from '../../components/Feature/Feature.component';
import Footer from '../../components/Footer/Footer.component';
import styles from './Home.module.scss';

export const Home = () => (
  <Fragment>
    <Row>
      <Col>
        <Carousel className={styles.carousel}>
          <Carousel.Item className={styles['carousel-item']}>
            <img
              className="d-block w-100"
              alt=""
            />
            <Carousel.Caption className={styles['carousel-caption']}>
              <h3>Example headline.</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <LinkContainer to="/signup"><Button>Sign up today</Button></LinkContainer>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={styles['carousel-item']}>
            <img
              className="d-block w-100"
              alt=""
            />
            <Carousel.Caption className={styles['carousel-caption']}>
              <h3>Example headline 2.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <LinkContainer to="/signup"><Button>Sign up today</Button></LinkContainer>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={styles['carousel-item']}>
            <img
              className="d-block w-100"
              alt=""
            />
            <Carousel.Caption className={styles['carousel-caption']}>
              <h3>Example headline 3.</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              <LinkContainer to="/signup"><Button>Sign up today</Button></LinkContainer>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
    <Container>
      <Row id={styles.highlights} className={styles['row-margin']}>
        <Col xs={12} md={true}>
          <Highlight 
            animate={true}
            headerText="Heading"
            pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
            btnText="View details"
            btnLink="#" />
        </Col>
        <Col xs={12} md={true}>
          <Highlight 
            animate={true}
            headerText="Heading"
            pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
            btnText="View details"
            btnLink="#" />
        </Col>
        <Col xs={12} md={true}>
          <Highlight 
            animate={true}
            headerText="Heading"
            pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
            btnText="View details"
            btnLink="#" />
        </Col>
      </Row>
      <Row className={styles['row-margin']}>
        <Feature headerText="First featurette heading. It'll blow your mind." pText="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      </Row>
      <Row className={styles['row-margin']}>
        <Feature imageAlignment="left" headerText="First featurette heading. It'll blow your mind." pText="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      </Row>
      <Row className={styles['row-margin']}>
        <Feature headerText="First featurette heading. It'll blow your mind." pText="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      </Row>
      <Footer />
    </Container>
  </Fragment>
)
