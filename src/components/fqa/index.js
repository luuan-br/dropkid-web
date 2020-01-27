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
      <p>
        Para mais informacoes entre em contato pelo email:{" "}
        <a
          href="mailto:contato@apoiando.com.br"
          subject="Contato%20Site%20DropKid%20-$20"
        >
          contato@apoiando.com.br
        </a>
      </p>
    </section>
  )
}
