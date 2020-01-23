import React from "react"
import "./styles.css"

const Header = () => {
  return (
    <header className="header">
      <div className="topHeader">
        <h1>Drop Kid</h1>
      </div>
      <div className="container">
        <div className="image-spotlight">
          <img
            src={require("../../images/img@3x.png")}
            alt="not-fount"
            className="spotlight"
          />
        </div>
        <div className="context-spotlight">
          <h2>
            O App de transporte escolar que auxilia na redução de tempo em
            embarque e desembarque
          </h2>
          <div className="text">
            <p>
              Você compra créditos e gasta alguns centavos por ligação. É mais
              barato do que ficar esperando no ponto de encontro.
            </p>
            <p>
              A compra é identificada na hora, você usa assim que o pagamento
              for reconhecido.
            </p>
          </div>
          <a
            href="https://play.google.com/store/apps/details?id=br.com.htsnet.dropkid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../../images/google-player@3x.png")}
              alt=""
              className="google-store"
            />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
