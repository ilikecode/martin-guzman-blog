/*  Taglist Component
    Description: Tag list items from Article Card. 
    For Tag list with links, see TagListLinks Component in taglist-links.js
*/
// Import React and Gatsby
import React from 'react'

// Import Utilities and Style Elements
import { ListTagName } from '../elements/'

const TagList = props => {
  return (
    <React.Fragment>
      {props.tags.map((tag) => (
        <ListTagName key={tag}>{tag}</ListTagName>
      ))}
    </React.Fragment>
  )
}

export default TagList