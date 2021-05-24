/*  About Page
    Description: Page for About information with Table of Contents.
*/
// Import React and Gatsby
import React from 'react'
import { graphql } from 'gatsby'
//import PropTypes from 'prop-types'

// Import Utilities and Style Elements
import { 
  Container,
  ContainerTwoColumnsFlex,
  ContainerArticle,  
  ListIcon, 
  HeroParagraph,
  HrefLink, 
  CopyIntroInternalLink,
  HeadingThree,
  HeadingFour,
  ParagraphInfo,
  ParagraphDate,
  Footnote,
  SupElement,
} from '../elements';

// Import Components
import Layout from '../components/layout'
import Seo from '../components/seo'
import StickyContainer from '../components/stickycontainer'
import ToCAbout from '../components/toc-about.js'

const AboutPage = ({ data, location }) => {

  return (    
    <Layout id="introduction" location={location}>
    <Seo title="About" />
      <Container>
        <section id="overview">
          <h1>I'm Martin.</h1>
          <HeroParagraph>Originally from Southern California, now living in Vancouver, BC, and I'm currently studying for my OSCP Certification.</HeroParagraph> 
          <HeroParagraph>I'm a self-starter and top-ranked NCL CTF competitor, with a strong analytical mindset with skills in OSINT, penetration testing, scripting, security, and experience in multiple OS platforms. I have a passion for Cybersecurity, OSINT, CTF's and interested in making a difference.</HeroParagraph>
          <HeroParagraph>Authorized to work in Canada and the United States.</HeroParagraph> 
        </section>
      </Container>
      <ContainerTwoColumnsFlex>
        <ContainerArticle>
          <section id="ctf">
            <h2>Capture the Flag Competitions</h2>
            <p>Every competition I compete in I have climbed and progressed, but I still push myself to fill in the skill gaps that are pointed to me for each unanswered question. I see my flaws and understand I can do better and learn more and has taught me that looking at my shortcomings in a critical way is not negative but is a positive thing when I can learn from them.</p>
            <p>Cyber security competitions have been a great way to practice my skillsets in realistic situations where time constraints and accuracy. In these competitions, participants race against the clock to fight threats, solve specific challenges, or come up with innovative cyber security strategies. .</p>
            <p> problem-solving into action </p>
            <p>I enjoy the challenge of having to solve a variety of tasks, think outside the box on having to work with the resources and tools and modifying them. How to improve apon them.</p>
          </section>
          <section id="ncl">
            <h2 id="ncl-highlights">National Cyber League Highlights</h2>
            <p>The National Cyber League (NCL) is a performance-based capture-the-flag style cybersecurity competition. The competition consists of nine domains; cryptography, enumeration and exploitation, forensics, log analysis, network traffic analysis, open source intelligence, password cracking, scanning, and web application exploitation.</p>
            <h3>NCL Spring 2021 Ranking Highlights</h3> 
            <ListIcon>
              <li>Top 150 Overall Individual Games Medalist</li>
              <li>Top 1% Open Source Intelligence Module</li>
              <li>Top 2% Cryptography Module</li>
              <li>Top 3% in Log Analysis, Password Cracking, Network Traffic Analysis Modules</li>
              <li>Top 4% Web Application Exploitation Module</li>
              <li>Top 7% Forensics</li>
            </ListIcon>
            <HrefLink href="https://cyberskyline.com/verify/AELW5U5E3K3E" target="_blank">Winter 2021 Certificate of Participation</HrefLink> <br />
            <HrefLink href="https://cyberskyline.com/report/GR1W2UFTM41R" target="_blank">Winter 2021 Scouting Report</HrefLink>
            
            <h3>NCL Fall 2020 Ranking Highlights</h3> 
            <ListIcon>
              <li>Top 500 Individual Games Medalist: 7.35% Overall Ranking</li>
              <li>Top 1% Open Source Intelligence Module (22nd of 6011)</li>
              <li>Top 1% Password Cracking Module (53rd of 6011)</li>
              <li>Top 3% Cryptography Module</li>
            </ListIcon> 
            <HrefLink href="https://cyberskyline.com/verify/BPK24EA0TCQM" target="_blank">Fall 2020 Certificate of Participation</HrefLink><br />
            <HrefLink href="https://cyberskyline.com/report/PEE4AFLRCLF8" target="_blank">Fall 2020 Scouting Report</HrefLink>
            <h3>NCL Spring 2020 Ranking Highlights</h3>         
            <ListIcon>
              <li>Top 1% Open Source Intelligence Module</li>
              <li>Top 5% Network Traffic Analysis Module</li>
              <li>Top 9% Scanning & Reconnaissance Module</li>
            </ListIcon> 
            <HrefLink href="https://cyberskyline.com/verify/BWTXLEAAFD6K" target="_blank">Spring 2020 Certificate of Participation</HrefLink><br />
            <HrefLink href="https://cyberskyline.com/report/D2LGABQF7JEQ" target="_blank">Spring 2020 Scouting Report</HrefLink>
            <h2 id="tracelabs">Trace Labs Global OSINT CTF</h2>
            <p>Trace Labs is a Not-For-Profit organization with the mission of crowdsourcing the collection of OSINT to generate new leads on missing persons cases to assist law enforcement.</p>
            <p>In the winter of 2021, I participated in Trace Labs' Global OSINT Search Party CTF 2021. The <a href="https://www.tracelabs.org/initiatives/search-party" target="blank">Trace Labs Search Party CTF</a> is a non theoretical, gamified effort that allows for the crowdsourcing of contestants to perform a single task: Conduct open source intelligence operations to help find missing persons.</p>
            </section> 
            <section id="education">
              <h2>Education Highlights</h2> 
              <HeadingThree>Associates of Science in Cyber Security</HeadingThree>
              <ParagraphInfo>Coastline Community College<SupElement>*</SupElement> | Fountain Valley, California</ParagraphInfo>
              <ParagraphDate>July 2019 to May 2020 | President List Recipient</ParagraphDate>
              <HeadingFour>Program Certificates</HeadingFour>  
              <ListIcon>
                <li>Certificate of Achievement CyberSecurity</li>
                <li>Certificate of Specialization in CyberSecurity: Computer Network</li>
                <li>Certificate of Accomplishment CyberSecurity Fundamentals</li>
                <li>Certificate of Accomplishment Penetration Testing</li>
                <li>Certificate of Achievement Network Technician</li>
              </ListIcon>
              <Footnote><SupElement>*</SupElement>Coastline Community College is a designated Center for Academic Excellence in Information Assurance and Cyber Defense for two-year institutions (CAE2Y) by the National Security Agency (NSA) and the Department of Homeland Security (DHS).</Footnote> 
              <HeadingThree>CIS: Computer Networking</HeadingThree>
              <ParagraphInfo>Orange Coast College | Orange, California</ParagraphInfo>
              <ParagraphDate>September 2001 to May 2003</ParagraphDate>
              <HeadingFour>Program Certificates</HeadingFour>  
              <ListIcon>
                <li>Certificate of Computer Networking</li>
              </ListIcon>
            </section>         
        </ContainerArticle>
        <StickyContainer>
          <ToCAbout /> 
        </StickyContainer>
      </ContainerTwoColumnsFlex>
    </Layout> 
  )
}

export default AboutPage

export const pageQuery = graphql`
  query About {
    site {
      siteMetadata {
        title
      }
    }
  }
`