import React from 'react';

import Button from './Button';
import Shadow from './FooterShadow';
import './Footer.css';
import red from '../assets/dot-red.png';
import blue from '../assets/dot-blue.png';
import grey from '../assets/dot-grey.png';
import WheelSilver from '../assets/7.png';
import WheelGraffiti from '../assets/8.png';
import WheelPerformance from '../assets/9.png';

const Footer = props => {
  let colorImage;
  let wheelsImage;
  let buttonUrl = "/modelr/custom/color";

  if (props.color === 6)
    colorImage = grey;
  else if (props.color === 5)
    colorImage = blue;
  else
    colorImage = red;

  if (props.wheels === 7)
    wheelsImage = WheelSilver;
  else if (props.wheels === 8)
    wheelsImage = WheelGraffiti;
  else
    wheelsImage = WheelPerformance;

  if (props.showWheels) {
    buttonUrl = "/modelr/custom/resume";
  }
  else if (props.showColor) {
    buttonUrl = "/modelr/custom/wheel";
  }

  return (
    <footer className="footer">
      <div className="total-price">
        <span>Total</span>
        <span className="value-price">${props.price}</span>
      </div>
      <span className="model-r">Model R</span>
      <span className="motor" style={{ fontWeight: 500 }}>{props.kwh} <span className="type">{props.type}</span></span>
      <span className={"color-footer " + (props.showColor ? null : "hidden")}><img src={colorImage} alt="cor" /></span>
      <span className={props.showWheels ? null : "hidden"}><img style={{ width: '3rem' }} src={wheelsImage} alt="wheels" /></span>
      <Button text="next" url={buttonUrl} />
    </footer>
  )
}

export default Footer;