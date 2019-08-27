import React from 'react';
import { Container } from 'reactstrap';
import styled from "styled-components"

const Footer = (props) => {
  return (
    <footer>
      <Container>
            © Topspinppy {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">My Heart</a>
      </Container>
    </footer>
  );
};

export default Footer;