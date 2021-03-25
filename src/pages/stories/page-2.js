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
        <div className="row text-center justify-content-center">
          <div className="col-md-10">
            <Image
              fluid={data.virtual.childImageSharp.fluid}
              alt="Art For Museum"
              className="img-fluid"
            />
          </div>
          <div className="col-md-9">
            <h3 className="font-weight-bold pt-5 px-lg-4 title">
              <a href="../stories/reimagine-virtual-art/">
                Reimagine Virtual Art Exhibition in a Physical Space
              </a>
            </h3>
            <h6 className="py-3 text-muted">JULY 10, 2020 IN STORY TELLING</h6>
            <p className="description text-justify">
              INVI is honored to take part in The Eye of the Huntress project,
              collaborating with Alexandra Ray and Catherine Loewe to reimagine
              and rediscover virtual art exhibitions in a physical space. INVI
              helps recreate the Le Petit Trianon (San Francisco) residence into
              a virtual platform, while Alexandra and Catherine curate the art
              work to present to the audience a more intimate art viewing
              experience through their eyes.
            </p>
            <p className="py-3 font-weight-bold">
              <a href="../stories/reimagine-virtual-art/">READ MORE</a>
            </p>
          </div>
        </div>

        <div className="row text-center justify-content-center py-lg-5">
          <div className="col-md-10">
            <Image
              fluid={data.startup.childImageSharp.fluid}
              alt="Art For Museum"
              className="img-fluid"
            />
          </div>
          <div className="col-md-9">
            <h3 className="font-weight-bold pt-5 px-lg-4 title">
              <a href="../stories/new-startup/">
                THE SUCCESS OF A NEW STARTUP DURING COVID-19
              </a>
            </h3>
            <h6 className="py-3 text-muted">JUNE 12, 2020 IN STORY TELLING</h6>
            <p className="description text-justify">
              INVI is a visualization company that started in March of 2020 in
              Houston, TX, in the midst of the world’s battle against COVID-19,
              a virus that took over the world.Similar with many people around
              the world, Afreen and I both suffered from the economic impact
              from COVID-19. Afreen was furloughed while I received a salary and
              hour deduction. We both understood the necessary measures our
              company had to take during these unprecedented times and we knew
              that many businesses globally will have to take these extreme
              steps as well.
            </p>
            <p className="py-3 font-weight-bold">
              <a href="../stories/new-startup/">READ MORE</a>
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
            <li className="page-item">
              <a className="page-link" href="../stories/">
                1
              </a>
            </li>
            <li className="page-item active">
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
    virtual: file(relativePath: { eq: "stories/reimagine-virtual-art.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    startup: file(relativePath: { eq: "stories/new-startup.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default stories
