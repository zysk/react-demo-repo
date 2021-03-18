import React from "react"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../../components/main.css"
import "../../components/index.css"

const index = ({ data }) => {
  return (
    <div className="works">
      <Navbar />
      {/* <!-- ======= Menu Section ======= --> */}

      <section className="circle-section" id="portfolio">
        <div className="container py-5">
          <div className="content-section-heading text-center">
            <h3 className="my-5 title"></h3>
          </div>
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-lg-4 col-md-6 pb-5 mb-5 ">
              <a className="circle-item" href="./drawing">
                <div className="caption">
                  <div className="caption-content">
                    <div className="caption-heading h2 font-weight-bold">
                      DRAWING GALLERY
                    </div>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias at nulla pariatur eveniet excepturi quas.
                    </p>
                  </div>
                </div>
                <Image
                  className="img-fluid "
                  fluid={data.drawing.childImageSharp.fluid}
                  alt="Drawing Gallery"
                />
              </a>
            </div>
            <div className="col-lg-4 col-md-6 pb-5 mb-5">
              <a className="circle-item" href="./artForJustice">
                <div className="caption">
                  <div className="caption-content">
                    <div className="caption-heading h2 font-weight-bold">
                      #ARTFORJUSTICE
                    </div>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias at nulla pariatur eveniet excepturi quas.
                    </p>
                  </div>
                </div>
                <Image
                  className="img-fluid "
                  fluid={data.art.childImageSharp.fluid}
                  alt="#ARTFORJUSTICE"
                />
              </a>
            </div>
            <div className="col-lg-4 col-md-6 pb-5 mb-5 ">
              <a className="circle-item" href="./granada-theatre">
                <div className="caption">
                  <div className="caption-content">
                    <div className="caption-heading h2 font-weight-bold">
                      GRANADA THEATRE
                    </div>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias at nulla pariatur eveniet excepturi quas.
                    </p>
                  </div>
                </div>
                <Image
                  className="img-fluid "
                  fluid={data.granada.childImageSharp.fluid}
                  alt="GRANADA THEATRE"
                />
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <a className="circle-item" href="./graffiti-city-park">
                <div className="caption">
                  <div className="caption-content">
                    <div className="caption-heading h2 font-weight-bold">
                      GRAFFITI CITY PARK
                    </div>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias at nulla pariatur eveniet excepturi quas.
                    </p>
                  </div>
                </div>
                <Image
                  className="img-fluid "
                  fluid={data.graffiti.childImageSharp.fluid}
                  alt="GRAFFITI CITY PARK"
                />
              </a>
            </div>
            <div className="col-lg-4 col-md-6  ">
              <a className="circle-item" href="./lepetit-trianon">
                <div className="caption">
                  <div className="caption-content">
                    <div className="caption-heading h2 font-weight-bold">
                      LE PETIT TRIANON EXHIBITION
                    </div>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias at nulla pariatur eveniet excepturi quas.
                    </p>
                  </div>
                </div>
                <Image
                  className="img-fluid "
                  fluid={data.lepetit.childImageSharp.fluid}
                  alt="LE PETIT TRIANON EXHIBITION"
                />
              </a>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <a className="circle-item" href="./southern-plains-museum">
                <div className="caption">
                  <div className="caption-content">
                    <div className="caption-heading h2 font-weight-bold">
                      SOUTHERN PLAINS MUSEUM AND CULTURAL CENTER
                    </div>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias at nulla pariatur eveniet excepturi quas.
                    </p>
                  </div>
                </div>
                <Image
                  className="img-fluid "
                  fluid={data.southern.childImageSharp.fluid}
                  alt="SOUTHERN PLAINS MUSEUM"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* 
<!-- ======= Menu Section =======--> */}
      {/* <!--====== Pagination ==========--> */}
      <div className="d-flex justify-content-center py-lg-5">
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link" aria-label="Previous">
              <i className="fas fa-arrow-left" aria-hidden="true"></i>
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link" aria-label="Next">
              <span aria-hidden="true">
                {" "}
                <i className="fas fa-arrow-right " aria-hidden="true"></i>
              </span>
            </a>
          </li>
        </ul>
      </div>
      {/* // <!--====== Pagination ==========--> */}
      <Footer classNameName="contact-footer" />
    </div>
  )
}
export const query = graphql`
  {
    drawing: file(
      relativePath: { eq: "archvilla/circle-drawing-gallery.png" }
    ) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    art: file(relativePath: { eq: "archvilla/circle-art-for-justice.png" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    granada: file(relativePath: { eq: "archvilla/circle-granada.png" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    graffiti: file(relativePath: { eq: "archvilla/circle-graffitti.png" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    lepetit: file(relativePath: { eq: "archvilla/circle-lepetit.png" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    southern: file(
      relativePath: { eq: "archvilla/circle-southern-plains.png" }
    ) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default index
