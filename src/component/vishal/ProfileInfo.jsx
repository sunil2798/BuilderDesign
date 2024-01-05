import React, { Component } from "react";
import profileImg from "../../img/profileImg.png";
import { Typography } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EditIcon from "@material-ui/icons/Edit";

export default class ProfileInfo extends Component {
  render() {
    return (
      <>
        <div style={webStyle.profileinfoDiv}>
          <div style={webStyle.profileimgDiv}>
            <img
              src={profileImg}
              alt="profileImage"
              style={webStyle.profileImg}
            />
          </div>
          <div>
            <div style={webStyle.userNameDiv}>
              <Typography style={webStyle.userName}>John Doe</Typography>
              <EditIcon style={webStyle.editIcon} />
            </div>
            <Typography style={webStyle.describtion}>
              Experienced automotive interior designer Living in London.
            </Typography>

            <div style={webStyle.borderDiv}>
              <Typography style={webStyle.borderBottom} />
            </div>

            <div style={webStyle.levelOuterDiv}>
              <div style={webStyle.levelDiv}>
                <Typography style={webStyle.level}>Level:</Typography>
                <Typography style={webStyle.levelPosition}>Senior</Typography>
              </div>
              <div style={webStyle.locationDiv}>
                <Typography style={webStyle.location}>Location:</Typography>
                <LocationOnIcon style={webStyle.locationIcon} />
                <Typography style={webStyle.locationName}>
                  Coventry, UK
                </Typography>
              </div>
            </div>

            <div style={webStyle.borderDiv}>
              <Typography style={webStyle.borderBottom} />
            </div>

            <div style={webStyle.typeOuterDiv}>
              <div style={webStyle.typeDiv}>
                <Typography style={webStyle.type}>Type:</Typography>
                <Typography style={webStyle.workingType}>
                  Full Time | Remote
                </Typography>
              </div>
              <div style={webStyle.professionDiv}>
                <Typography style={webStyle.profession}>Profession:</Typography>
                <Typography style={webStyle.professionType}>
                  Interior Design | UI/UX Design | Visualisation
                </Typography>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            width: "1195px",
            margin: "auto",
            marginTop: "150px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "50%",
                alignItems: "center",
                borderBottom: "2px solid #000",
              }}
            >
              <Typography style={{ textAlign: "center" }}>Info</Typography>
            </div>
            <div
              style={{
                width: "50%",
                alignSelf: "center",
                borderBottom: "2px solid #DFDFDF",
              }}
            >
              <Typography style={{ textAlign: "center" }}>Work</Typography>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const webStyle = {
  profileinfoDiv: {
    height: "189px",
    width: "1093px",
    display: "flex",
    gap: "47px",
    margin: "auto",
  },
  profileimgDiv: {
    width: "189px",
  },
  profileImg: {
    borderRadius: "189px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  userNameDiv: {
    display: "flex",
    justifyContent: "space-between",
  },
  userName: {
    fontSize: "26px",
    fontFamily: "Silka",
    fontWeight: "500",
    lineHeight: "normal",
    fontStyle: "normal",
  },
  editIcon: {
    height: "24px",
    width: "24px",
    flexShrink: "0",
    color: "#DFDFDF",
  },
  describtion: {
    fontSize: "14px",
    fontFamily: "Silka",
    fontWeight: "500",
    lineHeight: "140.625%",
    fontStyle: "normal",
    marginTop: "18px",
  },
  borderDiv: {
    marginTop: "28px",
  },
  borderBottom: {
    borderBottom: "1px solid",
    color: "#DFDFDF",
    width: "836px",
  },
  levelOuterDiv: {
    display: "flex",
    marginTop: "14px",
    marginLeft: "50px",
  },
  levelDiv: {
    display: "flex",
    width: "50%",
  },
  level: {
    fontSize: "12px",
    fontFamily: "Silka",
    fontWeight: "500",
    lineHeight: "140.625%",
    fontStyle: "normal",
    color: "#9B9B9D",
    alignSelf: "center",
  },
  levelPosition: {
    fontSize: "12px",
    fontFamily: "Silka",
    fontWeight: "500",
    lineHeight: "140.625%",
    fontStyle: "normal",
    alignSelf: "center",
    marginLeft: "13px",
  },
  locationDiv: {
    display: "flex",
    width: "50%",
  },
  location: {
    fontSize: "12px",
    fontFamily: "Silka",
    fontWeight: "500",
    lineHeight: "140.625%",
    fontStyle: "normal",
    color: "#9B9B9D",
    alignSelf: "center",
  },
  locationIcon: {
    height: "20px",
    width: "20px",
    flexShrink: "0",
    marginLeft: "7px",
    marginRight: "4px",
  },
  locationName: {
    fontSize: "12px",
    fontFamily: "Silka",
    fontWeight: "500",
    lineHeight: "140.625%",
    fontStyle: "normal",
    alignSelf: "center",
    marginLeft: "13px",
  },
  typeOuterDiv: {
    display: "flex",
    marginTop: "14px",
    marginLeft: "50px",
  },
  typeDiv: {
    display: "flex",
    width: "50%",
  },
  type: {
    fontSize: "12px",
    fontFamily: "Silka",
    fontWeight: "500",
    lineHeight: "140.625%",
    fontStyle: "normal",
    color: "#9B9B9D",
    alignSelf: "center",
  },
  workingType: {
    fontSize: "12px",
    fontFamily: "Silka",
    fontWeight: "500",
    lineHeight: "140.625%",
    fontStyle: "normal",
    alignSelf: "center",
    marginLeft: "13px",
  },
  professionDiv: {
    display: "flex",
    width: "50%",
  },
  profession: {
    fontSize: "12px",
    fontFamily: "Silka",
    fontWeight: "500",
    lineHeight: "140.625%",
    fontStyle: "normal",
    color: "#9B9B9D",
    alignSelf: "center",
  },
  professionType: {
    fontSize: "12px",
    fontFamily: "Silka",
    fontWeight: "500",
    lineHeight: "140.625%",
    fontStyle: "normal",
    alignSelf: "center",
    marginLeft: "13px",
  },
};
