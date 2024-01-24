import { Box, Button, Typography } from "@material-ui/core";
import React, { Component } from "react";

export default class PasswordSuccess extends Component {
  render() {
    return (
      <>
        <Box>
          <Typography style={webStyle.tittleOne}>
            Thanks For Completing The Password Reset Process
          </Typography>
          <Typography style={webStyle.titleTwo}>
            Your password is updated! please proceed to homepage
          </Typography>
        </Box>
        <Box>
          <Button variant="outlined" style={webStyle.homeButton}>
           Home
          </Button>
        </Box>
      </>
    );
  }
}
const webStyle = {
  tittleOne: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Silka",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "32px",
    letterSpacing: "-0.12px",
    marginBottom: "40px",
  },
  titleTwo: {
    color: "#242121",
    textAlign: "center",
    fontFamily: "Silka",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "32px",
    letterSpacing: "-0.12px",
  },
  homeButton: {
    height: "56px",
    width: "100%",
    color: "#FFF",
    fontSize: "16px",
    fontFamily: "Silka",
    fontStyle: "normal",
    fontHeight: "500",
    lineHeight: "24px",
    letterSpacing: "-0.15px",
    backgroundColor: "#0D0C22",
    textTransform: "capitalize",
    marginTop: "166px",
  }
};
