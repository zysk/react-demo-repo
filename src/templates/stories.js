import React from "react"
import TopMenu from "../components/Menu"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../components/main.css"
import SEO from "../components/seo"
const stories = ({ data }) => {
  return (
    <div className="stories">
      <SEO title={data.story.title.title} />
      <TopMenu />

      {/* <!-- ======= Stories ======= --> */}
      <section className="container py-5">
        <div className="row text-center justify-content-center">
          <div className="col-md-8">
            <Image
              fluid={data.story.image.fluid}
              alt={data.story.image.title}
              className="img-fluid"
            />

            <h3 className="font-weight-bold pt-5 px-lg-4 title">
              {data.story.title.title}
            </h3>
            <h6 className="py-3 text-muted">{data.story.date}</h6>
            <div
              className="decription text-justify pb-4"
              dangerouslySetInnerHTML={{
                __html: data.story.description.childMarkdownRemark.html,
              }}
            ></div>
            {data.story.description2 !== null && (
              <div>
                <Image
                  fluid={data.story.image2.fluid}
                  alt={data.story.image.title}
                  className="southern img-fluid "
                />
                <div
                  className="southern decription text-justify pt-4"
                  dangerouslySetInnerHTML={{
                    __html: data.story.description2.childMarkdownRemark.html,
                  }}
                ></div>
              </div>
            )}

            {data.story.mediaCoverage !== null && (
              <div className="text-left">
                <h3 className="text-left py-3">MEDIA COVERAGE</h3>
                <ul type="none" className="pl-0">
                  {data.story.mediaCoverage.map(link => {
                    return (
                      <li className="py-1" key={link.id}>
                        <i
                          className="fa fa-arrow-circle-o-right pr-1"
                          aria-hidden="true"
                        ></i>
                        <a target="_blank" href={link.description}>
                          {link.title}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* <!-- ======= Stories ======= --> */}
      {/* <!--=========Pagination Buttons=======--> */}
      <div className="container py-3">
        <div className="row ">
          <div className="col-12 pt-lg-5 pb-lg-3 d-flex justify-content-between">
            <ul className="pagination">
              <li className="page-item">
                <a
                  href={data.story.prevLink}
                  className="page-link"
                  aria-label="Previous"
                >
                  <i className="fas fa-arrow-left" aria-hidden="true"></i>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link text-center" href={data.story.prevLink}>
                  <span>Prev </span>
                </a>
              </li>
            </ul>
            {data.story.nextLink !== null && (
              <ul className="pagination">
                <li className="page-item">
                  <a
                    className="page-link text-center"
                    href={data.story.nextLink}
                  >
                    Next
                  </a>
                </li>
                <li className="page-item">
                  <a
                    href={data.story.nextLink}
                    className="page-link"
                    aria-label="Next"
                  >
                    <span aria-hidden="true">
                      <i className="fas fa-arrow-right " aria-hidden="true"></i>
                    </span>
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      {/* <!--=========Pagination Buttons=======--> */}
      <Footer data1={data} />
    </div>
  )
}

export default stories
export const query = graphql`
  query MyQuery($slug: String) {
    contact: contentfulContactFooter {
      email
      copyright
      phoneLink
      phone
      mailToLink
      location
    }
    story: contentfulStories(slug: { eq: $slug }) {
      image {
        title
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      title {
        title
      }
      slug
      date
      description {
        childMarkdownRemark {
          html
        }
      }
      description2 {
        childMarkdownRemark {
          html
        }
      }
      image2 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      nextLink
      prevLink
      mediaCoverage {
        title
        id
        description
        file {
          url
        }
      }
    }
    image2: file(relativePath: { eq: "stories/southern-plains-2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    southern: contentfulStories(slug: { eq: "southern-plains-museum" }) {
      description2 {
        childMarkdownRemark {
          html
        }
      }
      image2 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
