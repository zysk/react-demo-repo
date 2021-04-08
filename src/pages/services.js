import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../components/main.css"

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

        <div className="container py-5">
          <div className="row ">
            <div className="col-12">
              <Image fluid={data.image.childImageSharp.fluid} alt="services" />
            </div>
          </div>
        </div>

        {/* <!-- =======  Services ======= --> */}
        <section className="container">
          <div className="  d-flex flex-wrap justify-content-between align-items-center">
            <div className="col-lg-6 d-flex justify-content-center justify-content-lg-start py-5 py-lg-0 mx-lg-0 px-lg-0">
              <div className="rc">
                <HoverVideoPlayer
                  videoSrc={video1}
                  className="video-circle animation-video"
                  muted
                  loop
                />
              </div>
            </div>
            <div className=" col-lg-5">
              <h1 className="title text-center text-lg-left text-center text-lg-left">
                ANIMATION
              </h1>
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
                className="virtual my-3 ml-lg-2 d-block font-weight-bold text-center text-lg-left"
              >
                VIEW OUR WORK
              </a>
            </div>
          </div>
          <div className="row d-flex justify-content-between align-items-center pt-5">
            <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center py-5 py-lg-0 mx-lg-0 px-lg-0 order-lg-12 ">
              <div className="rc img-fluid py-3">
                <HoverVideoPlayer
                  videoSrc={video2}
                  className="video-circle virtual-video"
                  muted
                  loop
                />
              </div>
            </div>
            <div className="col-lg-5 order-lg-1">
              <h1 className="title text-center text-lg-left text-center text-lg-left">
                VIRTUAL
              </h1>
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
                className="virtual my-3 ml-lg-2 d-block font-weight-bold text-center text-lg-left"
              >
                VIEW OUR WORK
              </a>
            </div>
          </div>
        </section>
        {/* <!-- =======  Services ======= --> */}
        {/* <!-- =======  Testimonials ======= --> */}

        <div className="container row-space my-lg-4 pb-5">
          <h1 className="title text-center">TESTIMONIALS</h1>
          <div
            id="demo"
            className="carousel slide mt-lg-2"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="carousel-caption mx-4">
                  <p>
                    I had the pleasure of working with INVI on a virtual
                    community art initiative, and I was so blown away by their
                    team's creativity, professionalism, and attention to detail.
                    INVI is uniquely positioned to turn visionary ideas into
                    virtual realities. Their staff is thoughtful and
                    exceptionally gifted at bringing concepts to fruition in
                    timely and captivating ways. I'd recommend using their
                    services and engaging them as thought partners.
                    <br />
                    <br />
                  </p>
                  <div id="image-caption" className="pt-lg-4 font-weight-bold">
                    KARIM FARISHTA (#ArtForJustice Project)
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-caption mx-4">
                  <p>
                    I had a great feeling about the team at INVI from the minute
                    they grasped the project creatively and technically. They
                    were excellent listeners, communicators. They delivered
                    everything on time and did a superlative job that all our
                    clients are raving about. But the main thing I love about
                    them is they try and go above and beyond to accommodate your
                    project. Easy to work with, knowledgeable and also willing
                    to push themselves creatively. I believe their talents are
                    going to take them far and wide and we will be for sure,
                    doing more exciting projects with them.
                  </p>
                  <div id="image-caption" className="pt-lg-4 font-weight-bold">
                    ALEX RAY, Eye of the Huntress (Le Petit Trianon Project)
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-caption mx-4">
                  <p>
                    Tien and Afreen at INVI were an excellent resource for the
                    Southern Plains Museum and Cultural Center (SPMCC). INVI was
                    extremely responsive and worked collaboratively with the
                    project host, the Southern Apache Museum. INVI listened to
                    their wishes and concerns and approached the subject matter
                    with sensitivity. They delivered the project right on time
                    for Native American Heritage Month and we were amazed by the
                    virtual experience! -Houston Mayor's Office of Cultural
                    Affairs
                  </p>
                  <div id="image-caption" className="pt-lg-4 font-weight-bold">
                    HoustonMOCA, City of Houston (Southern Plains Museum and
                    Cultural Center Project)
                  </div>
                </div>
              </div>
            </div>{" "}
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
              {" "}
              <i className="fas fa-arrow-left fa-2x"></i>
            </a>{" "}
            <a className="carousel-control-next" href="#demo" data-slide="next">
              {" "}
              <i className="fas fa-arrow-right fa-2x"></i>
            </a>
          </div>
        </div>

        {/* <!-- =======  Testimonials ======= --> */}
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
