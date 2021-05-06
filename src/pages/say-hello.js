import React, { useRef, useEffect, useState } from "react"
import { ErrorMessage, Field, Form, Formik } from "formik"
import Reaptcha from "react-google-recaptcha"
import axios from "axios"
import qs from "qs"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../components/main.css"
import SEO from "../components/seo"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
export default ({ data }) => {
  const [errMsg, setErrMsg] = useState("")
  const [executing, setExecuting] = useState(false)
  const [formValues, setFormValues] = useState({})
  const [formReset, setFormReset] = useState({})
  const [loaded, setLoaded] = useState(false)
  const [msgSent, setMsgSent] = useState(false)
  const [rcError, setRcError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [token, setToken] = useState("")
  const [verified, setVerified] = useState(false)

  const rcRef = useRef(null)

  useEffect(() => {
    const handleSubmit = async (formValues, token) => {
      const data = {
        ...formValues,
        "g-recaptcha-response": token,
      }
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: qs.stringify(data),
        url: "https://formspree.io/f/myylkezb",
      }
      try {
        await axios(options)
        setMsgSent(true)
        formReset()
      } catch (e) {
        setErrMsg(e.message)
      }
    }
    if (token) {
      handleSubmit(formValues, token)
    }
  }, [formReset, formValues, token])

  const onError = () => {
    console.log("error...")
    setRcError(true)
  }

  const onExpire = () => {
    console.log("expired...")
    console.log("resetting...")
    resetReCaptcha()
  }

  const onLoad = resetForm => {
    console.log("loaded...")
    setLoaded(true)
    setFormReset(resetForm)
  }

  const onVerify = token => {
    console.log("verified...")
    setToken(token)
    setVerified(true)
    setExecuting(false)
  }

  const resetEverything = resetForm => {
    if (rcError) {
      setRcError(false)
    }
    if (resetForm) {
      setMsgSent(false)
      setErrMsg(false)
      resetForm()
    }
    resetReCaptcha()
  }

  const resetReCaptcha = async () => {
    console.log("resetting...")
    await rcRef.current.reset()
    setVerified(false)
  }

  return (
    <>
      <div className="contact">
        <SEO title="Contact" />
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
                onSubmit={(values, actions) => {
                  setIsSubmitting(true)
                  setFormValues({ ...values })
                  setExecuting(true)
                  rcRef.current.execute()
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
                      actions.resetForm()
                    })
                    .catch(() => {
                      alert("Error")
                    })
                    .finally(() => actions.setSubmitting(false))
                }}
              >
                {({ resetForm }) => (
                  <Form
                    name="contact"
                    method="post"
                    action="https://formspree.io/f/myylkezb"
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
                      <div className=" d-flex w-100 justify-content-md-end justify-content-center pb-3 ">
                        {/* <Reaptcha
                          ref={rcRef}
                          sitekey="6Le_laEUAAAAACRNoby3_NLejhu0lCqb4_WeSotQ"
                          onError={onError}
                          onExpire={onExpire}
                          onVerify={onVerify}
                          onLoad={() => onLoad(() => resetForm)}
                          size="invisible"
                        /> */}
                        <Reaptcha
                          sitekey="6Le7eb4aAAAAAMkB2ElvyDBEPO9P7DThYPfSW2rz"
                          ref={rcRef}
                          onError={onError}
                          onExpire={onExpire}
                          onVerify={onVerify}
                          onLoad={() => onLoad(() => resetForm)}
                        />
                      </div>
                      <button
                        type="submit"
                        className=" submit-btn btn btn-outline-dark btn-md text-uppercase font-weight-bold px-4 py-2"
                      >
                        Send Message
                      </button>
                    </div>
                    <div className="text-right">
                      {/* <div
                        className="g-recaptcha"
                        data-sitekey="6LfOZr4aAAAAABnRDylsvQ7G_6D9sly9sjod-4T1"
                      ></div> */}
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
