/*  Index Page
    Description: Page includes Hero component with introduction and list of articles with a limit of 9.
*/
// Import React and Gatsby
import React from 'react'
import { graphql } from 'gatsby'

// Import Utilities and Style Elements
import { Container } from '../elements'

// Import Components
import Layout from '../components/layout'
import Seo from '../components/seo'
import Hero from '../components/hero/hero'
import ArticleList from '../components/articles/articlelist'

const Index = ({ data, location }) => {

  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} >
    <Seo title={siteTitle} />
      <Hero />
      <Container>
        <ArticleList posts={posts} key={posts.id} />
      </Container>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, , limit: 9) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
      }
    }
  }
`