import React from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
const Subscribe = () => {
  const data = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "services-background.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )
  return (
    <BackgroundImage
      fluid={data.image.childImageSharp.fluid}
      className="subscribe-bg"
    >
      <div>
        <div className="container text-center">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-lg-6 col-md-8">
              <h1 className="px-5 mt-5 subscribe-heading text-white">
                Subscribe to our Newsletter
              </h1>
              <hr className="border-danger hr-line mx-auto my-5"></hr>
              <form className="form-inline form-lg justify-content-center">
                <label className="visually-hidden" for="inlineFormInputName2">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control mb-4 mx-auto  w-75 rounded-0 "
                  id="inlineFormInputName2"
                  placeholder="Your email address"
                />

                <div class="pb-2 mb-5">
                  <button className="py-2 btn btn-outline-light btn-md button-text text-uppercase px-2 px-lg-4 mx-auto">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Subscribe
