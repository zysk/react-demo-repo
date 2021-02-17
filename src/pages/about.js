import React from "react"
import Navbar from "../components/Navbar"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../components/styles.css"
const about = ({ data }) => {
  return (
    <div className="about">
      <h2>About</h2>
    </div>
  )
}
export const query = graphql`
  {
    icon: file(relativePath: { eq: "quotes-icon.png" }) {
      childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`
export default about
