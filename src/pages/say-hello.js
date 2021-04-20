import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../components/main.css"
import { Formik, Form, Field, ErrorMessage } from "formik"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
const sayhello = ({ data }) => {
  return (
    <>
      {" "}
      <div className="contact">
        <Navbar />
        {/* <!-- ======= Contact Section ======= --> */}

        <section className="container ">
          <div className="row d-md-flex justify-content-md-between py-5">
            <div className="col-md-5 col-12">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  comment: "",
                }}
                onSubmit={(values, actions) => {
                  fetch("/", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: encode({ "form-name": "contact", ...values }),
                  })
                    .then(() => {
                      alert(
                        "Thank you for subscribing! We will get back to you soon"
                      )
                      actions.resetForm()
                    })
                    .catch(() => {
                      alert("Error")
                    })
                    .finally(() => actions.setSubmitting(false))
                }}
                validate={values => {
                  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                  const errors = {}
                  if (!values.name) {
                    errors.name = "Name Required*"
                  }
                  if (!values.email || !emailRegex.test(values.email)) {
                    errors.email = "Valid Email Required*"
                  }
                  if (!values.comment) {
                    errors.comment = "Message Required*"
                  }
                  return errors
                }}
              >
                {() => (
                  <Form
                    name="contact"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    <input type="hidden" name="form-name" value="contact" />

                    <div className="mb-5">
                      <label htmlFor="Name" className="form-label invisible">
                        Full Name
                      </label>
                      <Field
                        type="text"
                        className="form-control contact-input w-100"
                        id="name"
                        placeholder="Full Name"
                        name="name"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="error font-weight-bold pt-3"
                      />
                    </div>
                    <div className="mb-5">
                      <label htmlFor="Email" className="form-label invisible">
                        Email Address
                      </label>
                      <Field
                        type="text"
                        name="email"
                        className="form-control contact-input w-100"
                        id="Email"
                        placeholder="Email Address"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error font-weight-bold pt-3"
                      />
                    </div>
                    <div className="mb-3 comment">
                      <label htmlFor="comment" className="form-label invisible">
                        Comment
                      </label>
                      <Field
                        className="form-control contact-input w-100"
                        name="comment"
                        component="textarea"
                        id="comment"
                        rows="5"
                        placeholder="Comment"
                      />
                      <ErrorMessage
                        name="comment"
                        component="div"
                        className="error font-weight-bold pt-3"
                      />
                    </div>
                    <div className="text-md-right text-center mt-5">
                      <button
                        type="submit"
                        className=" submit-btn btn btn-outline-dark btn-md text-uppercase font-weight-bold px-4 py-2"
                      >
                        Send Message
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="col-md-6 mt-5 mt-md-0">
              {" "}
              <Image
                fluid={data.intro.image.fluid}
                className="img-fluid"
                alt="contact-gif"
              />
            </div>
          </div>
        </section>

        {/* <!-- ======= Contact Section =======--> */}
        <Footer className="contact-footer mt-lg-5" data1={data} />
      </div>
    </>
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
    intro: contentfulSayHello {
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
export default sayhello
