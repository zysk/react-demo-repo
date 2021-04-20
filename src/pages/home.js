import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../components/main.css"

const about = ({ data }) => {
  return (
    <div className="about">
      <Navbar className="About" />
      <section className="container py-5 mt-lg-4">
        <div className="row d-flex align-items-center justify-content-between">
          <div className="col-lg-6 order-lg-12">
            <Image fluid={data.about.image.fluid} alt="Our Story" />
          </div>
          <div className="col-lg-5 text-left pt-5 pt-lg-0 order-lg-1">
            <h1 className="title text-center text-lg-left text-center text-lg-left m-0 pb-4 pb-lg-0">
              {data.about.title}
            </h1>
            <div
              className="py-lg-5 description text-justify"
              dangerouslySetInnerHTML={{
                __html: data.about.description.childMarkdownRemark.html,
              }}
            ></div>
          </div>
        </div>
      </section>
      {/* Our Story */}

      {/* <!-- ======= Team ======= --> */}
      <section className="container py-5 team">
        <div className="row justify-content-md-between justify-content-center">
          <div className="col-md-4 d-flex flex-column justify-content-between team-col px-0 p-4 mb-4 mb-md-0">
            <div>
              <h1 className="team-title title mb-2 pb-4 pb-md-0">
                {data.about.teamCard}
              </h1>
            </div>
            <div
              className="team-description decription"
              dangerouslySetInnerHTML={{
                __html: data.about.teamCardContent.childMarkdownRemark.html,
              }}
            ></div>
          </div>
          {data.team.edges.map(({ node: member }) => {
            return (
              <div
                className="col-md-4 px-0 text-center pb-4 mb-4 mb-md-0"
                key={member.id}
              >
                <img
                  src={member.svgImage.file.url}
                  alt="Giangtien Nguyen"
                  className="img-fluid tien static"
                />
                <img
                  src={member.gifImage.file.url}
                  alt="Giangtien Nguyen"
                  className="img-fluid tien active"
                />
                <h5 className="pt-4">{member.name}</h5>
                <p>{member.designation}</p>
              </div>
            )
          })}
          <div className="col-md-4"></div>
        </div>
      </section>
      {/* <!-- ======= Team ======= --> */}

      <Footer />
    </div>
  )
}
export const query = graphql`
  {
    about: contentfulAboutPageIntroduction {
      title
      description {
        childMarkdownRemark {
          html
        }
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      teamCard
      teamCardContent {
        childMarkdownRemark {
          html
        }
      }
    }
    team: allContentfulAboutPageMeetTheTeam(
      sort: { order: ASC, fields: order }
    ) {
      edges {
        node {
          id
          name
          designation
          svgImage {
            fluid {
              ...GatsbyContentfulFluid
            }
            file {
              url
            }
          }
          gifImage {
            fluid {
              ...GatsbyContentfulFluid
            }
            file {
              url
            }
          }
        }
      }
    }
  }
`
export default about
