import React from "react"
import "./main.css"
import "./index.css"

const Footer = ({ className }) => {
  return (
    <>
      {" "}
      <footer className={className}>
        <div className="container py-5">
          <div className="row pt-lg-3 d-flex justify-content-between">
            <div className="col-md-4 pb-4 pb-md-0">
              <h5 className="pb-3 pb-md-5 footer-heading">CONTACT</h5>
              <p>
                (832) 356-7656
                <br />
                <a href="mailto:hello@invi.us">hello@invi.us</a>
              </p>
              <p>Texas, United States</p>
              <p>© 2020 INVI LLC | All Rights Reserved</p>
            </div>
            <div className="col-md-4 pb-4 pb-md-0 text-left">
              <h5 className="pb-3 pb-md-5 footer-heading ">FOLLOW US</h5>
              <p className="">
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
                  <a href="#">
                    <i className="fa fa-google" aria-hidden="true"></i>
                  </a>
                </div>
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="pb-3 pb-md-5 footer-heading">NEWSLETTER</h5>
              <p>
                Subscribe to INVI for all latest news,
                <br /> behind-the-scene stories, and exciting projects
              </p>
              <div className="input-group pt-3">
                <input
                  type="email"
                  className="form-control input-button p-4"
                  placeholder="Enter your email"
                  required
                />
                <div className="input-group-append">
                  <input
                    type="submit"
                    className="btn subscribe-button font-weight-bold px-4"
                    value="Subscribe"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
