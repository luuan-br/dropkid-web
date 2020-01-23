import React from "react"
import "./styles.css"

const Footer = () => {
  return (
    <footer className="footer">
      <img
        src={require("../../images/logo@3x.png")}
        alt="logo drop kid"
        className="icon-logo"
      />
      <div className="distributor">
        <p>HTS Informática</p>
      </div>
    </footer>
  )
}

export default Footer
