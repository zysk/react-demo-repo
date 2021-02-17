import React from "react"
import SEO from "../components/seo"
import Navbar from "../components/Navbar"
const IndexPage = () => (
  <div className="home">
    <SEO title="Home" />
    <div className=" content">
      <Navbar />
    </div>
    <div class="intrinsic-box">
      <a-scene timeout="10" className="a-frame-1" vr-mode-ui="enabled: false">
        <a-assets>
          <img id="boxTexture" src="https://i.imgur.com/mYmmbrp.jpg" />
          <img
            id="skyTexture"
            src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg"
          />
          <img
            id="groundTexture"
            src="https://cdn.aframe.io/a-painter/images/floor.jpg"
          />
        </a-assets>

        <a-box
          src="#boxTexture"
          position="0 2 -5"
          rotation="0 45 45"
          scale="2 2 2"
          animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
        ></a-box>

        <a-sky
          src="#skyTexture"
          animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
        ></a-sky>

        <a-light type="ambient" color="#445451"></a-light>
        <a-light type="point" intensity="2" position="2 4 4"></a-light>
      </a-scene>
    </div>
  </div>
)

export default IndexPage
