import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";

const validationSchema = Yup.object().shape({

  password: Yup.string()
    .required("Please enter your password.")
    .matches(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
      "The password should have at least one lower case and one upper case characters."
    )
    .max(15, "maximum 15 characters"),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password not matching")
    .required("confirm your password"),
});

export default class ForgotPass extends Component {
  constructor() {
    super();
    this.state = {
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
              <div style={webStyle.titlePassDiv}>
                <Typography style={webStyle.titlePass}>New Password</Typography>
                <Typography style={webStyle.subTitle}>Enter a new password for email@email.com</Typography>
                <Typography style={webStyle.reqPassDes}>The password should have at least one lower case and one upper case characters.</Typography>
              </div>

              <Box style={{ position: "relative" }}>
                <TextField
                  type={this.state.showPassword ? "text" : "password"}
                  style={webStyle.inputfieldHeightPass}
                  variant="outlined"
                  placeholder="New Password"
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
              </Box>

              <Box style={{ position: "relative" }}>
                <TextField
                  variant="outlined"
                  style={webStyle.inputfieldHeight}
                  type={this.state.showRePassWord ? "text" : "password"}
                  placeholder="Confirm New Password"
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

              <div style={{ marginTop: "60px" }}>
                <Button
                  variant="outlined"
                  style={webStyle.setNewPass}
                  type="submit"
                >
                  Set New Password
                </Button>
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
    top: "28px",
    width: "24px",
    height: "24px",
    flexShrink: "0",
    color: "#9B9B9D",
  },
  passwordVisibilityOnIcon: {
    position: "absolute",
    right: "20px",
    top: "28px",
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
  setNewPass: {
    fontFamily: "Silka",
    fontSize: "16px",
    fontStyle: "normal",
    fontHeight: "500",
    lineHeight: "24px",
    color: "#FFF",
    backgroundColor: "#0D0C22",
    height: "56px",
    width: "100%",
    textTransform: "capitalize",
  },
  titlePassDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  titlePass: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Silka",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "32px",
    letterSpacing: "-0.12px",
  },
  subTitle : {
    color: "#0F172A",
    textAlign: "center",
    fontFamily: "Silka",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "24px",
    marginTop: "28px",
    marginBottom: "12px",
  },
  reqPassDes: {
    color: "#9B9B9D",
    fontFamily: "Silka",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "200",
    lineHeight: "normal",
    letterSpacing: "0.24px",
    marginBottom: "8px",

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

function FieldError({ error, touched }) {
  return error && touched ? <div style={webStyle.error}>{error}</div> : null;
};

