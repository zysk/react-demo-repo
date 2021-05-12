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

      <script src="https://aframe.io/releases/1.1.0/aframe.min.js"></script>
      <script src="https://unpkg.com/aframe-layout-component@5.3.0/dist/aframe-layout-component.min.js"></script>
      <script src="https://unpkg.com/aframe-troika-text/dist/aframe-troika-text.min.js"></script>
      <script src="https://unpkg.com/aframe-look-at-component@0.8.0/dist/aframe-look-at-component.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/aframe-glow@1.0.1/src/glow.min.js"></script>
      <script src="../../static/js/hero.js"></script>
      <script src="../../static/js/stars.js"></script>
      <script src="../../static/js/orb.js"></script>
      <script src="../../static/js/lighting.js"></script>
      <title>INVI - Innovative Visuals</title>
    </Helmet>
  )
}

export default Header
