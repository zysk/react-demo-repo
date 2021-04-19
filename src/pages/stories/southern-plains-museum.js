import React from "react"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../../components/main.css"

const artForJustice = ({ data }) => {
  return (
    <div className="stories">
      <Navbar />

      {/* <!-- ======= Stories ======= --> */}
      <section className="container py-5">
        <div className="row text-center justify-content-center">
          <div className="col-md-8">
            <Image
              fluid={data.story.image1.fluid}
              alt={data.story.image1.title}
              className="img-fluid"
            />

            <h3 className="font-weight-bold pt-5 px-lg-4 title">
              {data.story.title}
            </h3>
            <h6 className="py-3 text-muted">{data.story.date}</h6>

            <div
              className="decription text-justify pb-4"
              dangerouslySetInnerHTML={{
                __html: data.story.description1.childMarkdownRemark.html,
              }}
            ></div>
            <Image
              fluid={data.story.image2.fluid}
              alt={data.story.image1.title}
              className="img-fluid py-3"
            />
            <div
              className="decription text-justify pt-4"
              dangerouslySetInnerHTML={{
                __html: data.story.description2.childMarkdownRemark.html,
              }}
            ></div>
            {/* <p
              className="decription text-justify"
              dangerouslySetInnerHTML={{
                __html: data.story.description.childMarkdownRemark.html,
              }}
            ></p> */}
          </div>
        </div>
      </section>
      {/* <!-- ======= Stories ======= --> */}
      {/* <!--=========Pagination Buttons=======--> */}
      <div className="container py-3">
        <div className="row ">
          <div className="col-12 pt-lg-5 pb-lg-3 d-flex justify-content-between">
            <ul className="pagination">
              <li className="page-item">
                <a
                  href={data.story.prevLink}
                  className="page-link"
                  aria-label="Previous"
                >
                  <i className="fas fa-arrow-left" aria-hidden="true"></i>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link text-center" href={data.story.prevLink}>
                  <span>Prev </span>
                </a>
              </li>
            </ul>
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link text-center" href={data.story.nextLink}>
                  Next
                </a>
              </li>
              <li className="page-item">
                <a
                  href={data.story.nextLink}
                  className="page-link"
                  aria-label="Next"
                >
                  <span aria-hidden="true">
                    <i className="fas fa-arrow-right " aria-hidden="true"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!--=========Pagination Buttons=======--> */}
      <Footer />
    </div>
  )
}
export const query = graphql`
  {
    story: contentfulSouthernPlainsMuseum(
      slug: { eq: "southern-plains-museum" }
    ) {
      image1 {
        title
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      image2 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      title
      slug
      date
      description1 {
        childMarkdownRemark {
          html
        }
      }
      description2 {
        childMarkdownRemark {
          html
        }
      }
      nextLink
      prevLink
    }
  }
`
export default artForJustice
