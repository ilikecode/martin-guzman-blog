/*	Article List Component
  	Generated list of all Article Components. 
*/
// Import React and Gatsby Elements
import React from 'react'

// Import Utilites and Style Elements
import { ContainerCardGrid } from '../../elements/'

// Import Components
import Article from './articlecard'

const ArticleList = ({ posts }) => {

  return (
    <ContainerCardGrid>
      {posts.map(post => {
      	return <Article key={post.id} {...post} ></Article>
      })}
    </ContainerCardGrid>	
  )
}
 
export default ArticleList