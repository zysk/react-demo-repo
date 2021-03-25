import React from "react"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../../components/main.css"
import "../../components/index.css"

const artForJustice = ({ data }) => {
  return (
    <div className="stories">
      <Navbar />

      {/* <!-- ======= Stories ======= --> */}
      <section className="container py-5">
        <div className="row text-center justify-content-center">
          <div className="col-md-9">
            <Image
              fluid={data.image1.childImageSharp.fluid}
              alt="Art For Museum"
              alt="Reimagine Virtual Art"
              className="img-fluid"
            />
          </div>
          <div className="col-md-9">
            <h3 className="font-weight-bold pt-5 px-lg-4 title">
              The First Virtual Southern Plains Museum and Cultural Center for
              Native Americans in Houston
            </h3>
            <h6 className="py-3 text-muted">
              NOVEMBER 18, 2020 IN STORY TELLING
            </h6>
            <p className="decription text-justify">
              INVI had an opportunity to collaborate with the City of Houston
              and Chance L. Landry, President of the Southern Apache Museum, to
              design and create the virtual Southern Plains Museum and Culture
              Center (SPMCC) for Native American Heritage Month. Our main
              purpose is to create a COVID-19 safe environment for the community
              while sharing the stories and history of the Native American
              community with the rest of the world.
            </p>
            <p className="decription text-justify pb-md-5">
              INVI worked together with Chance L. Landry to design a virtual
              space that highlights the narrative and symbolic representation of
              the Native American community. Through the process, we had a
              chance to learn about the meanings and history behind each flower,
              plant, symbol, artifact, etc. It gave us an opportunity to not
              only educate ourselves but also a walk back into the past.
            </p>
            <Image
              fluid={data.image2.childImageSharp.fluid}
              alt="Art For Museum"
              alt="Reimagine Virtual Art"
              className="img-fluid py-5"
            />
            <p className="decription text-justify pt-3 pt-lg-5">
              The SPMCC’s design includes program spaces for Southern Apache
              Museum, American Indian Genocide Museum, Library, Garden, Health
              Clinic, Aztec Pyramid, and Powwow Arena. Each of these spaces is
              important to the community, visually representing a part of its
              history, culture, and resources. The virtual platform is an
              interactive walk-through experience, allowing visitors to explore
              and learn at their own pace. Virtual platforms allow for global
              accessibility from almost anywhere in the world at any time,
              strengthening our connectivity to the world while maximizing the
              spread of information and knowledge. We hope that this experience
              can be shared with friends and family during the days to come.
            </p>
            <p className="description text-left font-weight-bold py-4">
              Enter Virtual Museum:{" "}
              <span class="font-weight-normal">
                <a
                  href="http://www.apachemuseum.org/southern-plains-museum-and-cultural-center.html
                    "
                >
                  http://www.apachemuseum.org/southern-plains-museum-and-cultural-center.html
                </a>
              </span>
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
                <a href="../" className="page-link" aria-label="Previous">
                  <i className="fas fa-arrow-left" aria-hidden="true"></i>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link text-center" href="../">
                  <span>Prev </span>
                </a>
              </li>
            </ul>
            <ul className="pagination">
              <li className="page-item">
                <a
                  className="page-link text-center"
                  href="../graffiti-city-park/"
                >
                  Next
                </a>
              </li>
              <li className="page-item">
                <a
                  href="../graffiti-city-park"
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
    image1: file(relativePath: { eq: "stories/southern-plains.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "stories/southern-plains-2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default artForJustice
