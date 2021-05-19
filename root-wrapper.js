//Wrapper to include: ThemeProvider, GlobalStyles, Layout
import React from 'react'

// Import Untilties and Style Elements
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Theme from './src/themes/theme'
//import scrollTo from 'gatsby-plugin-smoothscroll'

//Logic for Global Styles
const GlobalStyles = createGlobalStyle`
	*, 
	*:before, 
	*:after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html, 
	body { 
		width: 100%; 
		height: 100%; 
	} 

	html {
		font-size: 1rem; 
		font-smoothing: antialiased;
  	text-rendering: optimizeLegibility;
  	height: 100%;
  	overflow-x: hidden;
  	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  	scroll-behavior: smooth;
	}

	@media screen and (min-width: 20rem) {
    html {
    	font-size: calc(1rem + 1.2 * ((100vw - 20rem) / 30)); 
  	} 
  }
  @media screen and (min-width: 50rem) {
    html {
      font-size: 2rem; 
    } 
  }

	body {
		margin: 0 auto;
		font-family: ${props => props.theme.fonts.main};
		background-color: ${props => props.theme.colors.white};
		border-top: 2px solid ${props => props.theme.colors.purple2};
  	font-weight: ${props => props.theme.fontweight.default};
	  word-wrap: break-word;
	  font-kerning: normal;
	  -moz-font-feature-settings: "kern", "liga", "clig", "calt";
	  -ms-font-feature-settings: "kern", "liga", "clig", "calt";
	  -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
	  font-feature-settings: "kern", "liga", "clig", "calt";
	}

	p {
		color: ${props => props.theme.colors.grey1};
		font-size: 0.75rem;
		line-height: 1.32rem;
		max-width: ${props => props.theme.sizes.maxText};
		padding-bottom: calc((1.16rem - 1rem) + 0.65rem);

		&:last-of-type {
			padding-bottom: calc((2.16rem - 1rem) + 0.65rem);
		}
	}

	h1,
	h2,
	h3,
	h4,
	h5 {
		color: ${props => props.theme.colors.grey1};
		font-weight: 400;
		margin-top: calc((1.5rem - 2rem) + 1.5rem);
	}

	h1 {
		align-self: flex-start;
		color: ${props => props.theme.colors.purple2};
		line-height: calc((3rem - 2rem) + 1.5rem);
		margin-top: calc((1.5rem - 2rem) + 1.5rem);
		padding-bottom: calc((1rem - 1rem) + .85rem * 2);
		padding-left: 5px;
		text-transform: capitalize;
		font-size: calc(1.818vw + 36.18182px);
		letter-spacing: .03em;	

	}

	h2 {
		color: ${props => props.theme.colors.purple2};
		font-size: 1.44rem;
		line-height: 1.35rem;
		margin-top: calc((1.5rem - 1rem) + 1rem);
		padding-bottom: calc((1rem - 1rem) + 0.65rem);
	}

	h3 {
		color: black;
		font-size: 1.12rem;
		line-height: 1.25rem;
		margin-top: calc((1rem - .15rem) + .75rem);
		padding-bottom: calc((1rem - .75rem) + 0.5rem);
	}

	h4 {
		font-size: .8rem;
		line-height: 1.25rem;
		margin-top: calc((1.5rem - 1rem) + 1rem);
		padding-bottom: .35rem;
	}

	h5 {
		color: ${props => props.theme.colors.grey1};
		line-height: 1.25rem;
		font-size: 0.75rem;
		font-weight: 500;
		margin-top: calc((.5rem - .875rem) + .5rem);
	}

	ol {
		color: ${props => props.theme.colors.grey1};
		font-size: 0.75rem;
		line-height: 1.32rem;
		max-width: ${props => props.theme.sizes.maxText};
		padding-left: 32px;
		padding-bottom: calc((1.16rem - 1rem) + 0.65rem);

		&:last-of-type {
			padding-bottom: calc((2.16rem - 1rem) + 0.65rem);
		}
	}

	blockquote {
		color: #004085;
		background-color: ${props => props.theme.colors.purple5};
		border: none;
		border-left: 3px solid ${props => props.theme.colors.purple3};
		padding: .25rem; 
		margin-bottom: calc((2.16rem - 1rem) + 0.65rem);

		p {
			font-weight: 500;
			font-size: 0.65rem;
			line-height: 1.25rem;
			&:last-of-type {
				padding-bottom: 0;
			}
		}
	}

	#canvas {
		position: relative;
		position: absolute;
		display: block;
		top: 0;
		left: 0;
		z-index: -1;
	}

	.sticky-wrapper {
		font-size: 1rem;
		position: relative;
		width: 100%;

		@media (min-width: 800px) {
			width: 260px;
		}
	}

	.sticky .sticky-inner {
		grid-area: toc;
		font-size: 1rem;
		position: relative;	
		z-index: 1;

		@media (min-width: 800px) {
			position: fixed;
			top: 0;
		}
	}

	.gatsby-highlight {
		font-size: .55rem;
	  border-radius: 0;
	  margin:.5rem 0;
	  padding: 0;
	  overflow: auto;
	  max-width: ${props => props.theme.sizes.maxCode};
	}

	.gatsby-highlight :not(pre) > code[class*='language-'] {
		white-space: normal;
		padding: 4rem;
	}

	:not(pre) > code[class*="language-"]  {
		padding: .5em;
		font-size: .55rem;
	}
`

export const wrapRootElement = ({ element }) => {
	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyles />
			{element}
		</ThemeProvider>
	)
}