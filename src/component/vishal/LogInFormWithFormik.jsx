import React, { Component } from "react";
import logoV from "../../img/logoV.png";
import loginPosterImage from "../../img/loginPosterImage.png";
import { Formik } from "formik";
import * as Yup from "yup";
import { Box, TextField, Typography } from "@material-ui/core";

const validationSchema = Yup.object().shape({});

function FieldErrorEmail({error, touched}) {
  return error && touched ? (
    <div style={webStyle.emailError}>{error}</div>
  ) : null;
};

export default class LogInFormWithFormik extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      showPassword: ""
    };
  }
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
                    <Typography style={webStyle.formTitleText}>Log In</Typography>
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
                          email: event.target.value
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
                      <Box></Box>
                  {/* ---------Password Input Section End------------ */}       
                  {/* ---------Form Fields Section End------------ */}    
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
    margin:'auto',
    gap: "8px",
    flexShrink: 0,
  },
  formTitleContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "70px"
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
  }
};

