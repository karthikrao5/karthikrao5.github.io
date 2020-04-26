import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/blog/ml/speedChallenge/1">Speed Challenge 1</Link>
  </Layout>
)

export default IndexPage
