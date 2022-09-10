import React from "react";
import logo from "../../imgs/logo.png";z

const Banner = ({ title, setTitle }) => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <span className="search-container">
          <input
              id="search-box"
              placeholder="What is it that you truly desire?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <i className="bi bi-search" />
          </span>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
