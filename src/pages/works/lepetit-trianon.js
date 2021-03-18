import React from "react"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../../components/main.css"
import "../../components/index.css"
import video from "../../images/graffiti-city-park/graffiti-city-park.mp4"

const project = ({ data }) => {
  return (
    <div className="works">
      <div className="projects">
        <Navbar />
        <div className=" d-flex flex-wrap h-75">
          <div className="d-flex col-12 align-items-center justify-content-center">
            <h1 className="title text-uppercase text-center">
              LE PETIT TRIANON EXHIBITION
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
                <span className="font-weight-bold pr-2">PRODUCT: </span>{" "}
                ANIMATION
              </p>
            </div>
            <div className="col-md-4 col-3">
              <p className="small text-justify decription d-flex justify-content-center">
                {" "}
                <span className="font-weight-bold pr-2">
                  CLIENT:{" "}
                  <span className="font-weight-normal pl-md-2">
                    EYE OF THE HUNTRESS
                  </span>
                </span>
              </p>
            </div>
            <div className="col-md-4 col-3 d-flex justify-content-end">
              <p className="small text-justify decription">
                {" "}
                <span className="font-weight-bold pr-2">LAUNCHED: </span>{" "}
                OCTOBER 2020
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
              How do we reimagine virtual art exhibition in a physical space?
            </h2>
          </div>
          <div className="description col-md-7 text-justify">
            <p>
              INVI participated in The Eye of the Huntress project,
              collaborating with Alexandra Ray and Catherine Loewe to reimagine
              and rediscover virtual art exhibitions in a physical space. INVI
              helps recreate the Le Petit Trianon (San Francisco) residence into
              a virtual platform, while Alexandra and Catherine curate the
              artwork to present to the audience a more intimate art viewing
              experience through their eyes. The project is a collaborative
              effort between London, Los Angeles, and Houston. While in search
              of a more cost-effective and innovative presentation of a highly
              selected collection of works by internationally acclaimed artists,
              Alexandra Ray and Catherine reached out to INVI for a solution.
              Utilizing our current technology, we were able to present a
              powerful narrative through Art and Architecture. This effective
              alternative allows viewers to save time and money while viewing
              and collecting specially curated artworks in specific virtualized
              settings. The virtual environment plays a vital role in supporting
              the presentation of the artwork, moving away from white gallery
              spaces.
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
          <div className="col-md-6 pb-5">
            <Image
              fluid={data.image3.childImageSharp.fluid}
              alt="image1"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 pb-5">
            <Image
              fluid={data.image4.childImageSharp.fluid}
              alt="image1"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 pb-5">
            <Image
              fluid={data.image5.childImageSharp.fluid}
              alt="image1"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 pb-5">
            <Image
              fluid={data.image9.childImageSharp.fluid}
              alt="image1"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 pb-5">
            <Image
              fluid={data.image7.childImageSharp.fluid}
              alt="image1"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 pb-5">
            <Image
              fluid={data.image8.childImageSharp.fluid}
              alt="image1"
              className="img-fluid"
            />
          </div>
          <div className="col-md-12 pb-5">
            <Image
              fluid={data.image6.childImageSharp.fluid}
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
      <Footer />
    </div>
  )
}
export const query = graphql`
  {
    image1: file(relativePath: { eq: "lepetit-trianon/image1.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    image2: file(relativePath: { eq: "lepetit-trianon/image2.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    image3: file(relativePath: { eq: "lepetit-trianon/image3.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    image4: file(relativePath: { eq: "lepetit-trianon/image1.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    image5: file(relativePath: { eq: "lepetit-trianon/image5.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    image6: file(relativePath: { eq: "lepetit-trianon/image6.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    image7: file(relativePath: { eq: "lepetit-trianon/image7.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    image8: file(relativePath: { eq: "lepetit-trianon/image8.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    image9: file(relativePath: { eq: "lepetit-trianon/image9.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default project
