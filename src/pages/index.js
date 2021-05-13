import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../components/main.css"
import animation from "../images/animation-illustration.gif"
import virtual from "../images/invi-virtual.gif"
import SEO from "../components/seo"
import Frame from "./aframe"
const index = ({ data }) => {
  return (
    <div className="home">
      {/* <Navbar className="Home" /> */}
      <SEO title="Home" />
      <Frame data={data} />
    </div>
  )
}
export const query = graphql`
  {
    contact: contentfulContactFooter {
      email
      copyright
      phoneLink
      phone
      mailToLink
      location
    }
    image: file(relativePath: { eq: "aframe-illustration.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    intro: file(relativePath: { eq: "invi-cloud-design.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    home: contentfulHomePage {
      title
      homeImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      image1 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      description {
        description
      }
      services
      animation {
        fluid {
          ...GatsbyContentfulFluid
        }
        title
        file {
          url
        }
      }
      virtual {
        fluid {
          ...GatsbyContentfulFluid
          src
        }
        file {
          url
        }
        title
      }
    }
  }
`
export default index
