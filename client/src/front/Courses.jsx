import '../CSS/style.css';
import '../CSS/responsivestyle.css'
 import "../CSS/courses.css";
import card1 from '../images/courses/card1.jpg'
import card2 from '../images/courses/card2.jpg'
import card3 from '../images/courses/card3.jpg'
import card4 from '../images/courses/card4.jpg'
import card5 from '../images/courses/card5.jpg'
import card6 from '../images/courses/card6.jpg'
import card7 from '../images/courses/card7.jpg'
import card8 from '../images/courses/card8.jpg'
import card9 from '../images/courses/card9.jpg'
import card10 from '../images/courses/card10.jpg'
import card11 from '../images/courses/card11.jpg'

import card13 from '../images/courses/card13.jpg'
import card14 from '../images/courses/card14.jpg'
import card15 from '../images/courses/card15.jpg'
import card16 from '../images/courses/card16.jpg'

import students from '../images/courses icon/students.png'
import onlineeducation from '../images/courses icon/online-education.png'
import graduated from '../images/courses icon/graduated.png'

import part1 from '../images/partners/part1.png'
import part2 from '../images/partners/part2.png'
import part3 from '../images/partners/part3.png'
import part4 from '../images/partners/part4.png'

import instructor from '../images/courses/instructor-2x-v3.jpg'

const Courses = () => {
  
 
  return (
    <>
      <section className="course_form mb-5">
        <div className="container">
          <div className="course_hero">
            <h1>
              Find the best tutors
              <br /> near you or online.
            </h1>
          </div>

          <div className="search-container">
            <input
              type="text"
              id="search-input"
              placeholder="Search Courses..."
            />
            <button id="search-button">Search</button>
          </div>
        </div>
      </section>

      {/* 3rd section Tutors near */}
      <section className="Tutors_near mb-5">
        <div className="container">
          <h3 className="mb-5">Tutors near you</h3>
          <div className="row mb-5">
            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="..">
                  <img
                    src={card1}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <a href="..">
                    <p className="card-text mb-3">English Tutors</p>
                  </a>
                  <a href="..">
                    <h6>
                      4.8<i className="fa-solid fa-star"></i>(1.3k Reviews)
                    </h6>
                  </a>
                  <a href="..">
                    <h6>
                      ADD TO CART<i className="fa-solid fa-cart-shopping"></i>
                    </h6>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="..">
                  <img
                    src={card2}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <a href="..">
                    <p className="card-text mb-3">Communication Tutors</p>
                  </a>
                  <a href="..">
                    <h6>
                      4.1<i className="fa-solid fa-star"></i>(2.2k Reviews)
                    </h6>
                  </a>
                  <a href="..">
                    <h6>
                      ADD TO CART<i className="fa-solid fa-cart-shopping"></i>
                    </h6>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="..">
                  <img
                    src={card3}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <a href="..">
                    <p className="card-text mb-3">Math Tutors</p>
                  </a>
                  <a href="..">
                    <h6>
                      4.2<i className="fa-solid fa-star"></i>(4.3k Reviews)
                    </h6>
                  </a>
                  <a href="..">
                    <h6>
                      ADD TO CART<i className="fa-solid fa-cart-shopping"></i>
                    </h6>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="..">
                  <img
                    src={card4}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <a href="..">
                    <p className="card-text mb-3">Coding Tutors</p>
                  </a>
                  <a href="..">
                    <h6>
                      3.4<i className="fa-solid fa-star"></i>(1.1k Reviews)
                    </h6>
                  </a>
                  <a href="..">
                    <h6>
                      ADD TO CART<i className="fa-solid fa-cart-shopping"></i>
                    </h6>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* other cards */}
          <div className="row mb-5">
            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="..">
                  <img
                    src={card5}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <a href="..">
                    <p className="card-text mb-3">Reading Tutors</p>
                  </a>
                  <a href="..">
                    <h6>
                      4.8<i className="fa-solid fa-star"></i>(1.3k Reviews)
                    </h6>
                  </a>
                  <a href="..">
                    <h6>
                      ADD TO CART<i className="fa-solid fa-cart-shopping"></i>
                    </h6>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="..">
                  <img
                    src={card6}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <p className="card-text mb-3">Science Tutors</p>
                  <a href="..">
                    <h6>
                      4.5<i className="fa-solid fa-star"></i>(1.3k Reviews)
                    </h6>
                  </a>
                  <a href="..">
                    <h6>
                      ADD TO CART<i className="fa-solid fa-cart-shopping"></i>
                    </h6>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="..">
                  <img
                    src={card7}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <a href="..">
                    <p className="card-text mb-3">Reasoning Tutors</p>
                  </a>
                  <a href="..">
                    <h6>
                      4.7<i className="fa-solid fa-star"></i>(1.2k Reviews)
                    </h6>
                  </a>
                  <a href="..">
                    <h6>
                      ADD TO CART<i className="fa-solid fa-cart-shopping"></i>
                    </h6>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="..">
                  <img
                    src={card8}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <a href="..">
                    <p className="card-text mb-3">Painting Tutors</p>
                  </a>
                  <a href="..">
                    <h6>
                      4.0<i className="fa-solid fa-star"></i>(4.3k Reviews)
                    </h6>
                  </a>
                  <a href="..">
                    <h6>
                      ADD TO CART<i className="fa-solid fa-cart-shopping"></i>
                    </h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4th section Tutoring service */}
      <section className="Tutors_near mb-5">
        <div className="container">
          <h3 className="mb-5">Calculus Tutors</h3>
          <div className="row mb-5">
            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="..">
                  <img
                    src={card16}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <a href="..">
                    <p className="card-text mb-3">Geometry Tutors</p>
                  </a>
                  <a href="..">
                    <h6>
                      4.0<i className="fa-solid fa-star"></i>(4.3k Reviews)
                    </h6>
                  </a>
                  <a href="..">
                    <h6>
                      ADD TO CART<i className="fa-solid fa-cart-shopping"></i>
                    </h6>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="..">
                  <img
                    src={card9}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <a href="..">
                    <p className="card-text mb-3">English Tutors</p>
                  </a>
                  <a href="..">
                    <h6>
                      4.8<i className="fa-solid fa-star"></i>(1.3k Reviews)
                    </h6>
                  </a>
                  <a href="..">
                    <h6>
                      ADD TO CART<i className="fa-solid fa-cart-shopping"></i>
                    </h6>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="..">
                  <img
                    src={card10}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <a href="..">
                    <p className="card-text mb-3">Spanish Tutors</p>
                  </a>
                  <a href="..">
                    <h6>
                      4.1<i className="fa-solid fa-star"></i>(2.2k Reviews)
                    </h6>
                  </a>
                  <a href="..">
                    <h6>
                      ADD TO CART<i className="fa-solid fa-cart-shopping"></i>
                    </h6>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="..">
                  <img
                    src={card11}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <a href="..">
                    <p className="card-text mb-3">Writing Tutors</p>
                  </a>
                  <a href="..">
                    <h6>
                      4.2<i className="fa-solid fa-star"></i>(4.3k Reviews)
                    </h6>
                  </a>
                  <a href="..">
                    <h6>
                      ADD TO CART<i className="fa-solid fa-cart-shopping"></i>
                    </h6>
                  </a>
                </div>
              </div>
            </div>

           
          </div>

          {/* other cards */}
          <div className="row mb-5">
            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="..">
                  <img
                    src={card13}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <a href="..">
                    <p className="card-text mb-3">Spelling Tutors</p>
                  </a>
                  <a href="..">
                    <h6>
                      4.8<i className="fa-solid fa-star"></i>(1.3k Reviews)
                    </h6>
                  </a>
                  <a href="..">
                    <h6>
                      ADD TO CART<i className="fa-solid fa-cart-shopping"></i>
                    </h6>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="..">
                  <img
                    src={card14}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <p className="card-text mb-3">Statistics Tutors</p>
                  <a href="..">
                    <h6>
                      4.5<i className="fa-solid fa-star"></i>(1.3k Reviews)
                    </h6>
                  </a>
                  <a href="..">
                    <h6>
                      ADD TO CART<i className="fa-solid fa-cart-shopping"></i>
                    </h6>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="..">
                  <img
                    src={card15}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <a href="..">
                    <p className="card-text mb-3">Biology Tutors</p>
                  </a>
                  <a href="..">
                    <h6>
                      4.7<i className="fa-solid fa-star"></i>(1.2k Reviews)
                    </h6>
                  </a>
                  <a href="..">
                    <h6>
                      ADD TO CART<i className="fa-solid fa-cart-shopping"></i>
                    </h6>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="..">
                  <img
                    src={card16}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <a href="..">
                    <p className="card-text mb-3">Geometry Tutors</p>
                  </a>
                  <a href="..">
                    <h6>
                      4.0<i className="fa-solid fa-star"></i>(4.3k Reviews)
                    </h6>
                  </a>
                  <a href="..">
                    <h6>
                      ADD TO CART<i className="fa-solid fa-cart-shopping"></i>
                    </h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* info */}
      <section className="info mb-5 p-2">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-3">
              <div className="card rounded-0 border-0 text-center py-3 px-1">
                <div>
                  <img
                    style={{ width: "auto", height: "3.3rem" }}
                    className="img-fluid"
                    src={students}
                    alt="icon"
                  />
                </div>
                <h5 className="text-uppercase mt-4 mb-3">2000+</h5>
                <p>Student Enrolled</p>
              </div>
            </div>

            <div className="col-sm-3 col-3">
              <div className="card rounded-0 border-0 text-center py-3 px-1">
                <div>
                  <img
                    style={{ width: "auto", height: "3.3rem" }}
                    className="img-fluid"
                    src={onlineeducation}
                    alt="icon"
                  />
                </div>
                <h5 className="text-uppercase mt-4 mb-3">100+</h5>
                <p>Online Courses</p>
              </div>
            </div>

            <div className="col-sm-3 col-3">
              <div className="card rounded-0 border-0 text-center py-3 px-1">
                <div>
                  <img
                    style={{ width: "auto", height: "3.3rem" }}
                    className="img-fluid"
                    src={graduated}
                    alt="icon"
                  />
                </div>
                <h5 className="text-uppercase mt-4 mb-3">22+</h5>
                <p>States Students</p>
              </div>
            </div>

            <div className="col-sm-3 col-3">
              <div className="card rounded-0 border-0 text-center py-3 px-1">
                <div>
                  <img
                    style={{ width: "auto", height: "3.6rem" }}
                    className="img-fluid"
                    src={graduated}
                    alt="icon"
                  />
                </div>
                <h5 className="text-uppercase mt-4 mb-3">5000+</h5>
                <p>Placements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning partners */}
      <section className="partners mb-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-2 col-3">
              <img
                className="img-fluid part"
                src={part1}
                alt=""
              />
            </div>
            <div className="col-sm-2 col-3">
              <img
                className="img-fluid part"
                src={part2}
                alt=""
              />
            </div>
            <div className="col-sm-2 col-3">
              <img
                className="img-fluid part"
                src={part3}
                alt=""
              />
            </div>
            <div className="col-sm-2 col-3">
              <img
                className="img-fluid part"
                src={part4}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* instructor */}
      <section className="inst mb-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <img
                style={{ width: "22rem", height: "23rem" }}
                className="img-fluid"
                src={instructor}
                alt="pic"
              />
            </div>
            <div className="col-sm-6 p-5">
              <h3>Become an instructor</h3>
              <p>
                Instructors from around India teach millions of learners on
                Aakash Academy. We provide the tools and skills to teach what
                you love.
              </p>
              <button type="button" className="btn btn-success">
                Start teaching today
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;