import React from 'react';

import Auxiliar from '../hoc/Auxiliar';
import Button from './Button';
import './Landing.css';
import imageCar from '../assets/car-home.png';
import FooterItem from './FooterItem';

const Landing = props => {

  return (
    <Auxiliar>
      <section className="hero">
        <div className="heroTitle">
          <p>Build your</p>
          <h1>MODEL <span>R</span></h1>
        </div>
        <img src={imageCar} alt="Red sports car"></img>
        <div>
          <Button text="BEGIN" url={props.match.url + '/custom/engine'} />
        </div>
      </section>
      <footer className="footer">
        <FooterItem number="2.5" abbr="s" description="From 0 to 100" />
        <FooterItem number="420" abbr="mi" description="Miles range" />
        <FooterItem number="250" abbr="mp/h" description="Max speed" />
      </footer>
    </Auxiliar>
  )
}

export default Landing;