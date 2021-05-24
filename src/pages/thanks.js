/*  Contact Page
    Description: Basic contact form with Netify
*/
// Import React and Gatsby
import React from 'react'
import { graphql } from 'gatsby'

// Import Utilities and Style Elements
import { Container } from '../elements';

// Import Components
import Layout from '../components/layout'
import Seo from '../components/seo'

const ThanksPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Contact" />
      <Container>
        <h1>You message has been sent.</h1>
        <p>Thank you for getting in touch. I'll will get back to you shortly.</p>
      </Container>
    </Layout>
  )
}
export default ThanksPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`