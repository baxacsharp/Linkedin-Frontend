import { Col, Container, Row } from 'react-bootstrap';
import { BsFillQuestionCircleFill } from 'react-icons/bs';

const EditPublicProfile = () => {
  return (
    <section
      className='bg-white rounded mt-3'
      style={{ border: '1px solid #dddcd9', cursor: 'pointer' }}
    >
      <Container>
        <Row noGutters>
          <Col xs={12} className='border-bottom  py-2'>
            <div className='d-flex justify-content-between'>
              <h6 className='text-muted'>Edit public profile & url</h6>
              <BsFillQuestionCircleFill className='text-muted' />
            </div>
          </Col>
          <Col xs={12} className=' py-2'>
            <div className='d-flex justify-content-between'>
              <h6 className='text-muted mb-0'>
                Add profile in another language
              </h6>
              <BsFillQuestionCircleFill className='text-muted' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EditPublicProfile;
