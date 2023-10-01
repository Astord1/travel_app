import "./main.scss"
import dataImp from "data/destinations.ts";
import {HiOutlineLocationMarker, HiOutlineClipboardCheck} from "react-icons/hi"

import useAos from 'hooks/useAos';

type DestinationType  = {
  'id': number,
  'imgsrc': string,
  'destTitle': string, 
  'location': string,
  'grade': string,
  'fees': string,
  'description': string
}
const Main = () => {
  const data:DestinationType[] = dataImp;

  useAos(500)

  return (
    <section className="main container section">
      <div className="sec-title">
        <h3 className="title" data-aos="fade-right">
          Most visited destinations
        </h3>
      </div>

      <div className="sec-content grid">
        {
        data && data.map((destination: DestinationType) => {
          return (
            <div className="single-destination" key = {destination.id} data-aos="fade-up">
              <div className="img-div">
                <img src = {destination.imgsrc} alt = "" />
              </div>

              <div className = "card-info">
                <h4 className = "dest-details">{destination.destTitle}</h4>
                <span className = "continent flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{destination.location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>{destination.grade}<small>+1</small></span>
                  </div>

                  <div className = "price">
                    <h5>{destination.fees}</h5>
                  </div>
                </div>

                <div className="desc">
                  <p>{destination.description}</p>
                </div>

                <button className ="btn flex">
                  DETAILS <HiOutlineClipboardCheck className="icon" />
                </button>
              </div>
            </div>
          )
        })
        }
      </div> {/* sec container */}
    </section>
  )
}

export default Main