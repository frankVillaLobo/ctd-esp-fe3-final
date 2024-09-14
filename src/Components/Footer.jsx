import React from 'react'
import { useContextGlobal } from "../Components/utils/global.context";

const Footer = () => {
  const { state, dispatch } = useContextGlobal();

  return (
    <footer className={state.theme === "dark" ? "footer-dark" : "footer"}>
        <p>Powered by</p>
        <img src="../../images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
