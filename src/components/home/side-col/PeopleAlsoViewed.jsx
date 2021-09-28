import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col, Container, Spinner } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';
import PersonView from './PersonView';

export default class PeopleAlsoViewed extends Component {
  state = {
    showMore: false,
    isLoading: true,
    users: [],
  };

  handleClick = () => this.setState({ showMore: !this.state.showMore });

  componentDidMount = async () => {
    this.setState({ isLoading: true });
    try {
      const resp = await fetch(`${process.env.REACT_APP_API_URL}/profile`);

      const users = await resp.json();
      // console.log(users);

      this.setState({ users });
      this.setState({ isLoading: false });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        {this.state.isLoading && (
          <Container fluid className='mt-3'>
            <Row className='justify-content-center'>
              <Spinner animation='grow' variant='secondary' />
            </Row>
          </Container>
        )}

        {!this.state.isLoading && (
          <>
            <StyledContainer fluid className='py-3 mt-3 rounded-top'>
              <Row className='align-items-center px-2'>
                <Col>
                  <h6 className='font-weight-bold'>{this.props.heading}</h6>
                </Col>
              </Row>

              {!this.state.showMore && (
                <>
                  {this.state.users
                    .slice(this.props.sliceRange[0], this.props.sliceRange[1])
                    .map((user, idx) => (
                      <PersonView key={uuidv4()} {...user} idx={idx} />
                    ))}
                </>
              )}
              {this.state.showMore && (
                <>
                  {this.state.users
                    .slice(this.props.sliceRange[2], this.props.sliceRange[3])
                    .map((user, idx) => (
                      <PersonView key={uuidv4()} {...user} idx={idx} />
                    ))}
                </>
              )}
            </StyledContainer>
            <StyledSection
              onClick={this.handleClick}
              className='d-flex justify-content-center py-2 px-0 align-items-center rounded-bottom'
            >
              {!this.state.showMore && (
                <>
                  <h6 className='text-primary m-0 mr-2'>Show more</h6>
                  <BsChevronCompactDown className='text-primary font-weight-bold' />
                </>
              )}
              {this.state.showMore && (
                <>
                  <h6 className='text-primary m-0 mr-2'>Show less</h6>
                  <BsChevronCompactUp className='text-primary font-weight-bold' />
                </>
              )}
            </StyledSection>
          </>
        )}
      </>
    );
  }
}

const StyledContainer = styled(Container)`
  background-color: white;
  border: 1px solid #dddcd9;
`;

const StyledSection = styled.section`
  background-color: white;
  border: 1px solid #dddcd9;
  border-top: none;

  cursor: pointer;
  &:hover {
    background-color: var(--color-hover-section);

    & * {
      color: var(--color-hover-btn) !important;
    }
  }
`;
