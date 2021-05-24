import React from "react"
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

// Import Utilities and Style Elements
import { Container, } from '../elements'

// Import Components
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <Container>
        <h1>Oppsies</h1>
        <p>404: Not Found</p>
        <p>Not all requests can be winners.</p>
      </Container>
    </Layout>
  )
}

NotFoundPage.propTypes = {
  site: PropTypes.shape({
    siteMetadata: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  }),
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`