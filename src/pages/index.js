import React from "react"
import { Link } from "gatsby"
import "../components/styles.css"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import Header from "../components/header"
import { Helmet } from "react-helmet"
const IndexPage = () => (
  <>
    <Header />
    <Helmet>
      <title>INVI-VERSE</title>
      {/* <script src="https://aframe.io/releases/1.1.0/aframe.min.js"></script>
      <script src="https://unpkg.com/aframe-environment-component@1.1.0/dist/aframe-environment-component.min.js"></script>
      <script src="https://unpkg.com/aframe-layout-component@5.3.0/dist/aframe-layout-component.min.js"></script>
      <script src="https://unpkg.com/aframe-troika-text/dist/aframe-troika-text.min.js"></script>

      <script src="../js/orb.js"></script> */}
    </Helmet>
    <div className="home">
      <SEO title="Home" />
      <div className=" content">
        <Navbar />
      </div>
      <div class="intrinsic-box">
        <a-scene embedded timeout="10" className="a-frame-1">
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
            animation="property: object3D.position.y; to: 2.2; dir: alternate; dur: 2000; loop: true"
          ></a-box>

          <a-sky
            src="#skyTexture"
            animation="property: position; to: 1 8 -10; dur: 2000; easing: linear; loop: true"
          ></a-sky>

          <a-light type="ambient" color="#445451"></a-light>
          <a-light type="point" intensity="2" position="2 4 4"></a-light>
        </a-scene>
      </div>
    </div>
    <section className="about text-center pt-5">
      <h1 className="text-uppercase">About</h1>
    </section>
  </>
)

export default IndexPage
