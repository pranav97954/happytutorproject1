import logo from '../images/logoTop.png'
import '../CSS/style.css';
import '../CSS/responsivestyle.css'

const Header = () => {
  
// let nav = document.querySelector(".navbar");
// window.onscroll = function () {
//     if(document.documentElement.scrollTop > 20){
//         nav.classList.add("header-scrolled");
//     }else{
//         nav.classList.remove("header-scrolled");
//     }

//     }


//     //Nav hide
// let navBar = document.querySelectorAll(".nav-link");
// let navcollapse = document.querySelector(".navbar-collapse.collapse");
// navBar.forEach(function(a){
//     a.addEventListener("click", function(){
//         navcollapse.classList.remove("show");
//     })
// })

  return (
    <header className="header_wrapper">
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} className="img-fluid" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-stream navbar-toggler-icon"></i>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav menu-navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/courses">
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/view">
                  Videos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/query">
                  Query
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Sign In
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/register">
                  Register
                </a>
              </li> */}
            </ul>
             <form className="d-flex">
              <input
                className="form-control none me-2"
                type="search"
                placeholder="Search by course name"
                aria-label="Search"
              />
             <button type="button" className="btn btn-success btx">Search</button>
            </form> 
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;