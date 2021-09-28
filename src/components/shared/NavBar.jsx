// import React from 'react';
// import { Link, withRouter } from 'react-router-dom';
// import {
//   Navbar,
//   Nav,
//   Form,
//   FormControl,
//   Dropdown,
//   Col,
//   Container,
//   Row,
//   DropdownButton,
//   Button,
//   Card,
//   ListGroup,
// } from 'react-bootstrap';
// import { SiLinkedin } from 'react-icons/si';
// import { ImHome3 } from 'react-icons/im';
// import { BsBriefcaseFill } from 'react-icons/bs';
// import { AiFillMessage } from 'react-icons/ai';
// import { IoNotificationsSharp } from 'react-icons/io5';
// import { BsFillPeopleFill } from 'react-icons/bs';
// import { CgMenuGridR } from 'react-icons/cg';
// import fine from 'images/fine2.jpg';
// import fined from 'images/fine4.jpg';
// import styled from 'styled-components';
// import NavListItem from './navbar-stuff/NavListItem';
// class NavBar extends React.Component {
//   state = {
//     data: [],
//     inputText: '',
//     hasFocus: false,
//   };
//   handleChange = (e) => this.setState({ inputText: e.target.value });
//   handleFocus = () => {
//     this.setState({ hasFocus: true });
//   };
//   handleBlur = () => {
//     this.setState({ hasFocus: false });
//   };
//   fetchUserData = async () => {
//     try {
//       const response = await fetch(
//         'https://striveschool-api.herokuapp.com/api/profile/',
//         {
//           headers: {
//             Authorization:
//               'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZmMDJmZWE0ZmE2NTAwMTVlNDI3YmYiLCJpYXQiOjE2MTc4OTA1MDgsImV4cCI6MTYxOTEwMDEwOH0.hObl-Gawygx1KZn-sj_l34dHrbIrLRUWY5yUdq77atQ',
//           },
//         }
//       );
//       if (response.ok) {
//         let body = await response.json();
//         console.log(body);
//         this.setState({
//           data: body,
//         });
//         console.log(this.state.data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   componentDidMount = () => {
//     // only happens once
//     this.fetchUserData();
//   };

//   makeLinkActive = () => {
//     switch (this.props.location.pathname) {
//       case '/':
//         return 'active';
//       case '/profile/me':
//         return 'active';
//       default:
//         return '';
//     }
//   };
//   //     UserDropdowns() {

//   //     <Row>

//   //         {this.state.data.map(user=><Card key={user._id} xs={4}>
//   //             <ListGroup variant="flush">
//   //                 <ListGroup.Item>${user.name, user.surname}</ListGroup.Item>

//   //             </ListGroup>
//   //         </Card> )

//   //         }
//   //     </Row>
//   // }
//   render() {
//     return (
//       <Container>
//         <StyledNavbar bg='light' variant='light'>
//           <Navbar.Brand href='#home'>
//             <SiLinkedin className='linkedin'></SiLinkedin>
//           </Navbar.Brand>
//           <Form inline>
//             {/* <Button variant="outline-info"><FaSearch /></Button> */}
//             <FormControl
//               style={inputField}
//               type='text'
//               placeholder='Search'
//               className='mr-sm-2'
//               value={this.state.inputText}
//               onChange={this.handleChange}
//               onFocus={this.handleFocus}
//               onBlur={this.handleBlur}
//             />
//           </Form>
//           <Nav className='Iconic-Menu'>
//             <div>
//               <Link className={`nav-link ${this.makeLinkActive}`} to='/'>
//                 <Col xs={12}>
//                   <ImHome3 style={{ fontSize: '1.5rem' }}></ImHome3>
//                 </Col>
//                 <Col xs={12} className='navLinks'>
//                   Home
//                 </Col>
//               </Link>
//             </div>
//             <div>
//               <Link to='./'>
//                 <Col xs={12} style={{ paddingLeft: '50px' }}>
//                   <BsFillPeopleFill style={ImHome} />
//                 </Col>
//                 <Col xs={12}>
//                   {' '}
//                   <Nav.Link className='navLinks' href='#home'>
//                     MyNetwork
//                   </Nav.Link>
//                 </Col>
//               </Link>
//             </div>
//             <div>
//               <a href='#'>
//                 <Col xs={12} style={{ paddingLeft: '30px' }}>
//                   <BsBriefcaseFill style={ImHome}></BsBriefcaseFill>
//                 </Col>
//                 <Col xs={12}>
//                   {' '}
//                   <Nav.Link className='navLinks' href='#home'>
//                     Jobs
//                   </Nav.Link>
//                 </Col>
//               </a>
//             </div>
//             <div>
//               <a href='#'>
//                 <Col xs={12}>
//                   <AiFillMessage style={Icons}></AiFillMessage>
//                 </Col>
//                 <Col xs={12}>
//                   {' '}
//                   <Nav.Link className='navLinks' href='#home'>
//                     Messaging
//                   </Nav.Link>
//                 </Col>
//               </a>
//             </div>
//             <div>
//               <a href='#'>
//                 <Col xs={12}>
//                   <IoNotificationsSharp style={Icons}></IoNotificationsSharp>
//                 </Col>
//                 <Col xs={12}>
//                   {' '}
//                   <Nav.Link className='navLinks' href='#home'>
//                     Notifications
//                   </Nav.Link>
//                 </Col>
//               </a>
//             </div>
//             <div>
//               <Col xs={12}>
//                 <img src={fine} style={CircleSize} alt='circle' />
//               </Col>
//               <Col xs={12}>
//                 <DropdownButton
//                   className='mt-1'
//                   menuAlign='right'
//                   title='Me'
//                   id='dropdown-basic'
//                 >
//                   <div className='d-flex'>
//                     <img src={fined} style={insideDropdown} alt='circle' />
//                     <div className='d-flex flex-direction-column'>
//                       <div className='d-block ml-3'>
//                         <h6>Baxtiyor Abdivaitov</h6>

//                         <h6>Student at WSB</h6>
//                       </div>
//                     </div>
//                   </div>

//                   <Dropdown.Item href='#/action-1'>
//                     <Container>
//                       <Row>
//                         <Col xs={12}>
//                           <Link
//                             className={`nav-link ${this.makeLinkActive}`}
//                             to='/profile/me'
//                           >
//                             <Button
//                               id='profile'
//                               variant='outline-primary rounded-pill'
//                               size='sm'
//                               block
//                             >
//                               View Profile
//                             </Button>{' '}
//                           </Link>
//                         </Col>
//                       </Row>
//                     </Container>
//                   </Dropdown.Item>
//                   <Dropdown.Divider />
//                   <h6 className='account'>Account</h6>
//                   <div>
//                     <a href='#'>Settings & privacy</a>
//                   </div>
//                   <div>
//                     <a href='#'>Help</a>
//                   </div>
//                   <div>
//                     <a href='#'>Language</a>
//                   </div>
//                   <Dropdown.Divider />
//                   <h6 className='account'>Manage</h6>
//                   <div>
//                     <a href='#'>Posts & Activities</a>
//                   </div>
//                   <div>
//                     <a href='#'>Job Posting Account</a>
//                   </div>
//                   <Dropdown.Divider />
//                   <a href='#'>Sign out</a>
//                 </DropdownButton>
//               </Col>
//             </div>
//             <hr />
//             <div className='divider'>
//               <Col xs={12}>
//                 <CgMenuGridR style={menu}></CgMenuGridR>
//               </Col>
//               <Col xs={12}>
//                 <DropdownButton
//                   menuAlign='right'
//                   title='Work'
//                   id='dropdown-basic'
//                 >
//                   <div className='d-flex'>
//                     <img src={fined} style={insideDropdown} alt='circle' />
//                     <div className='d-flex flex-direction-column'>
//                       <div className='d-block ml-3'>
//                         <h6>Baxtiyor Abdivaitov</h6>

//                         <h6>Student at WSB</h6>
//                       </div>
//                     </div>
//                   </div>

//                   <Dropdown.Item href='#/action-1'>
//                     <Container>
//                       <Row>
//                         <Col xs={12}>
//                           <Button
//                             id='profile'
//                             variant='outline-primary rounded-pill'
//                             size='sm'
//                             block
//                           >
//                             View Profile
//                           </Button>{' '}
//                         </Col>
//                       </Row>
//                     </Container>
//                   </Dropdown.Item>
//                   <Dropdown.Divider />
//                   <h6 className='account'>Account</h6>
//                   <div>
//                     <a href='#'>Settings & privacy</a>
//                   </div>
//                   <div>
//                     <a href='#'>Help</a>
//                   </div>
//                   <div>
//                     <a href='#'>Language</a>
//                   </div>
//                   <Dropdown.Divider />
//                   <h6 className='account'>Manage</h6>
//                   <div>
//                     <a href='#'>Posts & Activities</a>
//                   </div>
//                   <div>
//                     <a href='#'>Job Posting Account</a>
//                   </div>
//                   <Dropdown.Divider />
//                   <a href='#'>Sign out</a>
//                 </DropdownButton>
//               </Col>
//             </div>
//             <a href='#' className='premium'>
//               Try Premium Free For 1 Month
//             </a>
//           </Nav>
//         </StyledNavbar>

//         {this.state.hasFocus && (
//           <ListGroup key={this.state.data_id}>
//             {this.state.data
//               .filter(
//                 (us) =>
//                   (us.name &&
//                     us.username &&
//                     us.name.toLowerCase().includes(this.state.inputText)) ||
//                   us.username.toLowerCase().includes(this.state.inputText)
//               )
//               .map((el) => (
//                 <NavListItem {...el} />
//               ))}
//           </ListGroup>
//         )}
//       </Container>
//     );
//   }
// }
// const ImHome = {
//   fontSize: '1.2rem',
//   color: 'grey',
// };
// const ImContainer = {
//   fontSize: '0.5rem',
//   marginLeft: '20px',
//   color: 'grey',
// };
// const CircleSize = {
//   borderRadius: '50%',
//   marginLeft: '35px',
// };
// const insideDropdown = {
//   borderRadius: '50%',
//   width: '55px',
//   height: '55px',
//   margin: '0px',
// };
// const menu = {
//   fontSize: '1rem',
//   fontWeight: '400',
//   justifyContent: 'center',
//   // lineHeight: "1.5",
//   minHeight: '35px',
//   minWidth: '40px',
//   marginLeft: '20px',
//   marginTop: '0',
//   marginBottom: '0',
// };
// const Icons = {
//   marginLeft: '20px',
//   fontSize: '1.2rem',
//   color: 'grey',
// };
// const inputField = {
//   width: '200px',
//   borderRadius: '2px',
//   lineHeight: '1.75',
//   fontWeight: '400',
//   fontSize: '14px',
//   height: '34px',
//   borderColor: '#e1e9ee',
//   backgroundColor: '#e1e9ee',
// };
// const StyledNavbar = styled(Navbar)`
//   @media only screen and (max-width: 1040px) {
//     & .navLinks {
//       display: none;
//       padding: 0;
//       margin: 0;
//       cursor: pointer;
//     }
//   }
//   @media only screen and (max-width: 1000px) {
//     & .premium {
//       display: none;
//     }
//   }

//   & Form {
//     display: flex;
//     flex-direction: row;
//     flex-wrap: nowrap;
//   }
//   & .linkedin {
//     color: #0a66c2;
//     height: 2.4rem;
//     width: 2.4rem;
//   }
//   & .divider {
//     border-left: 1px solid black;
//   }
//   & .Iconic-Menu {
//     margin-left: 0;
//   }
//   & .premium {
//     font-size: 0.8rem;
//   }
//   & #circle {
//     padding: 10;

//     display: 'inline-block';
//     background-image: url('images/fine4.jpg');
//     border-radius: '50%';
//     width: 15;
//     height: 15;
//     left: 0;
//     top: 0;
//   }
//   & Dropdown.item {
//     min-width: 150px;
//   }
//   & .circle {
//     padding: 10;
//     display: 'inline-block';
//     background-image: url('images/fine2.jpg');
//     border-radius: '50%';
//     width: 35;
//     height: 35;
//     left: 0;
//     top: 0;
//   }
//   & #profile {
//     width: 200px;
//   }
//   & #profile:hover {
//     background-color: lightblue !important;
//   }

//   & a {
//     color: grey;
//     font-size: 0.9rem;
//   }
//   & a:hover {
//     border-bottom: 1px solid grey;
//   }
//   & #dropdown-basic {
//     background-color: white;
//     color: black;
//     border: white;
//     font-size: 0.8rem;
//   }

//   & .links {
//   }
// `;
// export default withRouter(NavBar);
