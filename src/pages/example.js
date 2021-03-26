import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../components/main.css"
import "../components/index.css"
import "../components/lightbox"

const index = ({ data }) => {
  return (
    <div className="works">
      <Navbar />
      <section className="circle-section pt-5" id="portfolio">
        <h2 className="title text-center">OUR WORKS</h2>
        <div class="images container py-md-5">
          <div class="row d-flex align-items-center">
            <div class="col-md-6 pb-5 zoom">
              <Image
                fluid={data.drawing.childImageSharp.fluid}
                class="img-fluid"
                alt="image2"
                // onclick="openLightbox();toSlide(1)"
                // class="hover-shadow preview"
              />
            </div>
            <div class="col-md-6 pb-5 zoom">
              <Image
                fluid={data.drawing.childImageSharp.fluid}
                alt="image1"
                class="img-fluid"
                onClick="openLightbox();toSlide(2)"
                class="hover-shadow preview"
              />
            </div>
            <div class="col-md-6 pb-5 zoom">
              <Image
                fluid={data.drawing.childImageSharp.fluid}
                alt="image1"
                class="img-fluid"
                onclick="openLightbox();toSlide(3)"
                class="hover-shadow preview"
              />
            </div>
            <div class="col-md-6 pb-5 zoom">
              <Image
                fluid={data.drawing.childImageSharp.fluid}
                alt="image1"
                class="img-fluid"
                onclick="openLightbox();toSlide(4)"
                class="hover-shadow preview"
              />
            </div>
          </div>
        </div>

        {/* <!--=====Light Box=========--> */}
        <div id="Lightbox" class="modal">
          <span class="close pointer" onclick="closeLightbox()">
            &times;
          </span>
          <div class="modal-content">
            <div class="slides">
              <Image
                fluid={data.drawing.childImageSharp.fluid}
                class="image-slide"
                alt="Image1"
              />
            </div>
            <div class="slides">
              <Image
                fluid={data.drawing.childImageSharp.fluid}
                class="image-slide"
                alt="Image2"
              />
            </div>
            <div class="slides">
              <Image
                fluid={data.drawing.childImageSharp.fluid}
                class="image-slide"
                alt="Image1"
              />
            </div>

            <a class="previous" onclick="changeSlide(-1)">
              &#10094;
            </a>
            <a class="next" onclick="changeSlide(1)">
              &#10095;
            </a>
          </div>
        </div>
      </section>

      <Footer classNameNameNameName="contact-footer" />
    </div>
  )
}
export const query = graphql`
  {
    drawing: file(relativePath: { eq: "archvilla/image1.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default index
