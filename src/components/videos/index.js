import React from "react"
import "./styles.css"

export default function Videos() {
  return (
    <frameElement>
      <h2 className="title-div">Informações</h2>
      <div id="videos">
        <iframe
          title="Drop Kid: auxiliar motorista escolar"
          width="100%"
          height="315"
          src="https://www.youtube-nocookie.com/embed/hXieyfELVjQ?controls=0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>

        <iframe
          title="Drop Kid Instruções básicas de uso do aplicativo (versão 0.0.5 de 10/12/2019)"
          width="100%"
          height="315"
          src="https://www.youtube-nocookie.com/embed/GFpu1BHg5Us?controls=0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </frameElement>
  )
}
