import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../components/main.css"
import "../components/index.css"
import tiensvg from "../images/tien-img.svg"
import afreensvg from "../images/afreen-ali.svg"
import afreengif from "../images/afreen-ali.gif"
import melinachiblisvg from "../images/melinachibli.png"
import melinachibligif from "../images/melina-chibli.gif"
import desireesvg from "../images/desiree.jpg"
import desireegif from "../images/desiree-moraes.gif"
import maitesvg from "../images/maite.svg"
import maitegif from "../images/maite.gif"
import masumsvg from "../images/masum.svg"
import masumgif from "../images/masum.gif"
import karensvg from "../images/karen.jpg"
import karengif from "../images/karen-arroijin.gif"
import tiengif from "../images/tien.gif"

const about = ({ data }) => {
  return (
    <div className="about">
      <Navbar className="About" />
      <section className="container py-5 mt-lg-4">
        <div className="row d-flex align-items-center justify-content-between">
          <div className="col-lg-6 order-lg-12">
            <Image fluid={data.image.childImageSharp.fluid} alt="Our Story" />
          </div>
          <div className="col-lg-5 text-left pt-5 pt-lg-0 order-lg-1">
            <h1 className="title text-center text-lg-left text-center text-lg-left m-0 pb-4 pb-lg-0">
              OUR STORY
            </h1>
            <p className="py-lg-5 description text-justify">
              Founded in March 2020, INVI is a Virtual Experience Design Studio
              that helps clients create virtual experiences through
              architecture, storytelling, and design. Our innovative visuals
              strengthen connectivity while effectively presenting information
              in an interactive and immersive way. Technology has encouraged us
              to experience virtual platforms beyond the physical boundaries.
              Therefore, INVI aims to create innovative virtual experiences that
              emphasize the client’s vision or content in the most effective and
              visually stunning way.
            </p>
          </div>
        </div>
      </section>
      {/* Our Story */}

      {/* <!-- ======= Team ======= --> */}
      <section className="container py-5 team">
        <div className="row justify-content-between">
          <div className="col-md-4 d-flex flex-column justify-content-between team-col px-0 p-4 mb-4 mb-md-0">
            <div>
              <h1 className="team-title title mb-2 pb-4 pb-md-0">
                MEET THE TEAM
              </h1>
            </div>
            <p className="team-description decription">
              INVI is a team of thinkers and designers from all parts of the
              world. We are a family of many cultures and languages, working
              together to create something unimaginable.
            </p>
          </div>

          <div className="col-md-4 px-0 text-center pb-4 mb-4 mb-md-0">
            <img
              src={tiensvg}
              alt="Giangtien Nguyen"
              className="img-fluid tien static"
            />
            <img
              src={tiengif}
              alt="Giangtien Nguyen"
              className="img-fluid tien active"
            />
            <h5 className="pt-4">Giangtien Nguyen (Tien)</h5>
            <p>Co Founder | CEO</p>
          </div>

          <div className="col-md-4 px-0 text-center pb-4 mb-4 mb-md-0">
            <img
              src={afreensvg}
              alt="Afreen Ali"
              className="img-fluid static"
            />
            <img
              src={afreengif}
              alt="Afreen Ali"
              className="img-fluid active"
            />
            <h5 className="pt-4">Afreen Ali</h5>
            <p>Co-Founder | CVO</p>
          </div>

          <div className="col-md-4 px-0 text-center pb-4 my-2 my-md-5">
            <img
              src={melinachiblisvg}
              alt="Melina Chibli"
              className="img-fluid static"
            />
            <img
              src={melinachibligif}
              alt="Melina Chibli"
              className="img-fluid active"
            />
            <h5 className="pt-4">Melina Chibli</h5>
            <p>Marketing Associate</p>
          </div>
          <div className="col-md-4 px-0 text-center pb-4 my-2 my-md-5">
            <img
              src={desireesvg}
              alt="Melina Chibli"
              className="img-fluid static"
            />
            <img
              src={desireegif}
              alt="Melina Chibli"
              className="img-fluid active"
            />
            <h5 className="pt-4">Desiree Moraes</h5>
            <p>Visual Developer | Project Manager</p>
          </div>

          <div className="col-md-4 px-0 text-center pb-4 my-2 my-md-5">
            <img
              src={maitesvg}
              alt="Maite Mugica"
              className="img-fluid static"
            />
            <img
              src={maitegif}
              alt="Maite Mugica"
              className="img-fluid active"
            />
            <h5 className="pt-4">Maite Mugica</h5>
            <p>Visual Developer</p>
          </div>

          <div className="col-md-4 px-0 text-center pb-4 my-2 my-md-3">
            <img
              src={masumsvg}
              alt="Aminul Karim Masum"
              className="img-fluid static"
            />
            <img
              src={masumgif}
              alt="Aminul Karim Masum"
              className="img-fluid active"
            />
            <h5 className="pt-4">Aminul Karim Masum</h5>
            <p>Visual Developer</p>
          </div>

          <div className="col-md-4 px-0 text-center pb-4 my-2 my-md-3">
            <img
              src={karensvg}
              alt="Karen Arrioja"
              className="img-fluid static"
            />
            <img
              src={karengif}
              alt="Karen Arrioja"
              className="img-fluid active"
            />
            <h5 className="pt-4">Karen Arrioja</h5>
            <p>Visual Developer</p>
          </div>

          <div className="col-md-4"></div>
        </div>
      </section>
      {/* <!-- ======= Team ======= --> */}

      <Footer />
    </div>
  )
}
export const query = graphql`
  {
    image: file(relativePath: { eq: "our-story.png" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default about
