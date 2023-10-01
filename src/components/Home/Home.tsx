import React from 'react'
import "./home.scss"
import video from "assets/video/video.mp4";
import {GrLocation} from "react-icons/gr"
import {HiFilter} from "react-icons/hi"
import {FiFacebook} from "react-icons/fi"
import {AiOutlineInstagram} from "react-icons/ai"
import {BiLogoTripAdvisor} from "react-icons/bi"
import {BsListTask} from "react-icons/bs"
import {AiOutlineAppstoreAdd} from "react-icons/ai"

import useAos from "hooks/useAos";

const Home = () => {

  useAos(1000);

  return (
    <section className = "home">
      <div className = "overlay"></div>
      <video muted loop autoPlay>
        <source  src = {video} type = "video/mp4"/>

        <p>
          Your browser doesn't support HTML video. Here is a
          <a href= {video}>link to the video</a> instead.
        </p>
      </video>

      <div className="home-content container">
        <div className = "text-div">
          <span className = "small-text" data-aos = "fade-up">
            Our Packages
          </span>
          <h1 className = "home-title" data-aos="fade-up">
            Search your Holiday
          </h1>
        </div>

        <div className = "card-div grid" data-aos = "fade-up">
          <div className="destination-input">
            <label htmlFor='city'>
              Search your destination:
            </label>
            <div className = "input flex">
              <input type = "text" placeholder = "Enter name here..."/>
              <GrLocation className = "icon"/>
            </div>
          </div>

          <div className="date-input">
            <label htmlFor='date'>
              Date:
            </label>
            <div className = "input flex">
              <input type = "date" />
            </div>
          </div>

          <div className="price-input">
            <div className = "label-total flex">
              <label htmlFor = "price">Max price:</label>
              <h3 className = "total">5000$</h3>
            </div>
            <div className = "input flex">
              <input type = "range" max="5000" min="1000" />
            </div>
          </div>

          <div className = "search-options flex">
            <HiFilter className = "icon" />
            <span>MORE FILTERS</span>
          </div>
        </div> {/* card-div */}

        <div className = "home-footer-icons flex" data-aos = "fade-up">
          <div className = "right-icons">
            <FiFacebook className = "icon" />
            <AiOutlineInstagram className = "icon" />
            <BiLogoTripAdvisor className = "icon" />
          </div>

          <div className="left-icons">
            <BsListTask className = "icon" />
            <AiOutlineAppstoreAdd className = "icon" />
          </div>
        </div>
      </div>  {/* home-content */}
    </section>
  )
}

export default Home