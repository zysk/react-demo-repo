import React from "react"
import Navbar from "../components/Navbar"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Image from "gatsby-image"
import Contact from "../components/Contact"
import Overlay from "../components/Overlay"

const services = ({ data }) => {
  return (
    <section className="Services position-relative">
      {/* <Navbar className="services-navbar position-absolute" /> */}

      <BackgroundImage
        className="services-background"
        fluid={data.image.childImageSharp.fluid}
      >
        <Navbar className="services-navbar position-absolute" />
        <div className="d-flex flex-column align-items-center">
          <h2 className="title text-white  text-center display-4 m-md-5 pt-5">
            What We Do?
          </h2>
          <h4 className="text-white text-center">
            We create virtual experiences through architecture, storytelling,
            and design
          </h4>
        </div>
      </BackgroundImage>
      <div className="container my-5">
        <div className="row m-3">
          <div className="col-md-6">
            <Image
              fluid={data.animation.childImageSharp.fluid}
              alt="Animation"
              className="animation-img"
            />
          </div>
          <div className="col-md-6 p-5">
            <h3 className="heading">Animation</h3>
            <hr className=" hr-line border-danger" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
              at?Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Expedita animi, reiciendis tempore laudantium ab incidunt autem
              velit distinctio nulla, provident dolore alias quae quaerat Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Veritatis enim
              dolores blanditiis saepe est quo eos perspiciatis mollitia autem
              sint, quam impedit distinctio libero pariatur assumenda cum labore
              numquam.
            </p>
            <button className="btn btn-md btn-outline-danger mt-4 text-uppercase">
              View Our Work
            </button>
          </div>
        </div>

        <div className="row m-3">
          <div className="col-md-6 p-5">
            <h3 className="heading mt-5 ">Virtual</h3>
            <hr className=" hr-line border-danger" />
            <p className="align-items-end">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
              at?Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Expedita animi, reiciendis tempore laudantium ab incidunt autem
              velit distinctio nulla, provident dolore alias quae quaerat Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Veritatis enim
              dolores blanditiis saepe est quo eos perspiciatis mollitia autem
              sint, quam impedit distinctio libero pariatur assumenda cum labore
              numquam.
            </p>
            <button className="btn btn-md btn-outline-danger mt-4 text-uppercase">
              View Our Work
            </button>
          </div>
          <div className="col-md-6">
            <Image
              fluid={data.animation.childImageSharp.fluid}
              alt="Animation"
              className="virtual-img"
            />
          </div>
        </div>
      </div>
      <div className="testimonials pb-5">
        <h3 className="text-center pt-5">Testimonials</h3>
        <div
          id="carouselExampleControls"
          className="carousel slide comments"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item text-center pt-5 active">
              <Image fixed={data.icon.childImageSharp.fixed} className="mb-3" />
              <p className="mt-5">
                Some representative placeholder content for the first slide.
              </p>
              <h6>ANI</h6>
            </div>
            <div class="carousel-item text-center pt-5 ">
              <Image fixed={data.icon.childImageSharp.fixed} className="mb-3" />
              <p className="mt-5">
                Some representative placeholder content for the second slide.
              </p>
              <h6>ANI</h6>
            </div>
            <div class="carousel-item text-center pt-5 ">
              <Image fixed={data.icon.childImageSharp.fixed} className="mb-3" />
              <p className="mt-5">
                Some representative placeholder content for the third slide.
              </p>
              <h6>ANI</h6>
            </div>
          </div>
          <a
            className="carousel-control-prev text-dark"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-left-circle"
              aria-hidden="true"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
              />
            </svg>
            <span className="visually-hidden">Previous</span>
          </a>
          <a
            className="carousel-control-next text-dark"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-right-circle "
              aria-hidden="true"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
              />
            </svg>

            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
      <Contact />
    </section>
  )
}
export const query = graphql`
  {
    image: file(relativePath: { eq: "services-background.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    animation: file(relativePath: { eq: "img-1.jpeg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    icon: file(relativePath: { eq: "quotes-icon.png" }) {
      childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
export default services
