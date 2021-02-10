import React from "react"
import { Helmet } from "react-helmet"
const Header = () => {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous"
      ></script>
      {/* <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
      <script src="https://unpkg.com/aframe-environment-component@1.1.0/dist/aframe-environment-component.min.js"></script>
      <script src="https://unpkg.com/aframe-layout-component@5.3.0/dist/aframe-layout-component.min.js"></script>
      <script src="https://unpkg.com/aframe-troika-text/dist/aframe-troika-text.min.js"></script>

      <script src="../js/orb.js"></script> */}

      <title>Demo</title>
    </Helmet>
  )
}

export default Header
