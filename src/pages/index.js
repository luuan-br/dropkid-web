import React from "react"
import "./global.css"

import Header from "../components/header"
import About from "../components/about"
import Fqa from "../components/fqa"
import Footer from "../components/footer"
import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <main>
      <SEO title="Home" />
      <Header />
      <About />
      <Fqa data={data} />
      <Footer />
    </main>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`
