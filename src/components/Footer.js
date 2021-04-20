import React from "react"
import "./main.css"
import { graphql } from "gatsby"
import { Formik, Form, Field } from "formik"
import { data } from "jquery"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
const Footer = ({ className, data1 }) => {
  return (
    <>
      <footer className={className}>
        <div className="container pt-lg-3 py-5">
          <div className="row d-flex justify-content-between">
            <div className="col-lg-5 pb-4 pb-lg-0">
              <h5 className="pb-3 pb-lg-5 footer-heading">CONTACT</h5>
              <p>
                <a href="tel:+1 (832) 356-7656">
                  <i className=" fa fa-phone pr-2" aria-hidden="true"></i>
                  {data1.contact.phone}
                </a>
                <br />
                <a href="mailto:hello@invi.us">
                  <i className=" fa fa-envelope pr-2" aria-hidden="true"></i>
                  {data1.contact.email}
                </a>
              </p>
              <p>
                <i className=" fa fa-map-marker pr-2" aria-hidden="true"></i>
                {data1.contact.location}
              </p>
              <p>{data1.contact.copyright}</p>
            </div>

            <div className="col-lg-3 pb-4 pb-lg-0  text-lg-left ">
              <h5 className="pb-3 pb-lg-5 footer-heading">FOLLOW US</h5>

              <div className="social-icons d-inline pr-2 mr-2">
                <a
                  href="https://www.instagram.com/invi.stories/"
                  target="_blank"
                >
                  <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
                </a>
              </div>
              <div className="social-icons d-inline p-2 mr-2">
                <a
                  href="https://www.linkedin.com/company/invi-llc/"
                  target="_blank"
                >
                  <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                </a>
              </div>
              <div className="social-icons d-inline p-2 mr-2">
                <a
                  href="https://www.youtube.com/channel/UCK_9VVNxQg11pNVy8TBazRw"
                  target="_blank"
                >
                  <i className="fa fa-youtube fa-2x" aria-hidden="true"></i>
                </a>
              </div>
              <div className="social-icons d-inline p-2 mr-2">
                <a href="https://g.page/invi-llc?gm" target="_blank">
                  <i className="fa fa-google fa-2x" aria-hidden="true"></i>
                </a>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 text-lg-right">
              <h5 className="pb-3 pb-lg-5 footer-heading">NEWSLETTER</h5>
              <p>
                Subscribe to INVI for all latest news,
                <br /> behind-the-scene stories, and exciting projects
              </p>
              <Formik
                initialValues={{
                  email: "",
                }}
                onSubmit={(values, actions) => {
                  fetch("/", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: encode({ "form-name": "subscribe", ...values }),
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
              >
                {() => (
                  <Form
                    name="subscribe"
                    method="post"
                    data-netlify={true}
                    data-netlify-honeypot="bot-field"
                  >
                    <input type="hidden" name="form-name" value="subscribe" />
                    <div className="input-group pt-3">
                      <Field
                        type="text"
                        className="form-control sub-input p-4"
                        placeholder="Enter your email"
                        required
                        name="email"
                        id="email"
                      />

                      <span className="input-group-addon">
                        <input
                          type="submit"
                          className="btn subscribe-button font-weight-bold px-4"
                          value="Subscribe"
                        />
                      </span>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
