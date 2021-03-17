import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../components/main.css"
import "../components/index.css"

const stories = ({ data }) => {
  return (
    <div class="stories">
      <Navbar />
      {/* <!--====== Graphics Section======--> */}
      <section class="container py-5 mt-lg-4">
        <div class="row d-flex justify-content-between align-items-center">
          <div class="col-md-5 text-left pt-5 pt-lg-0 ">
            <h1 class="title m-0 pb-4 pb-md-0">Read what INVI has to say</h1>
          </div>
          <div class="col-md-6">
            <Image
              fluid={data.image.childImageSharp.fluid}
              alt="Graphics Image"
            />
          </div>
        </div>
      </section>
      {/* <!--====== Graphics Section======--> */}
      <Footer />
    </div>
  )
}
export const query = graphql`
  {
    image: file(relativePath: { eq: "stories-graphics.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default stories
