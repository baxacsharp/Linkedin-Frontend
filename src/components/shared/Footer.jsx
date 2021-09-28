import React from 'react';
import { Container, Dropdown, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { GoGear } from 'react-icons/go';
import logo from 'images/linkedIn-logo.png';

const Footer = function () {
  return (
    <FooterStyled fluid className='mx-0'>
      <Container>
        <Row>
          <ul>
            <li>
              <a href='#section'>
                <img src={logo} alt='logo' />
              </a>
            </li>
          </ul>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>
                <a href='#section'>About</a>
              </li>
              <li>
                <a href='#section'>Community Guidelines</a>
              </li>
              <li>
                <a href='#section'>Privacy & Terms</a>
              </li>
              <li>
                <a href='#section'>Sales Solution</a>
              </li>
              <li>
                <a href='#section'>Saftey Career</a>
              </li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>
                <a href='#section'>Talent Solutions</a>
              </li>
              <li>
                <a href='#section'>Marketing Solutions</a>
              </li>
              <li>
                <a href='#section'>Advertising</a>
              </li>
              <li>
                <a href='#section'>Small Business</a>
              </li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>
                <AiFillQuestionCircle className='icons' />
                <a href='#section'>Questions?</a>
              </li>
              <li>
                <GoGear className='icons' />
                <a href='#section'>Manage your account and privacy</a>
              </li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>
                Select Language
                <Dropdown>
                  <Dropdown.Toggle variant='light' id='dropdown-basic'>
                    English (English)
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ fontSize: '0.9em' }}>
                    <Dropdown.Item href='#/action-1'>French</Dropdown.Item>
                    <Dropdown.Item href='#/action-2'>German</Dropdown.Item>
                    <Dropdown.Item href='#/action-3'>Italian</Dropdown.Item>
                    <Dropdown.Item href='#/action-3'>Spanish</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className='footerText'>
            <ul>
              <li>
                LinkedIn Corporation <span>&#169;</span> 2021
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled(Container)`
  background: #f4f4f4;
  color: #4b4b4b;

  & li {
    list-style-type: none;
    font-size: 0.7rem;
    padding: 0.3rem;
  }

  & .footerText {
    font-size: 0.8rem;
    font-weight: bold;
  }

  & #dropdown-basic {
    font-size: 0.7rem;
    border: 1px solid #4b4b4b;
    align-items: left;
  }
  & img {
    width: 90px;
    margin: 5px 14px;
  }

  & .icons {
    font-size: 1.8em;
    margin-right: 4px;
  }
  & a {
    text-decoration: none;
    color: #4b4b4b;
  }
`;
