import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import './App.css';




function App() {
  const [verified, setVerified] = useState(false);

  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }

  return (
    <div>
      <h1 style={{ color: "blueviolet", textAlign: "center" }}>CONTACT FORM</h1>
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <form >
            <div className="formbold-input-flex">
              <div>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Jane"
                  className="formbold-form-input"
                />
                <label htmlFor="firstname" className="formbold-form-label"> First name </label>
              </div>
              <div>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Cooper"
                  className="formbold-form-input"
                />
                <label htmlFor="lastname" className="formbold-form-label"> Last name </label>
              </div>
            </div>

            <div className="formbold-input-flex">
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="jhon@mail.com"
                  className="formbold-form-input"
                />
                <label htmlFor="email" className="formbold-form-label"> Mail </label>
              </div>
              <div>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="(319) 555-0115"
                  className="formbold-form-input"
                />
                <label htmlFor="phone" className="formbold-form-label"> Phone </label>
              </div>
            </div>

            <div className="formbold-textarea">
              <textarea
                rows="6"
                name="message"
                id="message"
                placeholder="Write your message..."
                className="formbold-form-input"
              ></textarea>
              <label htmlFor="message" className="formbold-form-label"> Message </label>
            </div>

            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={onChange}
            />

            <ReCAPTCHA
              sitekey="jsbch"
              onChange={onChange}
            />

            <button className="formbold-btn" disabled={!verified}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div >
  );
}

export default App;
