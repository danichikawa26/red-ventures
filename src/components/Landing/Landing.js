import React from 'react';
import Auxiliar from '../../Auxiliar/Auxiliar';
import Button from '../Common/Button';
import './Landing.css';
import imageCar from '../../assets/car-home.png';
import LandingFooter from './LandingFooter';

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
      <footer className="landing-footer">
        <LandingFooter number="2.5" abbr="s" description="From 0 to 100" />
        <LandingFooter number="420" abbr="mi" description="Miles range" />
        <LandingFooter number="250" abbr="mp/h" description="Max speed" />
      </footer>
    </Auxiliar>
  )
}

export default Landing;