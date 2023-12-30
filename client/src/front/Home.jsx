// import React from "react";
import "../CSS/style.css";
import "../CSS/home.css";
import slide1 from "../images/slides/slide1.webp";
import slide2 from "../images/slides/slide2.webp";
import slide3 from "../images/slides/slide3.webp";
import slide4 from "../images/slides/slide4.webp";
import speech from "../images/home icons/speech.png";
import dance from "../images/home icons/dance.png";
import developer from "../images/home icons/developer.png";
import calculating from "../images/home icons/calculating.png";
import meditation from "../images/home icons/meditation.png";
import books from "../images/home icons/books.png";
import conversation from "../images/home icons/conversation.png";
import livemusic from "../images/home icons/live-music.png";
import event1 from "../images/events/event1.jpg";
import sportsday from "../images/events/sports-day.jpg";
import holi from "../images/events/holi.jpg";
import diwali from "../images/events/diwali.jpg";
import tour from "../images/events/tour.jpg";
import debate from "../images/events/debate.jpg";

import digital from '../images/home/digital.png'
import ethical from '../images/home/ethical.png'
import webdevlopment from '../images/home/webdevlopment.png'
import graphic from '../images/home/graphic.png'
import aiml from '../images/home/aiml.png'
import seo from '../images/home/seo.png'
import cybersecurity from '../images/home/cybersecurity.png'
import datascience from '../images/home/datascience.png';
import blockchain from '../images/home/blockchain.png';
import career from '../images/home/career.png';

import aiimage from '../images/home/aiimage.png'
import affiliate from '../images/home/affiliate.png'
import digitalart from '../images/home/digitalart.png'
import lead from '../images/home/lead.png'
import youtube from '../images/home/youtube.png'
import blogging from '../images/home/blogging.png'

const Home = () => {
  return (
    <div>
      <div className="container ">
        <div className="conslider">
          <div className="slidercontent">
            <h3 className="anim">Your Career,<br /> Our Everlasting Commitment to Your Growth</h3>
            <p className="anim">Explore a world of learning at our educational hub, where we offer a diverse range of courses coupled with hands-on live project training. Our commitment extends beyond education as we provide dedicated support to ensure your successful placement in the professional landscape. Join us on the journey to shape your career with expertise and guidance.</p>
            <button className="anim">Join Now</button>
          </div>
          <img src={career} className="featureimg anim" />
        </div>
      </div>

      {/* Slider */}
      {/* <div
        id="carouselExampleIndicators"
        className="carousel slide mb-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active scroll_button"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide1} className="d-block w-100 img-fluid" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slide2} className="d-block w-100 img-fluid" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slide3} className="d-block w-100 img-fluid" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slide4} className="d-block w-100 img-fluid" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}

      {/* <!--4th Categories--> */}
      <div className="container mb-5">
        <div className="Exams">
          <h3>Top Categories</h3>
          <div className="row mt-4">
            <div className="cp col-lg-3 mb-4 Exam">
              <a href="/personalvideoview">
                <img
                  style={{ width: "auto", height: "3rem" }}
                  className="img-fluid mb-1"
                  src={speech}
                  alt=""
                />
              </a>
              <a href="/personalvideoview">
                <p>Personal development</p>
              </a>
            </div>
            <div className="col-lg-3 col-6 mb-4 Exam">
              <a href="/classical">
                <img
                  style={{ width: "auto", height: "3rem" }}
                  className="img-fluid mb-1"
                  src={dance}
                  alt=""
                />
              </a>
              <a href="/classical">
                <p>Classical Dance</p>
              </a>
            </div>
            <div className="cp col-lg-3 col-6 mb-4 Exam">
              <a href="/itview">
                <img
                  style={{ width: "auto", height: "3rem" }}
                  className="img-fluid mb-1"
                  src={developer}
                  alt=""
                />
              </a>
              <a href="/itview">
                <p>IT Education</p>
              </a>
            </div>
            <div className="col-lg-3 col-6 mb-4 Exam">
              <a href="/mathvideoview">
                <img
                  style={{ width: "auto", height: "3rem" }}
                  className="img-fluid mb-1"
                  src={calculating}
                  alt=""
                />
              </a>
              <a href="/mathvideoview">
                <p>Vedic Maths</p>
              </a>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-3 col-6 mb-4 Exam">
              <a href="/yogaview">
                <img
                  style={{ width: "auto", height: "3rem" }}
                  className="img-fluid mb-1"
                  src={meditation}
                  alt=""
                />
              </a>
              <a href="/yogaview">
                <p>Yoga</p>
              </a>
            </div>
            <div className="cp col-lg-3 col-6 mb-4 Exam">
              <a href="/religiousview">
                <img
                  style={{ width: "auto", height: "3rem" }}
                  className="img-fluid mb-1"
                  src={books}
                  alt=""
                />
              </a>
              <a href="/religiousview">
                <p>Religious Education</p>
              </a>
            </div>
            <div className="col-lg-3 col-6 mb-4 Exam">
              <a href="/englishvideoview">
                <img
                  style={{ width: "auto", height: "3rem" }}
                  className="img-fluid mb-1"
                  src={conversation}
                  alt=""
                />
              </a>
              <a href="/englishvideoview">
                <p>Communication Skills</p>
              </a>
            </div>
            <div className="cp col-lg-3 col-6 mb-4 Exam">
              <a href="/musicview">
                <img
                  style={{ width: "auto", height: "3rem" }}
                  className="img-fluid mb-1"
                  src={livemusic}
                  alt=""
                />
              </a>
              <a href="/musicview">
                <p>Music Lessons</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!--3rd Section cards--> */}

      <section id="services" className="services_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center mb-2">
              <h2>SERVICES OFFERS</h2>
              <p>
                We specialize in Educational services tailored to meet your
                digital needs and <br className="d-none d-lg-block" /> Our team
                excels .
              </p>
            </div>
            <div className="col-lg-3 col-sm-6 mb-4">
              <div className="card  border-0 text-center py-5 px-3">
                <div>
                  <i className="fa-solid fa-bus"></i>
                </div>
                <h5 className="text-uppercase mt-4 mb-3">Transport</h5>
                <p>
                  The academy has Provide Transport Facility with GPS live
                  Location tracking and it have the Advance Mobile Notification
                  at.{" "}
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 mb-4">
              <div className="card  border-0 text-center py-5 px-3">
                <div>
                  <i className="fa-solid fa-bed"></i>
                </div>
                <h5 className="text-uppercase mt-4 mb-3">Hostel Facilities</h5>
                <p>
                  here are 110 rooms in hostel that can provide hostel facility
                  to the 350 boy’s & 200 girl’s ,Girl’s & boy’s hostel are
                  separated.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 mb-4">
              <div className="card  border-0 text-center py-5 px-3">
                <div>
                  <i className="fa-solid fa-utensils"></i>
                </div>
                <h5 className="text-uppercase mt-4 mb-3">Canteen & meals</h5>
                <p>
                  Under the care and supervision of the administrator & food in
                  charge proper functioning of the dining hall of very high
                  standards.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 mb-4">
              <div className="card  border-0 text-center py-5 px-3">
                <div>
                  <i className="fa-solid fa-computer"></i>
                </div>
                <h5 className="text-uppercase mt-4 mb-3">Labs Facilities</h5>
                <p>
                  We Provide the Computer lab, 3D lab, Physics, Chemistry,
                  Biology and General Science and specially Artificial
                  intelligence lab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Activities */}
      <section className="Events mb-5">
        <div className="container">
          <h2 className="mb-5">Extra Activities</h2>
          <div className="row">
            <div className="col-sm-4 col-4 py-3 py-sm-0">
              <div className="card box-shadow">
                <a href="/register">
                  <img
                    src={digital}
                    className="ig card-img-top img-fluid"
                    alt="..."
                  />
                </a>
                <div className="it card-body">
                  <h5 className="card-title">Digital Marketing</h5>
                  <a href="/register">
                    <button type="button" className="btn btn-success">
                      Register Now
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-4 py-3 py-sm-0">
              <div className="card box-shadow">
                <a href="/register">
                  <img
                    src={ethical}
                    className="ig card-img-top img-fluid"
                    alt="..."
                  />
                </a>
                <div className="it card-body">
                  <h5 className="card-title">Ethical Hacking</h5>
                 
                  <a href="/register">
                    <button type="button" className="btn btn-success">
                      Register Now
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-4 py-3 py-sm-0">
              <div className="card box-shadow">
                <a href="/register">
                  <img
                    src={webdevlopment}
                    className="ig card-img-top img-fluid"
                    alt="..."
                  />
                </a>
                <div className="it card-body">
                  <h5 className="card-title">Web Development</h5>
                 
                  <a href="/register">
                    <button type="button" className="btn btn-success">
                      Register Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Other Cards */}
          <div className="row mt-5">
            <div className="col-sm-4 col-4 py-3 py-sm-0">
              <div className="card box-shadow">
                <a href="/register">
                  <img
                    src={graphic}
                    className="ig card-img-top img-fluid"
                    alt="..."
                  />
                </a>
                <div className="it card-body">
                  <h5 className="card-title">Graphic Design</h5>
                  <a href="/register">
                    <button type="button" className="btn btn-success">
                      Register Now
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-4 py-3 py-sm-0">
              <div className="card box-shadow">
                <a href="/register">
                  <img
                    src={aiml}
                    className="ig card-img-top img-fluid"
                    alt="..."
                  />
                </a>
                <div className="it card-body">
                  <h5 className="card-title">AI & ML</h5>
                  
                  <a href="/register">
                    <button type="button" className="btn btn-success">
                      Register Now
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-4 py-3 py-sm-0">
              <div className="card box-shadow">
                <a href="/register">
                  <img
                    src={seo}
                    className="ig card-img-top img-fluid"
                    alt="..."
                  />
                </a>
                <div className="it card-body">
                  <h5 className="card-title">SEO Settings</h5>
                 
                  <a href="/register">
                    <button type="button" className="btn btn-success">
                      Register Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-sm-4 col-4 py-3 py-sm-0">
              <div className="card box-shadow">
                <a href="/register">
                  <img
                    src={cybersecurity}
                    className="ig card-img-top img-fluid"
                    alt="..."
                  />
                </a>
                <div className="it card-body">
                  <h5 className="card-title">Cybersecurity</h5>
                  <a href="/register">
                    <button type="button" className="btn btn-success">
                      Register Now
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-4 py-3 py-sm-0">
              <div className="card box-shadow">
                <a href="/register">
                  <img
                    src={datascience}
                    className="ig card-img-top img-fluid"
                    alt="..."
                  />
                </a>
                <div className="it card-body">
                  <h5 className="card-title">Data Science</h5>
                  
                  <a href="/register">
                    <button type="button" className="btn btn-success">
                      Register Now
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-4 py-3 py-sm-0">
              <div className="card box-shadow">
                <a href="/register">
                  <img
                    src={blockchain}
                    className="ig card-img-top img-fluid"
                    alt="..."
                  />
                </a>
                <div className="it card-body">
                  <h5 className="card-title">Blockchain</h5>
                 
                  <a href="/register">
                    <button type="button" className="btn btn-success">
                      Register Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* On-Demand Skills */}
      <section className="Events mb-5">
        <div className="container">
          <h2 className="mb-5">On-Demand Skills</h2>
          <div className="row">
            <div className="col-sm-4 col-4 py-3 py-sm-0">
              <div className="card box-shadow">
                <a href="/register">
                  <img
                    src={affiliate}
                    className="ig card-img-top img-fluid"
                    alt="..."
                  />
                </a>
                <div className="it card-body">
                  <h5 className="card-title">Affiliate market..</h5>
                  <a href="/register">
                    <button type="button" className="btn btn-success">
                      Register Now
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-4 py-3 py-sm-0">
              <div className="card box-shadow">
                <a href="/register">
                  <img
                    src={lead}
                    className="ig card-img-top img-fluid"
                    alt="..."
                  />
                </a>
                <div className="it card-body">
                  <h5 className="card-title">Lead Generation</h5>
                 
                  <a href="/register">
                    <button type="button" className="btn btn-success">
                      Register Now
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-4 py-3 py-sm-0">
              <div className="card box-shadow">
                <a href="/register">
                  <img
                    src={digitalart}
                    className="ig card-img-top img-fluid"
                    alt="..."
                  />
                </a>
                <div className="it card-body">
                  <h5 className="card-title">Digital Art</h5>
                 
                  <a href="/register">
                    <button type="button" className="btn btn-success">
                      Register Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Other Cards */}
          <div className="row mt-5">
            <div className="col-sm-4 col-4 py-3 py-sm-0">
              <div className="card box-shadow">
                <a href="/register">
                  <img
                    src={aiimage}
                    className="ig card-img-top img-fluid"
                    alt="..."
                  />
                </a>
                <div className="it card-body">
                  <h5 className="card-title">Ai-image Creation</h5>
                  <a href="/register">
                    <button type="button" className="btn btn-success">
                      Register Now
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-4 py-3 py-sm-0">
              <div className="card box-shadow">
                <a href="/register">
                  <img
                    src={blogging}
                    className="ig card-img-top img-fluid"
                    alt="..."
                  />
                </a>
                <div className="it card-body">
                  <h5 className="card-title">Blogging</h5>
                  
                  <a href="/register">
                    <button type="button" className="btn btn-success">
                      Register Now
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-4 py-3 py-sm-0">
              <div className="card box-shadow">
                <a href="/register">
                  <img
                    src={youtube}
                    className="ig card-img-top img-fluid"
                    alt="..."
                  />
                </a>
                <div className="it card-body">
                  <h5 className="tttt card-title">YouTube video-creation</h5>
                 
                  <a href="/register" >
                    <button type="button" className="btn btn-success">
                      Register Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--Card end--> */}
      <section className="Events mb-5">
        <div className="container">
          <h2 className="mb-5">Popular Events</h2>
          <div className="row">
            <div className="col-sm-4 col-4 py-3 py-sm-0">
              <div className="card box-shadow">
                <a href="#">
                  <img
                    src={event1}
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Tree Plantation</h5>
                  <p className="card-text">Some quick example text to build.</p>
                  <a href="#">
                    <button type="button" className="btn btn-success">
                      View More..
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-4 py-3 py-sm-0">
              <div className="card box-shadow">
                <a href="#">
                  <img
                    src={sportsday}
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Sports Day Games</h5>
                  <p className="card-text">Some quick example text to build.</p>
                  <a href="#">
                    <button type="button" className="btn btn-success">
                      View More..
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-4 py-3 py-sm-0">
              <div className="card box-shadow">
                <a href="#">
                  <img
                    src={holi}
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Holi Celebration</h5>
                  <p className="card-text">Some quick example text to build.</p>
                  <a href="#">
                    <button type="button" className="btn btn-success">
                      View More..
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Other Cards */}
          <div className="row mt-5">
            <div className="col-sm-4 col-4 py-3 py-sm-0">
              <div className="card box-shadow">
                <a href="#">
                  <img
                    src={diwali}
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Diwali Celebration</h5>
                  <p className="card-text">Some quick example text to build.</p>
                  <a href="#">
                    <button type="button" className="btn btn-success">
                      View More..
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-4 py-3 py-sm-0">
              <div className="card box-shadow">
                <a href="#">
                  <img
                    src={tour}
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Tour Camping</h5>
                  <p className="card-text">Some quick example text to build.</p>
                  <a href="#">
                    <button type="button" className="btn btn-success">
                      View More..
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-4 py-3 py-sm-0">
              <div className="card box-shadow">
                <a href="#">
                  <img
                    src={debate}
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Debate competition</h5>
                  <p className="card-text">Some quick example text to build.</p>
                  <a href="#">
                    <button type="button" className="btn btn-success">
                      View More..
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
