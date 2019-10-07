import React from 'react';
import axios from 'axios';
import Auxiliar from '../hoc/Auxiliar';
import Footer from '../components/Footer';
import Engine from './Engine';
import Color from './Color';
import Wheel from './Wheel';
import Resume from '../components/Resume';
import FinalImageRed from '../assets/final-4.png';
import FinalImageBlue from '../assets/final-5.png';
import FinalImageGrey from '../assets/final-6.png';

class Custom extends React.Component {

  state = {
    engine: null,
    color: null,
    wheels: null,
    description: null,
    price: 0,
    results: null,
    engineSelected: 1,
    colorSelected: 1,
    wheelsSelected: 1
  }

  componentDidMount() {
    axios.get('https://next.json-generator.com/api/json/get/41ORKNZDU')
      .then(res => {
        this.setState({
          engine: res.data.data.engine.items,
          color: res.data.data.color.items,
          description: res.data.data.color.description,
          wheels: res.data.data.wheels.items,
          price: res.data.data.price,
        });
      })
      .catch(err => console.error(err));
  }

  engineSelectedHandler = id => {
    this.setState({ engineSelected: id });
  }

  colorSelectedHandler = id => {
    this.setState({ colorSelected: id });
  }

  wheelsSelectedHandler = id => {
    this.setState({ wheelsSelected: id });
  }

  render() {
    let step = this.props.match.params.step;
    let footer = null;
    let showPage = 'engine';
    let showColor = false;
    let showWheels = false;
    let totalPrice = 0;

    
    if (this.state.engine) {
      if (step === 'engine') {
        showPage = <Engine engineSelected={this.engineSelectedHandler} />;
      }
      else if (step === 'color') {
        showPage = <Color colorSelected={this.colorSelectedHandler} />
        showColor = true;
      }
      else if (step === 'wheel') {
        showPage = <Wheel wheelsSelected={this.wheelsSelectedHandler} />
        showColor = true;
        showWheels = true;
      }
      else if (step === 'resume') {
        const imageSource = [FinalImageRed, FinalImageBlue, FinalImageGrey];
        const image = imageSource[this.state.colorSelected - 1];
        totalPrice = this.state.price + this.state.engine[this.state.engineSelected - 1].price + this.state.color[this.state.colorSelected - 1].price + this.state.wheels[this.state.wheelsSelected - 1].price
        showPage = (
          <Resume
            image={image}
            price={this.state.price} 
            engine={this.state.engine[this.state.engineSelected - 1]}
            color={this.state.color[this.state.colorSelected - 1]}
            wheels={this.state.wheels[this.state.wheelsSelected - 1]}
            totalPrice={totalPrice} />
        )
        console.log(this.state.price);
        console.log(this.state.engineSelected);
        console.log(this.state.colorSelected);
        console.log(this.state.wheelsSelected);
        console.log(this.state.totalPrice);
      }
      
      if (step !== 'resume') {
        totalPrice = this.state.price + this.state.engine[this.state.engineSelected - 1].price + this.state.color[this.state.colorSelected - 1].price + this.state.wheels[this.state.wheelsSelected - 1].price
        footer = (
          <Footer
            price={totalPrice.toLocaleString()}
            kwh={this.state.engine[this.state.engineSelected - 1].kwh}
            type={this.state.engine[this.state.engineSelected - 1].type}
            color={this.state.color[this.state.colorSelected - 1].id}
            //wheels={this.state.wheels[this.state.wheelsSelected - 1].image}
            showColor={showColor}
            showWheels={showWheels} />
        )
      }
    }



    return (
      <Auxiliar>
        {showPage}
        {footer}
      </Auxiliar>
    )
  }
}

export default Custom;