import React from "react"
import "./main.css"
import "./index.css"

const Footer = ({ className }) => {
  return (
    <>
      <footer className={className} className="py-5">
        <div class="container pt-lg-3 py-5">
          <div class="row d-flex justify-content-between">
            <div class="col-md-4 pb-4 pb-md-0">
              <h5 class="pb-3 pb-md-5 footer-heading">CONTACT</h5>
              <p>
                (832) 356-7656
                <br />
                <a href="mailto:hello@invi.us">hello@invi.us</a>
              </p>
              <p>Texas, United States</p>
              <p>© 2020 INVI LLC | All Rights Reserved</p>
            </div>

            <div class="col-md-4 col-lg-3 pb-4 pb-md-0 text-left ">
              <h5 class="pb-3 pb-md-5 footer-heading">FOLLOW US</h5>
              <p>
                <div class="social-icons d-inline pr-2 mr-2">
                  <a
                    href="https://www.instagram.com/invi.stories/"
                    target="_blank"
                  >
                    <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
                  </a>
                </div>
                <div class="social-icons d-inline p-2 mr-2">
                  <a
                    href="https://www.linkedin.com/company/invi-llc/"
                    target="_blank"
                  >
                    <i class="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                  </a>
                </div>
                <div class="social-icons d-inline p-2 mr-2">
                  <a
                    href="https://www.youtube.com/channel/UCK_9VVNxQg11pNVy8TBazRw"
                    target="_blank"
                  >
                    <i class="fa fa-youtube fa-2x" aria-hidden="true"></i>
                  </a>
                </div>
                <div class="social-icons d-inline p-2 mr-2">
                  <a href="#">
                    <i class="fa fa-google" aria-hidden="true"></i>
                  </a>
                </div>
              </p>
            </div>

            <div class="col-md-4 text-md-right">
              <h5 class="pb-3 pb-md-5 footer-heading">NEWSLETTER</h5>
              <p>
                Subscribe to INVI for all latest news,
                <br /> behind-the-scene stories, and exciting projects
              </p>
              <div class="input-group pt-3">
                <input
                  type="email"
                  class="form-control input-button p-4"
                  placeholder="Enter your email"
                  required
                />
                <div class="input-group-append">
                  <input
                    type="submit"
                    class="btn subscribe-button font-weight-bold px-4"
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
