import React, { Component } from 'react';
import { BsChevronCompactDown } from 'react-icons/bs';
import { BsChevronCompactUp } from 'react-icons/bs';
import { BsChevronCompactLeft } from 'react-icons/bs';
import { BsChevronCompactRight } from 'react-icons/bs';
import styled from 'styled-components';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';

export default class ProfileStrength extends Component {
  state = {
    isClicked: true,
  };

  handleClick = () => this.setState({ isClicked: !this.state.isClicked });

  render() {
    return (
      <StyledDiv className='rounded px-3 py-4 mt-3'>
        <div className='d-flex justify-content-between'>
          <p>
            Profile Strength:{' '}
            <span className='font-weight-bold'>Intermediate</span>
          </p>
          {!this.state.isClicked && (
            <BsChevronCompactDown onClick={this.handleClick} />
          )}
          {this.state.isClicked && (
            <BsChevronCompactUp onClick={this.handleClick} />
          )}
        </div>

        <div className='bar-container'>
          <Form.Group controlId='formBasicRange'>
            <Form.Control min='0' max='100' type='range' />
          </Form.Group>
        </div>

        {this.state.isClicked && (
          <div className='update-section'>
            <Container fluid>
              <Row className='no-gutters'>
                <Col xs={12} md={1}>
                  <img
                    src='https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/1045/original/Strive_-_logosquareblack.png'
                    alt='strive'
                    className='w-100'
                  />
                </Col>
                <Col xs={11}>
                  <p className='font-weight-bold m-0 ml-3'>
                    Update your education details
                  </p>
                  <p className='m-0 ml-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </Col>
              </Row>
              <Row
                noGutters
                className='mt-3 align-items-center justify-content-between flex'
              >
                <Col xs={12} lg={4} className='d-flex justify-content-between'>
                  <span className='text-muted p-1'>
                    <BsChevronCompactLeft />
                    Previous
                  </span>
                  <span className='p-1'>
                    Next
                    <BsChevronCompactRight />
                  </span>
                </Col>
                <Col
                  xs={12}
                  lg={8}
                  className='d-flex align-items-center justify-content-between justify-content-lg-end'
                >
                  <span className='p-1 mr-lg-2'>Does not apply</span>
                  <Button
                    variant='primary'
                    className='rounded-pill font-weight-bold py-0 px-3 text-truncate'
                  >
                    Update Education
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </StyledDiv>
    );
  }
}

const StyledDiv = styled.div`
  background-color: white;
  border: 1px solid #dddcd9;

  & svg {
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
      background-color: lightgray;
      border-radius: 50%;
    }
  }

  & .update-section {
    transition: 0.5s ease;

    /* & img {
      width: 50px;
    } */

    & span {
      cursor: pointer;

      &:hover {
        background-color: lightgray;
        border-radius: 8px;
      }
    }
  }
`;
