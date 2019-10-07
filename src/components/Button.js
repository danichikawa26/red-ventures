import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const Button = props => (
  // <button className={style.button} onClick={props.clicked}>{props.text}</button>
  <Link className="button" to={props.url}>{props.text}</Link>
)

export default Button;