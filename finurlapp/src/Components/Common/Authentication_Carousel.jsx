import React, { useState } from "react";
import finurl from "../../Assets/Images/finurl1.png";
import "../../CSS/register.css";

const LoginPage = () => {
  const [activeInput, setActiveInput] = useState(null);
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);

  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
    mobile_no: "",
    pan_number: "",
    pincode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitSignup = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleInputBlur = (index) => {
    if (index !== activeInput) return;
    setActiveInput(null);
  };
  const handleBulletClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <main className={isSignUpMode ? "sign-up-mode" : ""}>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            {isSignUpMode ? (
              <form
                action="index.html"
                autoComplete="off"
                className="sign-up-form"
                onSubmit={handleSubmitSignup}
              >
                <div className="logo">
                  <img src={finurl} alt="easyclass" />
                  {/* <h4>FINURL</h4> */}
                </div>

                <div className="heading">
                  <h2>Welcome</h2>
                  <h6>Not registered yet?</h6>
                  <a
                    href="#"
                    className="toggle"
                    onClick={() => setIsSignUpMode(!isSignUpMode)}
                  >
                    Sign Up
                  </a>
                </div>

                <div className="actual-form">
                  <div className="input-wrap">
                    <input
                      onChange={handleChange}
                      type="text"
                      minLength="4"
                      className={`input-field ${
                        activeInput === 0 ? "active" : ""
                      }`}
                      autoComplete="off"
                      required
                      // onFocus={() => handleInputFocus(0)}
                      // onBlur={() => handleInputBlur(0)}
                    />
                    <label>Name</label>
                  </div>
                  
                  <div className="input-wrap">
                    <input
                      onChange={handleChange}
                      type="password"
                      minLength="4"
                      className={`input-field ${
                        activeInput === 1 ? "active" : ""
                      }`}
                      autoComplete="off"
                      required
                      // onFocus={() => handleInputFocus(1)}
                      // onBlur={() => handleInputBlur(1)}
                    />
                    <label>Password</label>
                  </div>

                  <input type="submit" value="Sign In" className="sign-btn" />

                  <p className="text">
                    Forgot your password or you login details?
                    <a href="#">Get help</a> signing in
                  </p>
                </div>
              </form>
            ) : (
              <form
                action="index.html"
                autoComplete="off"
                className="sign-in-form"
              >
                <div className="logo">
                  <img src={finurl} alt="easyclass" />
                  {/* <h4>FINURL</h4> */}
                </div>

                <div className="heading">
                  <h2>Get Started</h2>
                  <h6>Already have an account?</h6>
                  <a
                    onClick={() => setIsSignUpMode(!isSignUpMode)}
                    className="toggle"
                  >
                    Sign in
                  </a>
                </div>

                <div className="actual-form">
                  <div className="input-wrap">
                    <input
                      onChange={handleChange}
                      type="text"
                      minLength="4"
                      className="input-field"
                      autoComplete="off"
                      required
                    />
                    <label>Name</label>
                  </div>

                  <div className="input-wrap">
                    <input
                      onChange={handleChange}
                      type="email"
                      className="input-field"
                      autoComplete="off"
                      required
                    />
                    <label>Email</label>
                  </div>

                  <div className="input-wrap">
                    <input
                      onChange={handleChange}
                      type="text"
                      minLength="4"
                      className="input-field"
                      autoComplete="off"
                      required
                    />
                    <label>PAN No</label>
                  </div>

                  <div className="input-wrap">
                    <input
                      onChange={handleChange}
                      type="number"
                      minLength="10"
                      className="input-field"
                      autoComplete="off"
                      required
                    />
                    <label>Mobile No</label>
                  </div>

                  <input
                    onChange={handleChange}
                    type="submit"
                    value="Sign Up"
                    className="sign-btn"
                  />

                  <p className="text">
                    By signing up, I agree to the
                    <a href="#">Terms of Services</a> and
                    <a href="#">Privacy Policy</a>
                  </p>
                </div>
              </form>
            )}
          </div>

          <div className="carousel">
            <div className="images-wrapper">
              <img
                src="src\assets\undraw_doctors_p6aq.svg"
                className={`image img-1 ${activeSlide === 1 ? "show" : ""}`}
                alt=""
              />
              <img
                src="src\assets\undraw_medical_care_movn.svg"
                className={`image img-2 ${activeSlide === 2 ? "show" : ""}`}
                alt=""
              />
              <img
                src="src\assets\undraw_medicine_b-1-ol.svg"
                className={`image img-3 ${activeSlide === 3 ? "show" : ""}`}
                alt=""
              />
            </div>

            <div className="text-slider">
              <div className="text-wrap">
                <div style={{ color: "black" }} className="text-group">
                  {activeSlide === 1 && (
                    <>
                      <h2>Find Doctors suitable for you</h2>
                    </>
                  )}
                  {activeSlide === 2 && (
                    <>
                      <h2>Get Expert Medical Care</h2>
                    </>
                  )}
                  {activeSlide === 3 && (
                    <>
                      <h2>Consulting Doctors Conveniently</h2>
                    </>
                  )}
                </div>
              </div>

              <div className="bullets">
                {Array.from({ length: 3 }).map((_, index) => (
                  <span
                    key={index + 1}
                    className={activeSlide === index + 1 ? "active" : ""}
                    onClick={() => handleBulletClick(index + 1)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
