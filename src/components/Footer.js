import React from 'react';

import Button from './Button';
import './Footer.css';
import red from '../assets/dot-red.png';
import blue from '../assets/dot-blue.png';
import grey from '../assets/dot-grey.png';

const Footer = props => {
  let imageSource;
  let buttonUrl = "/modelr/custom/color";

  if (props.color === 6)
    imageSource = grey;
  else if (props.color === 5)
    imageSource = blue;
  else
    imageSource = red;

  if (props.showWheels) {
    buttonUrl = "/modelr/custom/resume";
  }
  else if (props.showColor) {
    buttonUrl = "/modelr/custom/wheel";
  }

  return (
    <footer className="footer">
      <span>Total <span>${props.price}</span></span>
      <span>Model R</span>
      <span style={{ fontWeight: 500 }}>{props.kwh} <span className="type">{props.type}</span></span>
      <span className={props.showColor ? null : "hidden"}><img src={imageSource} alt="cor" /></span>
      <span className={props.showWheels ? null : "hidden"}><img style={{ width: '3rem' }} src={props.wheels} alt="wheels" /></span>
      <Button text="NEXT" url={buttonUrl} />
    </footer>
  )
}

export default Footer;