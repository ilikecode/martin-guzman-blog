import React from "react"
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

// Import Utilities and Style Elements
import { Container, } from '../elements'

// Import Components
import Layout from "../components/layout"
import Seo from "../components/seo"

const Disclaimer = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Disclaimer" />
      <Container>
        <h1>Statement of Use and Disclaimer of Liability</h1>
        <h3>Aim of Website</h3>
        <p>This website is intended to help users obtain knowledge that might be covered in the Offensive Security Certified Professional (OSCP) Certification. All information on this website is for educational and research purposes only. Any misuse or abuse of this information contained on this website may result in criminal charges. This webiste will not be held responsible in the event any crimainal charges be brought against any individual or individuals expoilting or misusing the information on this website to break the law.</p>
        <p>Please check the laws in your state/province/country before accessing this website.</p>
        <p>Do not attempt to violate any laws or cause any harm to individuals, organizations, software or hardware with material found on this website. All owners, administrators and authors or anyone else affiliated in any way with this website, will not accept resonsibility and/or liability for any  direct or indirect losses and/or damages for your actions. If you can not abide by the law <strong>please leave this website</strong>.</p>
        <p>This website has no control or responsibility of any linked website or information. Any exteranl links contained on this website is for you convenience and by no means endorsed by this website.</p>
        <p>Your usage of this website constitutes your agreement to the following terms;</p>
        <ol>
          <li>All the information provided on this website are for educational purposes only. The site is no way responsible for any misuse of the information.</li>
          <li>You shall not misuse the information on this website to gain unauthorized access. Any attempt or access without permission on devices, software that you do not own is illegal.</li>
        </ol>
        <h3>Fair User Statement</h3>
        <p>This website may contain copyrighted material, the use of which may bot have been specifically authorized by the copyright owner. This material is available in an effort to explain issues relevant to Offensive Security Certified Professional (OSCP) Certification. The material contained in this website is distributed without profilt for research and educational purposes.</p>
        <p>This should constitute a 'fair use' of any such copyrighted material (referenced and provided for in sectino 107 of the US Copyright Law).</p>
        <p>If you with to use any copyrighted material from this site for purposes of your own that go beyond 'fair use', you must obtain expressed permission from the copyright owner.</p>
        <h3>No Guarantee of Validity</h3>
        <p>The information and material contained on this website is for educational purposes only. You should not rely upon the information and material on this website as a basis of making any business, legal or any other decisions.</p>
        <p>Our goal is to keep the information and material up to date and correct, however this website makes no representations or warranties of any kind, express or implied about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information or material contained on the website for any purpose. Any reliance you place on such material is therefore strictly at your own risk.</p>
        <p>This website is not a hacking group or affiated with any hacking groups.</p>
      </Container>
    </Layout>
  )
}

Disclaimer.propTypes = {
  site: PropTypes.shape({
    siteMetadata: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  }),
}

export default Disclaimer

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`