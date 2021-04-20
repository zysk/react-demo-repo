import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../components/main.css"

const services = ({ data }) => {
  return (
    <div>
      <div className="services">
        <Navbar />

        {/* <!-- =======  Testimonials ======= --> */}

        <div className="container row-space my-lg-4 pb-5">
          <h1 className="title text-center">TESTIMONIALS</h1>
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
    testimonials: allContentfulServicesTestimonials {
      edges {
        node {
          descBy
          description {
            childMarkdownRemark {
              html
            }
            id
          }
        }
      }
    }
  }
`
export default services
