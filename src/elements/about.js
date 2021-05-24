// Typographic Styles for About Page
import styled from 'styled-components'

export const HeadingThree = styled.h3`
  padding-bottom: .25rem;
 `

export const HeadingFour = styled.h4`
  margin-top: calc((.5rem - .25rem) + .5rem);
`

export const ParagraphInfo = styled.p`
  color: black;
  font-size: 0.75rem;
  line-height: 1.35rem;
  max-width: ${props => props.theme.sizes.medWidth};
  margin: 0;
  padding: 0;

  &:first-of-type {
    font-size: 0.85rem;
  }

  &:last-of-type {
    margin: 0;
    padding: 0;
  }
}
`

export const ParagraphDate = styled(ParagraphInfo)`
  color: ${props => props.theme.colors.grey1};
  font-size: 0.6rem;
`

export const Footnote = styled.cite`
  display: block;
  color: ${props => props.theme.colors.grey2};
  font-size: calc(14px + (4 - 2) * (100vw - 600px) / (1200 - 600));
  font-size: 0.65rem;
  font-weight: 400;
  line-height: .85rem;   padding-bottom: calc((1rem - 1rem) + 0.65rem);
  max-width: ${props => props.theme.sizes.medWidth};
`

export const SupElement = styled.sup`
  display: inline-block;
  color: black;
  font-weight: bold;
  font-size: 22px;
`