import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../components/main.css"
import "../components/index.css"
import contact from "../images/contact.gif"
import video1 from "../images/animationhover.mp4"
import video2 from "../images/virtualworld.mp4"
import HoverVideoPlayer from "react-hover-video-player"
const sayhello = ({ data }) => {
  return (
    <>
      <section class="container">
        <div class="d-flex flex-wrap justify-content-between align-items-center ">
          <div class="col-lg-6 d-flex justify-content-lg-start justify-content-center py-5 py-lg-0">
            <div class="rc">
              <HoverVideoPlayer
                videoSrc={video2}
                className="video-circle virtual-video"
                muted
                loop
              />
            </div>
          </div>
          <div class=" col-lg-5">
            <h1 class="title text-center text-lg-left text-center text-lg-left">
              ANIMATION
            </h1>
            <div class="divider"></div>
            <p class="description py-4 text-justify">
              We tell stories through cinematic animations captured by immersive
              environments and compelling narrative. Storytelling is often the
              ability to reach into our minds and find what is beautiful, what
              is useful, and what is lasting. An effective animation should
              never allow the eye to settle in one place, instead, it should
              inspire you to create your own imagination while waking up your
              various emotions. We hope our product can give you a memorable
              experience that encourages you to contemplate and reflect.
            </p>
            <a
              href="../works/"
              class="virtual my-md-3 ml-lg-2 d-block font-weight-bold text-center text-lg-left"
            >
              VIEW OUR WORK
            </a>
          </div>
        </div>
        <div class=" d-flex row justify-content-between align-items-center pt-5">
          <div class="col-lg-6 d-flex justify-content-lg-end justify-content-center py-5 py-lg-0 order-lg-12">
            <div class="rc py-3">
              <HoverVideoPlayer
                videoSrc={video2}
                className="video-circle virtual-video"
                muted
                loop
              />
            </div>
          </div>
          <div class="col-lg-5 order-lg-1">
            <h1 class="title text-center text-lg-left text-center text-lg-left">
              VIRTUAL
            </h1>
            <div class="divider"></div>
            <p class="description py-4 text-justify">
              We design virtual experiences through graphics, architecture, and
              360 while blurring the lines between virtual and reality. We aim
              to tell your stories through our innovative visuals as we redefine
              how information can be presented in an effective and visually
              captivating way. This is the world where our expressions become
              our voices as we highlight the human connections. There is no box,
              no boundary, and no physical limitations. We do not try to
              replicate the real, instead, we focus on creating a unique
              experience that is only imaginable in a space that is unreal.
            </p>
            <a
              href="../works/"
              class="virtual my-3 ml-lg-2 d-block font-weight-bold text-center text-lg-left"
            >
              VIEW OUR WORK
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  {
    wpPage(title: { eq: "Home" }) {
      content
      title
    }
  }
`

export default sayhello
