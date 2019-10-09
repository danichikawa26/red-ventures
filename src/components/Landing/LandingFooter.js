import React from 'react';
import Auxiliar from '../../Auxiliar/Auxiliar';
import './LandingFooter.css';

const LandingFooter = props => (
  <Auxiliar>
      <div className="footerItem">
        <span className="number">{props.number}</span><span className="abbr">{props.abbr}</span>
        <p className="description">{props.description}</p>
      </div>  
  </Auxiliar>
);

export default LandingFooter;