import React from 'react';
import { Link } from 'react-router-dom'
import './Resume.css';

const Resume = props => {

  const showPrice = price => {
    return price === 0 ? 'Included' : "+$" + price.toLocaleString();
  }

  return (
    <section className="final">
      <figure>
        <img src={props.image} alt="Final car" />
      </figure>
      <div className="details">
        <h2>Your <span style={{ fontWeight: 400 }}>Model <span className="model">R</span></span></h2>
        <p>
          Starting price 
          <span>{"$" + props.price.toLocaleString()}</span>
        </p>
        <hr />
        <p>
          {props.engine.kwh} {props.engine.type} - {props.engine.kwh} KWh - {props.engine.range} miles range
          <span>{showPrice(props.engine.price)}</span>
        </p>
        <p>
          {props.color.label} Paint
          <span>{showPrice(props.color.price)}</span>
        </p>
        <p>
          {props.wheels.label}
          <span>{showPrice(props.wheels.price)}</span>
        </p>
        <hr />
        <p className="finalPrice">
          Final Price
          <span>{"$" + props.totalPrice.toLocaleString()}</span>
        </p>
        <div className="rebuild"><Link className="button" to="/">REBUILD</Link></div>
      </div>
    </section>
  )
}

export default Resume;