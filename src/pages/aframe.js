import React, { Component } from "react"
import Helmet from "react-helmet"
import { withPrefix, Link } from "gatsby"
import Navbar from "../components/Navbar"
var __html = require("../../static/aframe.html.js")
var template = { __html: __html }

class ScreenShare extends Component {
  render() {
    return (
      <>
        <Helmet>
          {/* <script src="https://aframe.io/releases/1.1.0/aframe.min.js"></script>
          <script src="https://unpkg.com/aframe-layout-component@5.3.0/dist/aframe-layout-component.min.js"></script>
          <script src="https://unpkg.com/aframe-troika-text/dist/aframe-troika-text.min.js"></script>
          <script src="https://unpkg.com/aframe-look-at-component@0.8.0/dist/aframe-look-at-component.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/aframe-glow@1.0.1/src/glow.min.js"></script> */}
          {/* <script src={withPrefix("hero.js")} type="text/javascript" />
          <script src={withPrefix("stars.js")} type="text/javascript" />
          <script src={withPrefix("orb.js")} type="text/javascript" />
          <script src={withPrefix("lighting.js")} type="text/javascript" /> */}
        </Helmet>
        <div className="screen-share">
          <span dangerouslySetInnerHTML={template} />
        </div>
      </>
    )
  }
}
export default ScreenShare
