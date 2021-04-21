import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../components/main.css"

const drawing = ({ data }) => {
  return (
    <div className="works">
      <div className="projects">
        <Navbar />
        <div className=" d-flex flex-wrap">
          <div className="d-flex col-12 align-items-center justify-content-center">
            <h1 className="title  pt-5 text-lg-left text-uppercase text-center">
              {data.project.projectTitle}
            </h1>
          </div>
        </div>
      </div>
      {/* <!--========Video Section=======--> */}
      <section className="pt-5 pb-2">
        <div className="works-video embed-responsive embed-responsive-16by9">
          <iframe src={data.project.video.description}></iframe>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-between  py-2 flex-wrap">
            <div className="col-md-4 col-12">
              <p className="small-info text-justify decription">
                {" "}
                <span className="font-weight-bold pr-2">PRODUCT: </span>
                {data.project.product}
              </p>
            </div>
            <div className="col-md-4 col-12">
              <p className="small-info text-justify decription d-flex justify-content-md-center">
                {" "}
                <span className="font-weight-bold pr-2">
                  CLIENT:{" "}
                  <span className="font-weight-normal pl-md-2">
                    {" "}
                    {data.project.client}
                  </span>
                </span>
              </p>
            </div>
            <div className="col-md-4 col-12 d-flex justify-content-md-end">
              <p className="small-info text-justify decription">
                {" "}
                <span className="font-weight-bold pr-2">LAUNCHED: </span>
                {data.project.launched}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!--========Video Section=======--> */}

      {/* <!-- ======= Product Section ======= --> */}

      <section className="product container py-md-5 mt-md-5">
        <div className="row">
          <div className="col-md-5 my-md-0 my-3 d-flex justify-content-center">
            <h2
              className="title text-center text-lg-left text-center text-md-left"
              dangerouslySetInnerHTML={{
                __html: data.project.contentTitle1.childMarkdownRemark.html,
              }}
            ></h2>
          </div>
          <div className="description col-md-7 text-justify">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  data.project.contentDescription1.childMarkdownRemark.html,
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* <!-- ======= Product Section =======--> */}
      {/* <!--======== Credits==========--> */}
      <section className="container my-5">
        <div className="row text-center d-flex justify-content-center">
          <div className="col-md-8">
            <h4 className="pb-3">
              <u>{data.project.credits}</u>
            </h4>
            <div
              className="description"
              dangerouslySetInnerHTML={{
                __html: data.project.creditsContent.childMarkdownRemark.html,
              }}
            ></div>
          </div>
          <div className="col-md-8 py-4 text-center">
            <div className="row d-flex text-center justify-content-center align-itemms-center">
              {data.project.creditsImages.map(image => {
                return (
                  <div className="col-md-3 pb-4" key={image.id}>
                    <a target="_blank" href="#">
                      <img
                        src={image.file.url}
                        alt={image.title}
                        className="img-fluid"
                      />
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
          <div
            className="col-md-8 description"
            dangerouslySetInnerHTML={{
              __html: data.project.creditsLinks.childMarkdownRemark.html,
            }}
          ></div>
        </div>
      </section>
      {/* <!--======== Credits==========--> */}

      {/* <!-- ======= Images Section ======= --> */}

      <div className="images container py-md-5">
        <div className="row d-flex align-items-center justify-content-md-between">
          {data.project.images.map(image => {
            return (
              <div className="col-md-6 pb-5  zoom" key={image.id}>
                <Image
                  fluid={image.fluid}
                  alt={image.title}
                  className="img-fluid p-4"
                />
              </div>
            )
          })}
        </div>
      </div>

      {/* <!-- ======= Images Section =======--> */}
      {/* <!--======= Creative Process=======--> */}
      <section className="product container py-md-5">
        <div className="row ">
          <div className="col-md-5 my-md-0 my-3 ">
            <h2
              className="title text-center text-lg-left"
              dangerouslySetInnerHTML={{
                __html: data.project.contentTitle2,
              }}
            ></h2>
          </div>
          <div
            className="description col-md-7 text-justify"
            dangerouslySetInnerHTML={{
              __html: data.project.contentDescription2.childMarkdownRemark.html,
            }}
          ></div>
        </div>
      </section>
      {/* 
    <!--======= Creative Process=======--> */}

      {/* <!--=========Pagination Buttons=======--> */}
      <div className="container py-3">
        <div className="row ">
          <div className="col-12 pt-lg-5 pb-lg-3 d-flex justify-content-between">
            <ul className="pagination">
              <li className="page-item">
                <a
                  href={data.project.prevLink}
                  className="page-link"
                  aria-label="Previous"
                >
                  <i className="fas fa-arrow-left" aria-hidden="true"></i>
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link text-center"
                  href={data.project.prevLink}
                >
                  <span>Prev </span>
                  <br />
                  <span className="project-title text-dark font-weight-bold">
                    {data.project.prevLinkTitle}
                  </span>
                </a>
              </li>
            </ul>
            <ul className="pagination">
              <li className="page-item">
                <a
                  className="page-link text-center"
                  href={data.project.nextLink}
                >
                  Next <br />
                  <span className="project-title text-dark font-weight-bold ">
                    {data.project.nextLinkTitle}
                  </span>
                </a>
              </li>
              <li className="page-item">
                <a
                  href={data.project.nextLink}
                  className="page-link"
                  aria-label="Next"
                >
                  <span aria-hidden="true">
                    {" "}
                    <i className="fas fa-arrow-right " aria-hidden="true"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* // <!--=========Pagination Buttons=======--> */}
      <Footer data1={data} />
    </div>
  )
}
export const query = graphql`
  query GetProject5($slug: String) {
    contact: contentfulContactFooter {
      email
      copyright
      phoneLink
      phone
      mailToLink
      location
    }
    project: contentfulSouthernPlainsMuseumProject(slug: { eq: $slug }) {
      projectTitle
      product
      client
      launched
      contentDescription1 {
        childMarkdownRemark {
          html
        }
      }
      contentTitle1 {
        childMarkdownRemark {
          html
        }
      }
      video {
        file {
          url
        }
        description
      }
      images {
        title
        fluid {
          ...GatsbyContentfulFluid
        }
        id
      }
      contentDescription2 {
        childMarkdownRemark {
          html
        }
      }
      contentTitle2
      prevLinkTitle
      prevLink
      nextLinkTitle
      nextLink
      credits
      creditsContent {
        childMarkdownRemark {
          html
        }
      }
      creditsImages {
        fluid {
          ...GatsbyContentfulFluid
        }
        file {
          url
        }
        id
        title
      }
      creditsLinks {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
export default drawing
