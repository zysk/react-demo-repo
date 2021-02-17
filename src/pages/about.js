import React from "react"
import Navbar from "../components/Navbar"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../components/styles.css"
const about = ({ data }) => {
  return (
    <div className="testimonials">
      <Navbar />
      <h3 className="text-center ">Testimonials</h3>
      <div
        id="carouselExampleControls"
        className="carousel slide comments"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item text-center pt-5 active">
            <Image fixed={data.image.childImageSharp.fixed} className="mb-3" />
            <p className="mt-5">
              Some representative placeholder content for the first slide.
            </p>
            <h6>ANI</h6>
          </div>
          <div class="carousel-item text-center pt-5 ">
            <Image fixed={data.image.childImageSharp.fixed} className="mb-3" />
            <p className="mt-5">
              Some representative placeholder content for the first slide.
            </p>
            <h6>ANI</h6>
          </div>
          <div class="carousel-item text-center pt-5 ">
            <Image fixed={data.image.childImageSharp.fixed} className="mb-3" />
            <p className="mt-5">
              Some representative placeholder content for the first slide.
            </p>
            <h6>ANI</h6>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}
export const query = graphql`
  {
    icon: file(relativePath: { eq: "quotes-icon.png" }) {
      childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`
export default about
