import '../CSS/style.css';
import '../CSS/responsivestyle.css'
import "../CSS/courses.css";


import card2 from '../images/courses/card2.jpg'

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

import hindi from '../images/courses/hindi.png'
import sanskrit from '../images/courses/sanskrit.png'
import marathi from '../images/courses/marathi.png'
import telugu from '../images/courses/telugu.png'
import bengali from '../images/courses/bengali.png'
import kashmiri from '../images/courses/kashmiri.png'
import punjabi from '../images/courses/punjabi.png'
import gujarati from '../images/courses/gujarati.png'
import english from '../images/courses/english.png'
import geometry  from '../images/courses/geometry.png'
import coding from '../images/courses/coding.png'
import science from '../images/courses/science.png'
import reasoning from '../images/courses/reasioning.png'
import drawing from '../images/courses/drawing.png'
import reading from '../images/courses/reading.png'
import history from '../images/courses/history.png'

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


      {/* Language Categories */}
      <section className="Tutors_near mb-5">
        <div className="container">
          <h3 className="mb-5">Language Categories</h3>
          <div className="row mb-5">
            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="/book">
                  <img
                    src={hindi}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <a href="/book">
                    <p className="card-text mb-3">Hindi</p>
                  </a>
                  <a href="/book">
                    <h6>
                      4.8<i className="fa-solid fa-star"></i>(1.3k Reviews)
                    </h6>
                  </a>
                  <a href="/book">
                    <h6>
                      Register now
                    </h6>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="/book">
                  <img
                    src={sanskrit}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <a href="/book">
                    <p className="card-text mb-3">Sanskrit</p>
                  </a>
                  <a href="/book">
                    <h6>
                      4.1<i className="fa-solid fa-star"></i>(2.2k Reviews)
                    </h6>
                  </a>
                  <a href="/book">
                    <h6>
                      Register now
                    </h6>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="/book">
                  <img
                    src={marathi}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <a href="/book">
                    <p className="card-text mb-3">Marathi</p>
                  </a>
                  <a href="/book">
                    <h6>
                      4.2<i className="fa-solid fa-star"></i>(4.3k Reviews)
                    </h6>
                  </a>
                  <a href="/book">
                    <h6>
                    Register now
                    </h6>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="/book">
                  <img
                    src={telugu}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <a href="/book">
                    <p className="card-text mb-3">Telugu</p>
                  </a>
                  <a href="/book">
                    <h6>
                      3.4<i className="fa-solid fa-star"></i>(1.1k Reviews)
                    </h6>
                  </a>
                  <a href="/book">
                    <h6>
                    Register now
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
                <a href="/book">
                  <img
                    src={bengali}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <a href="/book">
                    <p className="card-text mb-3">Bengali</p>
                  </a>
                  <a href="/book">
                    <h6>
                      4.8<i className="fa-solid fa-star"></i>(1.3k Reviews)
                    </h6>
                  </a>
                  <a href="/book">
                    <h6>
                    Register now
                    </h6>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="/book">
                  <img
                    src={gujarati}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                <a href="/book">
                    <p className="card-text mb-3">Gujarati</p>
                  </a>
                  <a href="/book">
                    <h6>
                      4.5<i className="fa-solid fa-star"></i>(1.3k Reviews)
                    </h6>
                  </a>
                  <a href="/book">
                    <h6>
                    Register now
                    </h6>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="/book">
                  <img
                    src={kashmiri}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <a href="/book">
                    <p className="card-text mb-3">Kashmiri</p>
                  </a>
                  <a href="/book">
                    <h6>
                      4.7<i className="fa-solid fa-star"></i>(1.2k Reviews)
                    </h6>
                  </a>
                  <a href="/book">
                    <h6>
                    Register now
                    </h6>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="/book">
                  <img
                    src={punjabi}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <a href="/book">
                    <p className="card-text mb-3">Punjabi</p>
                  </a>
                  <a href="/book">
                    <h6>
                      4.0<i className="fa-solid fa-star"></i>(4.3k Reviews)
                    </h6>
                  </a>
                  <a href="/book">
                    <h6>
                    Register now
                    </h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Foreign Language */}
      <div className="container mb-5">
        <div className="Exams">
          <h3>Foreign Language</h3>
          <div className="row mt-4">
            <div className="fl1 col-lg-3 mb-4 Exam">
              <p>Russian</p>
              <a href="/personalvideoview">
              </a>
              <a href="#" className='linkregister'>
                <p>Register now</p>
              </a>
            </div>
            <div className="fl2 col-lg-3 col-6 mb-4 Exam">
              <a href="/classical">
                <p>Japanese</p>
              </a>
              <a href="#" className='linkregister'>
                <p>Register now</p>
              </a>
            </div>
            <div className="fl1 col-lg-3 col-6 mb-4 Exam">
             
              <a href="/itview">
                <p>Korean</p>
              </a>
              <a href="#" className='linkregister'>
                <p>Register now</p>
              </a>
            </div>
            <div className="fl2 col-lg-3 col-6 mb-4 Exam"> 
              <a href="/mathvideoview">
                <p>Martian</p>
              </a>
              <a href="#" className='linkregister'>
                <p>Register now</p>
              </a>
            </div>
          </div>

          <div className="row mt-4">
            <div className="fl2 col-lg-3 col-6 mb-4 Exam">
                <p>Chinese</p>
              <a href="#" className='linkregister'>
                <p>Register now</p>
              </a>
            </div>
            <div className="fl1 col-lg-3 col-6 mb-4 Exam">
              
              <a href="/religiousview">
                <p>French</p>
              </a>
              <a href="#" className='linkregister'>
                <p>Register now</p>
              </a>
            </div>
            <div className="fl2 col-lg-3 col-6 mb-4 Exam">
             
              <a href="/englishvideoview">
                <p>Spanish</p>
              </a>
              <a href="#" className='linkregister'>
                <p>Register now</p>
              </a>s
            </div>
            <div className="fl1 col-lg-3 col-6 mb-4 Exam">
              <a href="/musicview">
                <p>Latin</p>
              </a>
              <a href="#" className='linkregister'>
                <p>Register now</p>
              </a>
            </div>
          </div>

          <div className="row mt-4">
            <div className="fl1 col-lg-3 mb-4 Exam">
              <p>Greek</p>
              <a href="#" className='linkregister'>
                <p>Register now</p>
              </a>
            </div>
            <div className="fl2 col-lg-3 col-6 mb-4 Exam">
              <a href="/classical">
                <p>American accent</p>
              </a>
              <a href="#" className='linkregister'>
                <p>Register now</p>
              </a>
            </div>
            <div className="fl1 col-lg-3 col-6 mb-4 Exam">
             
              <a href="/itview">
                <p>British accent</p>
              </a>
              <a href="#" className='linkregister'>
                <p>Register now</p>
              </a>
            </div>
            <div className="fl2 col-lg-3 col-6 mb-4 Exam"> 
              <a href="/mathvideoview">
                <p>Nepali</p>
              </a>
              <a href="#" className='linkregister'>
                <p>Register now</p>
              </a>
            </div>
          </div>

        </div>
      </div>


      {/* 3rd section Tutors near */}
      <section className="Tutors_near mb-5">
        <div className="container">
          <h3 className="mb-5">Tutors near you</h3>
          <div className="row mb-5">
            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="/book">
                  <img
                    src={english}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <a href="/book">
                    <p className="card-text mb-3">English Tutors</p>
                  </a>
                  <a href="/book">
                    <h6>
                      4.8<i className="fa-solid fa-star"></i>(1.3k Reviews)
                    </h6>
                  </a>
                  <a href="/book">
                    <h6>
                      BOOK NOW
                    </h6>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="/book">
                  <img
                    src={card2}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <a href="/book">
                    <p className="card-text mb-3">Communication Tutors</p>
                  </a>
                  <a href="/book">
                    <h6>
                      4.1<i className="fa-solid fa-star"></i>(2.2k Reviews)
                    </h6>
                  </a>
                  <a href="/book">
                    <h6>
                      BOOK NOW
                    </h6>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="/book">
                  <img
                    src={geometry}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <a href="/book">
                    <p className="card-text mb-3">Geometry</p>
                  </a>
                  <a href="/book">
                    <h6>
                      4.2<i className="fa-solid fa-star"></i>(4.3k Reviews)
                    </h6>
                  </a>
                  <a href="/book">
                    <h6>
                    BOOK NOW
                    </h6>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="/book">
                  <img
                    src={coding}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <a href="/book">
                    <p className="card-text mb-3">Coding Tutors</p>
                  </a>
                  <a href="/book">
                    <h6>
                      3.4<i className="fa-solid fa-star"></i>(1.1k Reviews)
                    </h6>
                  </a>
                  <a href="/book">
                    <h6>
                    BOOK NOW
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
                <a href="/book">
                  <img
                    src={reading}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <a href="/book">
                    <p className="card-text mb-3">Reading Tutors</p>
                  </a>
                  <a href="/book">
                    <h6>
                      4.8<i className="fa-solid fa-star"></i>(1.3k Reviews)
                    </h6>
                  </a>
                  <a href="/book">
                    <h6>
                    BOOK NOW
                    </h6>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="/book">
                  <img
                    src={science}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <p className="card-text mb-3">Science Tutors</p>
                  <a href="/book">
                    <h6>
                      4.5<i className="fa-solid fa-star"></i>(1.3k Reviews)
                    </h6>
                  </a>
                  <a href="/book">
                    <h6>
                    BOOK NOW
                    </h6>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="/book">
                  <img
                    src={reasoning}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <a href="/book">
                    <p className="card-text mb-3">Reasoning Tutors</p>
                  </a>
                  <a href="/book">
                    <h6>
                      4.7<i className="fa-solid fa-star"></i>(1.2k Reviews)
                    </h6>
                  </a>
                  <a href="/book">
                    <h6>
                    BOOK NOW
                    </h6>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="/book">
                  <img
                    src={drawing}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <a href="/book">
                    <p className="card-text mb-3">Painting Tutors</p>
                  </a>
                  <a href="/book">
                    <h6>
                      4.0<i className="fa-solid fa-star"></i>(4.3k Reviews)
                    </h6>
                  </a>
                  <a href="/book">
                    <h6>
                    BOOK NOW
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
          <h3 className="mb-5">Subjective Section for Classes 5th-12th</h3>
          <div className="row mb-5">
            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="/book">
                  <img
                    src={history}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <a href="/book">
                    <p className="card-text mb-3">History</p>
                  </a>
                  <a href="/book">
                    <h6>
                      4.0<i className="fa-solid fa-star"></i>(4.3k Reviews)
                    </h6>
                  </a>
                  <a href="/book">
                    <h6>
                    BOOK NOW
                    </h6>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="/book">
                  <img
                    src={card9}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <a href="/book">
                    <p className="card-text mb-3">Geography</p>
                  </a>
                  <a href="/book">
                    <h6>
                      4.8<i className="fa-solid fa-star"></i>(1.3k Reviews)
                    </h6>
                  </a>
                  <a href="/book">
                    <h6>
                    BOOK NOW
                    </h6>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="/book">
                  <img
                    src={card10}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <a href="/book">
                    <p className="card-text mb-3">Social Studies</p>
                  </a>
                  <a href="/book">
                    <h6>
                      4.1<i className="fa-solid fa-star"></i>(2.2k Reviews)
                    </h6>
                  </a>
                  <a href="/book">
                    <h6>
                    BOOK NOW
                    </h6>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="/book">
                  <img
                    src={card11}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <a href="/book">
                    <p className="card-text mb-3">Maths</p>
                  </a>
                  <a href="/book">
                    <h6>
                      4.2<i className="fa-solid fa-star"></i>(4.3k Reviews)
                    </h6>
                  </a>
                  <a href="/book">
                    <h6>
                    BOOK NOW
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
                <a href="/book">
                  <img
                    src={card13}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <a href="/book">
                    <p className="card-text mb-3">Physics</p>
                  </a>
                  <a href="/book">
                    <h6>
                      4.8<i className="fa-solid fa-star"></i>(1.3k Reviews)
                    </h6>
                  </a>
                  <a href="/book">
                    <h6>
                    BOOK NOW
                    </h6>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="/book">
                  <img
                    src={card14}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <p className="card-text mb-3">Chemistry</p>
                  <a href="/book">
                    <h6>
                      4.5<i className="fa-solid fa-star"></i>(1.3k Reviews)
                    </h6>
                  </a>
                  <a href="/book">
                    <h6>
                    BOOK NOW
                    </h6>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="/book">
                  <img
                    src={card15}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <a href="/book">
                    <p className="card-text mb-3">Biology</p>
                  </a>
                  <a href="/book">
                    <h6>
                      4.7<i className="fa-solid fa-star"></i>(1.2k Reviews)
                    </h6>
                  </a>
                  <a href="/book">
                    <h6>
                    BOOK NOW
                    </h6>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-6">
              <div className="card shadow" style={{ width: "15rem" }}>
                <a href="/book">
                  <img
                    src={card16}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <a href="/book">
                    <p className="card-text mb-3">Algebra</p>
                  </a>
                  <a href="/book">
                    <h6>
                      4.0<i className="fa-solid fa-star"></i>(4.3k Reviews)
                    </h6>
                  </a>
                  <a href="/book">
                    <h6>
                    BOOK NOW
                    </h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Training and live project */}
      <section className="Training">
         <div className="live">
          <h2>Training and live project </h2>
          <p>Practical industry-oriented projects in the training and live project section for hands-on experience. Additionally, provide personalized mentorship opportunities for students to ensure a holistic learning experience.</p>
          <h4>Enroll now for Courses</h4>
          <a href="/register">
            <button>Enroll Now</button>
          </a>
          <h4>Register Now for Training and live project</h4>
          <a href="/trainingform"><button>Register Now</button> </a>
          
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
              <a href="/career"><button type="button" className="btn btn-success" >
                Start teaching today
              </button></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;