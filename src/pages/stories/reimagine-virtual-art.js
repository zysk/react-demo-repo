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
              fluid={data.image.childImageSharp.fluid}
              alt="Art For Museum"
              alt="Reimagine Virtual Art"
              className="img-fluid"
            />
          </div>
          <div className="col-md-9">
            <h3 className="font-weight-bold pt-5 px-lg-4 title">
              Reimagine Virtual Art Exhibition in a Physical Space
            </h3>
            <h6 className="py-3 text-muted">JULY 10, 2020 IN STORY TELLING</h6>
            <p className="decription text-justify">
              INVI is honored to take part in The Eye of the Huntress project,
              collaborating with Alexandra Ray and Catherine Loewe to reimagine
              and rediscover virtual art exhibitions in a physical space. INVI
              helps recreate the Le Petit Trianon (San Francisco) residence into
              a virtual platform, while Alexandra and Catherine curate the art
              work to present to the audience a more intimate art viewing
              experience through their eyes.
            </p>
            <p className="decription text-justify">
              “Alexandra Ray and Catherine Loewe have partnered from both sides
              of the pond to bring you The Eye of the Huntress. Having done
              everything short of having a brick and mortar gallery space, these
              two impassioned art lovers have combined their talents to launch a
              new virtual gallery presenting a highly select collection of works
              by internationally acclaimed artists. With the demise of being
              able to shop at international Art fairs or even in galleries for
              the time being, we are providing an alternative way to view and
              buy art for the connoisseur, collector and art insider. What if
              you could be sent 20-30 curated artworks worth investing in by
              sought after artists, every 3 months and have this capsule
              collection save you months of trawling through various art world
              websites or weeding through hundreds of gallery newsletters. We
              aim to bring you distinctive works of art to live with at the
              press of a button. Embracing the digital technology now available
              we will be presenting these works in specially selected interiors
              and exteriors which allow the viewer to imagine living with art at
              home. We offer a nail to nail service that includes shipping,
              insurance and installation from the gallery or studio straight to
              your home.”
            </p>
            <p className="decription text-justify font-italic">
              Credit: Alexandra Ray and Catherine Loewe
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
                  href="/stories/graffiti-city-park"
                  className="page-link"
                  aria-label="Previous"
                >
                  <i className="fas fa-arrow-left" aria-hidden="true"></i>
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link text-center"
                  href="/stories/graffiti-city-park"
                >
                  <span>Prev </span>
                </a>
              </li>
            </ul>
            <ul className="pagination">
              <li className="page-item">
                <a
                  className="page-link text-center"
                  href="/stories/new-startup"
                >
                  Next
                </a>
              </li>
              <li className="page-item">
                <a
                  href="/stories/new-startup"
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
    image: file(relativePath: { eq: "stories/reimagine-virtual-art.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default artForJustice
