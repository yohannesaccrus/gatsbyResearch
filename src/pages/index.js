import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLists from '../components/postLists'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostLists/>
  </Layout>
)

export default IndexPage
