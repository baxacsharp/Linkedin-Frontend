import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { RiSuitcaseFill } from 'react-icons/ri';

const AdOffer = ({ image }) => {
  return (
    <section
      className='bg-white rounded mt-3 pb-3'
      style={{ border: '1px solid #dddcd9' }}
    >
      <Container>
        <p className='text-right pt-1'>Ad ...</p>
        <Row noGutters className='text-center'>
          <Col xs={12}>
            <p
              className='text-muted'
              style={{ fontSize: '.7rem', cursor: 'pointer' }}
            >
              Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor!
            </p>
          </Col>

          <Col xs={6} className='text-right pr-2'>
            <Image
              style={{ width: '70px', height: '70px' }}
              fluid
              roundedCircle
              src={image}
            />
          </Col>
          <Col xs={6} className='text-left pl-2 mb-3'>
            {/* <Image
              fluid
              rounded
              src='https://media-exp1.licdn.com/dms/image/C4E0EAQHi7DEqCGnhRg/rightRail-logo-shrink_200_200/0/1599153620577?e=1617901200&v=beta&t=JCmtOB0pxQaGPnVCOYmXfzLMjPHtmpdvZkCcs1pcE6A'
              style={{ width: '70px' }}
            /> */}
            <RiSuitcaseFill
              style={{ fontSize: '3.8rem', color: 'steelblue' }}
            />
          </Col>

          <Col xs={12}>
            <p className='' style={{ fontSize: '.8rem', cursor: 'pointer' }}>
              Lorem ipsum dolor sit a consectetur!
            </p>
          </Col>
          <Col xs={12}>
            <Button
              variant='outline-primary'
              className='rounded-pill px-2 px-lg-3 py-0'
            >
              <span className='text-truncate'>Get 50% off today</span>
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AdOffer;
