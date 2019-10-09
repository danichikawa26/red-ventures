import React from 'react'
import EngineOptions from './EngineOptions';
import './Engines.css';

const Engines = props => (

  <div className="engines">
    <h2>Engine</h2>
    {
      props.engineInfo.map(item => {
        return (
          <EngineOptions
            key={item.id}
            info={item}
            selectedEngine={props.selected}
            clicked={() => props.selectedEngine(item.id)} />
        )
      })
    }
  </div>
)

export default Engines