import React, { Component } from "react";
import logoV from "../../img/logoV.png";
import loginPosterImage from "../../img/loginPosterImage.png";
import { Formik } from "formik";
import * as Yup from "yup";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";

const validationSchema = Yup.object().shape({});

function FieldErrorEmail({ error, touched }) {
  return error && touched ? (
    <div style={webStyle.emailError}>{error}</div>
  ) : null;
}

function FieldErrorPassword({ error, touched }) {
  return error && touched ? <div>{error}</div> : null;
}

export default class LogInFormWithFormik extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      showPassword: false,
    };
  }

  handlePassShow = () => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };

  render() {
    return (
      <div style={webStyle.loginOuterMostContainer}>
        {/* --------Logo Section Start----------- */}
        <div style={webStyle.logoOuterContainer}>
          <img src={logoV} alt="logo" style={webStyle.logoImg} />
        </div>
        {/* ---------Logo Section End------------ */}

        {/* --------Left Section Start----------- */}
        <div style={webStyle.logInLeft}>
          <div style={webStyle.leftContainer}>
            {/* --------Formik Section Start----------- */}
            <Formik
              initialValues={{}}
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
                //  ---------Log-in Form Section Start------------
                <form autoComplete="off" onSubmit={handleSubmit}>
                  {/* --------Form Title Section Start----------- */}
                  <div style={webStyle.formTitleContainer}>
                    <Typography style={webStyle.formTitleText}>
                      Log In
                    </Typography>
                  </div>
                  {/* ---------Form Title Section End------------ */}

                  {/* --------Form Fields Section Start----------- */}
                  {/* --------Email Input Section Start----------- */}
                  <Box>
                    <TextField
                      style={webStyle.inputfieldHeight}
                      variant="outlined"
                      type="email"
                      value={this.state.email}
                      placeholder="Email"
                      name="email"
                      onChange={(event) => {
                        setFieldValue("email", event.target.value);
                        this.setState({
                          email: event.target.value,
                        });
                      }}
                    />
                    <FieldErrorEmail
                      error={errors.email}
                      touched={touched.email}
                    />
                  </Box>
                  {/* ---------Email Input Section End------------ */}

                  {/* --------Password Input Section Start----------- */}
                  <Box style={webStyle.passwordInputPosition}>
                    <TextField
                      style={webStyle.inputfieldHeight}
                      variant="outlined"
                      type={this.state.showPassword ? "text" : "password"}
                      value={this.state.password}
                      placeholder="Password"
                      name="password"
                      onChange={(event) => {
                        setFieldValue("password", event.target.value);
                        this.setState({
                          password: event.target.value,
                        });
                      }}
                    />
                    <span>
                      {!this.state.showPassword ? (
                        <VisibilityOffIcon
                          style={webStyle.passwordVisibilityOffIcon}
                          onClick={this.handlePassShow}
                        />
                      ) : (
                        <VisibilityIcon
                          style={webStyle.passwordVisibilityOnIcon}
                          onClick={this.handlePassShow}
                        />
                      )}
                    </span>
                    <FieldErrorPassword
                      error={errors.password}
                      touched={touched.password}
                    />
                  </Box>
                  {/* ---------Password Input Section End------------ */}
                  {/* ---------Form Fields Section End------------ */}
                  <div style={webStyle.isForgotPasswordOuterContainer}>
                    <Typography style={webStyle.isForgotPassword}>
                      <a href="/">
                      Forgot Password?
                      </a>
                    </Typography>
                  </div>
                  {/* --------Log In Button Section Start----------- */}
                  <div style={webStyle.buttonMargin}>
                    <Button
                      variant="oulined"
                      style={webStyle.logInButton}
                      type="submit"
                    >
                      Log In
                    </Button>
                  </div>
                  {/* ---------Log In Button Section End------------ */}

                  {/* --------OR text Section Start----------- */}
                  <div style={webStyle.borderContainer}>
                    <div>
                      <Typography style={webStyle.borderOr} />
                    </div>
                    <Typography style={webStyle.or}>or</Typography>
                    <div>
                      <Typography style={webStyle.borderOr} />
                    </div>
                  </div>
                  {/* ---------OR text Section End------------ */}

                  {/* --------is account Section Start----------- */}
                  <div style={webStyle.isAccountDiv}>
                    <Typography style={webStyle.isAccountStatement}>
                      Don't have an account?
                    </Typography>
                    <span style={webStyle.signUplink}>Sign Up</span>
                  </div>
                  {/* ---------is account Section End------------ */}
                </form>
                //  ---------Log-in Form Section End------------
              )}
            </Formik>
            {/* ---------Formik Section End------------ */}
          </div>
        </div>
        {/* ---------Left Section End------------ */}

        {/* --------Right Section Start----------- */}
        <div style={webStyle.logInRight}>
          <img
            src={loginPosterImage}
            alt="login Poster"
            style={webStyle.rightImage}
          />
        </div>
        {/* ---------Right Section End------------ */}
      </div>
    );
  }
}

const webStyle = {
  loginOuterMostContainer: {
    display: "flex",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
  },
  logoOuterContainer: {
    marginLeft: "40px",
    marginTop: "35px",
  },
  logoImg: {
    height: "44px",
    width: "34px",
    flexShrink: 0,
    cover: "no-repeat",
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
  leftContainer: {
    width: "360px",
    margin: "auto",
    gap: "8px",
    flexShrink: 0,
  },
  formTitleContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "70px",
  },
  formTitleText: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Silka",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "32px",
    letterSpacing: "-0.12px",
  },
  inputfieldHeight: {
    height: "56px",
  },
  passwordInputPosition: {
    position: "relative",
  },
  passwordVisibilityOffIcon: {
    position: "absolute",
    right: "20px",
    top: "12px",
    width: "24px",
    height: "24px",
    flexShrink: "0",
    color: "#9B9B9D",
  },
  passwordVisibilityOnIcon: {
    position: "absolute",
    right: "20px",
    top: "12px",
    width: "24px",
    height: "24px",
    flexShrink: "0",
    color: "#000",
  },
  isForgotPasswordOuterContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  isForgotPassword: {
    color: "#000",
    fontFamily: "Silka",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 200,
    lineHeight: "22px",
  },
  rightImage: {
    height: "100%",
    width: "100%",
  },
  logInRight: {
    maxWidth: "30%",
    height: "100%",
  },
  emailError: {
    color: "#9B9B9D",
    fontFamily: "Silka",
    fontSize: "12px",
    fonStyle: "normal",
    fontWeight: "200",
    lineHeight: "normal",
    letterSpacing: "0.24px",
  },
  buttonMargin: {
    marginTop: "50px",
  },
  logInButton: {
    width: "360px",
    height: "56px",
    borderRadius: "2px",
    color: "#FFF",
    backgroundColor: "#9B9B9D",
    fontFamily: "Silka",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "24px",
  },
  orDiv: {
    display: "flex",
    alignItems: "center",
  },
  borderOr: {
    borderBottom: "1px solid #DFDFDF",
    width: "165px",
  },
  or: {
    marginLeft: "8px",
    marginRight: "8px",
    color: "#9B9B9D",
    fontFamily: "Silka",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "24px",
  },
  borderContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "25px",
    marginBottom: "18px"
  },
  isAccountDiv: {
    display: "flex",
    justifyContent: "center",
  },
  isAccountStatement: {
    color: "#9B9B9D",
    fontFamily: "Silka",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "22px",
  },
  signUplink: {
    color: "#000",
    fontFamily: "Silka",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "22px",
    marginLeft: "8px",
  },
};
