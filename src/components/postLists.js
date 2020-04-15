import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

const POSTS_LIST = graphql`
  query PostsLists {
    allMarkdownRemark(
      limit: 10
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

const Archive = () => {
  const posts = useStaticQuery(POSTS_LIST)

  return (
    <div>
        {posts.allMarkdownRemark.edges.map((post, index) => (
          <div key={index}>
            <Link to={`/post${post.node.frontmatter.slug}`}>
              <h4>{post.node.frontmatter.title}</h4>
            </Link>
			<p>{post.node.frontmatter.date}</p>
			<p>{post.node.excerpt}</p>
          </div>
        ))}
    </div>
  )
}

export default Archive
