import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItem.css';

const NavigationItem = props => (
  <li className={"navigationItem " + (props.link === "/modelr" ? null : "nav-mobile")}>
    <NavLink 
      to={props.link}>{props.children}</NavLink>
  </li>
);

export default NavigationItem;