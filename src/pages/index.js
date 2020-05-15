import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/ml/speedChallenge/1">Speed Challenge 1</Link>
    <Link to="/ml/cudaInstall/1">How to install Cuda 10.1 on Ubuntu 20.04</Link>
  </Layout>
)

export default IndexPage
