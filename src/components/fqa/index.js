import React from "react"
import "./styles.css"

export default function Fqa({ data }) {
  return (
    <section className="fqa-container">
      <h2>Pergutas frequêntes</h2>

      <ul className="fqa-list">
        {data &&
          data.allMarkdownRemark.edges.map(({ node }) => (
            <li key={node.id}>
              <h3>{node.frontmatter.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: node.html }} />
            </li>
          ))}
      </ul>
    </section>
  )
}
