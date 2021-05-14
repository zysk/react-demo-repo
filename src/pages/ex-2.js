import React from "react"
import "../components/style.css"

import { withPrefix, Link } from "gatsby"
import TopMenu from "../components/Menu"
import "../components/main.css"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import SEO from "../components/seo"
// var __html = require("../../static/aframe.html.js")
// var template = { __html: __html }
const ex = ({ data }) => {
  return (
    <div>
      <div id="container">
        <div id="logo">invi</div>
        <nav id="top_nav">
          <input id="nav-toggle" type="checkbox" />
          <ul class="links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
          <label for="nav-toggle" class="icon-burger">
            <div class="line"></div>
            <div class="line"></div>
          </label>
        </nav>
      </div>
      <div id="hero_text">
        <p id="headline">We are designers of virtual experiences</p>
        <p id="enter_btn">Enter our virtual home</p>
        <p id="home_text">
          Welcome to our home. Our home reflects who we are as people. We have
          curated a range of our work for you to explore.
        </p>
      </div>
      <div id="instructions">
        <p id="click_drag">use arrow keys to move | click + drag to rotate</p>
      </div>
      <a-scene
        embedded
        class="aframe-height"
        renderer="colorManagement: true; highRefreshRate: true"
        vr-mode-ui="enabled: false"
        background="color: #ced4da"
        raycaster="objects: .collidable"
        cursor="rayOrigin:mouse; fuse:false"
      >
        <a-sky
          id="sky"
          visible="false"
          radius="200"
          theta-length="180"
          material="shader: gradientshader; topColor: #5582ec; bottomColor: #f2c4c4"
        ></a-sky>
        <a-entity id="orb" orb position="0 0 0"></a-entity>
        <a-entity id="lighting" lighting position="0 0 0"></a-entity>
        <a-entity id="stars_1" stars position="0 0 0"></a-entity>

        <a-entity id="cameraRig" hero lighting>
          <a-entity
            id="head"
            camera
            position="0 1 0"
            wasd-controls="acceleration: 3"
          ></a-entity>
        </a-entity>
      </a-scene>
    </div>
  )
}

export default ex
