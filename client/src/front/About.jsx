import '../CSS/about.css'
import '../CSS/style.css';
import '../CSS/responsivestyle.css'
import img from '../images/about us/about.jpg'

const About = () => {
  
  return (
    <>
      <section className="about mt-5">
        <div className="container mb-5">
          <div className="hero">
            <h3>About Us</h3>
          </div>
        </div>
      </section>

      {/* 3rd section */}
      <section className="about_info mb-5 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-5">
              <p>Almost 21 years from now in 1999 we started our career as an individual teacher at a private coaching centre
                in the area of Mumbai as a teacher of maths, revision lecturer, paper checker, and an examiner. And now
                given a career-best guidance to over 4000 students at our own education Institute naming AAKASH EDUCATIONAL
                ACADEMY.</p>

              <p className="about-p">We have seen enlightenment in the life of thousands of faces at our Institute; a cheer of satisfaction
                comes from the bottom of our heart. Really, it's true contentment for us as an educationist. We would further like
                to enhance this light to more faces by joining hands with students.</p>

              <p className="about-p">Let's join together for your successful career.</p>

              <p className="about-p">Want to quote here famous poetry of FORMER PM SHRI ATAL BIHARI BAJPAYEEJI.</p>

              <p>आओ फिर से दिया जलाएँ , भरी दुपहरी में अंधियारा,
                सूरज परछाई से हारा , अंतरतम का नेह निचोड़ें,
                बुझी हुई बाती सुलगाएँ।, आओ फिर से दिया जलाएँ

                हम पड़ाव को समझे मंज़िल, लक्ष्य हुआ आंखों से ओझल
                वतर्मान के मोहजाल में , आने वाला कल न भुलाएँ।
                आओ फिर से दिया जलाएँ।

                आहुति बाकी यज्ञ अधूरा, अपनों के विघ्नों ने घेरा
                अंतिम जय का वज्र बनाने, नव दधीचि हड्डियां गलाएँ।
                आओ फिर से दिया जलाएँ

                -अटल बिहारी वाजपेयी</p>
            </div>

            <div className="col-lg-6 col-md-6 col-7">
              <img className="img-fluid about_img" src={img} alt="about" />
            </div>
          </div>

          {/* Count Section */}
          <section className="info mb-5">
            <div className="container">
              <div className="row">
                {/* ... (your existing code) */}
              </div>
            </div>
          </section>

        </div>
      </section>

      {/* Testimonials */}
      <section className="testi mb-4 p-2">
        <div className="container">
          <div className="testi_heading">
            <h4 className="mb-3">--Testimonials--</h4>
            <h2 className="mb-5">What they are saying</h2>
          </div>

          <div className="row">
            {/* ... (your existing code) */}
          </div>

        </div>
      </section>
      <div className="testi-btn">
        <button type="button" className="btn btn-success">Write Review..</button>
      </div>
    </>
  );
}

export default About;