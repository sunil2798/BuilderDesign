import React, { Component } from "react";
import loginPosterImage from "../../img/loginPosterImage.png";
import logoV from "../../img/logoV.png";
import SignUp from "./signupScreenComponent/SignUp";
import ForgotPass from "./signupScreenComponent/ForgotPass";
import PasswordSuccess from "./signupScreenComponent/PasswordSuccess";


export default class SignUpFormik extends Component {
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

  // handlePassShow = () => {
  //   this.setState({
  //     showPassword: !this.state.showPassword,
  //   });
  // };

  // handleRePassShow = () => {
  //   this.setState({
  //     showRePassWord: !this.state.showRePassWord,
  //   });
  // };

  render() {

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
            }}
          >
            {/* change component structure start */}
           
            {/* <SignUp /> */}
            {/* <ForgotPass /> */}
            <PasswordSuccess />

            {/* change component structure start */}
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
