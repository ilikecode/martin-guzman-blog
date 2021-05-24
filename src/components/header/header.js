/* Component Description: Header Component with Logo and Navigation

*/
// Import React and Gatsby Elements
import React from 'react'

// Import Utilities and Style Elements
import { ContainerHeader } from '../../elements/'

// Import Components
import LinksNav from '../links'
import SVGMartin from '../svg/svgmartin' 

const Header = () => {
  return (
    <ContainerHeader>
      <SVGMartin />
	   	<LinksNav aria-label="Main" />
    </ContainerHeader>
  )
}
export default Header