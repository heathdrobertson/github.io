import React from 'react';

import { ButtonGroup, Figure, Jumbotron, Container, Row, Col } from 'react-bootstrap';
import Logo from '../src/components/logo/Logo.js';
import Footer from './components/footer/Footer.js';

import Modal from './components/modal/Modals.js';

import ProfilePic from './assets/images/heath_robertson.jpg';

const App = () => {
    return (
        <>
        <Jumbotron className="text-center">
        <Row>

        <Col xs={12} md={6}>
        <Logo alt="logo" logoType={'code'} />
        <br />
        <Modal modalMarkdown={0} />
        </Col>
        <Col xs={12} md={6}>
        <Logo className="App-logo" alt="logo" logoType={'design'} />
        <br />
        <Modal modalMarkdown={1} />
        </Col>

        </Row>
        </Jumbotron>

        <Container className="main py-5 text-center">
        <Row>
        <Col>

        <Figure>
            <Figure.Image
            width={150}
            height={150}
            alt="171x180"
            src={ProfilePic}
            roundedCircle
            />
        <Figure.Caption>
            <b>STATUS:</b> Temporarily self-aware pattern in the flow of stardust.
        </Figure.Caption>
        </Figure>

        </Col>
        </Row>

        <Row className="text-center text-light">

        <Col>
        <h1>Heath Robertson</h1>
        </Col>
        </Row>
        <Row className="text-center">

        <Col>
        <ButtonGroup>
        <Modal modalMarkdown={2} />
        <Modal modalMarkdown={3} />
        </ButtonGroup>
        </Col>

        </Row>
        </Container>

        <Footer />

        </>
    );
}

export default App;
