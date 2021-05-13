import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../components/main.css"
import video1 from "../images/animationhover.mp4"
import video2 from "../images/virtualworld.mp4"
import HoverVideoPlayer from "react-hover-video-player"
import SEO from "../components/seo"
const services = ({ data }) => {
  return (
    <div>
      <div className="services">
        <SEO title="Services" />

        <Navbar />
        <h1 className="text-center title pt-lg-5 pt-4 text-uppercase">
          {data.services.title}
        </h1>
        <p className="text-center title-desc ">{data.services.subtitle}</p>

        <div className="container py-3 py-lg-5">
          <div className="row ">
            <div className="col-12">
              <Image fluid={data.services.bannerImage.fluid} alt="services" />
            </div>
          </div>
        </div>

        {/* <!-- =======  Services ======= --> */}
        <section className="container">
          <div className="  d-flex flex-wrap justify-content-between align-items-center">
            <div className="col-lg-6 d-flex justify-content-center justify-content-lg-start py-5 py-lg-0 mx-lg-0 px-lg-0">
              <div className="rc">
                <HoverVideoPlayer
                  videoSrc={data.services.animationVideo.file.url}
                  className="video-circle animation-video"
                  muted
                  loop
                />
              </div>
            </div>
            <div className=" col-lg-5">
              <h1 className="title text-center text-lg-left text-center text-lg-left">
                {data.services.animationTitle}
              </h1>
              <div className="divider"></div>
              <p className="description py-4 text-justify">
                {data.services.animationDescription.animationDescription}
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
                  videoSrc={data.services.virtualVideo.file.url}
                  className="video-circle virtual-video"
                  muted
                  loop
                />
              </div>
            </div>
            <div className="col-lg-5 order-lg-1">
              <h1 className="title text-center text-lg-left text-center text-lg-left">
                {data.services.virtualTitle}
              </h1>
              <div className="divider"></div>
              <p className="description py-4 text-justify">
                {data.services.virtualDescription.virtualDescription}
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
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        data.testimonials1.description.childMarkdownRemark.html,
                    }}
                  ></div>
                  <div id="image-caption" className="pt-lg-4 font-weight-bold">
                    {data.testimonials1.descBy}
                  </div>
                </div>
              </div>
              {data.testimonials.edges.map(({ node: testimonial }) => {
                return (
                  <div className="carousel-item ">
                    <div className="carousel-caption mx-4" key={testimonial.id}>
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
      </div>
      <Footer data1={data} />
    </div>
  )
}
export const query = graphql`
  {
    contact: contentfulContactFooter {
      email
      copyright
      phoneLink
      phone
      mailToLink
      location
    }
    testimonials1: contentfulServicesTestimonials(
      title: { eq: "TESTIMONIALS 1" }
    ) {
      description {
        childMarkdownRemark {
          html
        }
      }
      descBy
    }
    testimonials: allContentfulServicesTestimonials(
      filter: { title: { ne: "TESTIMONIALS 1" } }
    ) {
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
    services: contentfulServices {
      title
      subtitle
      bannerImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      animationTitle
      animationVideo {
        file {
          url
        }
      }
      animationDescription {
        animationDescription
      }
      virtualTitle
      virtualVideo {
        file {
          url
        }
      }
      virtualDescription {
        virtualDescription
      }
    }
    testimonials1: contentfulServicesTestimonials(
      title: { eq: "TESTIMONIALS 1" }
    ) {
      description {
        childMarkdownRemark {
          html
        }
      }
      descBy
    }
  }
`
export default services
