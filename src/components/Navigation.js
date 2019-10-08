import React from 'react';
import { NavLink } from 'react-router-dom';

import Auxiliar from '../hoc/Auxiliar';
import './Navigation.css';
import logo from '../assets/RV-logo.svg';
import NavigationItem from './NavigationItem';

const Navigation = () => (
  <Auxiliar>
    <nav className="navigation">
      <NavLink to="/"><img src={logo} alt="Red Venture logo" /></NavLink>
      <ul>
        <NavigationItem link="/modelr">Model R</NavigationItem>
        <NavigationItem link="/iq" className="nav-mobile">Model IQ</NavigationItem>
        <NavigationItem link="/mobi" className="nav-mobile">Model Mobi</NavigationItem>
        <NavigationItem link="/charlie" className="nav-mobile">Model Charlie</NavigationItem>
        <NavigationItem link="/italy" className="nav-mobile">Model Italy</NavigationItem>
      </ul>
    </nav>
  </Auxiliar>
);

export default Navigation;