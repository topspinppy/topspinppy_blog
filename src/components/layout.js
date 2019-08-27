import React, { Component, Fragment } from "react"
import { rhythm } from "../utils/typography"
import Navbar from "./Navbar"
import Footer from "./footer"
import { redirectTo } from "@reach/router";
import Jumbopost from "../components/Jumbopost"

class Layout extends Component {
  state = {
    margin: '128px',
  }
  componentDidMount() {
    const rootPath = `${__PATH_PREFIX__}/`
    if (this.props.location.pathname === rootPath) {
      this.setState({
        margin: '128px'
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
          <Jumbopost title={this.props.posttitle} />
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
              maxWidth: rhythm(24),
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
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
