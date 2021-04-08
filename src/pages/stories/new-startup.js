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
              fluid={data.image.childImageSharp.fluid}
              alt="Art For Museum"
              alt="Reimagine Virtual Art"
              className="img-fluid"
            />

            <h3 className="font-weight-bold pt-5 px-lg-2 title">
              THE SUCCESS OF A NEW STARTUP DURING COVID-19
            </h3>

            <h6 className="py-3 text-muted">JUNE 12, 2020 IN STORY TELLING</h6>
            <p className="decription text-justify">
              INVI is a visualization company that started in March of 2020 in
              Houston, TX, in the midst of the world’s battle against COVID-19,
              a virus that took over the world.
            </p>
            <p className="decription text-justify">
              Similar with many people around the world, Afreen and I both
              suffered from the economic impact from COVID-19. Afreen was
              furloughed while I received a salary and hour deduction. We both
              understood the necessary measures our company had to take during
              these unprecedented times and we knew that many businesses
              globally will have to take these extreme steps as well.
            </p>
            <p className="decription text-justify">
              Since Afreen and I both had more times on our hands, we decided to
              create a project together that can keep us productive and busy
              while offering assistance to the world that is in crisis. We
              developed INVI as an assistance to businesses in the Design and
              Construction industry who are forced to downsize and do not have
              the staff capacity to perform the task. INVI becomes a cost-saving
              and beneficial resource to the industry, helping businesses
              maintain commitments to their clients.
            </p>
            <p className="decription text-justify">
              In the past 3 months, we formed a team of 10 people all over the
              world in seven different countries (United States, Colombia,
              Venezuela, Bangladesh, Brazil, Armenia, and Egypt). The COVID-19
              damaged the entire world and kept all of us physically apart. We
              created INVI with the idea of helping businesses and also helping
              the world come together in a different form. INVI becomes a
              virtual home to many, especially college students who can no
              longer attend schools and adults who lost their jobs and are
              forced to be quarantined at home.
            </p>
            <p className="decription text-justify">
              Through INVI, all of us continued to stay productive and efficient
              throughout the battle against COVID-19. We are proud to say we
              never sat idle and never hesitate to make the best out of any
              worst situation we are in. The positive outlook we all have along
              with the passion and desire to grow our knowledge and craft during
              one of the darkest times in history is something Afreen and I are
              very grateful to each individual in our team. INVI is not just a
              project for all of us, but also a virtual home where we share
              ideas and teach one another. Each individual at INVI brings a
              layer of their culture and experience into the company and we are
              always thankful and excited for what the future has for us.
            </p>
            <p className="decription text-justify">
              This past weekend INVI partnered with FORT BEND County to create a
              360 virtual museum to commemorate George Floyd and the Black Lives
              Matter Movement.
            </p>
            <p className="decription text-justify">
              Artists all over the world and of all age groups were showcased in
              our Virtual Museum. The project was an absolute success and got a
              lot of media coverage.
            </p>
            <p className="decription text-justify">
              This is a project we completed in 72 hours with a team of 4 women
              (collaboration between Houston and Colombia). Many hours of
              working and very few hours of sleeping, this has been a very
              meaningful project for all of us.
            </p>
            <p className="text-left py-3">
              Virtual Museum:{" "}
              <span>
                {" "}
                <a href="#"> https://invi.us/virtual-museums/</a>
              </span>
            </p>

            <h3 className="text-left py-3">MEDIA COVERAGE</h3>
            <div className="text-left">
              <ul type="none" className="pl-0">
                <li className="py-1">
                  <i
                    className="fa fa-arrow-circle-o-right pr-1"
                    aria-hidden="true"
                  ></i>
                  <a href="#">
                    {" "}
                    Houston Chronicle: Houston’s ArtForJustice Virtual Museum
                    launches in the spirit of George Floyd
                  </a>
                </li>
                <li className="py-1">
                  <i
                    className="fa fa-arrow-circle-o-right pr-1"
                    aria-hidden="true"
                  ></i>
                  <a href="#">
                    {" "}
                    Houston Chronicle: Artistic renderings commemorating George
                    Floyd on display through #ArtForJustice
                  </a>
                </li>
                <li className="py-1">
                  <i
                    className="fa fa-arrow-circle-o-right pr-1"
                    aria-hidden="true"
                  ></i>
                  <a href="#">
                    {" "}
                    KPRC Channel 2 - PHOTOS: Virtual art gallery #ArtForJustice
                    unveiled by Houston, Fort Bend County founders Monday
                  </a>
                </li>
                <li className="py-1">
                  <i
                    className="fa fa-arrow-circle-o-right pr-1"
                    aria-hidden="true"
                  ></i>
                  <a href="#">
                    {" "}
                    Fort Bend Sun: Fort Bend ‘Art For Justice’ gallery promotes
                    worldwide solidarity
                  </a>
                </li>
                <li className="py-1">
                  <i
                    className="fa fa-arrow-circle-o-right pr-1"
                    aria-hidden="true"
                  ></i>
                  <a href="#">
                    {" "}
                    Fort Bend Sun: Fort Bend ‘Art For Justice’ gallery promotes
                    worldwide solidarity
                  </a>
                </li>
              </ul>
            </div>
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
                  href="/stories/artForJustice"
                >
                  Next
                </a>
              </li>
              <li className="page-item">
                <a
                  href="/stories/artForJustice"
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
    image: file(relativePath: { eq: "stories/new-startup.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default artForJustice
