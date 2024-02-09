import { Box, Button, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeadsetIcon from "@material-ui/icons/Headset";
import { Carousel } from "react-carousel-minimal";

const data = [
  {
    image:
      "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    caption: "Darjeeling",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
    caption: "San Francisco",
  },
  {
    image:
      "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
    caption: "Scotland",
  },
  {
    image:
      "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
    caption: "Darjeeling",
  },
  {
    image:
      "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
    caption: "Scotland",
  },
  {
    image:
      "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    caption: "Darjeeling",
  },
];

export default class Next extends Component {
  render() {
    return (
      <>
      
      <div>
        <Box style={webStyle.headOuterContainer}>
          <Box style={webStyle.leftAlignOption}>
            <Box style={webStyle.logoContainer}>
              <img
                // src={logoV}
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
              </Box>
            </Box>
          </Box>

          <Box style={webStyle.rightAlignOption}>
            <Box style={{display:"flex", justifyContent: "center"}}>
              <HeadsetIcon style={{ alignSelf: "center" }} />
              <Button
                style={{
                  whiteSpace: "nowrap",
                  textWrap: "nowrap",
                  backgroundColor: "orange",
                 
                }}
              >
                1234567890
              </Button>
            </Box>
            <Box style={{ width: "50px" }}>
              <Button
                style={{
                  whiteSpace: "nowrap",
                  textWrap: "nowrap",
                  backgroundColor: "orange",
                }}
              >
                Request a call
              </Button>
            </Box>
          </Box>
        </Box>
      </div>
      
      <div
      style={{position:"relative"}}
      >
        <Carousel
          data={data}
          time={1000}
          width="100%"
          height="500px"
          // captionStyle={captionStyle}
          radius="10px"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          style={{
            textAlign: "center",
            maxWidth: "100%",
            maxHeight: "500px",
            margin: "40px auto",
          }}
        />
        <Box style={{position: "absolute", top: "250px", left: "120px"}}>
          <Typography>qwertyuio<br/>pasdfghjkl</Typography>
          <Typography>cvbnm, lpoifds xcvb</Typography>
          <Button>More</Button>


        </Box>
      </div>

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
    alignSelf: "center",
  },
  rightAlignOption: {
    width: "25%",
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
    width: "190px",
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
    position: "absolute",
    zIndex: 5,
  },
  borderDiv: {
    borderBottom: "0.6px solid #9B9B9D",
    width: "160px",
    opacity: "16%",
    margin: "auto",
  },
};
