import "./footer.scss"
import video1 from "assets/video/video1.mp4"
import { FiChevronRight, FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillYoutube, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai"
import {FaTripadvisor} from 'react-icons/fa'

import useAos from 'hooks/useAos'

const Footer = () => {
  useAos(1000);
  return (
    <section className="footer">
      <div className = "video-div">
        <video loop autoPlay muted>
          <source type = "video/mp4" src = {video1} />
        </video>
      </div>

      <div className = "sec-content container">
        <div className = "contact-div flex">
          <div className="text" data-aos = "fade-up">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="input-div flex" data-aos="fade-up">
            <input type = "email" placeholder = "Enter Email Adress" />
            <button className = "btn flex" type = "submit">
              SEND <FiSend className = "icon" />
            </button>
          </div>
        </div> {/* contact div */}

        <div className="footer-card flex" data-aos="fade-up">
          <div className='footer-intro flex'>
            <div className = "logo-div">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className = "icon"/> Travel.
              </a>
            </div>

            <div className="footer-paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae voluptate enim fuga vel laudantium iusto nesciunt debitis itaque sed cupiditate eos qui amet fugit saepe, aut quis sint ipsam atque.
            </div>

            <div className="footer-socials flex">
              <AiOutlineTwitter className = "icon"/>
              <AiFillYoutube  className = "icon"/>
              <AiFillInstagram  className = "icon"/>
              <FaTripadvisor className = "icon" />
            </div>
          </div>
          
          <div className="footer-links grid">
            {/* Group One */}
            <div className="link-group">
              <span className="group-title">
                OUR AGENCY
              </span>

              <li className="footer-list flex">
                <FiChevronRight className = "icon" />
                Services
              </li>

              <li className="footer-list flex">
                <FiChevronRight className = "icon" />
                Insurance
              </li>

              <li className="footer-list flex">
                <FiChevronRight className = "icon" />
                Agency
              </li>

              <li className="footer-list flex">
                <FiChevronRight className = "icon" />
                Tourism
              </li>

              <li className="footer-list flex">
                <FiChevronRight className = "icon" />
                Payment
              </li>
            </div>

            {/* Group Two */}
            <div className="link-group">
              <span className="group-title">
                PARTNERS
              </span>

              <li className="footer-list flex">
                <FiChevronRight className = "icon" />
                Bookings
              </li>

              <li className="footer-list flex">
                <FiChevronRight className = "icon" />
                ReantCars
              </li>

              <li className="footer-list flex">
                <FiChevronRight className = "icon" />
                HostelWorld
              </li>

              <li className="footer-list flex">
                <FiChevronRight className = "icon" />
                Trivago
              </li>

              <li className="footer-list flex">
                <FiChevronRight className = "icon" />
                TripAd
              </li>
            </div>

            {/* Group Three */}
            <div className="link-group">
              <span className="group-title">
                LAST MINUTE
              </span>

              <li className="footer-list flex">
                <FiChevronRight className = "icon" />
                London
              </li>

              <li className="footer-list flex">
                <FiChevronRight className = "icon" />
                California
              </li>

              <li className="footer-list flex">
                <FiChevronRight className = "icon" />
                Indonesia
              </li>

              <li className="footer-list flex">
                <FiChevronRight className = "icon" />
                Europe
              </li>

              <li className="footer-list flex">
                <FiChevronRight className = "icon" />
                Oceania
              </li>
            </div>
          </div>

          <div className="footer-div flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED 2023</small>
          </div>
        </div> {/* footer-card */}

        
      </div> 
    </section>
  )
}

export default Footer