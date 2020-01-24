import React from "react"
import "./styles.css"

import Spotlight from "../spotlight"

const About = () => {
  return (
    <section className="about-container">
      <Spotlight />

      <div className="about-context">
        <h2>Características</h2>

        <div className="text">
          <p>
            Motorista de transporte escolar (perueiro, van, etc.) conta com este
            importante aplicativo para auxiliar na redução de tempo de espera
            para embarcar e desembarcar as crianças.
          </p>

          <p>
            Antes de chegar a um ponto de embarque ou desembarque, o motorista
            aciona o envio de uma mensagem automática ao responsável, avisando
            que já está chegando e que o responsável deve ir ao ponto de
            encontro. Isso reduz o tempo de parada, melhora a segurança e
            otimiza todo o trajeto.
          </p>

          <p>
            O aplicativo trabalho com o envio de SMS ou chamada de voz. O
            cadastramento é muito rápido e feito com o preenchimento de poucos
            campos na tela. Ao iniciar o uso o app vem com um valor inicial de
            R$ 3.00 (sujeito a mudanças a qualquer momento) para que o usuário
            possa experimentar o uso antes de efetuar a primeira compra de
            créditos.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
