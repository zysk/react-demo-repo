import React from "react"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../../components/main.css"

import video from "../../images/graffiti-city-park/graffiti-city-park.mp4"

const project = ({ data }) => {
  return (
    <div className="works">
      <div className="projects">
        <Navbar />
        <div className=" d-flex flex-wrap">
          <div className="d-flex col-12 align-items-center justify-content-center">
            <h1 className="title pt-5 text-lg-left text-uppercase text-center">
              GRAFFITI CITY PARK
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
                  <span className="font-weight-normal pl-md-2">I N V I</span>
                </span>
              </p>
            </div>
            <div className="col-md-4 col-3 d-flex justify-content-end">
              <p className="small text-justify decription">
                {" "}
                <span className="font-weight-bold pr-2">LAUNCHED: </span> AUGUST
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
            <h2 className="title text-center text-lg-left">
              How do we leave our digital footprints in the virtual world?
            </h2>
          </div>
          <div className="description col-md-7 text-justify">
            <p>
              Graffiti artists find a way to bring life to the static buildings
              as architecture becomes its canvas. The colorful paint parades
              across the façade of the local corner store or a warehouse
              reaching many audiences. The realization of the artwork is
              controversial. While some graffiti is plastered without permission
              of the occupants of the building, often graffiti artists are
              commissioned by the city or the property owner. The work gains
              attention as it speaks out from in-between the building seams.
              This type of work is highly physical and transforming it into an
              interactive digital space is a challenge that INVI is taking on.
            </p>
            <p>
              INVI begins to ask a series of questions: Through the chaos of the
              pandemic, how does an artist avoid ceasing to exist? What type of
              digital footprint can an artist have? How is it different from a
              traditional website or portfolio? What happens when we create a
              cityscape as a canvas for Graffiti Artists?
            </p>
            <p>
              The Graffiti City Park project is an urban virtual environment
              that allows graffiti artists to showcase, collaborate, and leave
              their digital footprints in the virtual space. The initiative also
              encourages museums, galleries, creators, artists, and businesses
              to lease out these virtual real estates to showcase their work or
              product, maximizing their global presence in an interactive and
              one-of-its-kind collective space. INVI would like to re-imagine
              our digital social connections with an immersive virtual
              environment where you can have access to art, commerce, knowledge,
              and information.
            </p>
            <div className="mt-4 pb-5 pb-md-0">
              <a
                href="http://invi.zysk.in/graffiticitypark/"
                target="_blank"
                className="text-uppercase text-left virtual  font-weight-bold pl-0"
              >
                View Live Preview
              </a>
            </div>
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
          <div className="col-md-6 pb-5 zoom">
            <Image
              fluid={data.image4.childImageSharp.fluid}
              alt="image1"
              className="img-fluid"
              width="1400"
            />
          </div>
        </div>
      </div>
      <section className="  pb-5">
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
      {/* <!--=========Pagination Buttons=======--> */}
      <div className="container py-3">
        <div className="row ">
          <div className="col-12 pt-lg-5 pb-lg-3 d-flex justify-content-between">
            <ul className="pagination">
              <li className="page-item">
                <a
                  href="/works/lepetit-trianon"
                  className="page-link"
                  aria-label="Previous"
                >
                  <i className="fas fa-arrow-left" aria-hidden="true"></i>
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link text-center"
                  href="/works/lepetit-trianon"
                >
                  <span>Prev </span>
                  <br />
                  <span className="project-title text-dark font-weight-bold">
                    LE PETIT TRIANON
                  </span>
                </a>
              </li>
            </ul>
            <ul className="pagination">
              <li className="page-item">
                <a
                  className="page-link text-center"
                  href="/works/artForJustice"
                >
                  Next <br />
                  <span className="project-title text-dark font-weight-bold ">
                    #ARTFORJUSTICE
                  </span>
                </a>
              </li>
              <li className="page-item">
                <a
                  href="/works/artForJustice"
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
    image1: file(relativePath: { eq: "graffiti-city-park/image1.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    image2: file(relativePath: { eq: "graffiti-city-park/image2.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    image3: file(relativePath: { eq: "graffiti-city-park/image3.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    image4: file(relativePath: { eq: "graffiti-city-park/image4.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default project
