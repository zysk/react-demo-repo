import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../components/main.css"
import "../components/index.css"
import video1 from "../images/animationhover.mp4"
import video2 from "../images/virtualworld.mp4"
import HoverVideoPlayer from "react-hover-video-player"

const services = ({ data }) => {
  return (
    <div>
      <div className="services">
        <Navbar />
        <h1 className="text-center title pt-lg-5 text-uppercase">
          What We Do ?
        </h1>
        <p className="text-center title-desc ">
          We create virtual experiences through architecture, storytelling, and
          design.
        </p>

        <div className="container-fluid mt-5">
          <div className="row ">
            <div className="col-12">
              <Image fluid={data.image.childImageSharp.fluid} alt="services" />
            </div>
          </div>
        </div>

        {/* <!-- =======  Services ======= --> */}
        <section className="container">
          <div className=" row d-flex justify-content-between align-items-center row-space">
            <div className="col-md-6 d-flex justify-content-center justify-content-lg-start py-3">
              <div className="rc">
                <HoverVideoPlayer
                  videoSrc={video1}
                  className="video-circle animation-video"
                  muted
                  loop
                />
              </div>
            </div>
            <div className=" col-md-5">
              <h1 className="title">ANIMATION</h1>
              <div className="divider"></div>
              <p className="description py-4 text-justify">
                We tell stories through cinematic animations captured by
                immersive environments and compelling narrative. Storytelling is
                often the ability to reach into our minds and find what is
                beautiful, what is useful, and what is lasting. An effective
                animation should never allow the eye to settle in one place,
                instead, it should inspire you to create your own imagination
                while waking up your various emotions. We hope our product can
                give you a memorable experience that encourages you to
                contemplate and reflect.
              </p>
              <a
                href="../works/"
                className="virtual my-md-3 ml-lg-2 d-block font-weight-bold"
              >
                VIEW OUR WORK
              </a>
            </div>
          </div>
          <div className="row d-flex justify-content-between align-items-center row-space">
            <div className="col-md-5">
              <h1 className="title">VIRTUAL</h1>
              <div className="divider"></div>
              <p className="description py-4 text-justify">
                We design virtual experiences through graphics, architecture,
                and 360 while blurring the lines between virtual and reality. We
                aim to tell your stories through our innovative visuals as we
                redefine how information can be presented in an effective and
                visually captivating way. This is the world where our
                expressions become our voices as we highlight the human
                connections. There is no box, no boundary, and no physical
                limitations. We do not try to replicate the real, instead, we
                focus on creating a unique experience that is only imaginable in
                a space that is unreal.
              </p>
              <a
                href="../works/"
                className="virtual my-3 ml-lg-2 d-block font-weight-bold"
              >
                VIEW OUR WORK
              </a>
            </div>
            <div className="col-md-6 d-flex justify-content-center justify-content-lg-end ">
              <div className="rc img-fluid py-3">
                <HoverVideoPlayer
                  videoSrc={video2}
                  className="video-circle virtual-video"
                  muted
                  loop
                />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- =======  Services ======= --> */}
        <Footer />
      </div>
    </div>
  )
}
export const query = graphql`
  {
    image: file(relativePath: { eq: "invi-services.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    intro: file(relativePath: { eq: "invi-cloud-design.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default services
