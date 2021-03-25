import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../components/main.css"
import "../components/index.css"

const sayhello = ({ data }) => {
  return (
    <>
      {" "}
      <div className="contact">
        <Navbar />
        {/* <!-- ======= Contact Section ======= --> */}

        <section className="container ">
          <div className="row d-md-flex justify-content-md-between py-5">
            <div className="col-md-5 col-12">
              <form>
                <div className="mb-5">
                  <label for="Name" className="form-label invisible">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control w-100"
                    id="name"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label for="Email" className="form-label invisible">
                    Email Address
                  </label>
                  <input
                    type="text"
                    className="form-control w-100"
                    id="Email"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="mb-3 comment">
                  <label for="Comment" className="form-label invisible">
                    Comment
                  </label>
                  <textarea
                    className="form-control w-100"
                    id="Comment"
                    rows="5"
                    placeholder="Comment"
                  ></textarea>
                </div>
                <div className="text-lg-right text-center mt-5">
                  <button
                    type="submit"
                    className=" submit-btn btn btn-outline-dark btn-md text-uppercase font-weight-bold"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6 mt-5 mt-md-0">
              {" "}
              <Image
                fluid={data.intro.childImageSharp.fluid}
                className="img-fluid"
                alt="contact-gif"
              />
            </div>
          </div>
        </section>

        {/* <!-- ======= Contact Section =======--> */}
        <Footer className="contact-footer mt-lg-5" />
      </div>
    </>
  )
}
export const query = graphql`
  {
    intro: file(relativePath: { eq: "invi-cloud-design.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default sayhello
