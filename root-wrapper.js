//Wrapper to include: ThemeProvider, GlobalStyles, Layout
import React from 'react'

// Import Untilties and Style Elements
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Theme from './src/themes/theme'
import { AnimatePresence } from 'framer-motion'
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
  	text-rendering: optimizeLegibility;
  	height: 100%;
	}

	@media screen and (min-width: 20rem) {
    html {
    	font-size: calc(1rem + 1.5 * ((100vw - 20rem) / 30)); 
  	} 
  }
  @media screen and (min-width: 50rem) {
    html {
      font-size: 2rem; 
    } 
  }

	::selection {
	  background-color: rgba(94, 82, 218, .175);
	  color:  ${props => props.theme.colors.purple1};
	}

	body {
		margin: 0 auto;
		display: flex;
  	flex-direction: column;
		font-family: ${props => props.theme.fonts.main};
		background-color: ${props => props.theme.colors.white};
		border-top: 2px solid ${props => props.theme.colors.purple2};
  	font-weight: ${props => props.theme.fontweight.default};
  	min-height: 100vh;
	  word-wrap: break-word;
	  font-kerning: normal;
	  font-feature-settings: "kern", "liga", "clig", "calt";
	}

	p {
		color: ${props => props.theme.colors.grey1};
		font-size: 0.75rem;
		line-height: 1.28rem;
		max-width: ${props => props.theme.sizes.maxText};
		padding-bottom: calc((1.16rem - 1rem) + 0.65rem);
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
		line-height: calc((2rem - 1.5rem) + 1.25rem);
		margin-top: calc((1.5rem - 2rem) + 1.5rem);
		padding-bottom: calc((1rem - 1rem) + .85rem * 2);
		text-transform: capitalize;
		font-size: calc(1.818vw + 28.18182px);
		letter-spacing: .03em;	
	}

	h2 {
		color: ${props => props.theme.colors.purple2};
		font-size: 1.44rem;
		line-height: 1.35rem;
		line-height: calc((2rem - 1.5rem) + 1.25rem);
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
		font-weight: 500;
		line-height: 1.25rem;
		margin-top: calc((1.5rem - .875rem) + .5rem);
		padding-bottom: .35rem;
	}

	h5 {
		color: ${props => props.theme.colors.grey1};
		font-size: 0.75rem;
		line-height: 1.25rem;
		margin-top: calc((1rem - .875rem) + .5rem);
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

	table thead tr th {
		background: #f8d7da;
		font-weight: 500;
		font-size: 0.45rem;
		line-height: 1.25rem;
		padding: .15rem .35rem .15rem .15rem;
		border-radius: 5px;
		text-align: left;
	}

	blockquote {
		color: #004085;
		background-color: ${props => props.theme.colors.purple5};
		border: none;
		border-left: 3px solid ${props => props.theme.colors.purple3};
		margin: .5rem 0rem .35rem 0; 
		padding: 0rem .125rem 0rem .5rem; 
		max-width: ${props => props.theme.sizes.maxText};

		/*margin-bottom: calc((2.16rem - 1rem) + 0.65rem);*/

		p {
			color: black;
			font-weight: 500;
			font-size: 0.6rem;
			line-height: 1.15rem;
			&:last-of-type {
				padding-bottom: 0;
			}
		}
	}

	main {
		flex: 1;
		flex-grow: 1;
  }

  #content {
		padding-bottom: 1rem;;
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
		padding-bottom: 1rem;

		@media (min-width: 960px) {
			width: 100%;
			max-width: 260px;
		}
	}

	.sticky .sticky-inner {
		grid-area: toc;
		font-size: 1rem;
		position: relative;	
		z-index: 1;
		width: 100%;
		max-width: 260px;

		@media (min-width: 960px) {
			top: 0;
			position: fixed;
			width: 100%;
			min-width: 260px;
		}
	}

	.gatsby-highlight {
		font-size: .55rem;
	  border-radius: 0;
	  margin:.5rem 0;
	  margin: 0;
	  padding: .25rem 0;
	  overflow: auto;
	  max-width: ${props => props.theme.sizes.maxCode};
	  background: white;
	}

	.gatsby-highlight :not(pre) > code[class*='language-'] {
		white-space: normal;
		padding: 4rem;
	}
	/* code single element */
	:not(pre) > code[class*="language-"]  {
		background: #eaeaf6;
		font-size: 0.55rem;
		padding: 0.35em;
	}

	pre[class*="language-"]::selection, pre[class*="language-"] ::selection, code[class*="language-"]::selection, code[class*="language-"] ::selection {
		background-color: rgba(94, 82, 218, 1);
		color: rgba(255, 255, 255, 1);
	}

	code[class*="language-"],
	pre[class*="language-"] {
		background: #eaeaf6;
	}

`

export const wrapRootElement = ({ element }) => {
	return (
		<AnimatePresence>
			<ThemeProvider theme={Theme}>
				<GlobalStyles />
				{element}
			</ThemeProvider>
		</AnimatePresence>
	)
}