// Styles for Header Components
import { Link } from 'gatsby'
import styled from 'styled-components'
 
export const ContainerHeader = styled.header`
  display: flex;
  flex-direction: row; 
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;  
  margin: 0 auto;
  top:0;
  padding: .25rem 1rem;
  background: transparent;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  z-index: 499;
`

export const ContainerSVG = styled.div`
	padding-top: .25rem;
  width: 110px;
	z-index: 500;
  
 	@media ${props => props.theme.breakpoints.small} {
 		width: 90px;
 	}
`	

export const LinkLogo = styled(Link)`
  z-index: 1000;
  width: 110px;

  @media ${props => props.theme.breakpoints.small} {
    width: 90px;
  }
`