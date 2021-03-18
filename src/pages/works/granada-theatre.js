import React from "react"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../../components/main.css"
import "../../components/index.css"
import video from "../../images/granada-theatre/granada-theatre.mp4"

const project = ({ data }) => {
  return (
    <div className="works">
      <div className="projects">
        <Navbar />
        <div className=" d-flex flex-wrap h-75">
          <div className="d-flex col-12 align-items-center justify-content-center">
            <h1 className="title text-uppercase text-center">
              GRANADA THEATER
            </h1>
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
                ANIMATION
              </p>
            </div>
            <div className="col-md-4 col-3">
              <p className="small text-justify decription d-flex justify-content-center">
                {" "}
                <span className="font-weight-bold pr-2">
                  CLIENT:{" "}
                  <span className="font-weight-normal pl-md-2">I N V I</span>
                </span>
              </p>
            </div>
            <div className="col-md-4 col-3 d-flex justify-content-end">
              <p className="small text-justify decription">
                {" "}
                <span className="font-weight-bold pr-2">LAUNCHED: </span>{" "}
                NOVEMBER 2020
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
              How do we bring an existing building back to life?
            </h2>
          </div>
          <div className="description col-md-7 text-justify">
            <p>
              Granada Theater was opened in 1949. By the late 1950s Jensen Drive
              was bustling with shopping and entertainment. Two theaters, both
              built in the late 1940s, drew residents from throughout the area.
              Jensen Square provided detailed space and was anchored by
              innovative modern buildings. Once the Eastex Freeway was completed
              in the late 1950s, Jensen drive began a slow decline. However the
              beauty and the utility of Jensen drive has not been diminished.
              The street remains the central corridor in the neighborhood.
            </p>
            <p>
              Granada has been an icon for all those who grew up in the
              neighborhood. The existing site should service the people of
              Eastex Jensen. A proposal of creating a cinema and community
              center is underway. The theater will house all the essentials of
              functioning cinema but also be a resource for the community
              members to use. The building will help launch initiatives to
              engage the school in the area to push the creative talent within
              the youth.
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
                <a
                  href="./artForJustice"
                  className="page-link"
                  aria-label="Previous"
                >
                  <i className="fas fa-arrow-left" aria-hidden="true"></i>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link text-center" href="./artForJustice">
                  <span>Prev </span>
                  <br />
                  <span className="project-title text-dark font-weight-bold">
                    #ARTFORJUSTICE
                  </span>
                </a>
              </li>
            </ul>
            <ul className="pagination">
              <li className="page-item">
                <a
                  className="page-link text-center"
                  href="./graffiti-city-park"
                >
                  Next <br />
                  <span className="project-title text-dark font-weight-bold ">
                    GRAFFITI CITY PARK
                  </span>
                </a>
              </li>
              <li className="page-item">
                <a
                  href="./graffiti-city-park"
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
    image1: file(relativePath: { eq: "granada-theatre/image2.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    image2: file(relativePath: { eq: "granada-theatre/image3.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    image3: file(relativePath: { eq: "granada-theatre/image1.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default project
