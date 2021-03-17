import React from "react"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../../components/main.css"
import "../../components/index.css"

const index = ({ data }) => {
  return (
    <div class="works">
      <Navbar />
      {/* <!-- ======= Menu Section ======= --> */}

      <section class="circle-section" id="portfolio">
        <div class="container py-5">
          <div class="content-section-heading text-center">
            <h3 class="my-5 title"></h3>
          </div>
          <div class="row d-flex justify-content-between align-items-center">
            <div class="col-lg-4 col-md-6 pb-5 mb-5 ">
              <a class="circle-item" href="./drawing-gallery.html">
                <div class="caption">
                  <div class="caption-content">
                    <div class="caption-heading h2 font-weight-bold">
                      DRAWING GALLERY
                    </div>
                    <p class="mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias at nulla pariatur eveniet excepturi quas.
                    </p>
                  </div>
                </div>
                <Image
                  class="img-fluid "
                  fluid={data.drawing.childImageSharp.fluid}
                  alt="Drawing Gallery"
                />
              </a>
            </div>
            <div class="col-lg-4 col-md-6 pb-5 mb-5">
              <a class="circle-item" href="#!">
                <div class="caption">
                  <div class="caption-content">
                    <div class="caption-heading h2 font-weight-bold">
                      #ARTFORJUSTICE
                    </div>
                    <p class="mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias at nulla pariatur eveniet excepturi quas.
                    </p>
                  </div>
                </div>
                <Image
                  class="img-fluid "
                  fluid={data.art.childImageSharp.fluid}
                  alt="#ARTFORJUSTICE"
                />
              </a>
            </div>
            <div class="col-lg-4 col-md-6 pb-5 mb-5 ">
              <a class="circle-item" href="#!">
                <div class="caption">
                  <div class="caption-content">
                    <div class="caption-heading h2 font-weight-bold">
                      GRANADA THEATRE
                    </div>
                    <p class="mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias at nulla pariatur eveniet excepturi quas.
                    </p>
                  </div>
                </div>
                <Image
                  class="img-fluid "
                  fluid={data.granada.childImageSharp.fluid}
                  alt="GRANADA THEATRE"
                />
              </a>
            </div>
            <div class="col-lg-4 col-md-6">
              <a class="circle-item" href="#!">
                <div class="caption">
                  <div class="caption-content">
                    <div class="caption-heading h2 font-weight-bold">
                      GRAFFITI CITY PARK
                    </div>
                    <p class="mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias at nulla pariatur eveniet excepturi quas.
                    </p>
                  </div>
                </div>
                <Image
                  class="img-fluid "
                  fluid={data.graffiti.childImageSharp.fluid}
                  alt="GRAFFITI CITY PARK"
                />
              </a>
            </div>
            <div class="col-lg-4 col-md-6  ">
              <a class="circle-item" href="#!">
                <div class="caption">
                  <div class="caption-content">
                    <div class="caption-heading h2 font-weight-bold">
                      LE PETIT TRIANON EXHIBITION
                    </div>
                    <p class="mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias at nulla pariatur eveniet excepturi quas.
                    </p>
                  </div>
                </div>
                <Image
                  class="img-fluid "
                  fluid={data.lepetit.childImageSharp.fluid}
                  alt="LE PETIT TRIANON EXHIBITION"
                />
              </a>
            </div>
            <div class="col-lg-4 col-md-6 ">
              <a class="circle-item" href="#!">
                <div class="caption">
                  <div class="caption-content">
                    <div class="caption-heading h2 font-weight-bold">
                      SOUTHERN PLAINS MUSEUM AND CULTURAL CENTER
                    </div>
                    <p class="mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias at nulla pariatur eveniet excepturi quas.
                    </p>
                  </div>
                </div>
                <Image
                  class="img-fluid "
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
      <div class="d-flex justify-content-center py-lg-5">
        <ul class="pagination">
          <li class="page-item">
            <a href="#" class="page-link" aria-label="Previous">
              <i class="fas fa-arrow-left" aria-hidden="true"></i>
            </a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a href="#" class="page-link" aria-label="Next">
              <span aria-hidden="true">
                {" "}
                <i class="fas fa-arrow-right " aria-hidden="true"></i>
              </span>
            </a>
          </li>
        </ul>
      </div>
      {/* // <!--====== Pagination ==========--> */}
      <Footer className="contact-footer" />
    </div>
  )
}
export const query = graphql`
  {
    drawing: file(relativePath: { eq: "circle-drawing-gallery.png" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    art: file(relativePath: { eq: "circle-art-for-justice.png" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    granada: file(relativePath: { eq: "circle-granada.png" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    graffiti: file(relativePath: { eq: "circle-graffitti.png" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    lepetit: file(relativePath: { eq: "circle-lepetit.png" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    southern: file(relativePath: { eq: "circle-southern-plains.png" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default index
