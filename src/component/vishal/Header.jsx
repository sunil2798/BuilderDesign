import { Box } from "@material-ui/core";
import React, { Component } from "react";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import logoV from "../../img/logoV.png";

export default class Header extends Component {
  render() {
    return (
    <>
    <Box style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
      <Box style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
        <img src={logoV} alt="logo" style={{width: "19.412px", height: "25.674px", flexGrow: "0"}} />
        <Box>
          <a href="/">Find Talent</a>
          <a href="/">Opportunities</a>
          <a href="/">Gallery</a>
        </Box>

      </Box>

      <Box>
        <ChatBubbleOutlineIcon />
        <img href="/" alt="profile"/>
      </Box>

    </Box>
    </>
    );
  }
}
