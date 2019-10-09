import React from 'react';
import axios from 'axios';
import Engines from '../components/Engines/Engines';
import EngineImage75 from '../assets/1.png';
import EngineImage100 from '../assets/2.png';
import EngineImage125 from '../assets/3.png';
import './Engine.css';

class Engine extends React.Component {

  state = {
    engines: null,
    selected: 1
  }

  componentDidMount() {
    axios.get('https://next.json-generator.com/api/json/get/41ORKNZDU')
      .then(res => {
        this.setState({ engines: res.data.data.engine.items, price: res.data.data.price });
      })
      .catch(err => console.error(err));
  }

  selectedEngineHandler = id => {
    this.setState({selected: id});
    this.props.engineSelected(id);
  }

  buttonClickedHandler = () => {
    this.props.history.push(this.props.match.url + '/color');
  }

  render() {
    let image = null;
    let options = null;

    if (this.state.engines) {
      const imageSource = [EngineImage75, EngineImage100, EngineImage125];
      let selected = this.state.selected - 1;
          
      image = <img src={imageSource[selected]} alt="Car" className="figure"/>

      options = (
        <Engines
          className="engines"
          engineInfo={this.state.engines}
          selectedEngine={this.selectedEngineHandler}
          selected={this.state.selected} />
      )
    }
    return (
      <section className="engine">
        {image}
        {options}
      </section>
    )
  }
}

export default Engine