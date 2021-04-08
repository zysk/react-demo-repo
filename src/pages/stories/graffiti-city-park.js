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
              fluid={data.image1.childImageSharp.fluid}
              alt="Art For Museum"
              alt="Reimagine Virtual Art"
              className="img-fluid"
            />

            <h3 className="font-weight-bold pt-5 px-lg-4 title">
              Graffiti City Park and Virtual Real Estate
              <br />
              Leaving your Digital Footprints
            </h3>
            <h6 className="py-3 text-muted">
              AUGUST 02, 2020 IN STORY TELLING
            </h6>
            <p className="decription text-justify">
              Graffiti artists find a way to bring life to the static buildings
              as architecture takes a simplified approach. The colorful paint
              parades across the façade of the local corner store or a
              warehouse, without their consent, the work reaches many audiences.
              The realization of the artwork on the street is controversial.
              While some graffiti is plastered without permission of the
              occupants of the building, often graffiti artists are commissioned
              by the city or the property owner. The work yells for attention as
              it speaks out from in-between the building seams. This type of
              work is highly physical and transforming it into an interactive
              digital space is a challenge that INVI is taking on.
            </p>
            <p className="decription text-justify font-italic">
              INVI begins to ask a series of questions:
            </p>
            <p className="decription text-justify">
              Through the chaos of the pandemic, how does an artist avoid from
              ceasing to exist?
              <br />
              What type of digital footprint can an artist have?
              <br />
              How is it different from a traditional website or portfolio?
              <br />
              What happens when we create a cityscape as a canvas for Graffiti
              Artists?
              <br />
            </p>
            <p className="decription text-justify">
              The Graffiti City Park project is an urban virtual environment
              that allows graffiti artists to showcase, collaborate, and leave
              their digital footprints in the virtual space. The initiative also
              encourages museums, galleries, creators, artists, and businesses
              to lease out these virtual real estates to showcase their work or
              product, maximizing their global presence in an interactive and
              one-of-its-kind collective space. INVI would like to reimagine our
              digital social connections with an immersive virtual environment
              where you can have access to art, commerce, knowledge, and
              information.
            </p>
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
                  href="/stories/virtual-southern-plains/"
                  className="page-link"
                  aria-label="Previous"
                >
                  <i className="fas fa-arrow-left" aria-hidden="true"></i>
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link text-center"
                  href="/stories/virtual-southern-plains/"
                >
                  <span>Prev </span>
                </a>
              </li>
            </ul>
            <ul className="pagination">
              <li className="page-item">
                <a
                  className="page-link text-center"
                  href="/stories/reimagine-virtual-art/"
                >
                  Next
                </a>
              </li>
              <li className="page-item">
                <a
                  href="/stories/reimagine-virtual-art/"
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
      {/* <!--=========Pagination Buttons=======--> */}
      <Footer />
    </div>
  )
}
export const query = graphql`
  {
    image1: file(relativePath: { eq: "stories/graffiti-2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default artForJustice
