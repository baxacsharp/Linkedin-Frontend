import React from 'react';
import styled from 'styled-components';
import { Col, Container, Image, Row } from 'react-bootstrap';

const Activity = () => {
  return (
    <>
      <StyledContainer fluid className='pt-3 mt-3 rounded-top'>
        <h4>Activity</h4>
        <h6 className='text-primary'>45 followers</h6>
        <Row className='border-bottom'>
          <Col md={6}>
            <Row noGutters>
              <Col md={3} lg={2}>
                <Image src='https://picsum.photos/1000/1000?random=1' fluid />
              </Col>
              <Col
                className='pl-0 pl-md-2 mt-2 mt-md-0 text-container'
                md={9}
                lg={10}
              >
                <h6 className='text-truncate mb-0'>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h6>
                <p className='text-truncate'>Lorem ipsum dolor sit.</p>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row noGutters>
              <Col md={3} lg={2}>
                <Image src='https://picsum.photos/1000/1000?random=2' fluid />
              </Col>
              <Col
                className='pl-0 pl-md-2 mt-2 mt-md-0 text-container'
                md={9}
                lg={10}
              >
                <h6 className='text-truncate mb-0'>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h6>
                <p className='text-truncate'>Lorem ipsum dolor sit.</p>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row noGutters>
              <Col md={3} lg={2}>
                <Image src='https://picsum.photos/1000/1000?random=3' fluid />
              </Col>
              <Col
                className='pl-0 pl-md-2 mt-2 mt-md-0 text-container'
                md={9}
                lg={10}
              >
                <h6 className='text-truncate mb-0'>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h6>
                <p className='text-truncate'>Lorem ipsum dolor sit.</p>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row noGutters>
              <Col md={3} lg={2}>
                <Image src='https://picsum.photos/1000/1000?random=4' fluid />
              </Col>
              <Col
                className='pl-0 pl-md-2 mt-2 mt-md-0 text-container'
                md={9}
                lg={10}
              >
                <h6 className='text-truncate mb-0'>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h6>
                <p className='text-truncate'>Lorem ipsum dolor sit.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </StyledContainer>

      <StyledSection className='d-flex justify-content-center py-2 px-0 align-items-center rounded-bottom'>
        <h6 className='text-primary m-0'>See all activity</h6>
      </StyledSection>
    </>
  );
};

export default Activity;

// #dddcd9

const StyledContainer = styled(Container)`
  background-color: white;
  border: 1px solid #dddcd9;

  & .text-container {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const StyledSection = styled.section`
  background-color: white;
  border: 1px solid #dddcd9;
  border-top: none;

  cursor: pointer;
  &:hover {
    background-color: var(--color-hover-section);

    & h6 {
      color: var(--color-hover-btn) !important;
    }
  }
`;
