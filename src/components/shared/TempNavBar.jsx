import React from 'react';
import { Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap';
import { Link, withRouter, useHistory } from 'react-router-dom';

const TempNavBar = ({ location }) => {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  };
  return (
    <Navbar bg='light' expand='lg' className='mb-3'>
      <Container>
        <Link to='/newsfeed' className='navbar-brand pb-2 font-weight-bold'>
          Fakedin
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            {/* <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#link'>Me</Nav.Link> */}
            <Link
              className={`p-0 m-2 nav-link ${location.pathname === '/newsfeed' ? 'active' : ''
                }`}
              to='/newsfeed'
            >
              Newsfeed
            </Link>
            <Link
              className={`p-0 m-2 nav-link ${location.pathname === '/profile/1' ? 'active' : ''
                }`}
              to='/profile/1'
            >
              Me
            </Link>
            <span
              style={{ cursor: 'pointer' }}
              className='p-0 m-2 nav-link'
              onClick={handleLogout}
            >
              Logout
            </span>
          </Nav>
          <Form inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default withRouter(TempNavBar);
