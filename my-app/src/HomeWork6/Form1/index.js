import React from "react";
import "./style1.css";

export default function Form1() {
  return (
    <>
      <div className="row">
        <div className="main">
          <div style={{ height: 100 }}>
            <i></i>
          </div>
          <h3 style={{ marginLeft: 20, color: "white", fontWeight: 700 }}>
            Hi !
          </h3>
          <form className="form">
            <input className="change-size" placeholder="Email"></input>
            <button className="change-size btn-color">Continue</button>
            <p>or</p>
            <button className="change-size">
              <i></i>
              <p>Continue with Facebook</p>
            </button>
            <button className="change-size">
              <i></i>
              <p>Continue with Google</p>
            </button>
            <button className="change-size">
              <i></i>
              <p>Continue with Apple</p>
            </button>
            <div className="link">
              <span>Don't have an account</span>
              <a href="#">Sign up</a>
            </div>
            <div className="link">
              <a href="#">Forgot your password</a>
            </div>
          </form>
        </div>
        {/* p2 */}
        <div className="main">
          <div style={{ height: 100 }}>
            <i></i>
          </div>
          <h3 style={{ marginLeft: 20, color: "white", fontWeight: 700 }}>
            Sign Up
          </h3>
          <form className="form" style={{ height: 320 }}>
            <span>Looks Like you don't have an account.</span>
            <br></br>
            <span>
              Let's create account for <br></br>
              <span>Jane Doe@gmail.com</span>
            </span>

            <input className="change-size" placeholder="Name"></input>
            <input className="change-size" placeholder="Password"></input>
            <div className="link">
              <span style={{ marginLeft: 0 }}>
                Be selecting Agree and Continue below, I agree to
              </span>
              <a href="#">Terms of Service and Privacy Policy</a>
            </div>
            <button className="change-size btn-color">
              Agree and Continue
            </button>
          </form>
        </div>
        {/* p3 */}
        <div className="main">
          <div style={{ height: 100 }}>
            <i></i>
          </div>
          <h3 style={{ marginLeft: 20, color: "white", fontWeight: 700 }}>
            Log in
          </h3>
          <form className="form" style={{ height: 220 }}>
            <div className="colum">
              <img
                style={{ width: 50, height: 50 }}
                src="Basic-2.jpg"
                alt=""
              ></img>
              <div>
                <span>Jane Dow </span>
                <br></br>
                <span style={{ fontSize: 12 }}>Jane.Doe@gmail.com</span>
              </div>
            </div>
            <input className="change-size" placeholder="Password"></input>
            <button className="change-size btn-color">Continue</button>

            <div className="link">
              <a href="#">Forgot your password</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
