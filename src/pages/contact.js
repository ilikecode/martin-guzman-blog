/*  Contact Page
    Description: Basic contact form with Netify
*/
// Import React and Gatsby
import React, { useState } from 'react'
import { graphql, navigate } from 'gatsby'

// Import Utilities and Style Elements
import styled from "styled-components"
import { 
  Container, 
  ContactForm,
  ContactFormButton
} from '../elements';

// Import Components
import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleChange = e => {
    setFormState({ 
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState}),
    })

    .then(() => {
      console.log("Form submission success");
        navigate("/thanks/");
    })
    .catch(error => {
      console.error("Form submission error:", error);
 
    });

    e.preventDefault();      
  }

  return (
      <Layout location={location} title={siteTitle}>
      <SEO title="Contact" />
      <Container>
        <h1>Contact</h1>
        <ContactForm
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name"
            name="name" 
            onChange={handleChange} 
            value={formState.name}
            placeholder="Please enter your name"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email" 
            id="email" 
            name="email" 
            onChange={handleChange} 
            value={formState.email}
            placeholder="Please enter your email"
          />
          <label htmlFor="message">Message:</label>
          <textarea 
            id="message" 
            name="message" 
            onChange={handleChange} 
            value={formState.message}
            placeholder="Please enter your message"
          />
          <ContactFormButton type="submit">&nbsp;</ContactFormButton>
        </ContactForm>
      </Container>
    </Layout>
  )
}

export default ContactPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`