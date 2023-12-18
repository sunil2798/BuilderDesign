import React, { Component } from 'react';
import "./maskimg.css";
import img from '../../img.jpg';

import { PhoneInput, DialCodePreview } from 'react-international-phone';
import 'react-international-phone/style.css';


export default class MaskImg extends Component {
  constructor() {
    super()
    this.state = {
      phone: '',
      dialCode: "",
      prefix: "",
      disabled: undefined,

    };
  }

  handleChange = (value) => {
    this.setState({ phone: value })
    console.log("handle change value", value);
  }

  handleInput = (e) => {
    this.setState({
      phone: e.target.value
      
    })
  }

  render() {
    console.log("state", this.state.phone);
    return (
      <>
        <PhoneInput
          defaultCountry="in"
          value={this.state.phone}
          placeholder={'Phone Number'}
          onChange={this.handleChange}
          // dialCodePreviewStyleProps={true}
          inputComponent={() => {
            <>
              <input
                type="tel"
                className="react-international-phone"
                value={this.state.phone}
                onChange={(e) => this.setState({ phone: e.target.value })}
              />
              <DialCodePreview dialCode="1" prefix="+" style={{background: "red"}} />
            </>
          }}
        />


        {/* ------------------------------------------ */}


        {/* <div class="container">
          <h1>Masking</h1>
          <article class="alpha-mask">
            <img class="target alpha-target" src={img} alt="Masked image" />
          </article>
        </div> */}

      </>
    )
  }
}
