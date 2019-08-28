import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';
import styled from "styled-components"

const Containarticle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 30px;
`

const CardImplement = styled(Card)`
    margin-bottom: 20px;
    height: 300px;
    &:hover {
      box-shadow: 0 15px 14px rgba(0,0,0,0.15);
      transition: box-shadow 0.3s ease-in-out;
    }
`
class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Bio />
        <Container>
        <SEO title="All posts" />
          <Containarticle>
            <Row>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <Col md="4" xs="12" >
                  <CardImplement key={node.fields.slug}>
                    <CardBody>
                      <CardTitle>
                        <h4>
                          <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                            {title}
                          </Link>
                        </h4>
                      </CardTitle>
                      <CardSubtitle>{node.frontmatter.date}</CardSubtitle>
                      <CardText>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: node.frontmatter.description || node.excerpt,
                          }}
                        />
                      </CardText>
                    </CardBody>
                  </CardImplement>
                </Col>
              )
            })}
            </Row>
          </Containarticle>
        </Container>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
