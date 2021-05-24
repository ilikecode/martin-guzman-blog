/*  Bio Component
    siteMetaData information from gatsby-config.js
    Appears on Article Page ./src/templates/blog-post.js
*/
// Import React and Gatsby Elements
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// Import Utilities and Style Elements
import { BioContainer, BioIcon, BioDescription, HrefLink } from '../elements/'

// Import Components
import SVGMartin from './svg/svgmartin' 

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/icon.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            linkedin
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <BioContainer>
      <BioIcon>
        <SVGMartin />
      </BioIcon>
      <BioDescription>
      {author?.name && (
        <p>Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `} <br /><HrefLink href={`https://linkedin.com/in/${social?.linkedin || ``}`}>Connect with me on LinkedIn</HrefLink>.<br />
          
        </p>
      )}
      </BioDescription>
    </BioContainer>
  )
}

export default Bio