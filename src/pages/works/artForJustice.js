import React from "react"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../../components/main.css"
import "../../components/index.css"
import video from "../../images/artforjustice/artforjustice.mp4"

const project = ({ data }) => {
  return (
    <div className="works">
      <div className="projects">
        <Navbar />
        <div className=" d-flex flex-wrap h-75">
          <div className="d-flex col-12 align-items-center justify-content-center">
            <h1 className="title text-uppercase text-center">#ARTFORJUSTICE</h1>
          </div>
        </div>
      </div>
      {/* <!--========Video Section=======--> */}
      <section className=" pt-5 pb-2">
        <div className="works-video embed-responsive embed-responsive-16by9">
          <video controls muted autoplay className="videos">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="container-fluid">
          <div className="row d-flex justify-content-between px-2 py-2">
            <div className="col-md-4 col-3">
              <p className="small text-justify decription">
                {" "}
                <span className="font-weight-bold pr-2">PRODUCT: </span> 360
                VIRTUAL WORLD
              </p>
            </div>
            <div className="col-md-4 col-3">
              <p className="small text-justify decription d-flex justify-content-center">
                {" "}
                <span className="font-weight-bold pr-2">
                  CLIENT:{" "}
                  <span className="font-weight-normal pl-md-2">
                    KARIM FARISHTA &amp; FORT BEND COUNTY
                  </span>
                </span>
              </p>
            </div>
            <div className="col-md-4 col-3 d-flex justify-content-end">
              <p className="small text-justify decription">
                {" "}
                <span className="font-weight-bold pr-2">LAUNCHED: </span> JUNE
                2020
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
            <h2 className="title">
              How do we commemorate George Floyd and support the Black Lives
              Matter Movement?
            </h2>
          </div>
          <div className="description col-md-7 text-justify">
            <p>
              INVI partnered with FORT BEND County to create a Virtual 360 art
              museum and curated art to commemorate George Floyd and the Black
              Lives Matter Movement as a sign of immense and heartfelt
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
            <p>
              During this chaotic time, it is even more important for us to come
              together. Due to the global pandemic and physical distancing, we
              want to create a space that will allow us to be virtually
              connected, express our solidarity in the form of art, and let our
              creative imaginations be seen. “Enter to Change the Cycle of
              History” are the words written on the concrete before you enter
              the virtual art gallery. From the entrance of the exhibit, you see
              a clenched fist sculpture located at the center, symbolizing our
              fight for justice and commemorating George Floyd, a man raised
              right here in Houston. In curating this work, we pay tribute to
              the countless Black brothers and sisters we’ve lost to police
              brutality and invite you to share this space in thoughtful
              reflection.
            </p>
            <p>
              Darkness evokes feelings of distress, danger, and defenselessness.
              Yet, the brightest light is found in the darkest places. The
              natural light that glows into the space from the skylight above
              will guide you through the gallery. We want the light to be your
              direction and allow you to experience it in a counter-clockwise
              path, changing the cycle of history. Let yourself experience the
              emotions of artists around the world and hear their voices from
              their artistic renderings.
            </p>
            <p>
              The entry of the gallery is embraced in a rough, rocky formation,
              representing the chaotic time we are in. The trees at the end of
              the hallway symbolize life and hope that still exists during these
              tumultuous times. The art on the walls is our voice to honor
              George Floyd and stand in solidarity with the Black Lives Matter
              Movement. At the end of your journey, you will exit the museum
              through a more orderly smooth exit, symbolizing our hope for the
              future.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- ======= Product Section =======--> */}

      {/* <!-- ======= Images Section ======= --> */}

      <div className="images container py-md-5">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 pb-5 pr-md-3">
            <Image
              fluid={data.image1.childImageSharp.fluid}
              alt="image1"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 pb-5 pl-md-3">
            <Image
              fluid={data.image2.childImageSharp.fluid}
              className="img-fluid"
              alt="image2"
            />
          </div>
          <div className="col-md-12 pb-5">
            <Image
              fluid={data.image3.childImageSharp.fluid}
              alt="image1"
              className="img-fluid"
              width="1400"
            />
          </div>
        </div>
      </div>

      {/* <!-- ======= Images Section =======--> */}
      {/* <!--======= Creative Process=======--> */}
      <section className="product container py-md-5">
        <div className="row ">
          <div className="col-md-5 my-md-0 my-3 ">
            <h2 className="title">Creative Process</h2>
          </div>
          <div className="description col-md-7 text-justify">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              aliquam exercitationem suscipit debitis. Voluptate ratione
              assumenda totam, quaerat obcaecati eum impedit repudiandae tenetur
              quia deleniti distinctio. Voluptatibus porro deleniti architecto,
              alias excepturi harum atque enim minima sint sunt voluptate Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Modi non
              explicabo reiciendis molestias sint quos similique ullam,
              necessitatibus tenetur sapiente atque porro pariatur ad nobis.
              Ipsam nobis mollitia ut aliquid. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Laudantium, ipsam!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, sit delectus dolores perferendis soluta officiis
              est obcaecati dignissimos error sequi aliquid. Quas corrupti,
              distinctio enim iste sint adipisci vitae ducimus, itaque, fugiat
              id voluptatum! Nobis nesciunt dicta culpa aperiam quos maiores
              magnam, magni blanditiis optio officiis atque laudantium nulla ad.
            </p>
          </div>
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
                <a href="./drawing" className="page-link" aria-label="Previous">
                  <i className="fas fa-arrow-left" aria-hidden="true"></i>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link text-center" href="./drawing">
                  <span>Prev </span>
                  <br />
                  <span className="project-title text-dark font-weight-bold">
                    DRAWING GALLERY
                  </span>
                </a>
              </li>
            </ul>
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link text-center" href="./granada-theatre">
                  Next <br />
                  <span className="project-title text-dark font-weight-bold ">
                    GRANADA THEATRE
                  </span>
                </a>
              </li>
              <li className="page-item">
                <a
                  href="./granada-theatre"
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
      <Footer />
    </div>
  )
}
export const query = graphql`
  {
    image1: file(relativePath: { eq: "artforjustice/image3.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    image2: file(relativePath: { eq: "artforjustice/image2.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    image3: file(relativePath: { eq: "artforjustice/image1.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default project
