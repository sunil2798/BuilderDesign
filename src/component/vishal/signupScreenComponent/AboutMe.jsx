import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import upload from "../../../img/upload.png";
import "./aboutMe.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: "",
      checked: false,
      dialCode:"",
      phone: "",
      rawPhone: "",
      countryOne: [
        "April Tucker",
        "Ralph Hubbard",
        "Omar Alexander",
        "Carlos Abbott",
        "Bradley Wilkerson",
        "Kelly Snyder",
      ],
      countryTwo: [
        "April Tucker",
        "Ralph Hubbard",
        "Omar Alexander",
        "Carlos Abbott",
        "Bradley Wilkerson",
        "Kelly Snyder",
      ],
      town: [
        "April Tucker",
        "Ralph Hubbard",
        "Omar Alexander",
        "Carlos Abbott",
        "Bradley Wilkerson",
        "Kelly Snyder",
      ],
    };
  }

  dropDownHandle = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handleToggleChange = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };

  handleOnChange(phone, value) {
    console.log('value',value);
    console.log('phone',phone);
    this.setState({ phone :phone.replace(value.dialCode,"")});
    document.querySelector(".react-tel-input .selected-flag").innerHTML = value.dialCode;
    document.querySelector(".form-control").value = phone.replace(value.dialCode,"");
  }

  componentDidMount = () => {
    // document.querySelector(".react-tel-input .selected-flag").innerHTML = "+91";
    // document.querySelector(".form-control").value = "";
    // const value = document
    //   .querySelector(".react-tel-input .form-control")
    //   .value.replace("+91", "");
    
    // console.log(value);
    // this.setState({ phone: value });
  };

  render() {
    console.log("toggle", this.state.checked);
    console.log("dropdown list check", this.state.age);
    return (
      <div
        style={{ maxWidth: "672px", display: "flex", flexDirection: "column" }}
      >
        <Typography
          style={{
            fontFamily: "Silka",
            color: "#0D0C22",
            fontSize: "24px",
            fontWeight: 500,
            fontStyle: "normal",
            lineHeight: "-0.15px",
          }}
        >
          About Me
        </Typography>

        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            marginTop: "10px",
            paddingBottom: "64px",
            borderBottom: "1px solid #DFDFDF",
          }}
        >
          <Box
            style={{
              height: "72px",
              width: "72px",
              borderRadius: "60px",
              backgroundColor: "#F2F3EE",
              padding: "16px",
              flexShrink: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: "36px", height: "36px" }}
              src={upload}
              alt="profileImg"
            />
          </Box>
          <Box>
            <Typography
              style={{
                fontFamily: "Silka",
                color: "#9B9B9D",
                fontSize: "14px",
                fontWeight: 500,
                fontStyle: "normal",
                lineHeight: "19.36px",
              }}
            >
              Upload Profile Picture
            </Typography>
          </Box>
        </Box>

        <Box
          style={{
            maxWidth: "672px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            marginTop: "36px",
          }}
        >
          <Box style={{ maxWidth: "672px", display: "flex", gap: "24px" }}>
            <TextField
              variant="outlined"
              placeholder="First Name"
              style={{ height: "48px", width: "50%" }}
            />
            <TextField
              variant="outlined"
              placeholder="Last Name"
              style={{ height: "48px", width: "50%" }}
            />
          </Box>
          {/* =================== */}
          <Box style={{ width: "100%", display: "flex", gap: "24px" }}>
            <Box style={{ position: "relative" }}>
              <PhoneInput
                variant="outlined"
                placeholder="Contact Number"
                // inputProps={{ "aria-label": "Without label" }}
                country={"in"}
                value={this.state.phone}
                // onChange={(phone, value) => {


                  
                //   console.log(value, phone);
                //   console.log('this.state.dial',this.state.dialCode);
                //   document.querySelector(
                //     ".react-tel-input .selected-flag"
                //     ).innerHTML = value?.dialCode;
                //     this.setState({
                //       dialCode: phone,
                //     });
                // }}
                // onChange={this.handleOnChange()}
                onChange={(phone, value, event) => this.handleOnChange(phone, value, event)}

                // inputProps={{
                //   name: "phone",
                //   required: true,
                //   autoFocus: true,
                //   prefix: false,
                //   "aria-label": "Without label",
                // }}
              />
            </Box>

            <Box style={{ position: "relative" }}>
              <Select
                variant="outlined"
                className="aboutMe"
                style={{ height: "48px", width: "324px" }}
                placeholder="Country"
                value={this.state.age}
                onChange={this.dropDownHandle}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                {this.state.countryTwo.map((countryTwo, id) => (
                  <MenuItem
                    key={id}
                    value={countryTwo}
                    // style={webStyle.inputBackground}
                  >
                    {countryTwo}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </Box>
          {/* ------------------------ */}
          <Box style={{ width: "100%", display: "flex", gap: "24px" }}>
            <Box style={{ position: "relative" }}>
              <Select
                className="aboutMe"
                variant="outlined"
                style={{ height: "48px", width: "324px" }}
                value={this.state.age}
                onChange={this.dropDownHandle}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                {this.state.countryOne.map((countryOne, id) => (
                  <MenuItem
                    key={id}
                    value={countryOne}
                    style={{ color: "#000" }}
                    // style={webStyle.inputBackground}
                  >
                    {countryOne}
                  </MenuItem>
                ))}
              </Select>
            </Box>

            <Box style={{ position: "relative" }}>
              <Select
                variant="outlined"
                className="aboutMe"
                style={{ height: "48px", width: "324px" }}
                placeholder="Country"
                value={this.state.age}
                onChange={this.dropDownHandle}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                {this.state.countryTwo.map((countryTwo, id) => (
                  <MenuItem
                    key={id}
                    value={countryTwo}
                    // style={webStyle.inputBackground}
                  >
                    {countryTwo}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </Box>
          <Box style={{ display: "flex", gap: "24px" }}>
            <Typography>Trading via limited/umbrella company</Typography>
            <label className="switch">
              <input
                type="checkbox"
                checked={this.state.checked}
                onChange={this.handleToggleChange}
              />
              <span className="slider round"></span>
            </label>
          </Box>
          <Box style={{ textAlign: "end" }}>
            <Button
              variant="outlined"
              style={{
                backgroundColor: "#9B9B9D",
                color: "#FFF",
                width: "129px",
                textWrap: "nowrap",
                whiteSpace: "nowrap",
              }}
            >
              Next
            </Button>
          </Box>
        </Box>
      </div>
    );
  }
}
