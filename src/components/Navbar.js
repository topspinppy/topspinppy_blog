import React, { Fragment } from 'react';
import {
  Collapse,
  Navbar as DefaultNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Badge } from 'reactstrap';
import styled from "styled-components"
import { graphql, StaticQuery } from "gatsby"

const Navbar = styled(DefaultNavbar)`
  padding: 1em;
  background-color: ${props => props.color};
  transition: .5s;
`

export default class Example extends React.Component {
  state = {
    isOpen: false,
    color: "transparent"
  }

  componentDidMount = () => {
    document && document.addEventListener("scroll", (e) => {
      if (window && window.scrollY > 30) {
        this.setState({
          color: "#f8bc00"
        })
      } else {
        this.setState({
          color: "transparent"
        })
      }
    }, true)
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <Navbar color={this.state.color} expand="md" className='fixed-top' light>
          <Container>
            <NavbarBrand>
               <StaticQuery 
                  query={graphql`
                    query MyQuery {
                      allImageSharp(filter: {original: {src: {regex: "/logo_topspin/"}}}) {
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
                      <a href="/"><img src={data.allImageSharp.edges[0].node.original.src} width="70px" /></a>
                    </Fragment>
                  )}
               />
            </NavbarBrand>
            <Badge color="danger">Beta Version</Badge>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                      <NavLink href="/aboutme">About Me</NavLink>
                  </NavItem>
                </Nav>
            </Collapse>
          </Container>
        </Navbar>
    );
  }
}

