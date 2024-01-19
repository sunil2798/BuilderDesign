import { Typography } from "@material-ui/core";
import React, { Component } from "react";
import loginPosterImage from "../../../../img/loginPosterImage.png";


export default class LogIn extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <div style={webStyle.logInCard}>
          <div>
            <Typography>Login</Typography>
          </div>
          <div>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <input type="password" name="password" id="password" />
          </div>
          <div>
            <Typography>Forgot Password?</Typography>
          </div>
          <div>
            <button type="submit">Log In</button>
          </div>
          <div>
            <Typography>or</Typography>
          </div>
          <div>
            <div>
              <Typography>Don't have an account?</Typography>
            </div>
            <div>
              <Typography>Sign Up</Typography>
            </div>
          </div>
        </div>
				<div>
					<img 
						src={loginPosterImage}
						alt="login poster"
					/>
				</div>
      </div>
    );
  }
}

const webStyle = {
  logInCard: {
    width: "1440px",
    height: "900px",
    background: "grey",
    display: "grid",
    justifyContent: "center",
    // alignItems: "center",
    // 	background: "var(--White, #FFF)",
    // 	box-shadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
  },
};
