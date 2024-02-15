import {
  Box,
  Button,
  ListSubheader,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React, { Component } from "react";
import upload from "../../../img/upload.png";
import "./aboutMe.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Formik } from "formik";
import * as Yup from "yup";

// const phoneNumberRules = /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[789]\d{9}$/;

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("First Name is required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Last Name is required"),
  phone: Yup.string().max(10).required("Phone Number is required"),
  countryFirst: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Country Name is required"),
  countrySecond: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Country Name is required"),
  townn: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Town Name is required"),
  rAddress: Yup.string()
    .min(6, "Too Short!")
    .max(30, "Too Long!")
    .required("Address is required"),
  cName: Yup.string()
    .min(4, "Too Short!")
    .max(30, "Too Long!")
    .required("Company Name is required"),
  cNumber: Yup.string()
    .required("required")
    .matches(/^\+\d{1,3}[- ]?\d{1,14}$/, {
      message: "Invalid number",
      excludeEmptyString: false
    })
    .max(10)
    .required("Company Number is required"),
  vatNumber: Yup.string().max(10).required("VAT Number is required"),
});

// var validate = require('validate-vat');
// validate( 'xx',  'xxxxxxx',  function(err, validationInfo) {
//     console.log(validationInfo);
// });

function FieldError({ error, touched }) {
  return error && touched ? <div style={webStyle.error}>{error}</div> : null;
}

export default class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rAddress: "",
      vatNumber: "",
      cName: "",
      cNumber: "",
      firstName: "",
      lastName: "",
      countryFirst: "",
      countrySecond: "",
      townn: "",
      checked: false,
      dialCode: "",
      phone: "",
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
      countryFirst: event.target.value,
    });
  };

  dropDownHandleSec = (event) => {
    this.setState({
      countrySecond: event.target.value,
    });
  };

  dropDownHandleTown = (event) => {
    this.setState({
      townn: event.target.value,
    });
  };

  handleToggleChange = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };

  handleOnChange(phone, value) {
    console.log("value", value);
    console.log("phone", phone);
    // this.setState({ phone: phone.replace(value.dialCode, "") });
    // document.querySelector(".react-tel-input .selected-flag").innerHTML =
    //   value.dialCode;
    // document.querySelector(".form-control").value = phone.replace(
    //   value.dialCode,
    //   ""
    // );
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
    console.log("Country Two:", this.state.countryTwo);
    console.log("phone.......", this.state.phone);
    console.log("company Numberrr", this.state.cNumber);
    console.log("company Nameeee", this.state.cName);
    console.warn("field error", this.FieldError);
    return (
      <Formik
        initialValues={{
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          countryFirst: this.state.countryFirst,
          countrySecond: this.state.countrySecond,
          townn: this.state.townn,
          phone: this.state.phone,
          rAddress: this.state.rAddress,
          vatNumber: this.state.vatNumber,
        }}
        validationSchema={validationSchema}
        onSubmit={this.handleSubmit}
      >
        {({
          values,
          errors,
          resetForm,
          setFieldTouched,
          setFieldValue,
          touched,
          handleSubmit,
          setErrors,
        }) => (
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div
              style={{
                maxWidth: "672px",
                display: "flex",
                flexDirection: "column",
              }}
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
                <Box
                  style={{ maxWidth: "672px", display: "flex", gap: "24px" }}
                >
                  <Box style={{ maxWidth: "326px" }}>
                    <TextField
                      variant="outlined"
                      placeholder="First Name"
                      style={{ height: "48px", width: "100%" }}
                      name="firstname"
                      value={this.state.firstName}
                      onChange={(event) => {
                        setFieldValue("firstname", event.target.value);
                        this.setState({
                          firstName: event.target.value,
                        });
                      }}
                    />
                    <FieldError
                      error={errors.firstName}
                      touched={touched.firstName}
                    />
                  </Box>
                  <Box style={{ maxWidth: "326px" }}>
                    <TextField
                      variant="outlined"
                      placeholder="Last Name"
                      style={{ height: "48px", width: "100%" }}
                      value={this.state.lastName}
                      name="lastname"
                      onChange={(event) => {
                        setFieldValue("lastname", event.target.value);
                        this.setState({
                          lastName: event.target.value,
                        });
                      }}
                    />
                    <FieldError
                      error={errors.lastName}
                      touched={touched.lastName}
                    />
                  </Box>
                </Box>
                {/* =================== */}
                <Box style={{ width: "100%", display: "flex", gap: "24px" }}>
                  <Box style={{ position: "relative" }}>
                    <PhoneInput
                      variant="outlined"
                      placeholder="Contact Number"
                      name="phone"
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
                      onChange={(event) => {
                        this.handleOnChange(event)
                        // setFieldValue("phone", phone);
                        // this.setState({
                        //   phone: phone,
                        // });
                      }}
                      inputProps={{
                        name: "phone",
                        required: true,
                        autoFocus: true,
                      }}
                    />
                    <FieldError error={errors.phone} touched={touched.phone} />
                  </Box>

                  <Box style={{ position: "relative" }}>
                    <Select
                      variant="outlined"
                      className="aboutMe"
                      style={{ height: "48px", width: "324px" }}
                      placeholder="Country"
                      value={this.state.countryFirst}
                      onChange={this.dropDownHandle}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <ListSubheader>
                        <TextField
                          variant="outlined"
                          placeholder="Search"
                          type="text"
                        />
                        <SearchIcon
                          style={{
                            position: "relative",
                            right: "310px",
                            top: "5px",
                            height: "18px",
                            width: "18px",
                          }}
                        />
                      </ListSubheader>
                      {this.state.countryOne.map((countryOne, id) => (
                        <MenuItem
                          key={id}
                          value={countryOne}
                          // style={webStyle.inputBackground}
                        >
                          {countryOne}
                        </MenuItem>
                      ))}
                    </Select>
                    <FieldError
                      error={errors.countryFirst}
                      touched={touched.countryFirst}
                    />
                  </Box>
                </Box>
                {/* ------------------------ */}
                <Box style={{ width: "100%", display: "flex", gap: "24px" }}>
                  <Box style={{ position: "relative" }}>
                    <Select
                      className="aboutMe"
                      variant="outlined"
                      style={{ height: "48px", width: "324px" }}
                      value={this.state.countrySecond}
                      onChange={this.dropDownHandleSec}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <ListSubheader>
                        <TextField
                          variant="outlined"
                          placeholder="Search"
                          type="text"
                        />
                        <SearchIcon
                          style={{
                            position: "relative",
                            right: "310px",
                            top: "5px",
                            height: "18px",
                            width: "18px",
                          }}
                        />
                      </ListSubheader>
                      {this.state.countryTwo.map((countryTwo, id) => (
                        <MenuItem
                          key={id}
                          value={countryTwo}
                          // style={{ color: "#000" }}
                          // style={webStyle.inputBackground}
                        >
                          {countryTwo}
                        </MenuItem>
                      ))}
                    </Select>
                    <FieldError
                      error={errors.countrySecond}
                      touched={touched.countrySecond}
                    />
                  </Box>

                  <Box style={{ position: "relative" }}>
                    <Select
                      variant="outlined"
                      className="aboutMe"
                      style={{ height: "48px", width: "324px" }}
                      placeholder="Country"
                      value={this.state.townn}
                      onChange={this.dropDownHandleTown}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <ListSubheader>
                        <TextField
                          variant="outlined"
                          placeholder="Search"
                          type="text"
                        />
                        <SearchIcon
                          style={{
                            position: "relative",
                            right: "310px",
                            top: "5px",
                            height: "18px",
                            width: "18px",
                          }}
                        />
                      </ListSubheader>
                      {this.state.town.map((town, id) => (
                        <MenuItem
                          key={id}
                          value={town}
                          // style={webStyle.inputBackground}
                        >
                          {town}
                        </MenuItem>
                      ))}
                    </Select>
                    <FieldError error={errors.townn} touched={touched.townn} />
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
                {this.state.checked ? (
                  <>
                    <Box
                      style={{
                        maxWidth: "672px",
                        display: "flex",
                        gap: "24px",
                      }}
                    >
                      <Box style={{ maxWidth: "326px" }}>
                        <TextField
                          variant="outlined"
                          placeholder="Company Name"
                          style={{ height: "48px", width: "100%" }}
                          name="cName"
                          value={this.state.cName}
                          onChange={(event) => {
                            setFieldValue("cName", event.target.value);
                            this.setState({
                              cName: event.target.value,
                            });
                          }}
                        />
                        <FieldError
                          error={errors.cName}
                          touched={touched.cName}
                        />
                      </Box>
                      <Box style={{ maxWidth: "326px" }}>
                        <TextField
                          variant="outlined"
                          placeholder="Company Number"
                          style={{ height: "48px", width: "100%" }}
                          value={this.state.cNumber}
                          type="number"
                          name="cNumber"
                          onChange={(event) => {
                            setFieldValue("cNumber", event.target.value);
                            this.setState({
                              cNumber: event.target.value,
                            });
                          }}
                        />
                        <FieldError
                          error={errors.cNumber}
                          touched={touched.cNumber}
                        />
                      </Box>
                    </Box>
                    <Box
                      style={{
                        maxWidth: "672px",
                        display: "flex",
                        gap: "24px",
                      }}
                    >
                      <Box style={{ maxWidth: "326px" }}>
                        <TextField
                          variant="outlined"
                          style={{ height: "48px", width: "100%" }}
                          name="rAddress"
                          placeholder="Registered Address"
                          value={this.state.rAddress}
                          onChange={(event) => {
                            setFieldValue("rAddress", event.target.value);
                            this.setState({
                              rAddress: event.target.value,
                            });
                          }}
                        />
                        <FieldError
                          error={errors.rAddress}
                          touched={touched.rAddress}
                        />
                      </Box>
                      <Box style={{ maxWidth: "326px" }}>
                        <TextField
                          variant="outlined"
                          style={{ height: "48px", width: "100%" }}
                          value={this.state.vatNumber}
                          name="vatNumber"
                          placeholder="VAT Number if applicable"
                          onChange={(event) => {
                            setFieldValue("vatNumber", event.target.value);
                            this.setState({
                              vatNumber: event.target.value,
                            });
                          }}
                        />
                        <FieldError
                          error={errors.vatNumber}
                          touched={touched.vatNumber}
                        />
                      </Box>
                    </Box>
                  </>
                ) : (
                  ""
                )}
                <Box style={{ textAlign: "end" }}>
                  <Button
                    variant="outlined"
                    type="submit"
                    style={{
                      backgroundColor: "#9B9B9D",
                      color: "#FFF",
                      width: "129px",
                      textWrap: "nowrap",
                      whiteSpace: "nowrap",
                      textTransform: "capitalize",
                      fontFamily: "Silka",
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "19.3px",
                      letterSpacing: "-0.15px",
                      textAlign: "center",
                    }}
                  >
                    Next
                  </Button>
                </Box>
              </Box>
            </div>
          </form>
        )}
      </Formik>
    );
  }
}

const webStyle = {
  error: {
    color: "#D80032",
  },
};
