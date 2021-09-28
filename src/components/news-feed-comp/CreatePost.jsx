import React, { Component } from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { RiVideoFill } from 'react-icons/ri';
import { RiCalendarEventFill } from 'react-icons/ri';
import { GrArticle } from 'react-icons/gr';
import CreateModal from './CreateModal';

export default class CreatePost extends Component {
  render() {
    // console.log(this.props.userLogged);
    return (
      <StyledRow className='rounded p-2 py-3'>
        <Col xs={12}>
          <div className='d-flex align-items-center'>
            <Image fluid roundedCircle src={this.props.userLogged?.image} />

            {/* modal to create a post */}
            <CreateModal
              method='POST'
              getPosts={this.props.getPosts}
              userLogged={this.props.userLogged}
            >
              <Button
                variant='outline-secondary'
                className='rounded-pill text-left w-100 ml-2 font-weight-bold'
              >
                Start a post
              </Button>{' '}
            </CreateModal >
          </div>
        </Col>
        <Col xs={12} className='mt-3'>
          <Row>
            <Col className='feed-post-icon d-flex align-items-center'>
              <StyledIcons>
                <HiOutlinePhotograph className='text-primary' />
                <span className='ml-2'>Photo</span>
              </StyledIcons>
            </Col>
            <Col className='feed-post-icon d-flex align-items-center'>
              <StyledIcons>
                <RiVideoFill className='text-success' />
                <span className='ml-2'>Video</span>
              </StyledIcons>
            </Col>
            <Col className='feed-post-icon d-flex align-items-center'>
              <StyledIcons>
                <RiCalendarEventFill className='text-warning' />
                <span className='ml-2'>Event</span>
              </StyledIcons>
            </Col>

            <Col className='feed-post-icon d-flex align-items-center'>
              <StyledIcons>
                <GrArticle className='text-primary' />
                <span className='ml-2'>Write article</span>
              </StyledIcons>
            </Col>
          </Row>
        </Col>
      </StyledRow>
    );
  }
}

const StyledRow = styled(Row)`
  background-color: white;
  border: 1px solid var(--border-color-cards);
  & img {
    width: 70px;
    height: 70px;
  }

  & svg {
    font-size: 2rem;
  }
`;

// !toFix hover not working
const StyledIcons = styled.div`
  cursor: pointer;

  padding: 0.5rem 0.7rem;
  background-color: white;

  & :hover * {
    background-color: lightgray;
  }
`;
