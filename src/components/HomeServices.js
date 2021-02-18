import React from "react"
import Header from "../components/header"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import "../components/styles.css"

const HomeServices = () => {
  const data = useStaticQuery(
    graphql`
      query {
        animation: file(relativePath: { eq: "animations-icon.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        virtual: file(relativePath: { eq: "virtual-icon.jpg" }) {
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
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div class="card" style={{ width: "18rem" }}>
              <Image
                fluid={data.animation.childImageSharp.fluid}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Animation</h5>

                <button className="btn btn-lg btn-outline-danger mt-3 ">
                  EXPLORE
                </button>
              </div>
            </div>{" "}
          </div>
          <div className="col-md-6">
            <div class="card" style={{ width: "18rem" }}>
              <Image
                fluid={data.virtual.childImageSharp.fluid}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Virtual Environment</h5>

                <button className="btn btn-lg btn-outline-danger mt-3 ">
                  EXPLORE
                </button>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeServices
