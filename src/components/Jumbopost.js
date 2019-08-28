import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Jumbopost = (props) => {
  return (
    <div style={{
        marginTop: '85px',
    }}>
      <Jumbotron fluid>
        <Container>
          <h4>{props.title}</h4>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbopost;