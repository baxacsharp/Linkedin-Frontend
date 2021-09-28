import React from 'react';
import { Container, Row, Col, Image, Button, Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import { BsPencil } from 'react-icons/bs';
import { withRouter } from 'react-router-dom';
import EditDetailsModal from './EditDetailsModal';

class PersonalDetails extends React.Component {
  constructor(props) {
    super(props);
    this.fileField = React.createRef();
    this.state = {
      profilePic: null,
      isLoading: false,
    };
  }

  replaceBrokenImg = (e) => {
    console.log('img src not fount, dont worrie, got a fallback :)');
    e.target.src = `https://picsum.photos/100/100?random=${Math.ceil(
      Math.random() * 1000
    )}`;
  };
  handleChangePofPic = () => {
    this.fileField.current.click();
  };

  uploadFile = async () => {
    this.setState({ isLoading: true });
    const formData = new FormData();
    formData.append(
      'picture',
      this.state.profilePic,
      this.state.profilePic.name
    );
    const resp = await fetch(
      `${process.env.REACT_APP_API_URL}/api/profile/${this.props.user.id}/picture`,
      {
        method: 'POST',

        body: formData,
      }
    );
    console.log(resp);
    const body = await resp.json();
    console.log(body);
    await this.props.fetchUser('me');
    this.setState({ isLoading: false });
  };

  fileSelectHandler = (e) => {
    console.log(e.target.files[0]);
    const selectedFile = e.target.files[0];
    this.setState({ profilePic: selectedFile });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.profilePic !== this.state.profilePic) {
      this.uploadFile();
    }
  };

  render() {
    return (
      <StyledContainer className='mt-3'>
        <StyledDiv>
          <HeroImage />
        </StyledDiv>
        <DetailsDiv>
          <Row>
            <FlexColRow className='col-12'>
              <div className='pic-container'>
                {(this.state.isLoading && <Spinner animation='grow' />) || (
                  <ProfileImage
                    onError={this.replaceBrokenImg}
                    src={this.props.user.image}
                  />
                )}
                {this.props.location.pathname === '/profile/1' && (
                  <>
                    <input
                      onChange={this.fileSelectHandler}
                      type='file'
                      name='change-picture'
                      ref={this.fileField}
                      className='d-none'
                    />
                    <BsPencil
                      onClick={this.handleChangePofPic}
                      style={{ cursor: 'pointer' }}
                      className='mt-2'
                    />
                  </>
                )}
              </div>

              {/* show pencil to edit only on my profile */}
              {this.props.location.pathname === '/profile/1' && (
                <EditDetailsModal
                  fetchUser={this.props.fetchUser}
                  user={this.props.user}
                >
                  {' '}
                  <BsPencil style={{ cursor: 'pointer' }} className=' ml-5' />
                  <span style={{ cursor: 'pointer' }}>edit prof info</span>
                </EditDetailsModal>
              )}
            </FlexColRow>
          </Row>
          <Row>
            <FlexColRow className='col-7 mt-3'>
              <h4>
                {this.props.user.name} {this.props.user.surname}
              </h4>
            </FlexColRow>
            <Col style={{ display: 'flex' }} className='col-5 mt-3'>
              <img
                className='d-none'
                alt='education'
                width='32px'
                height='32px'
                src='https://media-exp1.licdn.com/dms/image/C4D0BAQFFQIjyDsOK0w/company-logo_100_100/0/1593351903670?e=1625702400&v=beta&t=3rWOTtMt8Oa6T_gmK3KDVW1m0AsgXMfL-JXwC0n4tXo'
              />
              <h6 className='d-none' style={{ margin: '6px 0 0 2px' }}>
                Strive School
              </h6>
            </Col>
          </Row>
          <Row>
            <FlexColColumn>
              <h6>{this.props.user.title}</h6>
              <h6>
                {this.props.user.area} - <span>56 connections</span> -{' '}
                <span>Contact info</span>
              </h6>
            </FlexColColumn>
          </Row>
          <Row>
            <Col xs={12}>
              <span>{this.props.user.email}</span>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <p>{this.props.user.bio}</p>
            </Col>
          </Row>
          <Row>
            <Col className='col-12 mt-3'>
              <OpenToButton>Open to</OpenToButton>
              <OtherButtons>Add profile section</OtherButtons>
              <OtherButtons>More...</OtherButtons>
            </Col>
          </Row>
        </DetailsDiv>
      </StyledContainer>
    );
  }
}

export default withRouter(PersonalDetails);

const StyledContainer = styled(Container)`
  border-radius: 3px;
  background-color: white;
  border: 1px solid #dddcd9;
  padding: 0;
`;
const StyledDiv = styled.div`
  min-height: 195.5px;
  max-height: 195.5px;
  padding-bottom: 25%;
`;
const HeroImage = styled(Image)`
  background-image: url(https://www.snsmarketing.es/blog/wp-content/uploads/2018/10/linkedin.png);
  position: relative;
  width: 100%;
  min-height: 195.5px;
  max-height: 195.5px;
`;

const DetailsDiv = styled.div`
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  text-align: left;
`;

const ProfileImage = styled(Image)`
  margin-top: -104px;
  z-index: 4;
  width: 160px;
  height: 160px;
  background-clip: content-box;
  border-radius: 50%;
  box-sizing: border-box;
`;

const FlexColRow = styled(Col)`
  display: flex;
  justify-content: space-between;
`;

const FlexColColumn = styled(Col)`
  display: flex;
  flex-direction: column;
`;

const OpenToButton = styled(Button)`
  border-radius: 30px;
  background-color: rgb(10 102 194);
  margin-right: 8px;
`;
const OtherButtons = styled(Button)`
  border-radius: 30px;
  background: none;
  color: grey;
  margin-right: 8px;
  border: 1px solid grey;
`;
