import { Box, Typography } from "@material-ui/core";
import React, { Component } from "react";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import logoV from "../../img/logoV.png";
import profileImg from "../../img/profileImg.png";
import { Link } from "react-router-dom";
import "./header.css";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      profileModal: false,
      discoverDropdown: false,
      isDropdownOpen: false,
      isOpenArrow: false,
    };
  }
  handleHeaderProfileOpen = () => {
    this.setState({
      profileModal: !this.state.profileModal,
    });
  };

  handleHeaderProfileClose = () => {
    this.setState({
      profileModal: false,
    });
  };

  handleisDropdownOpen = () => {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen,
      isOpenArrow: !this.state.isOpenArrow,
    });
  };

  render() {
    console.log("profile modal", this.state.profileModal);
    console.log("Discover Dropdown", this.state.isDropdownOpen);
    console.warn("Arrow expenddd", this.state.isOpenArrow);
    return (
      <>
        <Box
          style={webStyle.headOuterContainer}
        >
          <Box
            style={webStyle.leftAlignOption}
          >
            <Box
              style={webStyle.logoContainer}
            >
              <img
                src={logoV}
                alt="logo"
                style={webStyle.logoImage}
              />

              <Link to="/" style={webStyle.hyperLink}>
                Find Talent
              </Link>
              <Link to="/" style={webStyle.hyperLink}>
                Opportunities
              </Link>
              <Link to="/" style={webStyle.hyperLink}>
                Gallery
              </Link>
              <Box
                onClick={this.handleisDropdownOpen}
                style={webStyle.discoverAnimation}
              >
                <Typography>Discover</Typography>
                <ExpandMoreIcon
                  style={webStyle.expendIconDescover}
                  className={
                    this.state.isOpenArrow ? "expendArrow" : "expendArrowReturn"
                  }
                />
                {this.state.isDropdownOpen && (
                  <Box
                    style={webStyle.discoverDropDown}
                  >
                    <div>
                      <Link to="/" style={webStyle.discoverHyperLink}>
                        Gallery
                      </Link>
                    </div>
                    <Box style={webStyle.discoverDropDownWidth}>
                      <Typography
                        style={webStyle.discoverOptionBorder}
                      />
                    </Box>
                    <div>
                      <Link to="/" style={webStyle.discoverHyperLink}>
                        Compaines
                      </Link>
                    </div>
                    <Box style={{ width: "190px" }}>
                      <Typography
                        style={{
                          borderBottom: "0.6px solid #9B9B9D",
                          width: "160px",
                          opacity: "16%",
                          margin: "auto",
                        }}
                      />
                    </Box>
                    <div>
                      <Link to="/" style={webStyle.discoverHyperLink}>
                        Events
                      </Link>
                    </div>
                    <Box style={{ width: "190px" }}>
                      <Typography
                        style={{
                          borderBottom: "0.6px solid #9B9B9D",
                          width: "160px",
                          opacity: "16%",
                          margin: "auto",
                        }}
                      />
                    </Box>
                    <div>
                      <Link to="/" style={webStyle.discoverHyperLink}>
                        Media
                      </Link>
                    </div>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>

          <Box style={webStyle.rightAlignOption}>
            <ChatBubbleOutlineIcon
              style={webStyle.chatOption}
            />
            <img
              onClick={this.handleHeaderProfileOpen}
              src={profileImg}
              alt="profile"
              style={webStyle.headerImage}
            />
            {this.state.profileModal && (
              <Box
                onClick={this.handleHeaderProfileClose}
                style={webStyle.profileHyperLinkDiv}
              >
                <Box style={{ width: "190px" }}>
                  <Typography
                    style={{
                      borderBottom: "0.6px solid #9B9B9D",
                      width: "160px",
                      opacity: "16%",
                      margin: "auto",
                    }}
                  />
                </Box>

                <div>
                  <Link to="/" style={webStyle.discoverHyperLink}>
                    Settings
                  </Link>
                </div>
                <div>
                  <Link to="/" style={webStyle.discoverHyperLink}>
                    Favourites
                  </Link>
                </div>
                <Box style={{ width: "190px" }}>
                  <Typography
                    style={{
                      borderBottom: "0.6px solid #9B9B9D",
                      width: "160px",
                      opacity: "16%",
                      margin: "auto",
                    }}
                  />
                </Box>
                <div>
                  <Link to="/" style={webStyle.discoverHyperLink}>
                    Log out
                  </Link>
                </div>
              </Box>
            )}
          </Box>
        </Box>
      </>
    );
  }
}

const webStyle = {
  hyperLink: {
    textDecoration: "none",
    textAlign: "center",
    fontFamily: "Silka",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    color: "#000000",
    letterSpacing: "-0.225px",
    whiteSpace: "nowrap",
  },
  discoverHyperLink: {
    textDecoration: "none",
    whiteSpace: "nowrap",
    fontFamily: "Silka",
    textAlign: "center",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    color: "#0D0C22",
    padding: "9px 20px 9px 16px",
    gap: "8px",
  },
  profileHyperLinkDiv: {
    position: "absolute",
    top: "50px",
    right: "50px",
    zIndex: "99999",
    // boxShadow: "0px 5px 10px 2px",
    height: "126px",
    width: "192px",
    background: "#FFF",
    borderRadius: "8px",
    padding: "4px",
    border: "1px solid #9B9B9D",
    gap: "2px",
    display: "grid",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    justifyItems: "start",
  },
  // profileHyperLink: {
  //   textDecoration: "none",
  //   whiteSpace: "nowrap",
  //   fontFamily: "Silka",
  //   textAlign: "center",
  //   fontSize: "16px",
  //   fontStyle: "normal",
  //   fontWeight: "500",
  //   // lineHeight: "19.3px",
  //   color: "#0D0C22",
  //   padding: "9px, 20px, 9px, 16px",
  //   gap: "8px",
  // },
  expendIconDescover: {
    height: "24px",
    width: "24px",
  },
  headerImage: {
    height: "32px",
    width: "32px",
    flexShrink: 0,
    alignSelf: "center",
  },
  chatOption: { 
    height: "24px", 
    width: "24px", 
    alignSelf: "center" 
  },
  rightAlignOption: {
    width: "10%",
    display: "flex",
    justifyContent: "space-evenly",
    position: "relative",
  },
  discoverOptionBorder: {
    borderBottom: "0.6px solid #9B9B9D",
    width: "160px",
    opacity: "16%",
    margin: "auto",
  },
  discoverDropDownWidth: { 
    width: "190px" 
  },
  discoverDropDown: {
    position: "absolute",
    top: "38px",
    left: "0px",
    zIndex: "999999",
    // boxShadow: "0px 5px 10px 2px",
    height: "194x",
    width: "192px",
    background: "#FFF",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    gap: "7px",
    padding: "4px 4px 4px 5px",
    border: "1px solid #DFDFDF",
    borderRadius: "4px",
  },
  discoverAnimation: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  logoImage: {
    width: "19.412px",
    height: "25.674px",
    flexGrow: 0,
    alignSelf: "center",
  },
  logoContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  leftAlignOption: {
    display: "flex",
    justifyContent: "space-evenly",
    textAlign: "center",
    width: "40%",
  },
  headOuterContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: "55px",
  }
};
