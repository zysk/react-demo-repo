import React from "react"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../../components/main.css"

import video from "../../images/artforjustice/artforjustice.mp4"

const project = ({ data }) => {
  return (
    <div className="works">
      <div className="projects">
        <Navbar />
        <div className=" d-flex flex-wrap h-75">
          <div className="d-flex col-12 align-items-center justify-content-center">
            <h1 className="title text-center text-lg-left text-uppercase text-center">
              #ARTFORJUSTICE
            </h1>
          </div>
        </div>
      </div>
      {/* <!--========Video Section=======--> */}
      <section className=" pt-5 pb-2">
        <div className="works-video embed-responsive embed-responsive-16by9">
          <video controls muted autoPlay className="videos w-100">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-between  py-2">
            <div className="col-md-4 col-12">
              <p className="small-info text-justify decription">
                {" "}
                <span className="font-weight-bold pr-2">PRODUCT: </span> 360
                VIRTUAL WORLD
              </p>
            </div>
            <div className="col-md-4 col-12">
              <p className="small-info text-justify decription d-flex justify-content-center">
                {" "}
                <span className="font-weight-bold pr-2">
                  CLIENT:{" "}
                  <span className="font-weight-normal pl-md-2">
                    KARIM FARISHTA &amp; FORT BEND COUNTY
                  </span>
                </span>
              </p>
            </div>
            <div className="col-md-4 col-12 d-flex justify-content-md-end">
              <p className="small-info text-justify decription">
                {" "}
                <span className="font-weight-bold pr-2">LAUNCHED: </span> JUNE
                2020
              </p>
            </div>
          </div>
          <div className="text-center mt-5 m-2">
            {" "}
            <a href="#" className="navigate btn btn-md text-center">
              CLICK HERE TO LEARN HOW TO NAVIGATE
            </a>
          </div>
        </div>
      </section>
      {/* <!--========Video Section=======--> */}

      {/* <!-- ======= Product Section ======= --> */}

      <section className="product container py-md-5 mt-md-5">
        <div className="row">
          <div className="col-md-5 my-md-0 my-3 d-flex justify-content-center">
            <h2 className="title text-center text-lg-left">
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
          <div className="col-md-6 pb-5 zoom">
            <Image
              fluid={data.image1.childImageSharp.fluid}
              alt="image1"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 pb-5 zoom">
            <Image
              fluid={data.image2.childImageSharp.fluid}
              className="img-fluid"
              alt="image2"
            />
          </div>
          <div className="col-md-6 pb-5 zoom">
            <Image
              fluid={data.image3.childImageSharp.fluid}
              alt="image1"
              className="img-fluid"
              width="1400"
            />
          </div>
        </div>
      </div>
      <section className=" pt-5 pb-2">
        <div className="works-video embed-responsive embed-responsive-16by9">
          <video controls muted autoPlay className="videos w-100">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      {/* <!-- ======= Images Section =======--> */}
      {/* <!--======= Creative Process=======--> */}
      <section className="product container py-md-5">
        <div className="row ">
          <div className="col-md-5 my-md-0 my-3 ">
            <h2 className="title text-center text-lg-left">Creative Process</h2>
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
      {/* <!--===========Benefatcors=================--> */}
      <section className="container py-md-5">
        <div className="row  d-flex justify-content-between">
          <div className="col-md-12 d-flex justify-content-start">
            {" "}
            <p>
              We thank all the following individuals and Institutions for their
              generous contributions:
            </p>
          </div>
          <div className="col-md-3 d-flex justify-content-start">
            <ul type="none" className="pl-0">
              <li>
                <h4 className="title-desc">Benefactors</h4>
              </li>
              <li> Afshi Charania</li>
              <li> Faisal Charania</li>
              <li> Kristin Frentzel</li>
              <li> Judge KP George</li>
              <li>Sri Preston Kulkarni</li>
              <li>Padma Maitland</li>
              <li>Brandon Weiss</li>
              <li>John White</li>
              <li>Anne Burton</li>
              <li>Kali Shiller</li>
              <li>Nichole Lum</li>
            </ul>
          </div>
          <div className="col-md-3 d-flex justify-content-md-center">
            <ul type="none" className="pl-0">
              <li>
                {" "}
                <h4 className="title-desc">Organizers</h4>
              </li>
              <li> Delilah Agho-Otoghile</li>
              <li> Neel Gonuguntla</li>
              <li> Dexter McCoy</li>
              <li> Hannah Michael</li>
              <li>Cristina Toppin</li>
              <li>Nathan Truong</li>
              <br />
              <li>
                California Polytechnic State University,
                <br />
                Center for Expressive Technologies
              </li>
            </ul>
          </div>
          <div className="col-md-3  d-flex justify-content-md-end">
            <ul type="none" className="pl-0">
              <li>
                <h4 className="title-desc"> Advisors</h4>
              </li>
              <li> Debbie Alfred</li>
              <li> Mehul Bhagat</li>
              <li> Kelsey Donohue</li>
              <li> Dan Gordon</li>
              <li>Zaibab Khuwaja-Ali</li>
              <li>Sultana Mangalji</li>
              <li> Fahad Punjwani</li>
              <li>Taral Patel</li>
              <li> Eva Heinstein</li>
            </ul>
          </div>
          <div className="col-md-12">
            {" "}
            <p>
              <span className="h5 title-desc">Music credit:</span> Black Lives
              Matter Beat produced by FANA
            </p>
          </div>
        </div>
      </section>

      {/* <!--=========Pagination Buttons=======--> */}
      <div className="container py-3">
        <div className="row ">
          <div className="col-12 pt-lg-5 pb-lg-3 d-flex justify-content-between">
            <ul className="pagination">
              <li className="page-item">
                <a
                  href="/works/graffiti-city-park"
                  className="page-link"
                  aria-label="Previous"
                >
                  <i className="fas fa-arrow-left" aria-hidden="true"></i>
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link text-center"
                  href="/works/graffiti-city-park"
                >
                  <span>Prev </span>
                  <br />
                  <span className="project-title text-dark font-weight-bold">
                    GRAFFITI CITY PARK
                  </span>
                </a>
              </li>
            </ul>
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link text-center" href="/works/drawing">
                  Next <br />
                  <span className="project-title text-dark font-weight-bold ">
                    DRAWING GALLERY
                  </span>
                </a>
              </li>
              <li className="page-item">
                <a
                  href="/works/drawing"
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
