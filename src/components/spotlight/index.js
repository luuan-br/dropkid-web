import React from "react"
import "./styles.css"

const Spotlight = () => {
  return (
    <aside className="app-spotlight">
      <figure className="spotlight-item">
        <img src={require("../../images/starte.png")} alt="icon-start" />
        <figcaption>
          <p>
            Inicie agora com R$ 3,00 reais de creditos para testar os serviços
            sem qualquer fidelidade ou compromisso.
          </p>
        </figcaption>
      </figure>

      <figure className="spotlight-item">
        <img src={require("../../images/map.png")} alt="icon-start" />
        <figcaption>
          <p>
            Cadastre rotas ilimitadas em pouco passo de maneira rapida e
            simples.
          </p>
        </figcaption>
      </figure>

      <figure className="spotlight-item">
        <img src={require("../../images/list.png")} alt="icon-start" />
        <figcaption>
          <p>
            Crie sua lista de criança para o envio das mensagens automaticas.
          </p>
        </figcaption>
      </figure>
    </aside>
  )
}

export default Spotlight
