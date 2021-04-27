import React from "react"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../../components/main.css"

const stories = ({ data }) => {
  return (
    <div className="stories">
      <Navbar />
      {/* <!--====== Graphics Section======--> */}
      <section className="container py-5 mt-lg-4">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-lg-5 text-lg-left text-center  pt-lg-0 ">
            <h1 className="title text-center text-lg-left m-0 pb-4 pb-md-0">
              {data.intro.title}
            </h1>
            <div
              className="text-justify description"
              dangerouslySetInnerHTML={{
                __html: data.intro.description.childMarkdownRemark.html,
              }}
            ></div>
          </div>
          <div className="col-lg-6 ">
            <Image
              fluid={data.intro.image.fluid}
              alt=""
              className="img-fluid"
              width="700"
            />
          </div>
        </div>
      </section>
      {/* <!--====== Graphics Section======--> */}

      {/* <!-- ======= Stories ======= --> */}
      <section className="container py-5">
        <div className="row text-center justify-content-start py-lg-5">
          {data.stories.edges.map(({ node: story }) => {
            return (
              <div className="col-md-4 px-3" key={story.id}>
                <Image
                  fluid={story.image.fluid}
                  alt="Southern Plains Museum"
                  className="img-fluid"
                />
                <h3 className="font-weight-bold pt-5 px-lg-4 stories-title">
                  <a href={story.readMoreLink}>{story.title.title}</a>
                </h3>
                <h6 className="py-3 text-muted">{story.date}</h6>
                <div
                  className="text-justify description limited-text"
                  max-length="100"
                  dangerouslySetInnerHTML={{
                    __html:
                      story.landingPageIntroduction.childMarkdownRemark.html,
                  }}
                ></div>
                <p className="py-3 font-weight-bold">
                  <a href={story.readMoreLink}>READ MORE</a>
                </p>
              </div>
            )
          })}
        </div>
      </section>
      {/* <!-- ======= Stories ======= --> */}
      <Footer data1={data} />
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
    intro: contentfulStoriesIntroduction {
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
    }
    stories: allContentfulStories(
      sort: { order: DESC, fields: formattedDate }
    ) {
      edges {
        node {
          slug
          title {
            title
          }
          date
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          landingPageIntroduction {
            childMarkdownRemark {
              html
            }
          }
          readMoreLink
        }
      }
    }
  }
`
export default stories
