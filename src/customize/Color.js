import React from 'react';
import axios from 'axios';
import CarRed from '../assets/4.png';
import CarBlue from '../assets/5.png';
import CarGrey from '../assets/6.png';
import './Color.css';
import Colors from '../components/Colors';

class Color extends React.Component {

  state = {
    color: null,
    description: '',
    selected: 1
  }

  componentDidMount() {

    axios.get('https://next.json-generator.com/api/json/get/41ORKNZDU')
      .then(res => {
        this.setState({ color: res.data.data.color.items, description: res.data.data.color.description });
      })
      .catch(err => console.error(err));
  }

  selectedColorHandler = id => {
    this.setState({ selected: id });
    this.props.colorSelected(id);
  }

  render() {
    let image = null;
    let details = null;
    let options = null;

    if (this.state.color) {
      const imageSource = [CarRed, CarBlue, CarGrey];
      let selected = this.state.selected - 1;

      image = <img src={imageSource[selected]} alt="Car" />

      details = (
        <div className="color-details">
          <p className="colorlabel">{this.state.color[selected].label}</p>
          <p className="color-price">{this.state.color[selected].price === 0 ? 'Included' : '+$' + this.state.color[selected].price.toLocaleString()}</p>
        </div>
      )
      options = <Colors desc={this.state.description} selected={this.state.selected} selectedColor={this.selectedColorHandler} />
    }
    return (
      <div className="color">
        <div style={{width: '50%'}}>
          {image}
          {details}
        </div>
          {options}
      </div>
    )
  }
}

export default Color;