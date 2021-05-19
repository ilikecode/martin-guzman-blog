// Styles for View All Button for Articles and Categories
import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'


export const ViewAllButton = props => {
  return (
    <ContainerViewAll>
      {props.children}
    </ContainerViewAll>
  )
}

export const ContainerViewAll = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;  
  width: 100%;
  text-decoration: none;
`

export const ViewAllLink = styled(Link)`
  color: ${props => props.theme.colors.purple1};
  cursor: pointer;
  display: flex;
  flex-direction: row nowrap;
  line-height: .8rem;
  padding: .5rem .5rem .5rem 0;
  text-decoration: none;
  transition: color 300ms ease-in-out; 
`
 
export const ViewAllArrow = styled.svg`
  stroke: ${props => props.theme.colors.purple1};
  transition: all 300ms ease-in-out;
  height: 32px;
  width: 32px;
	margin-top: 0;

  @media ${props => props.theme.breakpoints.small} {
    height: 24px;
    width: 24px;
  }

	${ViewAllLink}:hover & {
    transform: translateX(15px) ;
    transition: all 500ms ease-in-out;
    stroke: ${props => props.theme.colors.purple1};
  }
`   

export const ViewAllText = styled.div`
  color: ${props => props.theme.colors.purple2};
  font-size: calc(24px + (8 - 4) * (100vw - 600px) / (1200 - 600));
  font-weight: 400;
  line-height: 22px;
  letter-spacing: .03em;
  padding-right: 5px;
  text-decoration: none;
`