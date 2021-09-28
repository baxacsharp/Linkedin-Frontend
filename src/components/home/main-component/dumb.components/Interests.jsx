import React from 'react';
import styled from 'styled-components';
import { Col, Container, Image, Row } from 'react-bootstrap';

const Interests = () => {
  return (
    <>
      <StyledContainer fluid className='pt-3 mt-3 rounded-top'>
        <h4 className='mb-3'>Interests</h4>

        <Row className='border-bottom'>
          <Col md={6}>
            <Row noGutters>
              <Col md={3} lg={2}>
                <Image src='https://picsum.photos/1000/1000?random=5' fluid />
              </Col>
              <Col
                className='pl-0 pl-md-3 pl-lg-4 mt-2 mt-md-0 text-container'
                md={9}
                lg={10}
              >
                <h6 className='text-truncate mb-0'>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h6>
                <p className='text-muted text-truncate'>
                  Lorem ipsum dolor sit.
                </p>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row noGutters>
              <Col md={3} lg={2}>
                <Image src='https://picsum.photos/1000/1000?random=6' fluid />
              </Col>
              <Col
                className='pl-0 pl-md-3 pl-lg-4 mt-2 mt-md-0 text-container'
                md={9}
                lg={10}
              >
                <h6 className='text-truncate mb-0'>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h6>
                <p className='text-muted text-truncate'>
                  Lorem ipsum dolor sit.
                </p>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row noGutters>
              <Col md={3} lg={2}>
                <Image src='https://picsum.photos/1000/1000?random=7' fluid />
              </Col>
              <Col
                className='pl-0 pl-md-3 pl-lg-4 mt-2 mt-md-0 text-container'
                md={9}
                lg={10}
              >
                <h6 className='text-truncate mb-0'>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h6>
                <p className='text-muted text-truncate'>
                  Lorem ipsum dolor sit.
                </p>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row noGutters>
              <Col md={3} lg={2}>
                <Image src='https://picsum.photos/1000/1000?random=8' fluid />
              </Col>
              <Col
                className='pl-0 pl-md-3 pl-lg-4 mt-2 mt-md-0 text-container'
                md={9}
                lg={10}
              >
                <h6 className='text-truncate mb-0'>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h6>
                <p className='text-muted text-truncate'>
                  Lorem ipsum dolor sit.
                </p>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row noGutters>
              <Col md={3} lg={2}>
                <Image src='https://picsum.photos/1000/1000?random=9' fluid />
              </Col>
              <Col
                className='pl-0 pl-md-3 pl-lg-4 mt-2 mt-md-0 text-container'
                md={9}
                lg={10}
              >
                <h6 className='text-truncate mb-0'>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h6>
                <p className='text-muted text-truncate'>
                  Lorem ipsum dolor sit.
                </p>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row noGutters>
              <Col md={3} lg={2}>
                <Image src='https://picsum.photos/1000/1000?random=10' fluid />
              </Col>
              <Col
                className='pl-0 pl-md-3 pl-lg-4 mt-2 mt-md-0 text-container'
                md={9}
                lg={10}
              >
                <h6 className='text-truncate mb-0'>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h6>
                <p className='text-muted text-truncate'>
                  Lorem ipsum dolor sit.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </StyledContainer>

      <StyledSection className='d-flex justify-content-center py-2 px-0 align-items-center rounded-bottom'>
        <h6 className='text-primary m-0'>See all</h6>
      </StyledSection>
    </>
  );
};

export default Interests;

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
