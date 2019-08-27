import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Jumbopost = (props) => {
  return (
    <div style={{
        marginTop: '85px',
    }}>
      <Jumbotron fluid>
        <Container>
          <h1 className="display-3">{props.title}</h1>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbopost;