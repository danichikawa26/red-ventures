import React from 'react';
import axios from 'axios';
import './Wheel.css'
import Wheels from '../components/Wheels';

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

    if (this.state.wheels) {
      options = (
        <Wheels 
          selected={this.state.selected}
          selectedWheel={this.selectedWheelHandler}
          wheelLabel={this.state.wheels[this.state.selected - 1].label}
          wheelPrice={this.state.wheels[this.state.selected - 1].price} />
      )
    }
    return (
      <div className="wheel">
          {options}
      </div>
    )
  }
}

export default Wheel;