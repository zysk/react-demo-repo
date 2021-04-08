import React from "react"
import { Helmet } from "react-helmet"

const Header = () => {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossOrigin="anonymous"
      /> */}
      <script href="../components/lightbox.js"></script>
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300;900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        rel="stylesheet"
      />

      <script
        src="https://kit.fontawesome.com/ff32cb2647.js"
        crossOrigin="anonymous"
      ></script>

      <script
        type="text/javascript"
        src="node_modules/panolens.js/panolens.min.js"
      ></script>
      <script
        type="text/javascript"
        src="node_modules/pano/dist/pano.min.js"
      ></script>
      <script
        type="text/javascript"
        src="//sinanbolel.firebaseapp.com/cdn/panolens-1.0.1-beta.min.js"
      ></script>
      <script
        type="text/javascript"
        src="//sinanbolel.firebaseapp.com/cdn/pano-2.0.0.min.js"
      ></script>
      <title>INVI - Innovative Visuals</title>
    </Helmet>
  )
}

export default Header
