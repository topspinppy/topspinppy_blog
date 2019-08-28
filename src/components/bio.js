import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

const Header = styled.div`
  height: 400px; 
  background: #233; 
`
const SiteIntro = styled.div`
  padding: 150px 0 0;
  h1 {
    color: #eee; 
    font-weight: 200; 
    line-height: 1.6em; 
    padding: 0.5em 0;
    display: flex;
    justify-content: center;
  }
  h5 {
    color: #eee;
    display: flex;
    justify-content: center;
    margin-top: -27px;
  }
`
const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div>
      <Header>
         <SiteIntro>
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={author}
            style={{
              display: `flex`,
              margin: `auto`,
              marginBottom: 0,
              minWidth: 50,
              borderRadius: `100%`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
          <h1><b>Paranat</b>  K.</h1>
          <h5> Web Developer & Dream Creator</h5>
        </SiteIntro>
      </Header>
      {/* <p>
        Written by <strong>{author}</strong> who lives and works in San
        Francisco building useful things.
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>
          You should follow him on Twitter
        </a>
      </p> */}
    </div>
  )
}

export default Bio
