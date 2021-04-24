import React from "react"
import { withPrefix, Link } from "gatsby"
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
      <script src="https://unpkg.com/aframe-troika-text/dist/aframe-troika-text.min.js"></script> */}

      {/* <script src="../js/orb.js"></script> */}
      {/* <script src={withPrefix("orb.js")} type="text/javascript" /> */}
    </Helmet>
    <div className="home">
      <SEO title="Home" />
      <div className=" content">
        <Navbar />
      </div>
      <div class="intrinsic-box">
        <a-scene
          embedded
          vr-mode-ui="enabled: false"
          background="color: #0c0a3e"
          webxr="optionalFeatures: hand-tracking"
          raycaster="objects: .collidable"
          cursor="rayOrigin:mouse; fuse:false"
          timeout="10"
        >
          <a-entity id="orb" orb position="0 0 0"></a-entity>
          <a-entity id="stars_1" stars position="0 0 0"></a-entity>

          <a-entity id="cameraRig" hero>
            <a-entity
              id="head"
              camera
              position="0 1 0"
              wasd-controls="acceleration: 10"
              look-controls
            ></a-entity>

            <a-entity
              laser-controls="hand: left"
              hand-tracking-mesh="hand: left"
              hand-tracking-gestures-mesh
              teleport
              teleport-controls="startEvents: teleportstart; endEvents: teleportend; cameraRig: #cameraRig; teleportOrigin: #head;"
              raycaster="objects: .collidable; far: 20"
              line="color: #000000"
            ></a-entity>
            <a-entity
              laser-controls="hand: right"
              hand-tracking-mesh="hand: right"
              hand-tracking-gestures-mesh
              teleport
              teleport-controls="startEvents: teleportstart; endEvents: teleportend; cameraRig: #cameraRig; teleportOrigin: #head;"
              raycaster="objects: .collidable; far: 20"
              line="color: #000000"
            ></a-entity>
          </a-entity>
        </a-scene>
      </div>
    </div>
    <section className="about text-center pt-5">
      <h1 className="text-uppercase">About</h1>
    </section>
  </>
)

export default IndexPage
