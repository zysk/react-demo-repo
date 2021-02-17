import React from "react"
import Navbar from "../components/Navbar"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../components/styles.css"
const about = ({ data }) => {
  return (
    <div className="about">
      <Navbar />
      <div className="container mt-5">
        <div className="row m-5">
          <div className="col-6">
            <Image fluid={data.about.childImageSharp.fluid} />
          </div>
          <div className="col-5 p-5">
            <h2 className="mt-3 ">About Invi</h2>
            <hr className=" hr-line border-danger" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
              libero adipisci magnam aut numquam labore, et non temporibus optio
              reprehenderit vitae nulla! Ullam accusamus doloribus, voluptas
              quia, laboriosam quos nisi, recusandae laudantium quae in corrupti
              tempore distinctio veritatis id fuga!
            </p>
            <button className="btn btn-md btn-outline-danger mt-4 text-uppercase">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export const query = graphql`
  {
    about: file(relativePath: { eq: "img-1.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default about
