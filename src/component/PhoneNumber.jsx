import React, { Component } from 'react'
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
// import 'intl-tel-input/build/css/intlTelInput.css';
// import intlTelInput from 'intl-tel-input';

// const input = document.querySelector("#phone");
// intlTelInput(input, {
//   utilsScript: "path/to/utils.js"
// });

{/* <img src="path/to/intlTelInput.js" />

const input = document.querySelector("#phone");
window.intlTelInput(input, {
  utilsScript: "path/to/utils.js"
});

export default function PhoneNumber() {
  return (
    <div>
      <input id='phone' placeholder='Phone Number'></input>
    </div>
  )
} */}


// --------------------------------------------------


// import React, { Component } from 'react';
// import PhoneInput from 'react-phone-number-input';
// import 'react-phone-number-input/style.css';

const ForwardedInput =  (
  (props, ref) => {
      const { onChange, value } = props;
      return (
          <input
              type="text"
              ref={ref}
              onChange={onChange}
              value={value}
          />
      );
  }
);

class PhoneNumber extends Component {
  constructor() {
    super();
    this.state = {
      country: 'US',
      values: '',
      ref: React.createRef()
    };
    this.phoneInputRef = React.createRef();
  }

  handleCountryChange = (country) => {
    this.setState({ country });
  }
  handlePhoneNumberChange = (value) => {
    this.setState({ values: value });
  }

  componentDidMount() {
    if (this.phoneInputRef && this.phoneInputRef.current) {
      this.phoneInputRef.current.focus();
    }
  }


  // updatePhoneNumberWithCountryCode = () => {
  //   const { values, country } = this.state;
  //   const countryCode = `+${country}`;
  //   console.log("countrycode=====", countryCode);
  //   if (values && values.length > 0 && values[0] !== countryCode) {
  //     this.setState({ values: `${countryCode} ${values}` });
  //     console.log("country code.....", values);
  //   }
  // }

  // handlePhoneNumberChange = (value) => {
  //   this.setState({ values: value }, () => {
  //     // Ensure the country code is still in the input when the phone number changes
  //     this.updatePhoneNumberWithCountryCode();
  //   });
  // }

  //  ref = React.createRef();
   myTextInput = () => {
    <ForwardedInput 
        onChange={() => {}}
        value="string"
        ref={this.ref}
    />
   }

  render() {
    return (
      <div>
        <PhoneInput
          country={this.state.country}
          placeholder="Phone Number"
          onCountryChange={this.handleCountryChange}
          value={this.state.values}
          onChange={this.handlePhoneNumberChange}
          inputComponent={this.myTextInput}
          style={{
            height: '62px',
            width: '439px',
            background: 'orange',
            borderRadius: '10px',
            padding: '10px',
          }}
          limitMaxLength={15}
        />
        
     
      </div>
    );
  }
}

export default PhoneNumber;
