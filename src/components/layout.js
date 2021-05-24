/*  Layout Components
    siteMetaData information from gatsby-config.js
*/
// Import React and Gatsby Elements
import React from 'react'

// Import Utilities and Style Elements
import { motion } from 'framer-motion'
import { ContainerWrapper } from '../elements/'

// Import Components
import Header from './header/header'
import Footer from './footer/footer'

// Define Framer Motion Page Transitions
const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
        staggerChildren: .85,
        duration: .75,
    },
  },
  out: {
    opacity: 0,
  }
};

const pageTransition = {
  type: "tween",
  ease: 'linear',
  duration: .5,
};

const Layout = ({ location, title, children }) => {

  return (
    <ContainerWrapper>
      <Header /> 
      <main>
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
        { children}
        </motion.div>
      </main> 
      <Footer />
    </ContainerWrapper>
  )
}
export default Layout