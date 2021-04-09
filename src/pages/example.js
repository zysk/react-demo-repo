import React from "react"
import "../components/main.css"
import { Formik, Form, Field, ErrorMessage } from "formik"
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
                    comment: "",
                  }}
                  onSubmit={(values, actions) => {
                    alert("Thank you ! We wil get back to you soon")
                    actions.resetForm()
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
                        <label for="Name" className="form-label invisible">
                          Full Name
                        </label>
                        <Field
                          type="text"
                          className="form-control w-100"
                          id="name"
                          placeholder="Full Name"
                          name="name"
                        />
                        <ErrorMessage name="name" className="error" />
                      </div>
                      <div className="mb-5">
                        <label for="Email" className="form-label invisible">
                          Email Address
                        </label>
                        <Field
                          type="text"
                          name="email"
                          className="form-control w-100"
                          id="Email"
                          placeholder="Email Address"
                        />
                        <ErrorMessage name="email" className="error" />
                      </div>
                      <div className="mb-3 comment">
                        <label for="comment" className="form-label invisible">
                          Comment
                        </label>
                        <Field
                          className="form-control w-100"
                          name="comment"
                          component="textarea"
                          id="comment"
                          rows="5"
                          placeholder="Comment"
                        />
                        <ErrorMessage name="comment" className="error" />
                      </div>
                      <div className="text-lg-right text-center mt-5">
                        <button
                          type="submit"
                          className=" submit-btn btn btn-outline-dark btn-md text-uppercase font-weight-bold"
                        >
                          Send Message
                        </button>
                      </div>
                    </Form>
                  )}
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
