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
      {/* <!--====== Graphics Section======--> */}
      <section className="container py-5 mt-lg-4">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-lg-5 text-lg-left text-center pt-5 pt-lg-0 ">
            <h1 className="title text-center text-lg-left m-0 pb-4 pb-md-0">
              Read what INVI has to say
            </h1>
          </div>
          <div className="col-lg-6 ">
            <Image
              fluid={data.image.childImageSharp.fluid}
              alt=""
              className="img-fluid"
              width="700"
            />
          </div>
        </div>
      </section>
      {/* <!--====== Graphics Section======--> */}

      {/* <!-- ======= Stories ======= --> */}
      <section className="container py-5">
        <div className="row text-center justify-content-center py-lg-5">
          <div className="col-md-10">
            <Image
              fluid={data.southernplains.childImageSharp.fluid}
              alt="Art For Museum"
              className="img-fluid"
            />
          </div>
          <div className="col-md-9">
            <h3 className="font-weight-bold pt-5 px-lg-4 title">
              <a href="../stories/virtual-southern-plains/">
                The First Virtual Southern Plains Museum and Cultural Center for
                Native Americans in Houston
              </a>
            </h3>
            <h6 className="py-3 text-muted">
              NOVEMBER 18, 2020 IN STORY TELLING
            </h6>
            <p className="description text-justify">
              INVI had an opportunity to collaborate with the City of Houston
              and Chance L. Landry, President of the Southern Apache Museum, to
              design and create the virtual Southern Plains Museum and Culture
              Center (SPMCC) for Native American Heritage Month. Our main
              purpose is to create a COVID-19 safe environment for the community
              while sharing the stories and history of the Native American
              community with the rest of the world.
            </p>
            <p className="py-3 font-weight-bold">
              <a href="../stories/virtual-southern-plains/">READ MORE</a>
            </p>
          </div>
        </div>
        <div className="row text-center justify-content-center pt-lg-5">
          <div className="col-md-10">
            <Image
              fluid={data.graffiti.childImageSharp.fluid}
              alt="Graffiti City Park"
              className="img-fluid"
            />
          </div>
          <div className="col-md-9">
            <h3 className="font-weight-bold pt-5 px-lg-4 title">
              <a href="../stories/graffiti-city-park/">
                Graffiti City Park and Virtual Real Estate
                <br />
                Leaving your Digital Footprints
              </a>
            </h3>
            <h6 className="py-3 text-muted">
              AUGUST 02, 2020 IN STORY TELLING
            </h6>
            <p className="description text-justify">
              Graffiti artists find a way to bring life to the static buildings
              as architecture takes a simplified approach. The colorful paint
              parades across the façade of the local corner store or a
              warehouse, without their consent, the work reaches many audiences.
              The realization of the artwork on the street is controversial.
              While some graffiti is plastered without permission of the
              occupants of the building, often graffiti artists are commissioned
              by the city or the property owner.
            </p>
            <p className="py-3 font-weight-bold">
              <a href="../stories/graffiti-city-park/">READ MORE</a>
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-center pt-lg-5 pb-lg-3">
          <ul className="pagination">
            <li className="page-item">
              <a href="./" className="page-link" aria-label="Previous">
                <i className="fas fa-arrow-left" aria-hidden="true"></i>
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="../stories/">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="./page-2">
                2
              </a>
            </li>
            <li className="page-item ">
              <a className="page-link" href="./page-3">
                3
              </a>
            </li>
            <li className="page-item">
              <a href="./page-2" className="page-link" aria-label="Next">
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
    southernplains: file(relativePath: { eq: "stories/southern-plains.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    graffiti: file(relativePath: { eq: "stories/graffiti-2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default stories
