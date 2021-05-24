// Styles for Bullet Lists with Custom Bullet
import styled from 'styled-components'
 
export const ListIcon = styled.ul`
	font-size: 0.75rem;
	list-style: none;
	list-style-position: outside;
	
	li {
		padding-bottom: .35rem;

		&:last-child {
			padding-bottom: calc(16px + (16 - 8) * (100vw - 600px) / (1200 - 600));
		}

		&:before {
			content: "⋅";
			color: ${props => props.theme.colors.purple1};
			font-size: 1rem;
			line-height: 1rem;
			padding-right: 5px;
		}
	}
`

export const ListTags = styled.ul`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
  justify-content: flex-start;
  align-items: top;  
  font-size: .65rem;
  line-height: 1rem;
  padding-bottom: 0.5rem;

	li { 
    list-style-type: none;
    margin: 8px;
    margin-left: 0;
	}
`

export const ListTagName = styled.li`
	line-height: 1.65em;
`