// Styles for Article Next and Previous Navigation/Links
import { Link } from 'gatsby'
import styled from 'styled-components'

export const ArticlePost = styled.article`
  width: 100%;
`

export const ArticleDateTime = styled.div`
  align-self: flex-start;
  color: black;
  font-size: .65rem;
  line-height: 1.65rem;
  text-transform: capitalize;
  margin-bottom: 0;
  padding-top: calc(16px + (16 - 8) * (100vw - 600px) / (1200 - 600));
  padding-top: 0rem;
  padding-bottom: .5rem;
`

export const ArticleSubtitle = styled.h2`
  align-self: flex-start;
  color: ${props => props.theme.colors.purple2};
  font-size: 0.85rem;
  line-height: 1.5rem;
  text-transform: capitalize;
  margin-bottom: 0;
  padding-bottom: 0;
`

export const ArticleLink = styled(Link)`
  color: ${props => props.theme.colors.purple1};
  text-decoration: none;
`

export const ArticleNav = styled.article`
  width: 50%;
` 
export const ArticleNextPreviousNav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1.16rem 0;

  @media only screen and (min-width : 768px) {
    padding: .70rem 0;
  }
`

export const ArticlePrevious = styled.div`
  color: ${props => props.theme.colors.grey1};
  font-weight: 600;
  font-size: calc(14px + (4 - 2) * (100vw - 600px) / (1200 - 600));
  text-align: left;
  line-height: 1em;
  padding: 0 0 .15rem 0;
`

export const ArticleNext = styled(ArticlePrevious)`
  text-align: right;
`

export const ArticleTitle = styled.h5`
  color: ${props => props.theme.colors.purple1};
  font-size: calc(16px + (4 - 2) * (100vw - 600px) / (1200 - 600));
  font-weight: 300;
  line-height: 22px;
`

export const ArticleTitlePreviousContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;  
  width: 100%;
  text-decoration: none;

  ${ArticleNav}:hover & {
    text-decoration: underline;
    transition: all 500ms ease-in-out;
  }
`

export const ArticleTitleNextContainer = styled(ArticleTitlePreviousContainer)`
  align-items: flex-end;  

   ${ArticleTitle} & {
    text-align: right;
   }
`