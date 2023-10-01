import {useState} from 'react'
import "./navbar.scss"

import {MdTravelExplore} from "react-icons/md"
import {AiFillCloseCircle} from "react-icons/ai"
import {TbGridDots} from "react-icons/tb"

const Navbar = () => {
  const [active, setActive] = useState<string>("nav-bar");
  function showNav(){
    setActive("nav-bar nav-bar--active")
  }
  function closeNav(){
    setActive("nav-bar")
  }
  return (
    <section className = "navbar-section">
      <header className = "header flex">
        <div className = "logo-div">
          <a href ="#" className = "logo flex">
            <h1><MdTravelExplore className = "icon"/> Travel.</h1>
          </a>
        </div>

        <div className = {`${active} grid`}>
          <ul className = "nav-list grid ">
            <li className = "nav-item">
              <a href = "#" className = "nav-link">Home</a>
            </li>

            <li className = "nav-item">
              <a href = "#" className = "nav-link">Packages</a>
            </li>

            <li className = "nav-item">
              <a href = "#" className = "nav-link">Shop</a>
            </li>

            <li className = "nav-item">
              <a href = "#" className = "nav-link">About</a>
            </li>

            <li className = "nav-item">
              <a href = "#" className = "nav-link">Pages</a>
            </li>

            <li className = "nav-item">
              <a href = "#" className = "nav-link">News</a>
            </li>

            <li className = "nav-item">
              <a href = "#" className = "nav-link">Contact</a>
            </li>

            <button className='btn'>
              <a href ="#">BOOK NOW</a>
            </button>

            <div className="cls-navbar" onClick = {closeNav}>
              <AiFillCloseCircle className = "icon"/>
            </div>
          </ul>
        </div>

        <div className="toggle-navbar" onClick = {showNav}>
          <TbGridDots className = "icon" />
        </div>
      </header>
    </section>
  )
}

export default Navbar