import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

const POST_ARCHIVE = graphql`
  query PostsArchives {
    allMarkdownRemark(
      limit: 5
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
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
  const posts = useStaticQuery(POST_ARCHIVE)

  return (
    <div>
      <h1>Posts Archive</h1>
      <ul>
        {posts.allMarkdownRemark.edges.map((post, index) => (
          <li key={index}>
            <Link to={`/post${post.node.frontmatter.slug}`}>
              {post.node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Archive
