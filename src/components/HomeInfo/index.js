import React, { useState, useEffect } from "react";
import "./HomeInfo.css";
import img1 from "../../assets/screenshots/1.jpg";
import img2 from "../../assets/screenshots/2.jpg";
import img3 from "../../assets/screenshots/3.jpg";
import img4 from "../../assets/screenshots/4.jpg";
import img5 from "../../assets/screenshots/5.jpg";
import appStoreImg from "../../assets/download-links/App-store.png";
import playStoreImg from "../../assets/download-links/play-store.png";

const HomeInfo = () => {
  const [isInputSelected, setIsInputSelected] = useState({
    user: false,
    password: false,
  });

  const [userDetails, setUserDetails] = useState({
    user: "",
    password: "",
  });

  const [imageList] = useState([img1, img2, img3, img4, img5]);

  const [showcaseImageNumber, setShowcaseImageNumber] = useState(0);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [passwordTag, setPasswordTag] = useState("Show");

  useEffect(() => {
    const interval = setInterval(function () {
      setShowcaseImageNumber(
        (showcaseImageNumber) => (showcaseImageNumber + 1) % 5
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    decidePasswordState();
  }, []);

  const decidePasswordState = () => {
    if (userDetails.password) {
      if (isPasswordVisible) {
        setPasswordTag("Hide");
      } else {
        setPasswordTag("Show");
      }
    }
  };

  const handlePasswordTagClick = e => {
    e.preventDefault();
    if(passwordTag === "Show") {
      setPasswordTag("Hide");
    } else {
      setPasswordTag("Show");
    }
  }

  const handleFocus = (e) => {
    e.persist();
    setIsInputSelected({
      ...isInputSelected,
      [e.target.name]: true,
    });
  };

  const handleBlur = (e) => {
    e.persist();
    setIsInputSelected({
      ...isInputSelected,
      [e.target.name]: false,
    });
  };

  const handleInputChange = (e) => {
    e.persist();
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="HomeInfo flex-column justify-btwn">
      <main className="flex align-center">
        <div>
          <img
            className={showcaseImageNumber !== 0 ? "hide-image" : ""}
            id="showcase-img"
            src={imageList[0]}
            alt
          />
          <img
            className={showcaseImageNumber !== 1 ? "hide-image" : ""}
            id="showcase-img"
            src={imageList[1]}
            alt
          />
          <img
            className={showcaseImageNumber !== 2 ? "hide-image" : ""}
            id="showcase-img"
            src={imageList[2]}
            alt
          />
          <img
            className={showcaseImageNumber !== 3 ? "hide-image" : ""}
            id="showcase-img"
            src={imageList[3]}
            alt
          />
          <img
            className={showcaseImageNumber !== 4 ? "hide-image" : ""}
            id="showcase-img"
            src={imageList[4]}
            alt
          />
        </div>
        <section className="flex-column justify-btwn align-center">
          <form className="flex-column justify-btwn align-center">
            <h1>Instagram</h1>
            <div
              className={
                isInputSelected.user || userDetails.user ? "active" : ""
              }
            >
              <label htmlFor="user">Phone number, username, or email</label>
              <input
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleInputChange}
                name="user"
                id="user"
                type="text"
              />
            </div>
            <div
              className={
                isInputSelected.password || userDetails.password ? "active" : ""
              }
            >
              <label htmlFor="password">Password</label>
              <input
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleInputChange}
                name="password"
                id="password"
                type={passwordTag === "Hide" ? "" : "password"}
              />
              <span className="password-toggle" onClick={handlePasswordTagClick}>{userDetails.password ? passwordTag : ""}</span>
            </div>
            <button
              className={
                userDetails.user && userDetails.password ? "" : "disabled"
              }
            >
              Log In
            </button>
            <p>OR</p>
            <p className="fb-login-link">
              <i className="fab fa-facebook-square"></i> Log in with Facebook
            </p>
            <a>Forgot password?</a>
          </form>
          <p>
            Don't have an account? <a href="#">Sign up</a>
          </p>
          <article>
            <p>Get the app</p>
            <div>
              <img src={appStoreImg} alt />
              <img src={playStoreImg} alt />
            </div>
          </article>
        </section>
      </main>
      <footer className="flex justify-btwn align-center">
        <ul className="flex justify-btwn">
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">help</a>
          </li>
          <li>
            <a href="#">press</a>
          </li>
          <li>
            <a href="#">api</a>
          </li>
          <li>
            <a href="#">jobs</a>
          </li>
          <li>
            <a href="#">privacy</a>
          </li>
          <li>
            <a href="#">terms</a>
          </li>
          <li>
            <a href="#">locations</a>
          </li>
          <li>
            <a href="#">top accounts</a>
          </li>
          <li>
            <a href="#">hashtags</a>
          </li>
          <li>
            <a href="#">language</a>
          </li>
        </ul>
        <p>&copy; 2020 instagram from facebook</p>
      </footer>
    </div>
  );
};

export default HomeInfo;
