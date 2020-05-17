import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Speed Challenge</h2>
    <Link to="/kraoBlog/ml/speedChallenge/1">Speed Challenge 1</Link>
    <br/>
    <Link to="/kraoBlog/ml/speedChallenge/2">Speed Challenge 2</Link>
    <h2>Machine learning notes</h2>
    <Link to="/kraoBlog/ml/learning/1">Learning 1</Link>
    <br/>
    <h2>Installation notes</h2>
    <Link to="/kraoBlog/ml/cudaInstall">How to install Cuda 10.1 on Ubuntu 20.04</Link>
    <br/>
  </Layout>
)

export default IndexPage
