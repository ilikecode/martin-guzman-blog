/* 	Footer Copyright Information Component
*/
// Import React and Gatsby Elements
import React from 'react'
import { Link } from 'gatsby'

// Import Utilities and Style Elements
import { CopyrightInfo } from '../../elements'

const Copyright = () => {
  return <CopyrightInfo>© {new Date().getFullYear()}, <Link to="/">Martin Guzman</Link>. <Link to="/disclaimer">The Disclaimer</Link>.</CopyrightInfo>
}
export default Copyright