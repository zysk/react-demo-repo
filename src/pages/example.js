import React from "react"
import "../components/main.css"
import { Formik, Form, Field } from "formik"
const Footer = ({ className }) => {
  return (
    <>
      <footer className={className}>
        <div className="container pt-lg-3 py-5">
          <div className="row d-flex justify-content-between">
            <div className="col-md-6 col-lg-4 text-lg-right">
              <h5 className="pb-3 pb-lg-5 footer-heading">NEWSLETTER</h5>
              <p>
                Subscribe to INVI for all latest news,
                <br /> behind-the-scene stories, and exciting projects
              </p>
              <div className="input-group pt-3">
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    message: "",
                  }}
                  onSubmit={(values, actions) => {
                    alert(
                      "Thank you for subscribing! We wil get back to you soonS"
                    )
                    actions.setSubmitting(false)
                  }}
                >
                  <Form
                    name="subscribe"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    <input type="hidden" name="form-name" value="subscribe" />
                    <div class="input-group">
                      <input
                        type="email"
                        className="form-control input-button p-4"
                        placeholder="Enter your email"
                        required
                      />
                      <span class="input-group-addon">
                        <input
                          type="submit"
                          className="btn subscribe-button font-weight-bold px-4"
                          value="Subscribe"
                        />
                      </span>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
