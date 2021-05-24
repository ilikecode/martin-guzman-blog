/*  Table of Contents for About Page Component
    Add Toc items as needed base on About Page content
*/
// Import React and Gatsby
import React from 'react'

//Import Utilities and Style Elements
import { 
  TocHeader,
  TocUl,
  TocLi,
  TocAnchorLink, 
} from '../elements/'

const ToCAbout = ({ isActive }) => {

  return ( 
    <nav aria-labelledby="id-2" className="sticky-inner">
      <TocUl>
        <TocHeader id="id-2">Table of Contents</TocHeader>
        <TocLi>
          <TocAnchorLink to="/about#overview" title="Overview" 
          aria-label="Table of Contents"
          role="button"
          />
        </TocLi> 
        <TocLi>
          <TocAnchorLink to="/about#ctf" title="CTF Participation" 
          aria-label="Table of Contents"
          role="button"
          />
        </TocLi> 
        <TocLi>
          <TocAnchorLink to="/about#ncl" title="NCL Highlights" 
          aria-label="Table of Contents"
          role="button"
          />
        </TocLi>
        <TocLi>
          <TocAnchorLink to="/about#tracelabs" title="Trace Labs OSINT CTF" 
          aria-label="Table of Contents"
          role="button"
          />
        </TocLi>
        <TocLi>
          <TocAnchorLink to="/about#education" title="Education Highlights" 
          aria-label="Table of Contents"
          role="button"
          />
        </TocLi>
      </TocUl>
    </nav>
  )
}

export default ToCAbout