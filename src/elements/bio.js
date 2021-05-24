// Styles for Bio Component on Article Post Templae Page
import styled from 'styled-components'
 
export const BioContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-column-gap: 0;
  align-self: center;
  padding-top: calc((1.16rem - 1rem) + 0.16rem);
  padding-bottom: calc((1.16rem - 1rem) + 0.16rem);

  @media only screen and (min-width : 768px) {
    grid-template-columns: 120px 1fr;
  }
`
export const BioIcon = styled.div`
  width: 100px;
  @media only screen and (min-width : 768px) {
    width: 120px;
  }
`

export const BioDescription = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 0.64rem;
    line-height: .96rem;

    &:last-of-type {
     padding-bottom: 0px;
    }  
  }
`