/* Hero Component
  Description: Hero Template Homepage.
*/
// Import React and Gatsby Elements
import React from 'react'

// Import Utilities and Style Elements
import { 
	Container, 
	CopyIntroInternalLink, 
	HeroParagraph 
} from '../../elements/'

const Hero = () => {
  return (
    <Container>
			<h1>Hi, I'm Martin.</h1>
			<HeroParagraph>Originally from Southern California, now living in Vancouver, BC, and I'm currently studying for my OSCP Certification.</HeroParagraph> 
      <HeroParagraph>I'm a self-starter and top-ranked NCL CTF competitor, with a strong analytical mindset with skills in OSINT, penetration testing, scripting, security, and experience in multiple OS platforms. I have a passion for Cybersecurity, OSINT, CTF's and interested in making a difference.</HeroParagraph>
    </Container>
  )
}
export default Hero       