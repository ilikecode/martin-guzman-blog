// Styles for for Containers
import styled from 'styled-components'
import { motion } from 'framer-motion'
 
export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;
	padding: .25rem .75rem;
	width: 100%;
	max-width: ${props => props.theme.sizes.maxWidth};
`
export const ContainerArticleNavigation = styled(Container)`
  border-top: 1px solid ${props => props.theme.colors.purple3};
`

export const ContainerTwoColumns = styled.div`
  display: grid;
  grid-template-areas:
    'toc'
    'article';
  grid-auto-flow: dense;
  row-gap: 1rem;
  grid-gap: 0;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};

  @media (min-width: 960px) {
    grid-template-areas:
      'article toc';
    grid-gap: 1rem;
    row-gap: 0;
  }
`

export const ContainerTwoColumnsFlex = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: flex-start;
  padding: .25rem .75rem;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};

  @media (min-width: 960px) {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`

export const ContainerAside = styled.aside`

`

export const ContainerArticle = styled.div`
  grid-area: article;
  padding-bottom: calc(32px + (16 - 8) * (100vw - 600px) / (1200 - 600));
  padding-top: 0;
 
  @media (min-width: 960px) {
    padding-top: 0rem;
    padding-right: 1rem;
  }
`

export const ContainerCardGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 0rem;
  list-style-type: none;

  li {
    list-style-type: none;
  }

  @media (min-width: 35rem) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 55rem) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`