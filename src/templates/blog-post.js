/*  Template: Article/Post 
    Description: Article created from root/content/blog/articlefolder. File format is MD.   
*/
// Import React and Gatsby
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// Import Utilities and Style Elements
import { 
  Container, 
  ContainerArticleNavigation,
  ContainerTwoColumnsFlex,
  ContainerArticle,
  ArticlePost, 
  ArticleSubtitle,
  ArticleDateTime,   
  ArticleLink, 
  ArticleNav, 
  ArticleNextPreviousNav, 
  ArticlePrevious, 
  ArticleNext,
  ArticleTitle,  
  ArticleTitlePreviousContainer, 
  ArticleTitleNextContainer, 
} from '../elements' 

// Import Components
import Layout from '../components/layout'
import Seo from '../components/seo'
import TagListLinks from '../components/taglist-links'
import StickyContainer from '../components/stickycontainer'
import ToC from '../components/toc'
import Bio from '../components/bio'

const BlogPostTemplate = ({ data, location }) => {

  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  const { tags = [], title, date, description, readTime } = post.frontmatter

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={`Article: ${title}`}
        description={post.frontmatter.description || post.excerpt}
      />
      <Container>
        <ArticleSubtitle>{description}</ArticleSubtitle>
        <h1>{title}</h1>
        <TagListLinks tags={tags} />
        <ArticleDateTime>{date} | {readTime} Minute Read </ArticleDateTime>
      </Container>
      <ContainerTwoColumnsFlex>
        <ContainerArticle>
          <ArticlePost itemScope itemType="http://schema.org/Article" >           
            <section id="content" dangerouslySetInnerHTML={{ __html: post.html }} itemProp="articleBody" />
            <TagListLinks tags={tags} />
            <Bio />
          </ArticlePost>
        </ContainerArticle>
        <StickyContainer>
            <ToC headings={post.headings} />
        </StickyContainer>
      </ContainerTwoColumnsFlex>
      <ContainerArticleNavigation>
        <ArticleNextPreviousNav role="navigation" aria-label="Next Previous Articles">
          <ArticleNav>
            {previous && (
              <ArticleLink to={`/articles${previous.fields.slug}`} rel="prev">
                <ArticlePrevious>Previous Article</ArticlePrevious>  
                <ArticleTitlePreviousContainer>
                  <ArticleTitle> {previous.frontmatter.title}</ArticleTitle>
                </ArticleTitlePreviousContainer>
              </ArticleLink>
            )}
          </ArticleNav>
          <ArticleNav>
            {next && (
              <ArticleLink to={`/articles${next.fields.slug}`} rel="next">
                <ArticleNext>Next Article</ArticleNext>
                <ArticleTitleNextContainer>
                  <ArticleTitle>{next.frontmatter.title} </ArticleTitle>
                </ArticleTitleNextContainer>
              </ArticleLink>
            )}
          </ArticleNav>
        </ArticleNextPreviousNav>
      </ContainerArticleNavigation>

    </Layout>
  )
}

BlogPostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      headings {
        value
        depth
      }
      frontmatter {
        title
        description
        tags
        readTime
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`