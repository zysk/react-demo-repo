import React from "react"
import Header from "./header"
import { FaBars } from "react-icons/fa"
import "./styles.css"
import { Helmet } from "react-helmet"

const Overlay = () => {
  return (
    <>
      <Header />
      <input type="radio" name="toggle" id="radio1" />
      <div class="">
        <div class="icon-container">
          <label for="radio1" class="ham-menu">
            <FaBars />
          </label>
        </div>
      </div>

      <div class="overlay">
        <input type="radio" name="toggle" id="radio2" />
        <label for="radio2" class="cross">
          X
        </label>
        <nav>
          <a href="#">Home</a>
          <a href="#">HTML</a>
          <a href="#">CSS</a>
          <a href="#">JavaScript</a>
          <a href="#">About</a>
        </nav>
      </div>
    </>
  )
}

export default Overlay
