import React, { Component, Fragment } from "react"
import Navbar from "./Navbar"
import Footer from "./footer"
import { redirectTo } from "@reach/router";
import Jumbopost from "../components/Jumbopost"
import styled from "styled-components"

const JumboContainer = styled.div`
  margin-top: 112px;
`

class Layout extends Component {
  state = {
    margin: '112px',
  }
  componentDidMount() {
    const rootPath = `${__PATH_PREFIX__}/`
    if (this.props.location.pathname === rootPath) {
      this.setState({
        margin: '112px'
      })
    } else {
      this.setState({
        margin: '0px'
      })
    }
  }
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <Navbar />
      )
    } else {
      header = (
        <Fragment>
          <Navbar />
          <JumboContainer>
            <Jumbopost title={this.props.posttitle} />
          </JumboContainer>
        </Fragment>
      )
    }
    return (
      <div>
        {header}
        <div>
          <main 
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              marginTop: `${this.state.margin}`,
            }}
          >
            {children}
          </main>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Layout
