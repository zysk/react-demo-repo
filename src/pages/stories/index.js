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
          <div className="col-lg-5 text-lg-left text-center pt-5 pt-lg-0 ">
            <h1 className="title text-center text-lg-left m-0 pb-4 pb-md-0">
              Read what INVI has to say
            </h1>
            <p className="text-justify description">
              We love to tell stories at INVI! Stories have the power to bring
              people together and connect our hearts. Here we can connect with
              you, lead you into our design process, share with you our exciting
              projects, and together we can celebrate our humble
              accomplishments.
            </p>
          </div>
          <div className="col-lg-6 ">
            <Image
              fluid={data.image.childImageSharp.fluid}
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
        {/* <div className="row text-center justify-content-center py-lg-5">
          <div className="col-md-10">
            <Image
              fluid={data.southernplains.childImageSharp.fluid}
              alt="Art For Museum"
              className="img-fluid"
            />
          </div>
          <div className="col-md-9">
            <h3 className="font-weight-bold pt-5 px-lg-4 title">
              <a href="../stories/virtual-southern-plains/">
                The First Virtual Southern Plains Museum and Cultural Center for
                Native Americans in Houston
              </a>
            </h3>
            <h6 className="py-3 text-muted">
              NOVEMBER 18, 2020 IN STORY TELLING
            </h6>
            <p className="description text-justify">
              INVI had an opportunity to collaborate with the City of Houston
              and Chance L. Landry, President of the Southern Apache Museum, to
              design and create the virtual Southern Plains Museum and Culture
              Center (SPMCC) for Native American Heritage Month. Our main
              purpose is to create a COVID-19 safe environment for the community
              while sharing the stories and history of the Native American
              community with the rest of the world.
            </p>
            <p className="py-3 font-weight-bold">
              <a href="../stories/virtual-southern-plains/">READ MORE</a>
            </p>
          </div>
        </div>
        <div className="row text-center justify-content-center pt-lg-5">
          <div className="col-md-10">
            <Image
              fluid={data.graffiti.childImageSharp.fluid}
              alt="Graffiti City Park"
              className="img-fluid"
            />
          </div>
          <div className="col-md-9">
            <h3 className="font-weight-bold pt-5 px-lg-4 title">
              <a href="../stories/graffiti-city-park/">
                Graffiti City Park and Virtual Real Estate
                <br />
                Leaving your Digital Footprints
              </a>
            </h3>
            <h6 className="py-3 text-muted">
              AUGUST 02, 2020 IN STORY TELLING
            </h6>
            <p className="description text-justify">
              Graffiti artists find a way to bring life to the static buildings
              as architecture takes a simplified approach. The colorful paint
              parades across the façade of the local corner store or a
              warehouse, without their consent, the work reaches many audiences.
              The realization of the artwork on the street is controversial.
              While some graffiti is plastered without permission of the
              occupants of the building, often graffiti artists are commissioned
              by the city or the property owner.
            </p>
            <p className="py-3 font-weight-bold">
              <a href="../stories/graffiti-city-park/">READ MORE</a>
            </p>
          </div>
        </div> */}
        <div class="row text-center justify-content-start py-lg-5">
          <div class="col-md-4 px-3">
            <Image
              fluid={data.southernplains.childImageSharp.fluid}
              alt="Southern Plains Museum"
              className="img-fluid"
            />
            <h3 class="font-weight-bold pt-5 px-lg-4 stories-title">
              <a href="../stories/virtual-southern-plains/">
                The First Virtual Southern Plains Museum and Cultural Center for
                Native Americans in Houston
              </a>
            </h3>
            <h6 class="py-3 text-muted">NOVEMBER 18, 2020 IN STORY TELLING</h6>
            <p class="description text-justify">
              INVI had an opportunity to collaborate with the City of Houston
              and Chance L. Landry, President of the Southern Apache Museum, to
              design and create the virtual Southern Plains Museum and Culture
              Center (SPMCC) for Native American Heritage Month.
            </p>
            <p class="py-3 font-weight-bold">
              <a href="../stories/virtual-southern-plains/">READ MORE</a>
            </p>
          </div>
          <div class="col-md-4 px-3">
            <Image
              fluid={data.graffiti.childImageSharp.fluid}
              alt="Graffiti City Park"
              className="img-fluid"
            />
            <h3 class="font-weight-bold pt-5 px-lg-4 stories-title">
              <a href="../stories/graffiti-city-park/">
                Graffiti City Park and Virtual Real Estate
                <br />
                Leaving your Digital Footprints
              </a>
            </h3>
            <h6 class="py-3 text-muted">AUGUST 02, 2020 IN STORY TELLING</h6>
            <p class="description text-justify">
              Graffiti artists find a way to bring life to the static buildings
              as architecture takes a simplified approach. The colorful paint
              parades across the façade of the local corner store or a
              warehouse, without their consent, the work reaches many audiences.
              The realization of the artwork on the street is controversial.
            </p>
            <p class="py-3 font-weight-bold">
              <a href="../stories/graffiti-city-park/">READ MORE</a>
            </p>
          </div>
          <div class="col-md-4 px-3">
            <Image
              fluid={data.virtual.childImageSharp.fluid}
              alt="Reimagine Virtual Art Exhibition"
              className="img-fluid"
            />
            <h3 class="font-weight-bold pt-5 px-lg-4 stories-title">
              <a href="../stories/reimagine-virtual-art/">
                Reimagine Virtual Art Exhibition in a Physical Space
              </a>
            </h3>
            <h6 class="py-3 text-muted">JULY 10, 2020 IN STORY TELLING</h6>
            <p class="description text-justify">
              INVI is honored to take part in The Eye of the Huntress project,
              collaborating with Alexandra Ray and Catherine Loewe to reimagine
              and rediscover virtual art exhibitions in a physical space. INVI
              helps recreate the Le Petit Trianon (San Francisco) residence into
              a virtual platform, while Alexandra and Catherine ...
            </p>
            <p class="py-3 font-weight-bold">
              <a href="../stories/reimagine-virtual-art/">READ MORE</a>
            </p>
          </div>
        </div>
        <div class="row text-center justify-content-start pt-lg-5">
          <div class="col-md-4 px-3">
            <Image
              fluid={data.startup.childImageSharp.fluid}
              alt="New Startup"
              className="img-fluid"
            />
            <h3 class="font-weight-bold pt-5 px-lg-4 stories-title">
              <a href="../stories/new-startup/">
                THE SUCCESS OF A NEW STARTUP DURING COVID-19
              </a>
            </h3>
            <h6 class="py-3 text-muted">JUNE 12, 2020 IN STORY TELLING</h6>
            <p class="description text-justify">
              INVI is a visualization company that started in March of 2020 in
              Houston, TX, in the midst of the world’s battle against COVID-19,
              a virus that took over the world.Similar with many people around
              the world, Afreen and I both suffered from the economic impact
              from COVID-19. Afreen was furloughed while I received a salary and
              hour deduction. We both understood the necessary measures our
              company had to take during these unprecedented times and we knew
              that many businesses globally will have to take these extreme
              steps as well.
            </p>
            <p class="py-3 font-weight-bold">
              <a href="../stories/new-startup/">READ MORE</a>
            </p>
          </div>
          <div class="col-md-4 px-3">
            <Image
              fluid={data.art.childImageSharp.fluid}
              alt="ArtForJustice"
              className="img-fluid"
            />

            <h3 class="font-weight-bold pt-5 px-lg-4 stories-title">
              <a href="../stories/artForJustice/">
                #ArtForJustice Virtual Museum Launch <br />
                Commemorating George Floyd and Supporting the Black Lives Matter
                Movement
              </a>
            </h3>
            <h6 class="py-3 text-muted">JUNE 08, 2020 IN STORY TELLING</h6>
            <p class="description text-justify">
              INVI recently partnered with FORT BEND County to create a 360
              virtual art museum and curated art to commemorate George Floyd and
              the Black Lives Matter Movement as a sign of immense and heartfelt
              solidarity. We received an outpouring of artistic submissions from
              155 artists from 14 states (CA, CO, CT, DC, FL, GA, HI, MA, NC,
              NJ, TX, VA, WA, WI) and 6 countries...
            </p>
            <p class="py-3 font-weight-bold">
              <a href="../stories/artForJustice/">READ MORE</a>
            </p>
          </div>
        </div>
      </section>
      {/* <!-- ======= Stories ======= --> */}
      <Footer />
    </div>
  )
}
export const query = graphql`
  {
    image: file(relativePath: { eq: "stories-graphics.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    southernplains: file(relativePath: { eq: "stories/southern-plains.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    graffiti: file(relativePath: { eq: "stories/graffiti-2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    art: file(relativePath: { eq: "stories/art-for-museum-1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    virtual: file(relativePath: { eq: "stories/reimagine-virtual-art2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    startup: file(relativePath: { eq: "stories/new-startup.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default stories
