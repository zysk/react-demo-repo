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

        {/* <!-- =======  Testimonials ======= --> */}

        <div className="container row-space my-lg-4 pb-5">
          <h1 className="title text-center">TESTIMONIALS</h1>
          <div
            id="demo"
            className="carousel slide mt-lg-2"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              {data.testimonials.edges.map(({ node: testimonial }) => {
                return (
                  <div className="carousel-item active">
                    <div
                      id="carousel-caption mx-4"
                      className="pt-lg-4 font-weight-bold"
                      key={testimonial.id}
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            testimonial.description.childMarkdownRemark.html,
                        }}
                      ></div>
                      <div
                        id="image-caption"
                        className="pt-lg-4 font-weight-bold"
                      >
                        {testimonial.descBy}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
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
