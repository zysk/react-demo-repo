import React from "react"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../../components/main.css"

import video from "../../images/drawing-gallery/video1.mp4"

const drawing = ({ data }) => {
  return (
    <div className="works">
      <div className="projects">
        <Navbar />
        <div className=" d-flex flex-wrap h-75">
          <div className="d-flex col-12 align-items-center justify-content-center">
            <h1 className="title text-center text-lg-left text-uppercase text-center">
              ARCHVILLA
            </h1>
          </div>
        </div>
      </div>
      {/* <!--========Video Section=======--> */}
      <section className="pt-5 pb-2">
        <div className="works-video embed-responsive embed-responsive-16by9">
          <video controls muted autoPlay className="videos w-100">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="container-fluid">
          <div className="row d-flex justify-content-between px-2 py-2 flex-wrap">
            <div className="col-md-4 col-12">
              <p className="small-info text-justify decription">
                {" "}
                <span className="font-weight-bold pr-2">PRODUCT: </span>
                360 VIRTUAL WORLD
              </p>
            </div>
            <div className="col-md-4 col-12">
              <p className="small-info text-justify decription d-flex justify-content-md-center">
                {" "}
                <span className="font-weight-bold pr-2">
                  CLIENT:{" "}
                  <span className="font-weight-normal pl-md-2"> I N V I</span>
                </span>
              </p>
            </div>
            <div className="col-md-4 col-12 d-flex justify-content-md-end">
              <p className="small-info text-justify decription">
                {" "}
                <span className="font-weight-bold pr-2">LAUNCHED: </span>
                MARCH 2021
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
            <h2 className="title text-center text-lg-left text-center text-md-left">
              How do we express the unique styles of each Architect in the 360
              Virtual World?
            </h2>
          </div>
          <div className="description col-md-7 text-justify">
            <p>
              All architects showcased here are an interpretation by INVI. This
              study looks at different architects and captures their ethos
              and/or aesthetics in a 3D 360 virtual immersive experience. The
              ArchVilla created takes you into each of the architect's minds.
              The architects studied were chosen because they inspire us to
              design thoughtfully. Each of these architects centers their design
              around the people that occupy it. Relax by listening to the music.
              Excite your eyes with the colors. Engage with the people. Learn in
              a new form.
            </p>
            <p>
              This project was created to show the potential of expressing our
              ideas. There is a new medium of 3D worlds that engages the
              audience using sound, light, and immersive interactions.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- ======= Product Section =======--> */}

      {/* <!-- ======= Images Section ======= --> */}

      <div className="images container py-md-5">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 pb-5 pr-md-3 zoom">
            <Image
              fluid={data.image1.childImageSharp.fluid}
              alt="image1"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 pb-5 pl-md-3 zoom">
            <Image
              fluid={data.image2.childImageSharp.fluid}
              className="img-fluid"
              alt="image2"
            />
          </div>
          <div className="col-md-6 pb-5 pl-md-3 zoom">
            <Image
              fluid={data.image3.childImageSharp.fluid}
              className="img-fluid"
              alt="image2"
            />
          </div>
          <div className="col-md-6 pb-5 pl-md-3 zoom">
            <Image
              fluid={data.image4.childImageSharp.fluid}
              className="img-fluid"
              alt="image2"
            />
          </div>
          <div className="col-md-6 pb-5 zoom">
            <Image
              fluid={data.image5.childImageSharp.fluid}
              className="img-fluid"
              alt="image2"
            />
          </div>
        </div>
      </div>

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
      {/* <!--=========Pagination Buttons=======--> */}
      <div className="container py-3">
        <div className="row ">
          <div className="col-12 pt-lg-5 pb-lg-3 d-flex justify-content-between">
            <ul className="pagination">
              <li className="page-item">
                <a href="/works/" className="page-link" aria-label="Previous">
                  <i className="fas fa-arrow-left" aria-hidden="true"></i>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link text-center" href="/works/">
                  <span>Prev </span>
                  <br />
                  <span className="project-title text-dark font-weight-bold">
                    WORKS
                  </span>
                </a>
              </li>
            </ul>
            <ul className="pagination">
              <li className="page-item">
                <a
                  className="page-link text-center"
                  href="/works/granada-theatre"
                >
                  Next <br />
                  <span className="project-title text-dark font-weight-bold ">
                    GRANADA THEATRE
                  </span>
                </a>
              </li>
              <li className="page-item">
                <a
                  href="/works/granada-theatre"
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
    image1: file(relativePath: { eq: "archvilla/image1.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    image2: file(relativePath: { eq: "archvilla/image2.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    image3: file(relativePath: { eq: "archvilla/image3.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    image4: file(relativePath: { eq: "archvilla/image4.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    image5: file(relativePath: { eq: "archvilla/image5.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default drawing
