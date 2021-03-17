import React from "react"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../components/main.css"
import "../components/index.css"
import contact from "../images/contact.gif"

const sayhello = () => {
  return (
    <>
      {" "}
      <Header />
      <div className="contact">
        <Navbar />
        {/* <!-- ======= Contact Section ======= --> */}

        <section className="container ">
          <div className="row d-md-flex justify-content-md-between py-5">
            <div className="col-md-5 col-12">
              <form>
                <div className="mb-5">
                  <label for="Name" className="form-label invisible">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control w-100"
                    id="name"
                    placeholder="Full Name"
                  />
                </div>
                <div className="mb-5">
                  <label for="Email" className="form-label invisible">
                    Email Address
                  </label>
                  <input
                    type="text"
                    className="form-control w-100"
                    id="Email"
                    placeholder="Email Address"
                  />
                </div>
                <div className="mb-3 comment">
                  <label for="Comment" className="form-label invisible">
                    Comment
                  </label>
                  <textarea
                    className="form-control w-100"
                    id="Comment"
                    rows="5"
                    placeholder="Comment"
                  ></textarea>
                </div>
                <div className="text-right mt-5">
                  <button
                    type="submit"
                    className=" submit-btn btn btn-outline-dark btn-md text-uppercase font-weight-bold"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6 mt-5 mt-md-0">
              {" "}
              <img
                src={contact}
                className="img-fluid gif-image"
                alt="contact-gif"
              />
            </div>
          </div>
        </section>

        {/* <!-- ======= Contact Section =======--> */}
        <Footer className="contact-footer mt-lg-5" />
      </div>
    </>
  )
}

export default sayhello
