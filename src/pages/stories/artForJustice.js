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
              className="img-fluid"
            />
            <h3 className="font-weight-bold pt-5 px-lg-4 title">
              #ArtForJustice Virtual Museum Launch
              <br /> Commemorating George Floyd and Supporting the Black Lives
              Matter Movement
            </h3>
            <h6 className="py-3 text-muted">JUNE 08, 2020 IN STORY TELLING</h6>
            <p className="decription text-justify">
              INVI recently partnered with FORT BEND County to create a 360
              virtual art museum and curated art to commemorate George Floyd and
              the Black Lives Matter Movement as a sign of immense and heartfelt
              solidarity. We received an outpouring of artistic submissions from
              155 artists from 14 states (CA, CO, CT, DC, FL, GA, HI, MA, NC,
              NJ, TX, VA, WA, WI) and 6 countries (United States, Colombia,
              Bangladesh, France, India, and Wales), with individuals ages 1 to
              56 years old, We had over 160 art pieces in a 2-days call for
              submission. Our team completed the project in 72 hours and it was
              an absolute success. The museum has received over 10,000 visitors,
              and we were featured on Fox, Houston Chronicle, and National
              Endowment for the Arts.
            </p>
            <p className="decription text-justify font-italic">
              #ArtForJustice Architectural Perspective from INVI founders:
            </p>
            <p className="decription text-justify">
              During this chaotic time, it is even more important for us to come
              together. Due to the global pandemic and physical distancing, we
              want to create a space that will allow us to be virtually
              connected, express our solidarity in the form of art, and let our
              creative imaginations be seen.
            </p>
            <p className="decription text-justify">
              “Enter to Change the Cycle of History” are the words written on
              the concrete before you enter the virtual art gallery. From the
              entrance of the exhibit, you see a clenched fist sculpture located
              at the center, symbolizing our fight for justice and commemorating
              George Floyd, a man raised right here in Houston. In curating this
              work, we pay tribute to the countless Black brothers and sisters
              we’ve lost to police brutality and invite you to share this space
              in thoughtful reflection.
            </p>
            <p className="decription text-justify">
              Darkness evokes feelings of distress, danger, and defenselessness.
              Yet, the brightest light is found in the darkest places. The
              natural light that glows into the space from the skylight above
              will guide you through the gallery. We want the light to be your
              direction and allow you to experience it in a counter-clockwise
              path, changing the cycle of history. Let yourself experience the
              emotions of artists around the world and hear their voices from
              their artistic renderings.
            </p>
            <p className="decription text-justify">
              The entry of the gallery is embraced in a rough, rocky formation,
              representing the chaotic time we are in. The trees at the end of
              the hallway symbolize life and hope that still exists during these
              tumultuous times. The art on the walls is our voices to honor
              George Floyd and stand in solidarity with the Black Lives Matter
              Movement. At the end of your journey, you will exit the museum
              through a more orderly smooth exit, symbolizing our hope for the
              future.
            </p>
            <p className="text-left py-3">
              Please Visit:
              <span>
                {" "}
                <a href="#"> https://invi.us/ARTFORJUSTICE/</a>
              </span>
            </p>

            <h3 className="text-left py-3">MEDIA COVERAGE</h3>
            <div className="text-left">
              <ul type="none" className="pl-0">
                <li className="py-1">
                  <i
                    className="fa fa-arrow-circle-o-right"
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
                    className="fa fa-arrow-circle-o-right"
                    aria-hidden="true"
                  ></i>
                  <a href="#">
                    {" "}
                    FOX 26 - Virtual art gallery honoring George Floyd launched
                    from Fort Bend Co.
                  </a>
                </li>
                <li className="py-1">
                  <i
                    className="fa fa-arrow-circle-o-right"
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
                    className="fa fa-arrow-circle-o-right"
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
                    className="fa fa-arrow-circle-o-right"
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
                    className="fa fa-arrow-circle-o-right"
                    aria-hidden="true"
                  ></i>
                  <a href="#">
                    {" "}
                    COMMUNITY IMPACT - GALLERY: #ArtforJustice takes viewers
                    inside virtual museum dedicated to George Floyd, Black Lives
                    Matter movement
                  </a>
                </li>
                <li className="py-1">
                  <i
                    className="fa fa-arrow-circle-o-right"
                    aria-hidden="true"
                  ></i>
                  <a href="#">
                    {" "}
                    Dallas Morning News: Irving children create artwork to honor
                    George Floyd and the black community
                  </a>
                </li>
                <li className="py-1">
                  <i
                    className="fa fa-arrow-circle-o-right"
                    aria-hidden="true"
                  ></i>
                  <a href="#">
                    {" "}
                    HOUSTONIA - Houstonians Open Virtual Museum in Tribute to
                    George Floyd
                  </a>
                </li>
                <li className="py-1">
                  <i
                    className="fa fa-arrow-circle-o-right"
                    aria-hidden="true"
                  ></i>
                  <a href="#">
                    {" "}
                    National Endowment for the Arts - Nerdy Design Thing We Are
                    Following
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
                  href="/stories/new-startup/"
                  className="page-link"
                  aria-label="Previous"
                >
                  <i className="fas fa-arrow-left" aria-hidden="true"></i>
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link text-center"
                  href="/stories/new-startup/"
                >
                  <span>Prev </span>
                </a>
              </li>
            </ul>
            {/* <ul className="pagination">
              <li className="page-item">
                <a className="page-link text-center" href="#">
                  Next
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
            </ul> */}
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
    image: file(relativePath: { eq: "stories/art-for-museum.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default artForJustice
