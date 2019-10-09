import React from 'react';
import WheelSilver from '../../assets/7.png';
import WheelGraffiti from '../../assets/8.png';
import WheelPerformance from '../../assets/9.png';
import './Wheels.css';

const Wheels = props => {

  const imageSource = [WheelSilver, WheelGraffiti, WheelPerformance];
  const alt = ["Wheel: silver", "Wheel: graffiti", "Wheel: performance"]

  return (
    <section className="wheels">
      <h2>Wheel</h2>
      <div className="wheel_images">
        {
          imageSource.map((image, index) => (
            image = (
              <div key={index + 1}>
                <img src={image} alt={alt[index]}
                  className={props.selected === (index + 1) ? "wheel_selected" : "wheel_notSelected"}
                  onClick={() => props.selectedWheel(index + 1)}/>
                <div className={props.selected === (index + 1) ? "wheel-details" : "details-notSelected"}>
                  <p className="wheel-label"> {props.wheelLabel} </p>
                  <p className="wheel-price"> {props.wheelPrice === 0 ? 'Included' : '+$' + props.wheelPrice.toLocaleString()} </p>
                </div>
              </div>
            )
          ))
        }
      </div>

    </section>
  )
}

export default Wheels;