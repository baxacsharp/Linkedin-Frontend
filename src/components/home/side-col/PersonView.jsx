import { Col, Image, Button, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const PersonView = ({ id, name, surname, title, image, idx, history }) => {
  const replaceBrokenImg = (e) => {
    console.log('img src not fount, dont worrie, got a fallback :)');
    e.target.src = `https://picsum.photos/100/100?random=${Math.ceil(
      Math.random() * 1000
    )}`;
  };

  const handleClick = () => {
    // console.log(history);
    history.push(`/profile/${id}`);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  // console.log(image);
  return (
    <>
      <StyledRow onClick={handleClick} noGutters className=' mt-2'>
        <Col md={3} lg={2} className='text-center'>
          <Image onError={replaceBrokenImg} src={image} fluid />
        </Col>
        <Col
          className='pl-0 pl-md-2 mt-2 mt-md-0 text-container'
          md={9}
          lg={10}
        >
          <h6 className='text-truncate mb-0 text-center text-md-left'>
            {name + ' ' + surname}
          </h6>
          <p className='text-truncate mb-0 text-center text-md-left text-muted'>
            {title}
          </p>
        </Col>
      </StyledRow>

      <div className='text-center text-lg-left'>
        <Button
          variant='outline-secondary'
          className='rounded-pill px-3 py-0 my-2'
        >
          {idx % 2 === 0 ? 'Message' : 'Connect'}
        </Button>
      </div>
    </>
  );
};

export default withRouter(PersonView);
const StyledRow = styled(Row)`
  & img {
    width: 100px;
  }

  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
