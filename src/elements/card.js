// Styles for for Article Card Component
import { Link } from 'gatsby'
import styled from 'styled-components'

export const Card = styled.article`
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  position: relative;
  height: 340px;
  background: white; 
  box-shadow: ${props => props.theme.shadows.shadow1}; 
  padding: 1rem;
` 

export const CardBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 4px;
  width: 100%;
  z-index: 2;
  background-color: ${props => props.theme.colors.purple2};
  transform-origin: top;
  transition: all 600ms ease-in-out;

${Card}:hover & {
  height: 100%;
  transform: height(1);
  background-color:  ${props => props.theme.colors.grey1};
  transition: height 600ms ease-in-out,
              background-color 500ms ease-in-out;
  }
`

export const CardTagList = styled.div`
  display: column;
  flex-direction: row;
  position: absolute;
  top: 32px;
  left: 32px;
  z-index: 3;
  color: ${props => props.theme.colors.grey2};
  font-size: 14px;
  font-weight: 600;
  letter-spacing: .08em;
  line-height: .7rem;
  transition: color 300ms ease-in-out; 
  
  ${Card}:hover & {
    color: ${props => props.theme.colors.grey3};
    opacity: .9;
    transition: color 100ms ease-in-out;
  }
`

export const CardTitle = styled.div`  
  display: inline;
  position: absolute;  
  top: 135px;
  left: 32px;  
  z-index: 3;
  color: ${props => props.theme.colors.black};
  font-size: 28px;
  line-height: 1.75rem;
  padding-right: 32px;
  padding-top: 20px;
  transition: color 300ms ease-in-out; 

  @media (min-width: 35rem) {
    font-size: 24px;
    line-height: 1.15rem;
  }
  
  @media (min-width: 55rem) {
    font-size: 24px;
  }

  ${Card}:hover & {
    color: ${props => props.theme.colors.grey3};
    opacity: .9;
    transition: color 400ms ease-in-out,
                opacity 600ms ease-in-out;
  }
`

export const CardReadMoreContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;  
  justify-content: flex-start;
  width: 100%;
  z-index: 3;
  text-decoration: none;
`

export const CardReadMore = styled.div`
  color: ${props => props.theme.colors.purple1};
  font-size: 18px;
  font-weight: 400;
  letter-spacing: .06em;
  line-height: 22px;
  padding-right: 5px;
  z-index: 3;
  text-decoration: none;

  ${Card}:hover & {
    text-decoration: none;
    color: ${props => props.theme.colors.grey3};
    opacity: .9;
    transition: color 500ms ease-in-out,
                opacity 500ms ease-in-out;
  }
`

export const CardReadMoreIcon = styled.div`
  stroke: ${props => props.theme.colors.purple1};
  height: 26px;
  width: 46px;
  z-index: 3;
  transition: all 300ms ease-in-out;

  ${Card}:hover & {
    fill: ${props => props.theme.colors.grey3};
    stroke: ${props => props.theme.colors.grey3};
    transform: translateX(30px) ;
    transition: all 600ms ease-in-out;
  }
`

export const CardLink = styled(Link)`
	color: ${props => props.theme.colors.grey2};
	text-decoration: none;
	text-transform: Capitalize;
  padding-right: .5rem;
  transition: color 300ms ease-in-out; 

	${Card}:hover & {
	  color: ${props => props.theme.colors.purple1};
	  opacity: .9;
	  transition: color 100ms ease-in-out;
  }
`	

export const LinkTags = styled(Link)`
  color: ${props => props.theme.colors.grey2};
  text-decoration: none;
  text-transform: Capitalize;
  padding-right: .5rem;
  transition: color 300ms ease-in-out; 

  ${Card}:hover & {
    color: white;
    opacity: .9;
    transition: color 100ms ease-in-out;
  }
`   

export const CardReadMoreArrow = styled.svg`
  stroke: ${props => props.theme.colors.purple1};
  height: 24px;
  width: 24px;
  margin-top: 0;
  z-index: 3;
  transition: all 300ms ease-in-out;

${Card}:hover & {
    fill: ${props => props.theme.colors.grey3};
    stroke: ${props => props.theme.colors.grey3};
    transform: translateX(15px) ;
    transition: all 600ms ease-in-out;
  }
`   