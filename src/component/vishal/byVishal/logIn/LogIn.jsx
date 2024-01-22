import React, { Component } from "react";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import loginPosterImage from "../../../../img/loginPosterImage.png";
import logoV from "../../../../img/logoV.png";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please enter your email")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      "Invalid email address"
    ),
  password: Yup.string()
    .required("Please enter your password.")
    .matches(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
      "password must contain 6 or more characters with at least one of each: uppercase, lowercase, number and special"
    )
    .max(15, "maximum 15 characters"),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("confirm your password"),
});

export default class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      passwordConfirmation: "",
      showPassword: "",
    };
  }

  handleVisibilityOn = (event) => {
    this.setState({
      showPassword: event.target.values,
    });
  };

  render() {
    console.log("show password", this.state.showPassword);

    return (
      <div style={webStyle.loginDiv}>
        <div style={{ marginLeft: "40px", marginTop: "35px" }}>
          <img src={logoV} alt="logo" style={webStyle.logoImg} />
        </div>

        <div style={webStyle.logInLeft}>
          <div
            style={{
              width: "360px",
              gap: "8px",
              flexShrink: "0",
              position: "relative",
            }}
          >

            <div style={webStyle.joinForgeDiv}>
            <Typography style={webStyle.joinForge}> Join Forge</Typography>
            </div>
            <div>
              <TextField
                variant="outlined"
                placeholder="Email"
                style={webStyle.inputfieldHeight}
              />
            </div>
            <div>
              <TextField
                variant="outlined"
                placeholder="Password"
                type={this.state.showPassword ? "text" : "password"}
                style={webStyle.inputfieldHeight}
              />
              <VisibilityOffIcon onClick={this.handleVisibilityOn} style={webStyle.passwordVisibilityOffIcon} />
            </div>
            <div>
              <TextField
                variant="outlined"
                placeholder="Re-Password"
                style={webStyle.inputfieldHeight}
              />
              <VisibilityOffIcon
                style={webStyle.reEnterpasswordVisibilityOffIcon}
              />
            </div>
            <div style={{marginTop: "20px"}}>
              <Typography style={webStyle.agreeTC}>
                By joining Forge you agree to our{" "}
                <spam style={webStyle.tCPP}>Terms & Conditions</spam>and
                <span style={webStyle.tCPP}>Privacy Policy</span>
              </Typography>
            </div>
            <div style={{marginTop: '60px'}}>
              <Button variant="outlined" style={webStyle.signUpButton}>
                Sign Up
              </Button>
            </div>
            <div style={webStyle.orDiv}>
              <div>
                <Typography style={webStyle.borderOr} />
              </div>
              <Typography style={webStyle.or}>or</Typography>
              <div>
                <Typography style={webStyle.borderOr} />
              </div>
            </div>
            <div style={webStyle.aHAccountDiv}>
              <Typography style={webStyle.aHAccount}>
                Already have an account?
                <span style={webStyle.logInlink}>Log in</span>
              </Typography>
            </div>
            
          </div>
        </div>

        <div style={webStyle.logInRight}>
          <img
            src={loginPosterImage}
            alt="login poster"
            style={webStyle.rightImage}
          />
        </div>
      </div>
    );
  }
}

const webStyle = {
  loginDiv: {
    display: "flex",
    // justifyContent: "space-between",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
  },
  logInLeft: {
    maxWidth: "70%",
    height: "100%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logoImg: {
    height: "44px",
    width: "34px",
    flexShrink: "0",
    cover: "no-repeat",
  },
  inputfieldHeight: {
    height: "56px",
  },
  passwordVisibilityOffIcon: {
    position: "absolute",
    left: "320px",
    top: "100px",
    width: "24px",
    height: "24px",
    flexShrink: "0",
    color: "#9B9B9D",
  },
  passwordVisibilityOnIcon: {
    position: "absolute",
    left: "320px",
    top: "100px",
    width: "24px",
    height: "24px",
    flexShrink: "0",
    color: "#000",
  },
  reEnterpasswordVisibilityOffIcon: {
    position: "absolute",
    left: "320px",
    top: "155px",
    width: "24px",
    height: "24px",
    flexShrink: "0",
    color: "#9B9B9D",
  },
  agreeTC: {
    color: "#0F172A",
    fontFamily: " Silka",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "200",
    lineHeight: "16px",
  },
  tCPP: {
    color: " #000",
    fontFamily: "Silka",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "16px",
    textDecorationLine: "underline",
  },
  signUpButton: {
    fontFamily: "Silka",
    fontSize: "16px",
    fontStyle: "normal",
    fontHeight: "500",
    lineHeight: "24px",
    color: "#FFF",
    backgroundColor: "#9B9B9D",
    height: "56px",
    width: "100%",
    textTransform: "capitalize",
  },
  orDiv: {
    marginTop: "22px",
    marginBottom: "42px",
    display: "flex",
    alignItems: "center",
  },
  or: {
    marginLeft: "8px",
    marginRight: "8px",
    color: "#9B9B9D",
    fontFamily: "Silka",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "24px",
  },
  borderOr: {
    borderBottom: "1px solid #DFDFDF",
    width: "165px",
  },
  aHAccountDiv: {
    display: "flex",
    justifyContent: "center",
  },
  aHAccount: {
    color: " #9B9B9D",
    fontFamily: "Silka",
    fontSize: "16px",
    fontStyle: "normal",
    fontHeight: "500",
    lineHeight: "22px",
  },
  logInlink: {
    marginLeft: "8px",
    color: "#000",
    fontFamily: "Silka",
    fontSize: "16px",
    fontStyle: "normal",
    fontHeight: "500",
    lineHeight: "22px",
  },
  joinForgeDiv: {
    display: "flex",
    justifyContent: "center",
  },
  joinForge: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Silka",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "32px",
    letterSpacing: "-0.12px",
  },
  // ---------------------------------
  logInRight: {
    maxWidth: "30%",
    height: "100%",
  },
  rightImage: {
    height: "100%",
    width: "100%",
  },
};
