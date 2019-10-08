import React from 'react';
import axios from 'axios';

import Wheels from '../components/Wheels';
import './Wheel.css';

class Wheel extends React.Component {

  state = {
    wheels: null,
    selected: 1
  }

  componentDidMount() {
    axios.get('https://next.json-generator.com/api/json/get/41ORKNZDU')
      .then(res => {
        this.setState({ wheels: res.data.data.wheels.items });
      })
      .catch(err => console.error(err));
  }

  selectedWheelHandler = id => {
    this.setState({ selected: id });
    this.props.wheelsSelected(id);
  }

  render() {
    let options = null;
    let details = null;

    if (this.state.wheels) {
      let selected = this.state.selected - 1;

      details = (
        <div className="details">
          <p className="label">{this.state.wheels[selected].label}</p>
          <p className="price">{this.state.wheels[selected].price === 0 ? 'Included' : '+$' + this.state.wheels[selected].price.toLocaleString()}</p>
        </div>
      )

      options = (
        <Wheels 
          selected={this.state.selected}
          selectedWheel={this.selectedWheelHandler} />
      )
    }
    return (
      <div className="wheels" style={{width: '50%'}}>
        <div>
          {options}
          {details}
        </div>
      </div>
    )
  }
}

export default Wheel;