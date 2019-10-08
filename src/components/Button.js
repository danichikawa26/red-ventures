import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const Button = props => (
  <Link className="button" to={props.url}>{props.text}</Link>
)

export default Button;