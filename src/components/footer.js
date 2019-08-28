import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import styled from "styled-components"
import { graphql, StaticQuery } from "gatsby"

const FooterImplement = styled.footer`
  padding: 40px 0;
`
const Footer = (props) => {
  return (
    <FooterImplement>
      <Container>
            © Topspinppy {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">
            <StaticQuery 
                query={graphql`
                  query MyQuerys {
                    allImageSharp(filter: {original: {src: {regex: "/gatsby-icon/"}}}) {
                      edges {
                        node {
                          original {
                            src
                          }
                        }
                      }
                    }
                  }                  
                `}
                render={data => (
                  <Fragment>
                    <img src={data.allImageSharp.edges[0].node.original.src} width="20px" />
                  </Fragment>
                )}
              />
          </a>
      </Container>
    </FooterImplement>
  );
};

export default Footer;