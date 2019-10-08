import React from 'react';

import './EngineOptions.css';

const EngineOptions = props => {
    
  const selected = props.selectedEngine === props.info.id ? "selected" : null;

  return (
    <div className={"engine-options " + selected} onClick={props.clicked}>
      <p className="kwh1">
        {props.info.kwh}
        <span className="type"> {props.info.type}</span>
      </p>
      <p>
        <span className="kwh2">{props.info.kwh} </span>
        kWh
      </p>
      <p>
        <span className="range">{props.info.range} </span>
        miles range
      </p>
      <p className="select"></p>
      <span className="price">{props.info.price === 0 ? 'Included' : '+$' + props.info.price.toLocaleString()}</span>
    </div>
  )
}

export default EngineOptions;