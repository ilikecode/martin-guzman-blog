// Styles for Category Card Component
import styled from 'styled-components'
import { Card, CardReadMore } from './card'
import { ContainerCardGrid } from './containers'


export const ContainerCategoryCardGrid = styled(ContainerCardGrid)`
  grid-row-gap: 1rem;
  padding-bottom: 1rem;
`

export const CardCategory = styled(Card)`
  cursor: pointer;  
  display: flex;
  align-items: flex-end;
  position: relative;
  height: 200px;
  padding: 1rem;
  background: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.shadow1};
` 

export const CardCategoryInfo = styled.div`  
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: baseline;
  position: absolute;  
  top: 20px;
  left: 32px;
  z-index: 3;
  color: ${props => props.theme.colors.grey1};
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

export const CardCategoryTotalCount = styled.div`
  color: ${props => props.theme.colors.grey1};
  font-size: 28px;
  font-weight: 400;
  padding-right: .25rem;
  transition: color 300ms ease-in-out; 

  @media (min-width: 35rem) {
    font-size: 28px;
    line-height: 1.15rem;
  }
  
  @media (min-width: 55rem) {
    font-size: 28px;
  }

${Card}:hover & {
  color: ${props => props.theme.colors.grey3};
  opacity: .9;
  transition: color 400ms ease-in-out,
                opacity 600ms ease-in-out;
  }
`

export const CardCategoryViewMore = styled(CardReadMore)`
  color: ${props => props.theme.colors.purple1};
  font-size: 18px;
  font-weight: 400;
  letter-spacing: .06em;
  padding-right: 5px;
  z-index: 3;
  line-height: 22px;
  text-decoration: none;

${Card}:hover & {
  text-decoration: none;
  color: ${props => props.theme.colors.grey3};
  opacity: .9;
  transition: color 500ms ease-in-out,
              opacity 500ms ease-in-out;
  }
`