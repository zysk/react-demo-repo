import React, { useState, useEffect } from "react"
import { Formik, Field, Form, ErrorMessage, setFieldValue } from "formik"
import * as yup from "yup"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import axios from "axios"
import Image from "gatsby-image"
import "../components/main.css"
import Recaptcha from "react-google-recaptcha"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
const isDev = process.env.NODE_ENV === "development"
function ContactForm({ data }) {
  const [token, setToken] = useState(null)
  const recaptchaRef = React.createRef()
  // useEffect(() => {
  //   const script = document.createElement("script")
  //   script.src = "https://www.google.com/recaptcha/api.js"
  //   script.async = true
  //   script.defer = true
  //   document.body.appendChild(script)
  // }, [])
  return (
    <>
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
                  recaptcha: "",
                }}
                onSubmit={(values, actions) => {
                  axios({
                    method: "post",
                    url: "https://formspree.io/f/myylkezb",
                    headers: { "content-type": "application/json" },
                    body: encode({
                      "form-name": "contact",
                      ...values,
                      "g-recaptcha-response": token,
                    }),
                    data: values,
                  })
                    .then(result => {
                      alert(
                        "Thank you for contacting us! Our team will be in touch with you shortly"
                      )
                      alert(
                        JSON.stringify(
                          {
                            recaptcha: values.recaptcha,
                          },
                          null,
                          2
                        )
                      )
                      // fetch("https://formspree.io/f/myylkezb", {
                      //   method: "POST",
                      //   headers: {
                      //     "Content-Type": "application/x-www-form-urlencoded",
                      //   },
                      //   body: encode({
                      //     "form-name": "contact",
                      //     ...values,
                      //     "g-recaptcha-response": token,
                      //   }),
                      // })
                      //   .then(() => {
                      //     alert(
                      //       "Thank you for subscribing! We will get back to you soon"
                      //     )
                      actions.resetForm()
                      // recaptchaRef.reset()
                    })
                    .catch(() => {
                      alert("Error")
                    })
                    .finally(() => actions.setSubmitting(false))
                }}
                validationSchema={yup.object().shape({
                  recaptcha: yup.string().required(),
                })}
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
                    action="https://formspree.io/f/myylkezb"
                    // data-netlify="true"
                    // data-netlify-honeypot="bot-field"
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
                      {/* <div
                        value="captcha"
                        name="captcha"
                        className=" d-flex w-100 justify-content-md-end justify-content-center pb-3 g-recaptcha"
                        data-sitekey={process.env.GATSBY_SITE_RECAPTCHA_KEY}
                        data-callback
                        data-expired-callback
                        required
                      ></div> */}
                      <div className=" d-flex w-100 justify-content-md-end justify-content-center pb-3 g-recaptcha">
                        <Recaptcha
                          sitekey={process.env.GATSBY_SITE_RECAPTCHA_KEY}
                          ref={recaptchaRef}
                          render="explicit"
                          theme="light"
                          render="explicit"
                          theme="dark"
                          verifyCallback={response => {
                            setFieldValue("recaptcha", response)
                          }}
                          onloadCallback={() => {
                            console.log("done loading!")
                          }}
                        />
                      </div>
                      <button
                        type="submit"
                        className=" submit-btn btn btn-outline-dark btn-md text-uppercase font-weight-bold px-4 py-2"
                      >
                        Send Message
                      </button>
                    </div>
                    <div className="text-right"></div>
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
export default ContactForm
