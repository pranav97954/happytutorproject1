import React from "react";
import '../CSS/footer.css'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container dipsy">
          <div className="row p-5">
            <div className="col-lg-3 col-md-3 col-sm-2 col-12">
              <a href="#">
                <img
                  className="img-fluid mb-1"
                  src="images/logoTop.png"
                  alt=".."
                />
              </a>
              <strong className="mt-">Mail: youremail@gmail.com</strong>
              <div className="row">
                <div className="col-lg-6 col-6 mb-3 ">
                  <img
                    className="img-fluid"
                    src="images/footer1.png"
                    alt="..footer1.png"
                  />
                </div>
                <div className="col-lg-6 col-6 mb-3">
                  <img className="img-fluid" src="images/footer2.png" alt="footer2.png" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-2 col-6 footer_contact">
              <div className="row">
                <div className="col-lg-12 col-sm-12">
                  <a href="#">Contact Us</a>
                </div>
                <div className="col-lg-12 col-sm-12">
                  <a href="#">About Us</a>
                </div>
                <div className="col-lg-12 col-sm-12">
                  <a href="#">Services</a>
                </div>
                <div className="col-lg-12 col-sm-12">
                  <a href="#">Sign up</a>
                </div>
                <div className="col-lg-12 col-sm-12">
                  <a href="#">Login</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-2 col-6 footer_contact1">
              <div className="row">
                <div className="col-lg-12 col-sm-12">
                  <a href="#">Help Centre</a>
                </div>
                <div className="col-lg-12 col-sm-12">
                  <a href="#">Gallery</a>
                </div>
                <div className="col-lg-12 col-sm-12">
                  <a href="#">Document</a>
                </div>
                <div className="col-lg-12 col-sm-12">
                  <a href="#">Achievement</a>
                </div>
                <div className="col-lg-12 col-sm-12">
                  <a href="#">Exam Calendar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright © 2023 Gibbon by Happy Tutors Club</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
