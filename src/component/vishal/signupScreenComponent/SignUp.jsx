import React, { Component } from "react";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please enter your email")
    .matches(
      /^[a-zA-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      "The password should have at least one lower case and one upper case characters."
    ),
  password: Yup.string()
    .required("Please enter your password.")
    .matches(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
      "The password should have at least one lower case and one upper case characters."
    )
    .max(15, "maximum 15 characters"),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("confirm your password"),
});

function FieldError({ error, touched }) {
  return error && touched ? <div style={webStyle.error}>{error}</div> : null;
}

function FieldErrorEmail({ error, touched }) {
  return error && touched ? (
    <div style={webStyle.emailError}>{error}</div>
  ) : null;
}

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      passwordConfirmation: "",
      showPassword: false,
      showRePassWord: false,
    };
  }

  handlePassShow = () => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };

  handleRePassShow = () => {
    this.setState({
      showRePassWord: !this.state.showRePassWord,
    });
  };

  render() {
    return (
      <>
        <Formik
          initialValues={{
            email: this.state.email,
            password: this.state.password,
            passwordConfirmation: this.state.passwordConfirmation,
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
              <div style={webStyle.joinForgeDiv}>
                <Typography style={webStyle.joinForge}>Join Forge</Typography>
              </div>

              <Box>
                <TextField
                  style={webStyle.inputfieldHeight}
                  variant="outlined"
                  type="text"
                  value={this.state.email}
                  placeholder="email"
                  name="email"
                  onChange={(event) => {
                    setFieldValue("email", event.target.value);
                    this.setState({
                      email: event.target.value,
                    });
                  }}
                />
                <FieldErrorEmail error={errors.email} touched={touched.email} />
              </Box>

              <Box style={{ position: "relative" }}>
                <TextField
                  type={this.state.showPassword ? "text" : "password"}
                  style={webStyle.inputfieldHeightPass}
                  variant="outlined"
                  placeholder="password"
                  value={this.state.password}
                  name="password"
                  onChange={(event) => {
                    setFieldValue("password", event.target.value);
                    this.setState({
                      password: event.target.value,
                    });
                  }}
                />
                <span onClick={this.handleVisibilityOn}>
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
                <FieldError
                  error={errors.password}
                  touched={touched.password}
                />
              </Box>

              <Box style={{ position: "relative" }}>
                <TextField
                  variant="outlined"
                  style={webStyle.inputfieldHeight}
                  type={this.state.showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={this.state.passwordConfirmation}
                  name="passwordConfirmation"
                  onChange={(event) => {
                    setFieldValue("passwordConfirmation", event.target.value);
                    this.setState({
                      passwordConfirmation: event.target.value,
                    });
                  }}
                />
                <span onClick={this.handleVisibilityOn}>
                  {!this.state.showRePassWord ? (
                    <VisibilityOffIcon
                      style={webStyle.reEnterpasswordVisibilityOffIcon}
                      onClick={this.handleRePassShow}
                    />
                  ) : (
                    <VisibilityIcon
                      style={webStyle.reEnterpasswordVisibilityOnIcon}
                      onClick={this.handleRePassShow}
                    />
                  )}
                </span>
                <FieldError
                  error={errors.passwordConfirmation}
                  touched={touched.passwordConfirmation}
                />
              </Box>

              <div style={{ marginTop: "20px" }}>
                <Typography style={webStyle.agreeTC}>
                  By joining Forge you agree to our
                  <spam style={webStyle.tCPP}>Terms & Conditions</spam>and
                  <span style={webStyle.tCPP}>Privacy Policy</span>
                </Typography>
              </div>
              <div style={{ marginTop: "60px" }}>
                <Button
                  variant="outlined"
                  style={webStyle.signUpButton}
                  type="submit"
                >
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
            </form>
          )}
        </Formik>
      </>
    );
  }
}

const webStyle = {
  inputfieldHeight: {
    height: "56px",
  },
  inputfieldHeightPass: {
    height: "56px",
    marginTop: "16px",
    marginBottom: "16px",
  },
  passwordVisibilityOffIcon: {
    position: "absolute",
    right: "20px",
    top: "25px",
    width: "24px",
    height: "24px",
    flexShrink: "0",
    color: "#9B9B9D",
  },
  passwordVisibilityOnIcon: {
    position: "absolute",
    right: "20px",
    top: "25px",
    width: "24px",
    height: "24px",
    flexShrink: "0",
    color: "#000",
  },
  reEnterpasswordVisibilityOffIcon: {
    position: "absolute",
    right: "20px",
    top: "10px",
    width: "24px",
    height: "24px",
    flexShrink: "0",
    color: "#9B9B9D",
  },
  reEnterpasswordVisibilityOnIcon: {
    position: "absolute",
    right: "20px",
    top: "10px",
    width: "24px",
    height: "24px",
    flexShrink: "0",
    color: "#000",
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
    marginBottom: "70px",
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
  error: {
    color: "#DC2626",
    fontFamily: "Silka",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: "18px",
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
};

