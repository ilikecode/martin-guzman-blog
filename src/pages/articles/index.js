/*  List of all Articles Page
    List of all article frontmatter tags and the number of articles for each tag.
    Each list item, links to thier corresponding tag list page.
*/
// Import React and Gatsby Elements
import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

// Import Utilities and Style Elements
import { 
  Container,
  ViewAllButton,
  ViewAllLink,
  ViewAllArrow,
  ViewAllText,
} from '../../elements/';
  
// Import Components
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import ArticleList from '../../components/articles/articlelist'
import ArrowSVG from '../../components/svg/svgarrow'

const ArticlePage = ({ data, location }) => {
 
const posts = data.allMarkdownRemark.nodes
  return (
    <Layout location={location}>
      <Seo title="Articles" />
      <Container>
        <h1>Articles</h1>
        <ArticleList posts={posts} key={posts.id} />
        <ViewAllButton>
          <ViewAllLink to="/articles/tags">
          <ViewAllText>View Articles by Category</ViewAllText>
            <ViewAllArrow>
              <ArrowSVG />
            </ViewAllArrow>
          </ViewAllLink>  
        </ViewAllButton>
      </Container>
    </Layout>
  )
}

ArticlePage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}
  
export default ArticlePage
 
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
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