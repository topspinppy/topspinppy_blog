import React from 'react';
import {
  Collapse,
  Navbar as DefaultNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container } from 'reactstrap';
import styled from "styled-components"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

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
                    <img src={data.allImageSharp.edges[0].node.original.src} width="70px" />
                  )}
               />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">About Me</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                    Options
                    </DropdownToggle>
                    <DropdownMenu right>
                    <DropdownItem>
                        Option 1
                    </DropdownItem>
                    <DropdownItem>
                        Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        Reset
                    </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                </Nav>
            </Collapse>
          </Container>
        </Navbar>
    );
  }
}

