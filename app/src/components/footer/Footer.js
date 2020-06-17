import React from 'react';
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap'; import { IconContext } from "react-icons";
import { FaRssSquare, FaYoutubeSquare, FaGithubSquare, FaRedditSquare, FaTwitterSquare, FaTelegram, FaLinkedin } from 'react-icons/fa';

import './Footer.scss';
import Logo from '../logo/Logo.js';

const Footer = () => {
    return (
        <footer className="th-footer">
        <Container className="py-5">

        <Row className="text-center">
        <Col> 
        <Logo logoType={'icon'} />
        </Col>
        </Row>
        <Row className="my-5 text-center">
        <Col className="text-centerl" xs={12} md={4}> 
          <a href="https://www.toilethill.io" rel="noopener noreferrer" target="_blank">ToiletHill.io</a>
        </Col>
        <Col className="text-center" xs={12} md={4}> 
          <a variant="primary" href="https://www.heathrobertson.com" rel="noopener noreferrer" target="_blank">HeathRobertson.com</a>
        </Col>
        <Col className="text-center" xs={12} md={4}> 
          <a variant="primary" href="mailto:CodeHappens@ToiletHill.io?subject=From%20Dapp30" rel="noopener noreferrer" target="_blank">CodeHappens@ToiletHill.io</a>
        </Col>
        </Row>

        <Row className="text-center">
        <Col> 
        <IconContext.Provider value={{className:"th-footer-icons", size:"2em"}}>
            <ButtonGroup aria-label="Social Networks">
              <Button variant="primary" href="https://toilethill.io/posts/" target="_blank" title="Blog"><FaRssSquare /></Button>
              <Button variant="primary" href="https://github.com/HeathDRobertson" target="_blank" title="GitHub Repos"><FaGithubSquare /></Button>
              <Button variant="primary" href="https://t.me/HeathDRobertson" target="_blank" title="Telegram"><FaTelegram /></Button>
              <Button variant="primary" href="https://www.youtube.com/channel/UCG4Av0xeLAD-hJCQHMrYqtA" target="_blank" title="YouTube"><FaYoutubeSquare /></Button>
              <Button variant="primary" href="https://twitter.com/ToiletHill" target="_blank" title="Twitter"><FaTwitterSquare /></Button>
              <Button variant="primary" href="https://www.reddit.com/user/ToiletHill" target="_blank" title="Reddit"><FaRedditSquare /></Button>
              <Button variant="primary" href="https://linkedin.com/in/heathdrobertson" target="_blank" title="LinkedIn"><FaLinkedin /></Button>
            </ButtonGroup>
            </IconContext.Provider>
        </Col>
        </Row>

        </Container>
        </footer>

    );
}

export default Footer;
