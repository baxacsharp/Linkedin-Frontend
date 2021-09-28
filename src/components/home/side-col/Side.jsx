import React from 'react';
import { Col } from 'react-bootstrap';
import AdOffer from './AdOffer';
import EditPublicProfile from './EditPublicProfile';
import PeopleAlsoViewed from './PeopleAlsoViewed';

const Side = (props) => {
  return (
    <Col md={4}>
      <aside>
        <EditPublicProfile />
        <AdOffer image={props.user?.image} />
        <PeopleAlsoViewed
          heading='People you may know'
          sliceRange={[0, 5, 5, 15]}
        />
        {/* <PeopleAlsoViewed
          heading='People you may know'
          sliceRange={[15, 20, 15, 25]}
        /> */}
      </aside>
    </Col>
  );
};

export default Side;
