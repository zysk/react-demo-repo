import React from "react"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../../components/main.css"
import SEO from "../../components/seo"

const index = ({ data }) => {
  return (
    <div className="works">
      <SEO title="Works" />
      <Navbar />
      <section className="circle-section" id="portfolio">
        <div className="container pb-5 mb-5 mb-md-0">
          <div className="content-section-heading text-center">
            <h3 className="my-5 mb-lg-0 title">OUR WORKS</h3>
          </div>
          <div className="row d-flex justify-content-md-start justify-content-center align-items-center pb-md-3">
            <div className="col-md-1"></div>
            <div className="col-md-3 px-5 px-lg-0  pb-5 pb-lg-0">
              <div className="content_img">
                <a className="item" href="/works/archvilla">
                  <Image
                    fluid={data.archvilla.project.fluid}
                    alt="Archvilla"
                    className="img-fluid image"
                  />
                </a>
                <div className="middle">
                  <div className="text text-uppercase font-weight-bold pt-5 pt-md-0 pl-lg-3 pl-xl-4">
                    {data.archvilla.name}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-3  pt-5 pt-lg-0 pb-5 pb-lg-0 first-col px-5 px-lg-0">
              <div className="content_img">
                <a className="item" href="/works/southern-plains-museum">
                  <Image
                    fluid={data.southern.project.fluid}
                    alt="Southern Plains Museum and Cultural Center"
                    className="img-fluid image m-md-4"
                  />
                </a>
                <div className="middle">
                  <div className="text text-uppercase font-weight-bold w-100 pt-5 pt-md-0 pl-md-5">
                    {data.southern.name}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-center align-items-center pb-md-3 pt-4 pt-md-0">
            {/* <div className="col-2"></div> */}
            <div className="col-md-4 mt-5 pt-5  pb-5 pb-lg-0 mt-md-0 pt-md-0 px-5 px-lg-0">
              <div className="content_img">
                <a className="item" href="/works/lepetit-trianon">
                  <Image
                    fluid={data.lepetit.project.fluid}
                    alt="Le Petit Trianon"
                    className="img-fluid image m-md-5"
                  />
                </a>
                <div className="middle-1">
                  <div className="text text-uppercase font-weight-bold  pt-5 pt-md-0">
                    {data.lepetit.name}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-3 mt-5  pb-5 pb-lg-0 pt-5 px-5 px-lg-0">
              <div className="content_img">
                <a className="item" href="/works/graffiti-city-park">
                  <Image
                    fluid={data.graffiti.project.fluid}
                    alt="GRAFFITI CITY PARK"
                    className="img-fluid image"
                  />
                </a>
                <div className="middle">
                  <div className="text text-uppercase font-weight-bold pl-xl-2 pt-5 pt-md-0">
                    {data.graffiti.name}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-between align-items-center py-md-0">
            {/* <div className="col-md-1"></div> */}
            <div className="col-md-3  pt-5  pb-5 pb-lg-0 pt-md-0 first-col px-5 px-lg-0">
              <div className="content_img">
                <a className="item" href="/works/artForJustice">
                  <Image
                    fluid={data.art.project.fluid}
                    alt="ArtForJustice"
                    className="img-fluid image m-md-4"
                  />
                </a>
                <div className="middle-3">
                  <div className="text text-uppercase font-weight-bold pt-5 pt-md-0  ">
                    {data.art.name}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5   pb-5 pb-lg-0 pt-5 mt-md-0 pt-md-0 px-5 px-lg-0">
              <div className="content_img">
                <a className="item" href="/works/granada-theatre">
                  <Image
                    fluid={data.granada.project.fluid}
                    alt="Granada Theatre"
                    className="img-fluid image m-md-5"
                  />
                </a>
                <div className="middle">
                  <div className="text text-uppercase font-weight-bold pt-5 pt-md-0 pl-md-5 pl-lg-4 pl-xl-5">
                    {data.granada.name}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>

          <div className="row d-flex justify-content-xl-between justify-content-md-between align-items-start last-row">
            <div className="col-md-6"></div>
            <div className="col-md-3 mt-5 pt-5   pb-5 pb-lg-0 last-col px-5 px-lg-0">
              <div className="content_img">
                <a className="item" href="/works/drawing-gallery">
                  <Image
                    fluid={data.drawing.project.fluid}
                    alt="Drawing Gallery"
                    className="img-fluid image mr-5 m-xl-3"
                  />
                </a>
                <div className="middle-2">
                  <div className="text text-uppercase font-weight-bold pr-md-4 pr-xl-0 pt-5">
                    {data.drawing.name}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    archvilla: contentfulWorksMainPage(name: { eq: "ARCHVILLA" }) {
      name
      project {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }

    granada: contentfulWorksMainPage(name: { eq: "GRANADA THEATRE" }) {
      name
      project {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    graffiti: contentfulWorksMainPage(name: { eq: "GRAFFITI CITY PARK" }) {
      name
      project {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    southern: contentfulWorksMainPage(
      name: { eq: "SOUTHERN PLAINS MUSEUM AND CULTURAL CENTER" }
    ) {
      name
      project {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    drawing: contentfulWorksMainPage(name: { eq: "DRAWING GALLERY" }) {
      name
      project {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    lepetit: contentfulWorksMainPage(name: { eq: "LE PETIT TRIANON" }) {
      name
      project {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    art: contentfulWorksMainPage(name: { eq: "#ARTFORJUSTICE" }) {
      name
      project {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
export default index
