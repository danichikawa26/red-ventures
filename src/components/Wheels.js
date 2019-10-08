import React from 'react';
import WheelSilver from '../assets/7.png';
import WheelGraffiti from '../assets/8.png';
import WheelPerformance from '../assets/9.png';
import './Wheels.css';

const Wheels = props => {

  const imageSource = [WheelSilver, WheelGraffiti, WheelPerformance];
  const alt = ["Wheel: silver", "Wheel: graffiti", "Wheel: performance"]

  return (
    <section className="wheels">
      <h2>Wheel</h2>
      <div className="wheel_option">
        {
          imageSource.map((image, index) => (
            image = (
              <img src={image} alt={alt[index]} key={index + 1} 
                className={props.selected === (index + 1) ? "wheel_selected" : "wheel_notSelected"}
                onClick={() => props.selectedWheel(index + 1)}/>
            )
          ))
        }
      </div>
    </section>
  )
}

export default Wheels;