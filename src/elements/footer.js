// Styles for Footer Component
import styled from 'styled-components'

export const ContainerFooter = styled.footer`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
	padding: .25rem .15rem .45rem .15rem;	
	width: 100%;
	max-width: ${props => props.theme.sizes.maxWidth};
	border-top: 1px solid ${props => props.theme.colors.purple3};
	
	@media only screen and (min-width : 768px) {
			padding: .25rem .15rem .5rem .15rem;	
		}
	}
`

export const CopyrightInfo = styled.div`
	font-size: 0.6rem;
	padding-left: .15rem;

	a {
		color: ${props => props.theme.colors.purple2};
	  text-decoration: none;
	  position: relative;
	  transition: all 200ms ease-in-out;

	  &:after {
	    position: absolute;
	    content: "";
	    width: 100%;
	    height: 2px;
	    top: 100%;
	    left: 0;
	    background: ${props => props.theme.colors.purple1};
	    transition: transform 500ms;
	    transform: scaleX(0);
	    transform-origin: right;
	  }

	  &:hover {
	    color: ${props => props.theme.colors.purple1};
	  }

	  &:hover::after {
	    transform: scaleX(1);
	    transform-origin: left;
	  }
	}
`