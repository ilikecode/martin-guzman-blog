/* Hero Component
  Description: Hero Template Homepage.
*/
// Import React and Gatsby Elements
import React from 'react'

// Import Utilities and Style Elements
import { 
	Container, 
	HeroParagraph 
} from '../../elements/'

const Hero = () => {
  return (
    <Container>
			<h1>Hello, I'm Martin.</h1>
      <HeroParagraph>Originally from Southern California, now living in Vancouver, BC, and I'm currently studying for my OSCP Certification.</HeroParagraph>
      <HeroParagraph>A self-starter with a strong analytical mindset and a friendly personality. Skills in EDR/EPP, penetration testing, open-source intelligence, and scripting. Experienced with multiple OS platforms including Linux, Windows, Mac, IOS, Android, and more. Constantly learning new cybersecurity skills and researching the latest technology. Also, a top-ranked National Cyber League competitor who loves the challenge of testing my skillset against others and continually improving my knowledge and rankings.</HeroParagraph>
    </Container>
  )
}
export default Hero       