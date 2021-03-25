import React from "react"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../../components/main.css"
import "../../components/index.css"
import video from "../../images/drawing-gallery/video1.mp4"
import icon1 from "../../images/icon.png"
import icon2 from "../../images/icon-mac.png"

const drawing = ({ data }) => {
  return (
    <div className="works">
      <div className="projects">
        <Navbar />
        <div className=" d-flex flex-wrap h-75">
          <div className="d-flex col-12 align-items-center justify-content-center">
            <h1 className="title text-center text-lg-left text-uppercase text-center">
              SOUTHERN PLAINS MUSEUM AND CULTURAL CENTER
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
                VIRTUAL WALK-THRU
              </p>
            </div>
            <div className="col-md-4 col-12">
              <p className="small-info text-justify decription d-flex justify-content-md-center">
                {" "}
                <span className="font-weight-bold pr-2">
                  CLIENT:{" "}
                  <span className="font-weight-normal pl-md-2">
                    {" "}
                    CHANCE LANDRY & FUNDED BY CITY OF HOUSTON
                  </span>
                </span>
              </p>
            </div>
            <div className="col-md-4 col-12 d-flex justify-content-md-end">
              <p className="small-info text-justify decription">
                {" "}
                <span className="font-weight-bold pr-2">LAUNCHED: </span>
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
            <h2 className="title text-center text-lg-left text-center text-md-left">
              How do we share the stories and history of the Native American
              community with the rest of the world in a safe and accessible way?
            </h2>
          </div>
          <div className="description col-md-7 text-justify">
            <p>
              INVI collaborated with the City of Houston and Chance L. Landry,
              President of the Southern Apache Museum, to design and create the
              virtual Southern Plains Museum and Culture Center (SPMCC) for
              Native American Heritage Month. Our main purpose was to create a
              COVID-19 safe environment for the community while sharing the
              stories and history of the Native American community with the rest
              of the world.
            </p>
            <p>
              INVI worked together with Chance L. Landry to design a virtual
              space that highlights the narrative and symbolic representation of
              the Native American community. Through the process, we had a
              chance to learn about the meanings and history behind each flower,
              plant, symbol, artifact, etc. It allowed us to not only educate
              ourselves but also a walk back into the past.
            </p>
            <p>
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
          </div>
        </div>
      </section>

      {/* <!-- ======= Product Section =======--> */}
      {/* <!--======== Credits==========--> */}
      <section className="container my-5">
        <div className="row text-center d-flex justify-content-center">
          <div className="col-md-8">
            <h4 className="pb-3">
              <u>CREDITS</u>
            </h4>
            <p className="decription">
              Contents: Chance Landry and the Native American community.
            </p>
            <p className="decription">
              Music Artist: James Stephenson from the Lumbee Nation
            </p>
            <p className="decription">
              Music Album: Easter Wind, Northern Lights (available for purchase
              at Canyon Records)
            </p>
            <p className="decription">
              ​Disclaimer: Please excuse any spelling, grammatical, and typo
              errors
            </p>
          </div>
          <div className="col-md-8 pb-4">
            <h4 className="py-3 font-italic">
              For a fully immersive and interactive experience
              <br />
              <br />
              Download application to enter Virtual Tour
            </h4>
            <div className="row text-center d-flex justify-content-center align-items-center">
              <div className="col-md-3 pb-3 pb-md-0">
                <a href="#">
                  <img src={icon2} alt="windows" className="img-fluid" />
                </a>
              </div>
              <div className="col-md-3">
                <a href="#">
                  {" "}
                  <img src={icon2} alt="mac" className="img-fluid" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <p className="description ">
              ​
              <span className="font-italic">
                {" "}
                For setup video tutorial, please click on this link{" "}
              </span>
              -<a href="#"> Video Tutorial</a>
            </p>
            <p className="description ">
              <span className="font-italic">
                {" "}
                For setup instructions, please click on this link{" "}
              </span>
              - <a href="#"> Readme.txt</a>
            </p>
            <p className="description ">
              <span className="font-italic"> Email</span>{" "}
              <a href="#"> I N V I </a>{" "}
              <span className="font-italic"> for any technical issues</span>
            </p>
          </div>
        </div>
      </section>
      {/* <!--======== Credits==========--> */}

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
                <a
                  href="/works/granada-theatre"
                  className="page-link"
                  aria-label="Previous"
                >
                  <i className="fas fa-arrow-left" aria-hidden="true"></i>
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link text-center"
                  href="/works/granada-theatre"
                >
                  <span>Prev </span>
                  <br />
                  <span className="project-title text-dark font-weight-bold">
                    GRANADA THEATRE
                  </span>
                </a>
              </li>
            </ul>
            <ul className="pagination">
              <li className="page-item">
                <a
                  className="page-link text-center"
                  href="/works/lepetit-trianon"
                >
                  Next <br />
                  <span className="project-title text-dark font-weight-bold ">
                    LE PETIT TRIANON EXHIBITION
                  </span>
                </a>
              </li>
              <li className="page-item">
                <a
                  href="/works/lepetit-trianon"
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
    image1: file(relativePath: { eq: "southern-plains/image1.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    image2: file(relativePath: { eq: "southern-plains/image2.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default drawing
