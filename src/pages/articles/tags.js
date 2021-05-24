/* Page Description: List of all Article Tags
  List of all article frontmatter tags and the number of articles for each tag.
  Each list item, links to thier corresponding tag list page.
*/
// Import React and Gatsby Elements
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// Import Utilities and Style Elements
import kebabCase from 'lodash/kebabCase'
import { 
  Container, 
  ContainerCategoryCardGrid,
  CardLink,
  CardCategory,
  CardBorder,
  CardCategoryInfo,
  CardReadMore,
  CardReadMoreContainer,
  CardReadMoreArrow,
  ViewAllButton,
  ViewAllLink,
  ViewAllArrow,
  ViewAllText,
} from '../../elements/'

// Import Components
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ArrowSVG from '../../components/svg/svgarrow'

const TagsPage = ({ data, location, title }) => {

  const siteTitle = data.site.siteMetadata?.title || `Title`
  const allTags = data.allMarkdownRemark.group;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Articles Categories" />
      <Container> 
        <h1>Articles Categories</h1>
        <ContainerCategoryCardGrid>
          {allTags.map(tag => (
            <CardLink to={`/articles/tags/${kebabCase(tag.fieldValue)}/`}> 
              <CardCategory key={tag.fieldValue} style={{listStyleType: 'none'}}>
                <CardBorder />
                <CardCategoryInfo>
                  {tag.fieldValue} Articles
                </CardCategoryInfo>
                <CardReadMoreContainer>
                  <CardReadMore>View All</CardReadMore>
                  <CardReadMoreArrow>
                    <ArrowSVG />
                  </CardReadMoreArrow>
                </CardReadMoreContainer>
              </CardCategory> 
            </CardLink>
          ))}
        </ContainerCategoryCardGrid>

        <ViewAllButton>
          <ViewAllLink to="/articles/">
          <ViewAllText>View All Articles</ViewAllText>
            <ViewAllArrow>
              <ArrowSVG />
            </ViewAllArrow>
          </ViewAllLink>  
        </ViewAllButton>

      </Container>
    </Layout>
  )
}

TagsPage.propTypes = {
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

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`