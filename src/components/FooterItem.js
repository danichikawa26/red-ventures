import React from 'react';

import Auxiliar from '../hoc/Auxiliar';
import './FooterItem.css';

const FooterItem = props => (
  <Auxiliar>
      <div className="footerItem">
        <span className="number">{props.number}</span><span className="abbr">{props.abbr}</span>
        <p className="description">{props.description}</p>
      </div>  
  </Auxiliar>
);

export default FooterItem;