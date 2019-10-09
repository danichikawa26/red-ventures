import React from 'react';
import dotRed from '../../assets/dot-red.png';
import dotBlue from '../../assets/dot-blue.png';
import dotGrey from '../../assets/dot-grey.png';
import './Colors.css';

const Colors = props => {

  const imageSource = [dotRed, dotBlue, dotGrey];
  const alt = ["Color: red", "Color: blue", "Color: grey"]

  return (
    <section className="options">
      <h2>Color</h2>
      <p>{props.desc}</p>
      <div className="colors">
        {
          imageSource.map((image, index) => (
            image = (
              <img src={image} alt={alt[index]} key={index + 1} 
                className={props.selected === (index + 1) ? "selected" : null}
                onClick={() => props.selectedColor(index + 1)}/>
            )
          ))
        }
      </div>
    </section>
  )
}

export default Colors;