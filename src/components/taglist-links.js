/*  List of Article Tags with Links Component
    Each tag is linked to a page of it's respective tagged name.
*/
import React from 'react'
import PropTypes from 'prop-types'

 // Utilities and Style Elements
import kebabCase from 'lodash/kebabCase'
import { ListTags, TagLink } from '../elements/'

const TagListLinks = props => {
  return (
    <ListTags>
      {props.tags.map((tag) => (
        <li key={tag}>
          <TagLink to={`/articles/tags/${kebabCase(tag)}/`}>{tag}</TagLink>
        </li>
      ))}
    </ListTags>
  )
}

TagListLinks.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default TagListLinks