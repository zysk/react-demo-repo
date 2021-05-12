import React from "react"
import { Helmet } from "react-helmet"
const Header = () => {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script href="../components/lightbox.js"></script>
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300;900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400&display=swap"
        rel="stylesheet"
      ></link>
      <script
        src="https://kit.fontawesome.com/ff32cb2647.js"
        crossOrigin="anonymous"
      ></script>

      <title>INVI - Innovative Visuals</title>
    </Helmet>
  )
}

export default Header
