import React from "react";

// Customizable Area Start
import Grid from "@material-ui/core/Grid";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import {
  Typography,
  Checkbox,
  InputAdornment,
  withStyles
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField/TextField";
import { Link } from "react-router-dom";

const CssTextField = withStyles({
  root: {
    "& .MuiInput-underline:after": {
      borderBottomColor: "#54A7C9"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#CBD5E1",
        borderRadius: "8px"
      },
      "&:hover fieldset": {
        borderColor: "#54A7C9"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#54A7C9",
        borderWidth: "2px",
        borderRadius: "8px"
      }
    }
  }
})(TextField);
// Customizable Area End

import LogInPetOwnerController, { Props } from "./LogInPetOwnerController.web";
import Navbar from "../../../components/src/Navbar";
import CustomizedSnackbars from "../../../components/src/CustomSnackbar.web";

export default class LogInPetOwner extends LogInPetOwnerController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  render() {
    // Customizable Area Start
    const {
      showPassword,
      password,
      isCheckboxChecked,
      flash,
      flashSlackPo,
      flashEmailSlack
    } = this.state;

    const buttonOne = () => {
      return (
        <button
          data-test-id="handle_continue_click"
          onClick={this.callApiForPoLogIn}
          style={{
            ...styles.button,
            backgroundColor: "#EA0C78",
            color: "#ffffff"
          }}
        >
          Sign in
        </button>
      );
    };

    return (
      <>
        <Navbar navType="auth" />

        <CustomizedSnackbars duration={20000} openToaster={flashEmailSlack} message={"Please check your email to activate your account and get started."} toasterType={"success"} />

        <CustomizedSnackbars duration={20000} openToaster={flash} message={" Congratulations! Your account has been successfully created."} toasterType={"success"} />

        <CustomizedSnackbars duration={20000} openToaster={this.state.flashSlackPo} message={"Sign in successfully"} toasterType={"success"} />

        <div style={styles.mainDiv as React.CSSProperties}>
          <Grid container lg={12} spacing={2} xs={12}>
            <Grid item style={styles.headMaingrid as React.CSSProperties}>
              <form onSubmit={this.callApiForPoLogIn}>
                <Grid style={styles.headSecondgrid as React.CSSProperties}>
                  <Typography
                    variant="h5"
                    style={styles.head as React.CSSProperties}
                  >
                    Welcome to <span style={{...styles.head,color:"#EA0B77"} as React.CSSProperties }>PETHOTEL</span> 
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{ ...styles.head, fontSize: "20px", marginBottom: "10px" } as React.CSSProperties}
                  >
                    Pet Owner Login
                  </Typography>

                  <Typography
                    variant="body1"
                    style={styles.labels as React.CSSProperties}
                  >
                    Email
                  </Typography>
                  <CssTextField
                    style={styles.inputbox as React.CSSProperties}
                    placeholder="Your email"
                    type="email"
                    value={this.state.email}
                    name="email"
                    onChange={this.handleEmailChange}
                    data-test-id="email-change"
                    variant="outlined"
                  />

                  <Typography
                    variant="body1"
                    style={styles.labels as React.CSSProperties}
                  >
                    Password
                  </Typography>

                  <Typography variant="h1" color="initial" />

                  <CssTextField
                    placeholder="Your password"
                    variant="outlined"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    style={styles.inputbox as React.CSSProperties}
                    data-test-id="password_change"
                    onChange={this.handlePasswordChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          onClick={this.handlePasswordToggle}
                          data-test-id="togglePassword"
                        >
                          {showPassword ? (
                            <VisibilityOutlinedIcon
                              style={
                                {
                                  color: "#94A3B8",
                                  cursor: "pointer"
                                } as React.CSSProperties
                              }
                            />
                          ) : (
                            <VisibilityOffOutlinedIcon
                              style={
                                {
                                  color: "#94A3B8",
                                  cursor: "pointer"
                                } as React.CSSProperties
                              }
                            />
                          )}
                        </InputAdornment>
                      )
                    }}
                  />
                  {this.state.apiErrorLogIn && (
                    <Typography
                      color="error"
                      style={{ padding: "10px" } as React.CSSProperties}
                    >
                      {this.state.apiErrorLogIn}
                    </Typography>
                  )}
                  <br />
                  <div style={styles.divCssStyle}>
                    <div style={{ marginLeft: "-10px" }}>
                      <Checkbox
                        onChange={this.handleCheckboxChange}
                        data-test-id="checkBoxCheck"
                        inputProps={{
                          "aria-label": "checkbox with default color"
                        }}
                        checked={isCheckboxChecked}
                        color="default"
                      />
                      <label
                        style={
                          {
                            fontSize: "14px",
                            color: "#64748B",
                            font: "inter",
                            textTransform: "none",
                            fontFamily: "inter"
                          } as React.CSSProperties
                        }
                      >
                        {" "}
                        Remember me
                      </label>
                    </div>
                    <Link to="/ResetPasswordPo" style={{ fontWeight: 700,textDecorationLine:"none" }}>
                      <Typography
                        style={
                          {
                            fontSize: "14px",
                            color: "#1E293B",
                            cursor: "pointer",
                            font: "inter",
                            textTransform: "none",
                            textDecorationLine:"underline"
                          } as React.CSSProperties
                        }
                      >
                        {" "}
                        Forgot Password?
                      </Typography>
                    </Link>
                  </div>
                  {buttonOne()}
                  <div style={styles.alreadyAccount as React.CSSProperties}>
                    <Typography style={styles.one15}>
                      Don't have an account yet? &nbsp;
                      <Link
                        to="/EmailAccountRegistrationWeb"
                        style={{
                          textDecoration: "none",
                          font: "inter",
                          textTransform: "none",
                          fontFamily: "inter",
                          textDecorationLine:"none",

                        }}
                      >
                        <span style={styles.signIn as React.CSSProperties}>
                          Register
                        </span>{" "}
                      </Link>{" "}
                    </Typography>
                  </div>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </div>
      </>

      // Customizable Area End
    );
  }
}

const styles = {
  // Customizable Area Start
  inputbox: {
    height: "40px",
    fontWeight: 400,
    fontSize: "14px",
    marginBottom: "40px",
    borderRadius: "5px",
    marginTop: "5px",
    width: "100%",
    color: "#1E293B"
  },
  button: {
    borderRadius: "5px",
    height: "40px",
    marginBottom: "15px",
    width: "100%",
    fontSize: "14px",
    border: "none",
    marginTop: "5px",
    backgroundColor: "#F1F5F9",
    color: "#64748B",
    cursor: "pointer",
    fontWeight: 700
  },
  labels: {
    fontWeight: 700,
    color: "#334155",
    lineHeight: "22px",
    textTransform: "none"
  },
  mainDiv: {
    backgroundSize: "cover",
    backgroundColor: "rgb(248, 250, 252)",
    height: "auto",
    minHeight: "100vh",
    backgroundPosition: "center",
    marginTop: "112px"
  },
  appBar: {
    backgroundColor: "transparent",
    color: "#334155",
    boxShadow: "none"
  },
  navDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  actionDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  signBtn: {
    backgroundColor: "#FFFFFF",
    color: "#64748B",
    border: "1px solid #64748B"
  },
  headMaingrid: {
    display: "flex",
    // height: "89vh",
    justifyContent: "center",
    flexDirection: "column",
    margin: "auto",
    alignItems: "center",
    width: "90%",
    maxWidth: "480px"
  },
  headSecondgrid: {
    borderBottomRightRadius: "45px",
    backgroundColor: "rgba(255, 255, 255)",
    boxShadow:
      "rgba(67, 134, 161, 0.03) 0px 8px 32px 0px, rgba(67, 134, 161, 0.03) 0px 4px 8px 0px",
    padding: "30px",
    width: "100%"
  },
  head: {
    // marginBottom: "20px",
    fontWeight: 700,
    color: "#1E293B",
    textAlign: "left",
    fontSize: "30px"
  },
  accountaction: {
    textAlign: "center",
    marginRight: "10px",
    fontSize: "16px"
  },
  divCssStyle: {
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex"
  },
  alreadyAccount: {
    marginTop: "40px",
    textAlign: "center"
  },
  one15: {
    fontWeight: 400,
    fontSize: "16px",
    color: "#1E293B"
  },
  signIn: {
    color: "#1E293B",
    fontWeight: 700,
    fontSize: "18px",
    cursor: "pointer",
    font: "inter",
    textTransform: "none",
    fontFamily: "inter",
    textDecorationLine:"underline "
  }
  // Customizable Area End
};
