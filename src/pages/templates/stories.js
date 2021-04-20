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
            <div className={data.story.slug}>
              <div className="artForJustice-media">
                {" "}
                <h3 className="text-left py-3">MEDIA COVERAGE</h3>
                <div className="text-left">
                  <ul type="none" className="pl-0">
                    <li className="py-1">
                      <i
                        className="fa fa-arrow-circle-o-right pr-1"
                        aria-hidden="true"
                      ></i>
                      <a
                        target="_blank"
                        href="https://preview.houstonchronicle.com/art-exhibits/houston-s-artforjustice-virtual-museum-launches-15325591"
                      >
                        Houston Chronicle: Houston’s ArtForJustice Virtual
                        Museum launches in the spirit of George Floyd
                      </a>
                    </li>
                    <li className="py-1">
                      <i
                        className="fa fa-arrow-circle-o-right pr-1"
                        aria-hidden="true"
                      ></i>
                      <a
                        target="_blank"
                        href="https://www.fox26houston.com/news/virtual-art-gallery-honoring-george-floyd-launched-from-fort-bend-co"
                      >
                        FOX 26 - Virtual art gallery honoring George Floyd
                        launched from Fort Bend Co.
                      </a>
                    </li>
                    <li className="py-1">
                      <i
                        className="fa fa-arrow-circle-o-right pr-1"
                        aria-hidden="true"
                      ></i>
                      <a
                        target="_blank"
                        href="https://www.chron.com/houston/slideshow/Artistic-renderings-commemorating-George-Floyd-on-203441.php?cmpid=hpctp"
                      >
                        Houston Chronicle: Artistic renderings commemorating
                        George Floyd on display through #ArtForJustice
                      </a>
                    </li>
                    <li className="py-1">
                      <i
                        className="fa fa-arrow-circle-o-right pr-1"
                        aria-hidden="true"
                      ></i>
                      <a
                        target="_blank"
                        href="https://www.click2houston.com/features/2020/06/09/photos-virtual-art-gallery-artforjustice-unveiled-by-houston-fort-bend-county-founders-monday/"
                      >
                        KPRC Channel 2 - PHOTOS: Virtual art gallery
                        #ArtForJustice unveiled by Houston, Fort Bend County
                        founders Monday
                      </a>
                    </li>
                    <li className="py-1">
                      <i
                        className="fa fa-arrow-circle-o-right pr-1"
                        aria-hidden="true"
                      ></i>
                      <a
                        target="_blank"
                        href="http://www.fortbendstar.com/fort-bend-art-for-justice-gallery-promotes-worldwide-solidarity/"
                      >
                        Fort Bend Sun: Fort Bend ‘Art For Justice’ gallery
                        promotes worldwide solidarity
                      </a>
                    </li>
                    <li className="py-1">
                      <i
                        className="fa fa-arrow-circle-o-right pr-1"
                        aria-hidden="true"
                      ></i>
                      <a
                        target="_blank"
                        href="https://communityimpact.com/houston/sugar-land-missouri-city/2020/06/15/gallery-artforjustice-takes-viewers-inside-virtual-museum-dedicated-to-george-floyd-black-lives-matter-movement/"
                      >
                        COMMUNITY IMPACT - GALLERY: #ArtforJustice takes viewers
                        inside virtual museum dedicated to George Floyd, Black
                        Lives Matter movement
                      </a>
                    </li>
                    <li className="py-1">
                      <i
                        className="fa fa-arrow-circle-o-right pr-1"
                        aria-hidden="true"
                      ></i>
                      <a
                        target="_blank"
                        href="https://www.dallasnews.com/news/2020/06/11/irving-children-create-artwork-to-honor-george-floyd-and-the-black-community/"
                      >
                        Dallas Morning News: Irving children create artwork to
                        honor George Floyd and the black community
                      </a>
                    </li>
                    <li className="py-1">
                      <i
                        className="fa fa-arrow-circle-o-right pr-1"
                        aria-hidden="true"
                      ></i>
                      <a
                        target="_blank"
                        href="https://www.houstoniamag.com/arts-and-culture/2020/06/houstonians-open-virtual-museum-in-tribute-to-george-floyd"
                      >
                        HOUSTONIA - Houstonians Open Virtual Museum in Tribute
                        to George Floyd
                      </a>
                    </li>
                    <li className="py-1">
                      <i
                        className="fa fa-arrow-circle-o-right pr-1"
                        aria-hidden="true"
                      ></i>
                      <a
                        target="_blank"
                        href="https://myemail.constantcontact.com/NEA-Design---Creative-Placemaking--July-2020.html?soid=1103211031308&aid=x7RVyjSUd_8"
                      >
                        National Endowment for the Arts - Nerdy Design Thing We
                        Are Following
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* ========================NewStartup Media Coverage===================================== */}
              <div className="new-startup-media">
                {" "}
                <h3 className="text-left py-3">MEDIA COVERAGE</h3>
                <div className="text-left">
                  <ul type="none" className="pl-0">
                    <li className="py-1">
                      <i
                        className="fa fa-arrow-circle-o-right pr-1"
                        aria-hidden="true"
                      ></i>
                      <a
                        target="_blank"
                        href="https://preview.houstonchronicle.com/art-exhibits/houston-s-artforjustice-virtual-museum-launches-15325591"
                      >
                        Houston Chronicle: Houston’s ArtForJustice Virtual
                        Museum launches in the spirit of George Floyd
                      </a>
                    </li>
                    <li className="py-1">
                      <i
                        className="fa fa-arrow-circle-o-right pr-1"
                        aria-hidden="true"
                      ></i>
                      <a
                        target="_blank"
                        href="https://www.chron.com/houston/slideshow/Artistic-renderings-commemorating-George-Floyd-on-203441.php?cmpid=hpctp"
                      >
                        Houston Chronicle: Artistic renderings commemorating
                        George Floyd on display through #ArtForJustice
                      </a>
                    </li>
                    <li className="py-1">
                      <i
                        className="fa fa-arrow-circle-o-right pr-1"
                        aria-hidden="true"
                      ></i>
                      <a
                        target="_blank"
                        href="https://www.click2houston.com/features/2020/06/09/photos-virtual-art-gallery-artforjustice-unveiled-by-houston-fort-bend-county-founders-monday/"
                      >
                        KPRC Channel 2 - PHOTOS: Virtual art gallery
                        #ArtForJustice unveiled by Houston, Fort Bend County
                        founders Monday
                      </a>
                    </li>
                    <li className="py-1">
                      <i
                        className="fa fa-arrow-circle-o-right pr-1"
                        aria-hidden="true"
                      ></i>
                      <a
                        target="_blank"
                        href="http://www.fortbendstar.com/fort-bend-art-for-justice-gallery-promotes-worldwide-solidarity/"
                      >
                        Fort Bend Sun: Fort Bend ‘Art For Justice’ gallery
                        promotes worldwide solidarity
                      </a>
                    </li>
                    <li className="py-1">
                      <i
                        className="fa fa-arrow-circle-o-right pr-1"
                        aria-hidden="true"
                      ></i>
                      <a
                        target="_blank"
                        href="http://www.fortbendstar.com/fort-bend-art-for-justice-gallery-promotes-worldwide-solidarity/"
                      >
                        Fort Bend Sun: Fort Bend ‘Art For Justice’ gallery
                        promotes worldwide solidarity
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
