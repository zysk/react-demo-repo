import React from "react"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../../components/main.css"
import "../../components/index.css"

const stories = ({ data }) => {
  return (
    <div className="stories">
      <Navbar />

      {/* <!-- ======= Stories ======= --> */}
      <section className="container py-5">
        <div className="row text-center justify-content-center pt-lg-5">
          <div className="col-md-10">
            <Image
              fluid={data.art.childImageSharp.fluid}
              alt="Art For Museum"
              className="img-fluid"
            />
          </div>
          <div className="col-md-9">
            <h3 className="font-weight-bold pt-5 px-lg-4 title">
              <a href="../stories/artForJustice/">
                #ArtForJustice Virtual Museum Launch <br />
                Commemorating George Floyd and Supporting the Black Lives Matter
                Movement
              </a>
            </h3>
            <h6 className="py-3 text-muted">JUNE 08, 2020 IN STORY TELLING</h6>
            <p className="description text-justify">
              INVI recently partnered with FORT BEND County to create a 360
              virtual art museum and curated art to commemorate George Floyd and
              the Black Lives Matter Movement as a sign of immense and heartfelt
              solidarity. We received an outpouring of artistic submissions from
              155 artists from 14 states (CA, CO, CT, DC, FL, GA, HI, MA, NC,
              NJ, TX, VA, WA, WI) and 6 countries (United States, Colombia,
              Bangladesh, France, India, and Wales), with individuals ages 1 to
              56 years old, We had over 160 art pieces in a 2-days call for
              submission.
            </p>
            <p className="py-3 font-weight-bold">
              <a href="../stories/artForJustice/">READ MORE</a>
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-center pt-lg-5 pb-lg-3">
          <ul className="pagination">
            <li className="page-item">
              <a href="./page-2" className="page-link" aria-label="Previous">
                <i className="fas fa-arrow-left" aria-hidden="true"></i>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="../stories/">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="./page-2">
                2
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="./page-3">
                3
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
      </section>
      {/* <!-- ======= Stories ======= --> */}
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
    art: file(relativePath: { eq: "stories/art-for-museum.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default stories
